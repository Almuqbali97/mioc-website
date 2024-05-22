import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { countries } from '../../constants';

// Set the app element for react-modal
Modal.setAppElement('#root');

const PricingTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [hasRedeemCode, setHasRedeemCode] = useState(false);
    const [redeemCode, setRedeemCode] = useState('');
    const [personalInfo, setPersonalInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: ''
    });
    const [addressInfo, setAddressInfo] = useState({
        address: '',
        billingAddress: ''
    });
    const [selectedPrice, setSelectedPrice] = useState(0);

    const navigate = useNavigate();

    const openModal = (price) => {
        setSelectedPrice(price);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setStep(1);
        // Reset form state
        setSelectedCountry('');
        setHasRedeemCode(false);
        setRedeemCode('');
        setPersonalInfo({
            firstName: '',
            lastName: '',
            email: '',
            mobile: ''
        });
        setAddressInfo({
            address: '',
            billingAddress: ''
        });
    };

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    const handleRedeemCodeChange = (e) => {
        setHasRedeemCode(e.target.value === 'yes');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo({ ...personalInfo, [name]: value });
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setAddressInfo({ ...addressInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Navigate to checkout page with the form data
        navigate('/checkout', {
            state: {
                selectedCountry,
                hasRedeemCode,
                redeemCode,
                personalInfo,
                addressInfo,
                selectedPrice
            }
        });
        closeModal();
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    return (
        <div className="container mx-auto my-16 p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="col-span-1">
                    <div className="bg-white shadow-lg rounded-lg p-6 mt-3 h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">Standard Fee</h3>
                            <p className="mt-2 text-gray-500">From 2nd November 2024</p>
                            <div className="mt-4 border-b border-gray-300 ">
                                <p className="text-gray-500">Early Bird</p>
                                <p className="text-gray-700">From 26 April 2024</p>
                            </div>
                            <div className="mt-4 border-b border-gray-300">
                                <p className="text-gray-500">Onsite Fee</p>
                                <p className="text-gray-700">From 29 November 2024</p>
                            </div>
                            <div className="mt-4 space-y-2">
                                <p className="text-gray-700 border-b border-gray-300 pb-2">Access to Session Halls</p>
                                <p className="text-gray-700 border-b border-gray-300 pb-2">Access to Exhibition Halls</p>
                                <p className="text-gray-700 border-b border-gray-300 pb-2">Delegate Bag</p>
                                <p className="text-gray-700 border-b border-gray-300 pb-2">Final Program</p>
                                <p className="text-gray-700 border-b border-gray-300 pb-2">Coffee Breaks</p>
                            </div>
                        </div>
                    </div>
                </div>
                {[
                    {
                        title: 'OPHTHALMOLOGIST/ PHYSICIAN',
                        price: 550,
                        earlyBirdPrice: 450,
                        onsitePrice: 650,
                        key: 1
                    },
                    {
                        title: 'YOUNG OPHTHALMOLOGIST',
                        price: 350,
                        earlyBirdPrice: 250,
                        onsitePrice: 450,
                        key: 2
                    },
                    {
                        title: 'OPTOMETRIST / ALLIED HEALTH / RESIDENTS',
                        price: 200,
                        earlyBirdPrice: 150,
                        onsitePrice: 250,
                        key: 3
                    }
                ].map(card => (
                    <div key={card.key} className="col-span-1 transform transition-transform hover:scale-105">
                        <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between text-center">
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-700">{card.title}</h3>
                                <div className="my-4">
                                    <div className="text-4xl font-bold text-primary_blue">US$ {card.price}</div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-gray-500">Early Bird US$ {card.earlyBirdPrice}</p>
                                </div>
                                <div className="mt-4">
                                    <p className="text-gray-500">Onsite Fee US$ {card.onsitePrice}</p>
                                </div>
                                <div className="mt-4 space-y-2">
                                    <p className="text-green-500 border-b border-gray-300 pb-2">&#10003; Access to Session Halls</p>
                                    <p className="text-green-500 border-b border-gray-300 pb-2">&#10003; Access to Exhibition Halls</p>
                                    <p className="text-green-500 border-b border-gray-300 pb-2">&#10003; Delegate Bag</p>
                                    <p className="text-green-500 border-b border-gray-300 pb-2">&#10003; Final Program</p>
                                    <p className="text-green-500 border-b border-gray-300 pb-2">&#10003; Coffee Breaks</p>
                                </div>
                            </div>
                            <button
                                className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
                                onClick={() => openModal(card.price)}
                            >
                                Register Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Register Now"
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            >
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Register</h2>
                    <form onSubmit={handleSubmit}>
                        {step === 1 && (
                            <div className="mb-4">
                                <label htmlFor="country" className="block text-gray-700 mb-2">Country</label>
                                <select
                                    id="country"
                                    name="country"
                                    value={selectedCountry}
                                    onChange={handleCountryChange}
                                    className="w-full p-2 border rounded"
                                    required
                                >
                                    <option value="">Select your country</option>
                                    {countries.map(country => (
                                        <option key={country} value={country}>{country}</option>
                                    ))}
                                </select>
                                <button type="button" className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700" onClick={nextStep}>Next</button>
                            </div>
                        )}
                        {step === 2 && (
                            <>
                                <div className="mb-4">
                                    <label htmlFor="redeemCode" className="block text-gray-700 mb-2">Are you OOS Member?</label>
                                    <select
                                        id="redeemCode"
                                        name="redeemCode"
                                        value={hasRedeemCode ? 'yes' : 'no'}
                                        onChange={handleRedeemCodeChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    >
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                    </select>
                                </div>
                                {hasRedeemCode && (
                                    <div className="mb-4">
                                        <label htmlFor="redeemCodeInput" className="block text-gray-700 mb-2">Enter Redeem Code</label>
                                        <input
                                            type="text"
                                            id="redeemCodeInput"
                                            name="redeemCodeInput"
                                            value={redeemCode}
                                            onChange={(e) => setRedeemCode(e.target.value)}
                                            className="w-full p-2 border rounded"
                                            required
                                        />
                                    </div>
                                )}
                                <div className="flex justify-between">
                                    <button type="button" className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700" onClick={prevStep}>Back</button>
                                    <button type="button" className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700" onClick={nextStep}>Next</button>
                                </div>
                            </>
                        )}
                        {step === 3 && (
                            <>
                                <div className="mb-4">
                                    <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={personalInfo.firstName}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={personalInfo.lastName}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={personalInfo.email}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="mobile" className="block text-gray-700 mb-2">Mobile</label>
                                    <input
                                        type="text"
                                        id="mobile"
                                        name="mobile"
                                        value={personalInfo.mobile}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <button type="button" className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700" onClick={prevStep}>Back</button>
                                    <button type="button" className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700" onClick={nextStep}>Next</button>
                                </div>
                            </>
                        )}
                        {step === 4 && (
                            <>
                                <div className="mb-4">
                                    <label htmlFor="address" className="block text-gray-700 mb-2">Address</label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={addressInfo.address}
                                        onChange={handleAddressChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="billingAddress" className="block text-gray-700 mb-2">Billing Address</label>
                                    <input
                                        type="text"
                                        id="billingAddress"
                                        name="billingAddress"
                                        value={addressInfo.billingAddress}
                                        onChange={handleAddressChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <button type="button" className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700" onClick={prevStep}>Back</button>
                                    <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700">Continue to Checkout</button>
                                </div>
                            </>
                        )}
                    </form>
                    <button
                        onClick={closeModal}
                        className="mt-4 w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-700"
                    >
                        Close
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default PricingTable;
