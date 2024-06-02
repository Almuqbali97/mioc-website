import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const generateOrderId = () => {
    return 'ORDER' + new Date().getTime() + '' + Math.floor(Math.random() * 1000);
};

const CheckoutPage = () => {
    const location = useLocation();
    const { selectedCountry, hasRedeemCode, redeemCode, personalInfo, addressInfo, selectedPrice } = location.state || {};

    // Scroll to the top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    console.log(addressInfo);
    console.log(generateOrderId());

    const [formData, setFormData] = useState({
        merchant_id: '277',
        order_id: generateOrderId(),
        currency: 'OMR',
        amount: selectedPrice,
        redirect_url: import.meta.env.VITE_API_URL + '/payment/success',
        cancel_url: import.meta.env.VITE_API_URL + '/payment/cancel',
        language: 'EN',
        billing_name: personalInfo.firstName + ' ' + personalInfo.lastName,
        billing_address: addressInfo.address,
        billing_city: addressInfo.address,
        billing_state: addressInfo.billingAddress,
        billing_zip: '511',
        billing_country: addressInfo.address,
        billing_tel: personalInfo.mobile,
        billing_email: personalInfo.email,
        delivery_name: personalInfo.firstName + ' ' + personalInfo.lastName,
        delivery_address: addressInfo.address,
        delivery_city: addressInfo.billingAddress,
        delivery_state: addressInfo.address,
        delivery_zip: '511',
        delivery_country: addressInfo.address,
        delivery_tel: personalInfo.mobile,
        merchant_param1: '',
        merchant_param2: '',
        merchant_param3: '',
        merchant_param4: '',
        merchant_param5: '',
        promo_code: '',
        customer_identifier: 'CUST12345'
    });

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + '/ccavRequestHandler', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            const { encRequest, accessCode } = data;
            const url = `https://mti.bankmuscat.com:6443/transaction.do?command=initiateTransaction&encRequest=${encRequest}&access_code=${accessCode}`;

            // Redirect to the payment URL
            window.location.href = url;

        } catch (error) {
            console.error('Error initiating transaction:', error);
        }
    };

    return (
        <div className="container mx-auto my-16 p-4">
            <h1 className="text-2xl font-bold mb-4">Checkout Page</h1>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                <div className="mb-4">
                    <p><strong>First Name:</strong> {personalInfo.firstName}</p>
                    <p><strong>Last Name:</strong> {personalInfo.lastName}</p>
                    <p><strong>Email:</strong> {personalInfo.email}</p>
                    <p><strong>Mobile:</strong> {personalInfo.mobile}</p>
                    <p><strong>Country:</strong> {selectedCountry}</p>
                    {hasRedeemCode && (
                        <p><strong>Redeem Code:</strong> {redeemCode}</p>
                    )}
                </div>
                <h2 className="text-xl font-semibold mb-4">Address Information</h2>
                <div className="mb-4">
                    <p><strong>Address:</strong> {addressInfo.address}</p>
                    <p><strong>Billing Address:</strong> {addressInfo.billingAddress}</p>
                </div>
                <h2 className="text-xl font-semibold mb-4">Price</h2>
                <div className="mb-4">
                    <p><strong>Total Price:</strong> US$ {selectedPrice}</p>
                </div>
                {/* Add more checkout details and payment information as needed */}
                <button onClick={handleSubmit} className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700">
                    Confirm and Pay
                </button>
            </div>
        </div>
    );
};

export default CheckoutPage;
