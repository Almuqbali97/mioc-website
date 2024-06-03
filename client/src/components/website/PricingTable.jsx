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

    const prices = {
        earlyBird: {
            ophthalmologists: { OOS: 15, nonOOS: 55 },
            nonOphthalmologists: { OOS: 10, nonOOS: 35 }
        },
        standard: {
            ophthalmologists: { OOS: 20, nonOOS: 65 },
            nonOphthalmologists: { OOS: 15, nonOOS: 40 }
        },
        spot: {
            ophthalmologists: { OOS: 30, nonOOS: 70 },
            nonOphthalmologists: { OOS: 20, nonOOS: 45 }
        }
    };

    return (
        <div className="container mx-auto my-16 p-4 flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-grow">
                <div className="col-span-1">
                    <div className="bg-white shadow-lg rounded-lg p-6 mt-3 h-full flex flex-col justify-between flex-grow">
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
                        title: 'Ophthalmologists',
                        earlyBirdPrice: 55,
                        earlyBirdOOS: 15,
                        standardPrice: 65,
                        standardOOS: 20,
                        spotPrice: 70,
                        spotOOS: 30,
                        key: 1
                    },
                    {
                        title: 'Non-Ophthalmologists',
                        earlyBirdPrice: 35,
                        earlyBirdOOS: 10,
                        standardPrice: 40,
                        standardOOS: 15,
                        spotPrice: 45,
                        spotOOS: 20,
                        key: 2
                    },
                ].map(card => (
                    <div key={card.key} className="col-span-1 transform transition-transform hover:scale-105 flex-grow">
                        <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between text-center flex-grow">
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-700">{card.title}</h3>
                                <div className="my-4">
                                    <div className="text-gray-500">Standard {card.standardPrice} OMR</div>
                                    <div className="text-sm text-gray-500">({card.standardOOS} OMR for OOS)</div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-3xl font-bold text-primary_blue">Early Bird {card.earlyBirdPrice} OMR</p>
                                    <p className="text-lg font-semibold text-primary_blue">({card.earlyBirdOOS} OMR for OOS)</p>
                                </div>
                                <div className="mt-4">
                                    <p className="text-gray-500">Onsite Fee {card.spotPrice} OMR</p>
                                    <p className="text-sm text-gray-500">({card.spotOOS} OMR for OOS)</p>
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
                                onClick={() => openModal(card.standardPrice)}
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
                <div className="bg-white p-6 rounded-lg text-center shadow-lg w-full max-w-md mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Registration will be available soon</h2>
                    <h2 className="text-2xl font-bold mb-4 text-primary_blue">Be Ready!</h2>
                </div>
            </Modal>
        </div>
    );
};

export default PricingTable;
