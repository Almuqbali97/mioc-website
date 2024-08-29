import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';
import multer from 'multer';
import { isAuthenticated } from '../middlewares/isAuenticatedMiddleware.js';
import {
    submitAbstract,
    downloadSpesificAbstract,
    getAllAbstracts,
    submitVideoAbstract,
    getAbstractById,
    reviewAbstract,
    getAbstractsByEmail,
    updateAbstract,
    approveAbstract
} from '../controllers/abstractController.js';
import { isAdmin } from '../middlewares/isAuthorizedAdmin.js';
import dotenv from 'dotenv';
import { isRevewier } from '../middlewares/isReviwer.js';
dotenv.config();


const s3Client = new S3Client({
    region: process.env.AWS_S3_BUCKET_REGION,
    credentials: {
        accessKeyId: process.env.AWS_S3_ACCESS_KEY,
        secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    },
});

const router = Router();

// Configure multer to use memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/submit/video', upload.none(), submitVideoAbstract);

router.get('/presigned-url', async (req, res) => {
    try {
        const uniqueFileName = uuidv4() + '.mp4';
        const command = new PutObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: uniqueFileName,
            ContentType: 'video/mp4',
        });

        const presignedURL = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
        res.status(200).json({ presignedURL, key: uniqueFileName });
    } catch (error) {
        console.error('Error generating presigned URL:', error);
        res.status(500).json({ message: 'Could not generate presigned URL' });
    }
});

// router.post('/submit', isAuthenticated, upload.none(), submitAbstract);
router.post('/submit', upload.none(), submitAbstract);
router.post('/review/:id', isAuthenticated, isAdmin, reviewAbstract);

router.get('/download/:key', downloadSpesificAbstract); // This function is used to download files on the website
// for admin
router.get('/get/all', isAuthenticated, isAdmin, getAllAbstracts);
router.get('/get/spesific/:id', isAuthenticated, isAdmin, getAbstractById);
// for reviwer
router.get('/reviewer/get/all', isAuthenticated, isRevewier, getAllAbstracts);
router.get('/reviewer/get/spesific/:id', isAuthenticated, isRevewier, getAbstractById);
router.post('/reviewer/review/:id', isAuthenticated, isRevewier, reviewAbstract);

router.post('/approve', approveAbstract);
router.post('/reject');

router.get('/get/:id', getAbstractById);
// router.get('/get/by-email/:email', isAuthenticated, getAbstractsByEmail);
router.get('/get/by-email/:email', getAbstractsByEmail);

router.put('/update/:id', updateAbstract);



export default router;


