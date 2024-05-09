import { Router } from 'express';
import { register, login, logout, googleOAuth } from '../controllers/userAuthController.js';
import { userProfile } from '../controllers/userController.js';
import { isAuthenticated } from '../middlewares/isAuenticatedMiddleware.js';

const router = Router();

router.post('/oauth/google/success', googleOAuth);

router.get('/logout', logout)

router.post('/register', register);

router.post('/login', login);

router.get('/profile', isAuthenticated, userProfile)

export default router;