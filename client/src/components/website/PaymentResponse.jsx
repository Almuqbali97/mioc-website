import { useLocation } from 'react-router-dom';

const PaymentResponse = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const orderStatus = queryParams.get('orderStatus');
    const orderId = queryParams.get('orderId');
    const isSuccess = orderStatus === 'Success';

    return (
        <div className={`max-w-md mx-auto mt-48 mb-48 p-4 rounded-lg ${isSuccess ? 'bg-green-100' : 'bg-gray-100'} shadow-lg`}>
            <h1 className="text-lg font-semibold text-center">Payment Response</h1>
            <p className="text-sm">Order ID: <span className="font-medium">{orderId}</span></p>
            <p className="text-sm">Order Status: <span className={`font-medium ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>{orderStatus}</span></p>
            <p className="text-sm mt-3"><strong>{isSuccess ? 'Please check your email for the order details' : ' Something went wrong. Please try to register again or contact support@mioc.org.om'}</strong></p>
        </div>
    );
};

export default PaymentResponse;
