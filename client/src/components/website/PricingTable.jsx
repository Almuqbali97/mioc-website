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
        if (step === 1 && selectedCountry !== 'Oman') {
            setStep(3);
        } else {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    return (
        <div className="container mx-auto my-16 p-4 flex">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-1">
                    <div className="bg-white shadow-lg rounded-lg p-6 mt-3 h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">Standard Fee</h3>
                            <p className="mt-2 text-gray-500">From 1st November 2024</p>
                            <div className="mt-4 border-b border-gray-300 ">
                                <p className="text-gray-500">Early Bird</p>
                                <p className="text-gray-700">From 01 June 2024</p>
                            </div>
                            <div className="mt-4 border-b border-gray-300">
                                <p className="text-gray-500">Onsite Fee</p>
                                <p className="text-gray-700">From 28 November 2024</p>
                            </div>
                            <div className="mt-4 space-y-2">
                                <p className="text-gray-700 border-b border-gray-300 pb-2">Access to Session Halls</p>
                                <p className="text-gray-700 border-b border-gray-300 pb-2">Access to Exhibition Halls</p>
                                <p className="text-gray-700 border-b border-gray-300 pb-2">Final Program</p>
                                <p className="text-gray-700 border-b border-gray-300 pb-2">Lunch</p>
                                <p className="text-gray-700 border-b border-gray-300 pb-2">Coffee Breaks</p>
                            </div>
                        </div>
                    </div>
                </div>
                {[
                    {
                        title: 'OPHTHALMOLOGIST/ PHYSICIAN',
                        price: 65,
                        earlyBirdPrice: 55,
                        onsitePrice: 70,
                        key: 1
                    },
                    {
                        title: 'NON-OPHTHALMOLOGIST',
                        price: 40,
                        earlyBirdPrice: 35,
                        onsitePrice: 45,
                        key: 2
                    },
                ].map(card => (
                    <div key={card.key} className="col-span-1 transform transition-transform hover:scale-105">
                        <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between text-center">
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-700">{card.title}</h3>
                                <div className="my-4">
                                    <div className="text-4xl font-bold text-primary_blue">{card.price} OMR</div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-gray-500">Early Bird {card.earlyBirdPrice} OMR</p>
                                </div>
                                <div className="mt-4">
                                    <p className="text-gray-500">Onsite Fee {card.onsitePrice} OMR</p>
                                </div>
                                <div className="mt-4 space-y-2">
                                    <p className="text-primary_brown border-b border-gray-300 pb-2">&#10003; Access to Session Halls</p>
                                    <p className="text-primary_brown border-b border-gray-300 pb-2">&#10003; Access to Exhibition Halls</p>
                                    <p className="text-primary_brown border-b border-gray-300 pb-2">&#10003; Final Program</p>
                                    <p className="text-primary_brown border-b border-gray-300 pb-2">&#10003; Lunch</p>
                                    <p className="text-primary_brown border-b border-gray-300 pb-2">&#10003; Coffee Breaks</p>
                                </div>
                            </div>
                            <button
                                className="mt-6 bg-primary_blue text-white py-2 px-4 rounded-lg hover:bg-blue-800"
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
                {/* <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto"> */}
                <div className="bg-white p-6 rounded-lg text-center shadow-lg w-full max-w-md mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Registration will be available soon</h2>
                    <h2 className="text-2xl font-bold mb-4 text-primary_blue">Be Ready!</h2>
                    {/* <h2 className="text-2xl font-bold mb-4">Register</h2>
                    <form onSubmit={handleSubmit}>
                        {step === 1 && (
                            <div className="mb-4">
                                <label htmlFor="country" className="block text-gray-700 mb-2">Country <span className="text-red-500">*</span></label>
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
                        {step === 2 && selectedCountry === 'Oman' && (
                            <>
                                <div className="mb-4">
                                    <label htmlFor="redeemCode" className="block text-gray-700 mb-2">Are you OOS Member? <span className="text-red-500">*</span></label>
                                    <select
                                        id="redeemCode"
                                        name="redeemCode"
                                        value={hasRedeemCode ? 'yes' : 'no'}
                                        onChange={handleRedeemCodeChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    >
                                        <option value="">Select option</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                                {hasRedeemCode && (
                                    <div className="mb-4">
                                        <label htmlFor="redeemCodeInput" className="block text-gray-700 mb-2">Enter OOS Member Code</label>
                                        <input
                                            id="redeemCodeInput"
                                            name="redeemCodeInput"
                                            type="text"
                                            value={redeemCode}
                                            onChange={(e) => setRedeemCode(e.target.value)}
                                            className="w-full p-2 border rounded"
                                        />
                                    </div>
                                )}
                                <button type="button" className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700" onClick={nextStep}>Next</button>
                            </>
                        )}
                        {step === 3 && (
                            <>
                                <div className="mb-4">
                                    <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name <span className="text-red-500">*</span></label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        value={personalInfo.firstName}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name <span className="text-red-500">*</span></label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        value={personalInfo.lastName}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={personalInfo.email}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="mobile" className="block text-gray-700 mb-2">Mobile <span className="text-red-500">*</span></label>
                                    <input
                                        id="mobile"
                                        name="mobile"
                                        type="text"
                                        value={personalInfo.mobile}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <button type="button" className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700" onClick={nextStep}>Next</button>
                            </>
                        )}
                        {step === 4 && (
                            <>
                                <div className="mb-4">
                                    <label htmlFor="address" className="block text-gray-700 mb-2">Address <span className="text-red-500">*</span></label>
                                    <input
                                        id="address"
                                        name="address"
                                        type="text"
                                        value={addressInfo.address}
                                        onChange={handleAddressChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="billingAddress" className="block text-gray-700 mb-2">Billing Address <span className="text-red-500">*</span></label>
                                    <input
                                        id="billingAddress"
                                        name="billingAddress"
                                        type="text"
                                        value={addressInfo.billingAddress}
                                        onChange={handleAddressChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <button type="submit" className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700">Submit</button>
                            </>
                        )}
                        {step > 1 && (
                            <button type="button" className="mt-4 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700" onClick={prevStep}>Previous</button>
                        )}
                    </form> */}
                </div>
            </Modal>
        </div>
    );
};

export default PricingTable;
