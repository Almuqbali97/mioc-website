import { Router } from 'express';
import { getInvoiceByOrderID, oosMembershipPaymentRes, paymentRequest, registrationPaymentRes } from '../controllers/paymentController.js';


const router = Router();

router.post('/payment/request', paymentRequest);

router.post('/registration/payment/response', registrationPaymentRes);

router.post('/oos/membership/payment/response', oosMembershipPaymentRes);

router.post('/payment/cancel', (req, res) => {
    // res.redirect('http://localhost:5000/payment/cancel');
    res.redirect('https://mioc.org.om/payment/cancel');
});



export default router;
