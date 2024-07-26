import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const generateOrderId = () => {
    return new Date().getTime() + '' + Math.floor(Math.random() * 1000);
};
const generateCustomerIdentifier = () => {
    return Math.floor(Math.random() * 1000);
};

const OosCheckout = () => {
    const location = useLocation();
    const {
        selectedCountry,
        nationality,
        personalInfo,
        addressInfo,
        workInfo,
        otherWorkPlace,
        otherProfession,
        selectedPrice,
        membershipType,
        membership_id,
    } = location.state || {};
    console.log(membership_id);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        merchant_id: '304',
        order_id: generateOrderId(),
        currency: 'OMR',
        // amount: selectedPrice,
        amount: '0.1',
        redirect_url: import.meta.env.VITE_API_URL + '/oos/membership/payment/response',
        cancel_url: import.meta.env.VITE_API_URL + '/payment/cancel',
        language: 'EN',
        billing_name: personalInfo.firstName + ' ' + personalInfo.lastName,
        billing_address: addressInfo.address,
        billing_city: addressInfo.city,
        billing_state: addressInfo.city,
        billing_zip: addressInfo.postal,
        billing_country: selectedCountry,
        billing_tel: personalInfo.mobile,
        billing_email: personalInfo.email,
        delivery_name: personalInfo.firstName + ' ' + personalInfo.lastName,
        delivery_address: addressInfo.address,
        delivery_city: addressInfo.city,
        delivery_state: addressInfo.city,
        delivery_zip: addressInfo.postal,
        delivery_country: selectedCountry,
        delivery_tel: personalInfo.mobile,
        merchant_param1: nationality,
        merchant_param2: workInfo.workingPlace === 'Other' ? otherWorkPlace : workInfo.workingPlace,
        merchant_param3: workInfo.profession === 'Other' ? otherProfession : workInfo.profession,
        merchant_param4: membershipType,
        merchant_param5: membership_id ? membership_id : "",
        promo_code: '',
        customer_identifier: personalInfo.firstName + '.' + personalInfo.lastName + generateCustomerIdentifier(),
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
            const { encRequest, accessCode } = data;
            //testing url
            // const url = `https://mti.bankmuscat.com:6443/transaction.do?command=initiateTransaction&encRequest=${encRequest}&access_code=${accessCode}`;
            const url = `https://smartpaytrns.bankmuscat.com/transaction.do?command=initiateTransaction&encRequest=${encRequest}&access_code=${accessCode}`;
            // Redirect to the payment URL
            window.location.href = url;

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
                                <p className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none">{personalInfo.firstName}</p>
                            </div>
                            <div>
                                <label className="block text-gray-700 dark:text-white mb-1">Last Name</label>
                                <p className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none">{personalInfo.lastName}</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 dark:text-white mb-1">Email</label>
                            <p className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none">{personalInfo.email}</p>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 dark:text-white mb-1">Mobile</label>
                            <p className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none">{personalInfo.mobile}</p>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 dark:text-white mb-1">Country</label>
                            <p className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none">{selectedCountry}</p>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 dark:text-white mb-1">Nationality</label>
                            <p className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none">{nationality}</p>
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Billing Address Information</h2>
                    <div className="mb-6 grid grid-cols-2 gap-3">
                        <div className="mt-4">
                            <label className="block text-gray-700 dark:text-white mb-1">Address</label>
                            <p className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none">{addressInfo.address}</p>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 dark:text-white mb-1">Postal Code</label>
                            <p className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none">{addressInfo.postal}</p>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 dark:text-white mb-1">City</label>
                            <p className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none">{addressInfo.city}</p>
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Work Information</h2>
                    <div className="mb-6">
                        <div className="mt-4">
                            <label className="block text-gray-700 dark:text-white mb-1">Working Place</label>
                            <p className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none">{workInfo.workingPlace === 'Other' ? otherWorkPlace : workInfo.workingPlace}</p>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 dark:text-white mb-1">Profession</label>
                            <p className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none">{workInfo.profession === 'Other' ? otherProfession : workInfo.profession}</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="md:w-1/4 mt-11 mb-11">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>OMR {selectedPrice}</span>
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
                        <span className="font-semibold">OMR {selectedPrice}</span>
                    </div>
                    <button onClick={handleSubmit}
                        className="bg-primary_blue text-white py-2 px-4 rounded-lg mt-4 w-full">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OosCheckout;
