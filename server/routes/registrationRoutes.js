import { Router } from 'express';
import { isAuthenticated } from '../middlewares/isAuenticatedMiddleware.js';
import { isAdmin } from '../middlewares/isAuthorizedAdmin.js';
import { getAllRegistrations, getSpesificRegistration } from '../controllers/registrarsController.js';

const router = Router();


router.get('/registration/get/all', isAuthenticated, isAdmin, getAllRegistrations)

router.get('/registration/get/:id', isAuthenticated, isAdmin, getSpesificRegistration)

export default router;