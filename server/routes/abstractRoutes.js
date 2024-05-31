import { Router } from 'express';
import multer from 'multer';
import { isAuthenticated } from '../middlewares/isAuenticatedMiddleware.js';
import { submitAbstract, downloadSpesificAbstract, getAllAbstracts, approveAbstract, rejectAbstract, submitVideoAbstract } from '../controllers/abstractController.js';
import { isAdmin } from '../middlewares/isAuthorizedAdmin.js';



const router = Router();

// Configure multer to use memory storage
// const upload = multer({ dest: '../uploads/' }); // Files will go in the 'uploads/' folder
// // memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


// optional
// const storage = multer.memoryStorage();
// const upload = multer({
//     storage: storage,
//     limits: { fileSize: 10 * 1024 * 1024 } // Limit file size to 10MB
// });


// router.post('/submit', isAuthenticated, upload.single('file'), submitAbstract);
// router.post('/submit', isAuthenticated, upload.single('file'), submitAbstract);
router.post('/submit', isAuthenticated,upload.none(), submitAbstract);
router.post('/submit/video', upload.single('file'), submitVideoAbstract);

router.get('/download/:key', isAuthenticated, isAuthenticated, downloadSpesificAbstract);

router.get('/get/all', isAuthenticated, isAuthenticated, getAllAbstracts);

router.put('/approve/:id', isAuthenticated, isAdmin, approveAbstract);
router.put('/reject/:id', isAuthenticated, isAdmin, rejectAbstract);

export default router;

