import React, { useState } from 'react';

const generateOrderId = () => {
    return new Date().getTime() + '' + Math.floor(Math.random() * 1000);
};
const PaymentTestPage = () => {
    const [formData, setFormData] = useState({
        merchant_id: '277',
        order_id: generateOrderId(),
        currency: 'OMR',
        amount: '0.1',
        redirect_url: import.meta.env.VITE_API_URL + '/oos/membership/payment/response',
        cancel_url: import.meta.env.VITE_API_URL + '/payment/cancel',
        language: 'EN',
        billing_name: 'Musaab Almuqbali',
        billing_address: 'oman',
        billing_city: 'oman',
        billing_state: 'oman',
        billing_zip: '511',
        billing_country: 'oman',
        billing_tel: '0096896067878',
        billing_email: 'almuqbalimusab@gmail.com',
        delivery_name: 'Musaab Almuqbali',
        delivery_address: 'oman',
        delivery_city: 'oman',
        delivery_state: 'oman',
        delivery_zip: '511',
        delivery_country: 'oman',
        delivery_tel: '0096896067878',
        merchant_param1: '',
        merchant_param2: '',
        merchant_param3: '',
        merchant_param4: '',
        merchant_param5: '',
        promo_code: '',
        customer_identifier: generateOrderId(),
    });

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + '/payment/request', {
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
            const { encRequest, accessCode, redirectUrl } = data;
            // testing url
            const url = `https://mti.bankmuscat.com:6443/transaction.do?command=initiateTransaction&encRequest=${encRequest}&access_code=${accessCode}`;
            // const url = `https://smartpaytrns.bankmuscat.com/transaction.do?command=initiateTransaction&encRequest=${encRequest}&access_code=${accessCode}`;
            // Redirect to the payment URL
            // window.location.href = url;
            window.location.href = redirectUrl;

        } catch (error) {
            console.error('Error initiating transaction:', error);
        }
    };


    return (
        <div className="bg-gray-100 dark:bg-gray-900 flex justify-center space-x-5">
            <div className="w-full max-w-3xl mt-11 mb-11">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Checkout</h1>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Personal Information</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 dark:text-white mb-1">First Name</label>
                                <p className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none">{formData.billing_name}</p>
                            </div>
                            <div>
                                <label className="block text-gray-700 dark:text-white mb-1">Last Name</label>
                                <p className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none">{formData.billing_name}</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 dark:text-white mb-1">Email</label>
                            <p className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none">{formData.billing_email}</p>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 dark:text-white mb-1">Mobile</label>
                            <p className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none">{formData.billing_tel}</p>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 dark:text-white mb-1">Country</label>
                            <p className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none">{formData.billing_country}</p>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 dark:text-white mb-1">Nationality</label>
                            <p className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none">{formData.billing_country}</p>
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Billing Address Information</h2>
                    <div className="mb-6 grid grid-cols-2 gap-3">
                        <div className="mt-4">
                            <label className="block text-gray-700 dark:text-white mb-1">Address</label>
                            <p className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none">{formData.billing_address}</p>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 dark:text-white mb-1">Postal Code</label>
                            <p className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none">{formData.billing_address}</p>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 dark:text-white mb-1">City</label>
                            <p className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none">{formData.billing_city}</p>
                        </div>
                    </div>



                </div>
            </div>
            <div className="md:w-1/4 mt-11 mb-11">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>OMR {formData.amount}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Taxes</span>
                        <span>OMR 0.00</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>OMR 0.00</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold">Total</span>
                        <span className="font-semibold">OMR {formData.amount}</span>
                    </div>
                    <button onClick={handleSubmit}
                        className="bg-primary_blue text-white py-2 px-4 rounded-lg mt-4 w-full">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PaymentTestPage;
