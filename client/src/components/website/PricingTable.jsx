// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Modal from 'react-modal';
// import { countries } from '../../constants';

// // Set the app element for react-modal
// Modal.setAppElement('#root');

// const PricingTable = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [step, setStep] = useState(1);
//     const [selectedCountry, setSelectedCountry] = useState('');
//     const [hasRedeemCode, setHasRedeemCode] = useState(false);
//     const [redeemCode, setRedeemCode] = useState('');
//     const [personalInfo, setPersonalInfo] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         mobile: ''
//     });
//     const [addressInfo, setAddressInfo] = useState({
//         address: '',
//         billingAddress: ''
//     });
//     const [selectedPrice, setSelectedPrice] = useState(0);

//     const navigate = useNavigate();

//     const openModal = (price) => {
//         setSelectedPrice(price);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         setStep(1);
//         // Reset form state
//         setSelectedCountry('');
//         setHasRedeemCode(false);
//         setRedeemCode('');
//         setPersonalInfo({
//             firstName: '',
//             lastName: '',
//             email: '',
//             mobile: ''
//         });
//         setAddressInfo({
//             address: '',
//             billingAddress: ''
//         });
//     };

//     const handleCountryChange = (e) => {
//         setSelectedCountry(e.target.value);
//     };

//     const handleRedeemCodeChange = (e) => {
//         setHasRedeemCode(e.target.value === 'yes');
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setPersonalInfo({ ...personalInfo, [name]: value });
//     };

//     const handleAddressChange = (e) => {
//         const { name, value } = e.target;
//         setAddressInfo({ ...addressInfo, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Navigate to checkout page with the form data
//         navigate('/checkout', {
//             state: {
//                 selectedCountry,
//                 hasRedeemCode,
//                 redeemCode,
//                 personalInfo,
//                 addressInfo,
//                 selectedPrice
//             }
//         });
//         closeModal();
//     };

//     const nextStep = () => {
//         if (step === 1 && selectedCountry !== 'Oman') {
//             setStep(3);
//         } else {
//             setStep(step + 1);
//         }
//     };

//     const prevStep = () => {
//         setStep(step - 1);
//     };

//     const prices = {
//         earlyBird: {
//             ophthalmologists: { OOS: 15, nonOOS: 55 },
//             nonOphthalmologists: { OOS: 10, nonOOS: 35 }
//         },
//         standard: {
//             ophthalmologists: { OOS: 20, nonOOS: 65 },
//             nonOphthalmologists: { OOS: 15, nonOOS: 40 }
//         },
//         spot: {
//             ophthalmologists: { OOS: 30, nonOOS: 70 },
//             nonOphthalmologists: { OOS: 20, nonOOS: 45 }
//         }
//     };

//     return (
//         <div className="container mx-auto my-16 p-4 flex flex-col">
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-grow">
//                 <div className="col-span-1">
//                     <div className="bg-white shadow-lg rounded-lg p-6 mt-3 h-full flex flex-col justify-between flex-grow">
//                         <div>
//                             <h3 className="text-xl font-semibold text-gray-700">Standard Fee</h3>
//                             <p className="mt-2 text-gray-500">From 1st November 2024</p>
//                             <div className="mt-4 border-b border-gray-300 ">
//                                 <p className="text-gray-500">Early Bird</p>
//                                 <p className="text-gray-700">From 01 June 2024</p>
//                             </div>
//                             <div className="mt-4 border-b border-gray-300">
//                                 <p className="text-gray-500">Onsite Fee</p>
//                                 <p className="text-gray-700">From 28 November 2024</p>
//                             </div>
//                             <div className="mt-4 space-y-2">
//                                 <p className="text-gray-700 border-b border-gray-300 pb-2">Access to Session Halls</p>
//                                 <p className="text-gray-700 border-b border-gray-300 pb-2">Access to Exhibition Halls</p>
//                                 <p className="text-gray-700 border-b border-gray-300 pb-2">Final Program</p>
//                                 <p className="text-gray-700 border-b border-gray-300 pb-2">Lunch</p>
//                                 <p className="text-gray-700 border-b border-gray-300 pb-2">Coffee Breaks</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {[
//                     {
//                         title: 'Ophthalmologists',
//                         earlyBirdPrice: 55,
//                         earlyBirdOOS: 15,
//                         standardPrice: 65,
//                         standardOOS: 20,
//                         spotPrice: 70,
//                         spotOOS: 30,
//                         key: 1
//                     },
//                     {
//                         title: 'Non-Ophthalmologists',
//                         earlyBirdPrice: 35,
//                         earlyBirdOOS: 10,
//                         standardPrice: 40,
//                         standardOOS: 15,
//                         spotPrice: 45,
//                         spotOOS: 20,
//                         key: 2
//                     },
//                 ].map(card => (
//                     <div key={card.key} className="col-span-1 transform transition-transform hover:scale-105 flex-grow">
//                         <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between text-center flex-grow">
//                             <div>
//                                 <h3 className="text-2xl font-semibold text-gray-700">{card.title}</h3>
//                                 <div className="my-4">
//                                     <div className="text-gray-500">Standard {card.standardPrice} OMR</div>
//                                     <div className="text-sm text-gray-500">({card.standardOOS} OMR for OOS)</div>
//                                 </div>
//                                 <div className="mt-4">
//                                     <p className="text-3xl font-bold text-primary_blue">Early Bird {card.earlyBirdPrice} OMR</p>
//                                     <p className="text-lg font-semibold text-primary_blue">({card.earlyBirdOOS} OMR for OOS)</p>
//                                 </div>
//                                 <div className="mt-4">
//                                     <p className="text-gray-500">Onsite Fee {card.spotPrice} OMR</p>
//                                     <p className="text-sm text-gray-500">({card.spotOOS} OMR for OOS)</p>
//                                 </div>
//                                 <div className="mt-4 space-y-2">
//                                     <p className="text-primary_brown border-b border-gray-300 pb-2">&#10003; Access to Session Halls</p>
//                                     <p className="text-primary_brown border-b border-gray-300 pb-2">&#10003; Access to Exhibition Halls</p>
//                                     <p className="text-primary_brown border-b border-gray-300 pb-2">&#10003; Final Program</p>
//                                     <p className="text-primary_brown border-b border-gray-300 pb-2">&#10003; Lunch</p>
//                                     <p className="text-primary_brown border-b border-gray-300 pb-2">&#10003; Coffee Breaks</p>
//                                 </div>
//                             </div>
//                             <button
//                                 className="mt-6 bg-primary_blue text-white py-2 px-4 rounded-lg hover:bg-blue-800"
//                                 onClick={() => openModal(card.standardPrice)}
//                             >
//                                 Register Now
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <Modal
//                 isOpen={isModalOpen}
//                 onRequestClose={closeModal}
//                 contentLabel="Register Now"
//                 className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
//                 overlayClassName="fixed inset-0 bg-black bg-opacity-50"
//             >
//                 <div className="bg-white p-6 rounded-lg text-center shadow-lg w-full max-w-md mx-auto relative">
//                     <button
//                         className="absolute top-2 text-lg right-2 text-gray-500 hover:text-gray-700"
//                         onClick={closeModal}
//                     >
//                         &times;
//                     </button>
//                     <h2 className="text-2xl font-bold mb-4">Registration will be available soon</h2>
//                     <h2 className="text-2xl font-bold mb-4 text-primary_blue">Be Ready!</h2>
//                 </div>
//             </Modal>
//         </div>
//     );
// };

// export default PricingTable;
import React, { useState } from 'react';

const PricingTable = () => {
    const [isOOS, setIsOOS] = useState(false);
    const [isOphthalmologist, setIsOphthalmologist] = useState(true);

    const getPrice = (rate) => {
        const prices = {
            early: {
                OOS: isOphthalmologist ? 15 : 10,
                nonOOS: isOphthalmologist ? 55 : 35,
            },
            standard: {
                OOS: isOphthalmologist ? 20 : 15,
                nonOOS: isOphthalmologist ? 65 : 40,
            },
            spot: {
                OOS: isOphthalmologist ? 30 : 20,
                nonOOS: isOphthalmologist ? 70 : 45,
            },
        };
        return isOOS ? prices[rate].OOS : prices[rate].nonOOS;
    };

    const getTooltipMessage = (rate) => {
        switch (rate) {
            case 'early':
                return 'This fee will be applied up to 1st November 2024';
            case 'standard':
                return 'This fee will be applied from 2nd to 21st November 2024';
            case 'spot':
                return 'This fee will be applied from 28th November (onsite only)';
            default:
                return '';
        }
    };

    return (
        <section className="flex flex-col justify-center antialiased text-gray-600 min-h-screen p-4">
            
            <div className="h-full">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl text-gray-800 font-bold text-center mb-4">Registration Fees</h2>
                    <div className="flex flex-col items-center justify-center space-y-8 mb-8">
                        <div className="flex items-center space-x-3">
                            <div className="text-sm text-gray-500 font-medium">Non-OOS</div>
                            <label className='relative inline-flex cursor-pointer select-none items-center'>
                                <input
                                    type='checkbox'
                                    className='sr-only'
                                    checked={isOOS}
                                    onChange={() => setIsOOS(!isOOS)}
                                />
                                <span
                                    className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${isOOS ? 'bg-primary_blue' : 'bg-gray-400'
                                        }`}
                                >
                                    <span
                                        className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${isOOS ? 'translate-x-6' : ''
                                            }`}
                                    ></span>
                                </span>
                                <span className='text-sm font-medium text-gray-500'>OOS</span>
                            </label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="text-sm text-gray-500 font-medium">Non-Ophthalmologists</div>
                            <label className='relative inline-flex cursor-pointer select-none items-center'>
                                <input
                                    type='checkbox'
                                    className='sr-only'
                                    checked={isOphthalmologist}
                                    onChange={() => setIsOphthalmologist(!isOphthalmologist)}
                                />
                                <span
                                    className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${isOphthalmologist ? 'bg-primary_blue' : 'bg-gray-400'
                                        }`}
                                >
                                    <span
                                        className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${isOphthalmologist ? 'translate-x-6' : ''
                                            }`}
                                    ></span>
                                </span>
                                <span className='text-sm font-medium text-gray-500'>Ophthalmologists</span>
                            </label>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-6 ">
                        {['early', 'standard', 'spot'].map((rate) => (
                            <div key={rate} className="relative col-span-full md:col-span-4 bg-white shadow-2xl rounded-sm border border-gray-200 ">
                                <span class="hidden md:block absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-primary_blue  to-primary_brown"></span>
                                <span class="md:hidden absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-primary_blue  to-primary_brown"></span>
                                <div className="px-5 pt-5 pb-6 border-b border-gray-200">
                                    <header className="flex items-center mb-2">
                                        <div className={`w-6 h-6 rounded-full flex-shrink-0 ${rate === 'early' ? 'bg-gradient-to-tr from-green-700 to-green-300' : rate === 'standard' ? 'bg-gradient-to-tr from-blue-700 to-blue-300' : 'bg-gradient-to-tr from-red-500 to-indigo-300'} mr-3`}>
                                            <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                                                <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg text-gray-800 font-semibold">
                                            {rate.charAt(0).toUpperCase() + rate.slice(1)} {rate === 'early' && 'Birds'} Rate
                                        </h3>
                                    </header>
                                    <div className="text-sm mb-2">
                                        {rate === 'early' && 'Up to 1st November 2024'}
                                        {rate === 'standard' && 'From 2nd to 21st November 2024'}
                                        {rate === 'spot' && 'From 28th November (onsite only)'}
                                    </div>
                                    <div className="text-gray-800 font-bold mb-4">
                                        {/* <span className="text-2xl">$</span> */}
                                        <span className="text-3xl">{getPrice(rate)}</span>
                                        <span className="text-gray-500 font-medium text-sm">/OMR</span>
                                    </div>
                                    <div className="relative group">
                                        <button
                                            className={`font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out ${rate === 'early' ? 'bg-primary_blue focus:outline-none focus-visible:ring-2 hover:bg-blue-700 text-white' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                                            disabled={rate !== 'early'}
                                        >
                                            Register Now
                                        </button>
                                        {rate !== 'early' && (
                                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                                                {getTooltipMessage(rate)}
                                                <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-8 border-t-gray-800 border-r-8 border-r-transparent border-l-8 border-l-transparent"></div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="px-5 pt-4 pb-5">
                                    <div className="text-xs text-gray-800 font-semibold uppercase mb-4">What's included</div>
                                    <ul className='space-y-2'>
                                        <li className="flex items-center py-1">
                                            <svg className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                                                <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                                            </svg>
                                            <div className="text-sm">Access to Session Halls</div>
                                        </li>
                                        <li className="flex items-center py-1">
                                            <svg className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                                                <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                                            </svg>
                                            <div className="text-sm">Access to Exhibition Halls</div>
                                        </li>
                                        <li className="flex items-center py-1">
                                            <svg className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                                                <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                                            </svg>
                                            <div className="text-sm">Final Program</div>
                                        </li>
                                        <li className="flex items-center py-1">
                                            <svg className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                                                <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                                            </svg>
                                            <div className="text-sm">Lunch</div>
                                        </li>
                                        <li className="flex items-center py-1">
                                            <svg className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                                                <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                                            </svg>
                                            <div className="text-sm">Coffee Breaks</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingTable;
