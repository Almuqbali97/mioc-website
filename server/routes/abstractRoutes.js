// import { Router } from 'express';
// import multer from 'multer';
// import { isAuthenticated } from '../middlewares/isAuenticatedMiddleware.js';
// import { submitAbstract, downloadSpesificAbstract, getAllAbstracts, submitVideoAbstract, getAbstractById, reviewAbstract, generateSignedUrl } from '../controllers/abstractController.js';
// import { isAdmin } from '../middlewares/isAuthorizedAdmin.js';
// import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
// import { v4 as uuidv4 } from 'uuid';

// const s3Client = new S3Client({
//     region: process.env.AWS_S3_BUCKET_REGION,
//     credentials: {
//         accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     },
// });



// const router = Router();

// // Configure multer to use memory storage
// // const upload = multer({ dest: '../uploads/' }); // Files will go in the 'uploads/' folder
// // // memory storage
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// router.post('/submit/video', upload.single('file'), submitVideoAbstract);
// router.post('/generate-signed-url', generateSignedUrl);
// // optional
// // const storage = multer.memoryStorage();
// // const upload = multer({
// //     storage: storage,
// //     limits: { fileSize: 10 * 1024 * 1024 } // Limit file size to 10MB
// // });
// router.get('/presigned-url', async (req, res) => {
//     try {
//         const uniqueFileName = uuidv4() + '.mp4';
//         const params = {
//             Bucket: process.env.AWS_S3_BUCKET_NAME,
//             Key: uniqueFileName,
//             ContentType: 'video/mp4',
//         };
//         const command = new PutObjectCommand(params);
//         const presignedURL = await s3Client.getSignedUrl(command, { expiresIn: 3600 });
//         res.status(200).json({ presignedURL, key: uniqueFileName });
//     } catch (error) {
//         console.error('Error generating presigned URL:', error);
//         res.status(500).json({ message: 'Could not generate presigned URL' });
//     }
// });

// // router.post('/submit', isAuthenticated, upload.single('file'), submitAbstract);
// // router.post('/submit', isAuthenticated, upload.single('file'), submitAbstract);
// router.post('/submit', isAuthenticated, upload.none(), submitAbstract);
// router.post('/review/:id', isAuthenticated, isAdmin, reviewAbstract);

// router.get('/download/:key', downloadSpesificAbstract);// i used this function to download files in my website, so cant make it for admin only

// router.get('/get/all', isAuthenticated, isAdmin, getAllAbstracts);
// router.get('/get/spesific/:id', isAuthenticated, isAdmin, getAbstractById);


// // router.put('/approve/:id', isAuthenticated, isAdmin, approveAbstract);
// // router.put('/reject/:id', isAuthenticated, isAdmin, rejectAbstract);

// export default router;
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
    reviewAbstract
} from '../controllers/abstractController.js';
import { isAdmin } from '../middlewares/isAuthorizedAdmin.js';
import dotenv from 'dotenv';
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

router.get('/get/all', isAuthenticated, isAdmin, getAllAbstracts);
router.get('/get/spesific/:id', isAuthenticated, isAdmin, getAbstractById);

export default router;


