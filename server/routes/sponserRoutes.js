import { Router } from 'express';
// import { sponsersCollection } from '../models/sponserModel.js';
import { getSponsersCollection } from '../models/sponserModel.js';

const router = Router();

router.post('/submit/sponser-request', async (req, res) => {
    const sponsersCollection = getSponsersCollection();
    const { firstName, lastName, mobile, email, company } = req.body;

    if (!firstName || !lastName || !mobile || !email || !company) {
        return res.status(400).json({ message: 'Please enter all required fields' });
    }

    try {
        const newRequest = {
            firstName,
            lastName,
            mobile,
            email: email.toLowerCase(),
            company,
            createdAt: new Date()
        };

        await sponsersCollection.insertOne(newRequest);
        return res.status(201).json({ message: 'Sponsor request submitted successfully we will contact you soon' });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Something went wrong, please try again' });
    }
});


export default router;
