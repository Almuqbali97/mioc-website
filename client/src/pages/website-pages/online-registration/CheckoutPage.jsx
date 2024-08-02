import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from '../../../components/common/Loading';

const generateOrderId = () => {
    return new Date().getTime() + '' + Math.floor(Math.random() * 1000);
};
const generateCustomerIdentifier = () => {
    return Math.floor(Math.random() * 1000);
};

const CheckoutPage = () => {
    const location = useLocation();
    const { selectedCountry, hasRedeemCode, redeemCode, personalInfo, addressInfo, selectedPrice, isOphthalmologist, isOOS, oosMembership } = location.state || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [isPaylater, setIsPaylater] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const [formData, setFormData] = useState({
        merchant_id: '304',
        order_id: generateOrderId(),
        currency: 'OMR',
        amount: selectedPrice,
        redirect_url: import.meta.env.VITE_API_URL + '/registration/payment/response',
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
        merchant_param1: isOphthalmologist ? 'ophthalmologist' : 'non-ophthalmologist',
        merchant_param2: isOOS ? 'oos-member' : 'non oos-member',
        merchant_param3: isOOS ? oosMembership : '',
        merchant_param4: '',
        merchant_param5: '',
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
            const { redirectUrl } = data;

            // Redirect to the payment URL
            window.location.href = redirectUrl;

        } catch (error) {
            console.error('Error initiating transaction:', error);
        }
    };

    async function handlePayLaterSubmit(e) {
        e.preventDefault(); // Prevent the default form submission behavior4
        setIsLoading(true);
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + '/payment/paylater', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                setIsLoading(false);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json()
            const { redirectURL } = data;
            setIsLoading(false);
            window.location.href = redirectURL;
        } catch (error) {
            setIsLoading(false);
            console.error('Error initiating transaction:', error);
        }

    }


    return (
        <div className="bg-gray-100 dark:bg-gray-900 flex justify-center items-center xl:items-start xl:flex-row flex-col-reverse space-x-5">
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

                        {hasRedeemCode && (
                            <div className="mt-4">
                                <label className="block text-gray-700 dark:text-white mb-1">Redeem Code</label>
                                <p className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none">{redeemCode}</p>
                            </div>
                        )}
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

                </div>
            </div>
            <div className="Xd:w-1/4 w-80 mt-11 mb-11">
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
                        <span className="font-semibold">OMR {formData.amount}</span>
                    </div>
                    {isLoading ? <div className='flex justify-center items-center'><div className='max-w-[100px]'> <Loading /> </div></div> :
                        <>
                            <button onClick={handleSubmit}
                                className="bg-green-500 text-white py-2 px-4 rounded-lg mt-4 w-full hover:bg-green-700">
                                Checkout
                            </button>
                            <p className='flex justify-center mt-1 -mb-2'>OR</p>
                            <button onClick={() => setIsPaylater(true)}
                                className="bg-primary_blue text-white py-2 px-4 rounded-lg mt-4 w-full hover:bg-blue-700">
                                Pay Later (Onsite)
                            </button>
                            {isPaylater &&

                                <>

                                    <button onClick={handlePayLaterSubmit}
                                        className="bg-green-500 text-white py-2 px-4 rounded-lg mt-4 w-full hover:bg-green-700">
                                        Confirm
                                    </button>
                                    <button onClick={() => setIsPaylater(false)}
                                        className="bg-red-600 text-white py-2 px-4 rounded-lg mt-4 w-full hover:bg-red-400">
                                        Cancel and pay now
                                    </button>
                                </>
                            }</>}

                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
