import { Router } from 'express';
import { paymentRequest, successfullPayment } from '../controllers/paymentController.js';


const router = Router();

router.post('/ccavRequestHandler', paymentRequest);

router.post('/payment/success', successfullPayment);

router.post('/payment/cancel', (req, res) => {
    res.redirect('http://localhost:5000/payment/cancel');
    // res.redirect('https://mioc.org.om/payment/cancel');
});


export default router;
