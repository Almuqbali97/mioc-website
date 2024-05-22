import { Router } from 'express';
import { isAuthenticated } from '../middlewares/isAuenticatedMiddleware.js';
import { isAdmin } from '../middlewares/isAuthorizedAdmin.js';
import { registrationListCollection } from '../models/registrationListModel.js';

const router = Router();


router.get('/registrants/get/all', isAuthenticated, isAdmin, async (req, res) => {
    try {
        const registrants = await registrationListCollection.find().toArray();
        res.status(200).json(registrants);
    } catch (error) {
        console.error('Error fetching registrants:', error);
        res.status(500).json({ message: 'An error occurred while fetching registrants.' });
    }
})

export default router;