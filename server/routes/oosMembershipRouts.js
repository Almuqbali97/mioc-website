import { Router } from 'express';
import { getSpecificMembership } from '../controllers/oosMembershipController.js';


const router = Router();

router.get('/get/membership/:id', getSpecificMembership);




export default router;
