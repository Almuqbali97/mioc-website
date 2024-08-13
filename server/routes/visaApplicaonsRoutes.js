import { Router } from 'express';
import { getVisaApplicationCollection } from '../models/visaApplicationModel.js';

const router = Router();

router.post('/submit/visa-request', async (req, res) => {
    const visaApplicationCollection = getVisaApplicationCollection();
    const { firstName, lastName, mobile, email, country } = req.body;

    if (!firstName || !lastName || !mobile || !email || !country) {
        return res.status(400).json({ message: 'Please enter all required fields' });
    }

    try {
        const newRequest = {
            firstName,
            lastName,
            mobile,
            email: email.toLowerCase(),
            country,
            createdAt: new Date()
        };

        await visaApplicationCollection.insertOne(newRequest);
        return res.status(201).json({ message: 'Visa request submitted successfully, we will contact you once your application is processed' });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Something went wrong, please try again' });
    }
});

export default router;
