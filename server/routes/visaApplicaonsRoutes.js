import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';
import multer from 'multer';
import dotenv from 'dotenv';
import { getVisaApplicationCollection } from '../models/visaApplicationModel.js';

dotenv.config();

const s3Client = new S3Client({
    region: process.env.AWS_S3_BUCKET_REGION,
    credentials: {
        accessKeyId: process.env.AWS_S3_ACCESS_KEY,
        secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    },
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = Router();

// Route to get presigned URL for image uploads
router.get('/visa/presigned-url', async (req, res) => {
    try {
        const { fileType, firstName, lastName } = req.query; // Expect firstName and lastName to be provided
        const fileExtension = fileType === 'passport' ? 'passport' : 'personal';
        const uniqueFileName = `${uuidv4()}-${firstName}-${lastName}-${fileExtension}.jpeg`;

        const command = new PutObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: uniqueFileName,
            ContentType: 'image/jpeg', // Defaulting to JPEG
        });

        const presignedURL = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
        console.log(`Generated presigned URL for ${uniqueFileName}`); // Log for debugging

        res.status(200).json({ presignedURL, key: uniqueFileName });
    } catch (error) {
        console.error('Error generating presigned URL:', error);
        res.status(500).json({ message: 'Could not generate presigned URL' });
    }
});

// Route to handle visa application submission
router.post('/submit/visa-request', upload.none(), async (req, res) => {
    const visaApplicationCollection = getVisaApplicationCollection();
    const id = uuidv4();
    const { firstName, lastName, mobile, email, country, passportFileName, personalFileName } = req.body;

    if (!firstName || !lastName || !mobile || !email || !country || !passportFileName || !personalFileName) {
        console.log('Validation error: Missing required fields'); // Log validation error
        return res.status(400).json({ message: 'Please enter all required fields' });
    }

    try {
        const newRequest = {
            id: id,
            firstName,
            lastName,
            mobile,
            email: email.toLowerCase(),
            country,
            passportFileName,
            personalFileName,
            createdAt: new Date(),
        };

        await visaApplicationCollection.insertOne(newRequest);
        console.log(`Visa request submitted: ${firstName} ${lastName}, ${email}`); // Log submission
        return res.status(201).json({ message: 'Visa request submitted successfully, we will contact you once your application is processed' });
    } catch (error) {
        console.error('Error submitting visa request:', error);
        return res.status(500).json({ message: 'Something went wrong, please try again' });
    }
});

export default router;
