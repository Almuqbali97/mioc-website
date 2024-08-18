import { Router } from 'express';
import { getAllMemberships, getSpecificMembership } from '../controllers/oosMembershipController.js';
import { isAdmin } from '../middlewares/isAuthorizedAdmin.js';
import { isAuthenticated } from '../middlewares/isAuenticatedMiddleware.js';

const router = Router();

router.get('/get/membership/:id', getSpecificMembership);
router.get('/membership/get/all', isAuthenticated, isAdmin, getAllMemberships)




export default router;
