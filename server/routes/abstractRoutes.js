import { Router } from 'express';
import multer from 'multer';
import { isAuthenticated } from '../middlewares/isAuenticatedMiddleware.js';
import { submitAbstract, downloadSpesificAbstract, getAllAbstracts, approveAbstract, rejectAbstract } from '../controllers/abstractController.js';
import { isAdmin } from '../middlewares/isAuthorizedAdmin.js';


const router = Router();

// Configure multer to use memory storage
const upload = multer({ dest: '../uploads/' }); // Files will go in the 'uploads/' folder
// // memory storage
// // const storage = multer.memoryStorage();
// // const upload = multer({ storage: storage });


router.post('/submit', isAuthenticated, upload.single('file'), submitAbstract);

router.get('/download/:key', isAuthenticated, isAuthenticated, downloadSpesificAbstract);

router.get('/get/all', isAuthenticated, isAuthenticated, getAllAbstracts);

router.put('/approve/:id', isAuthenticated, isAuthenticated, approveAbstract);
router.put('/reject/:id', isAuthenticated, isAuthenticated, rejectAbstract);

export default router;

