import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { countries } from '../../constants';
import PhoneInput from 'react-phone-input-2';
import MemebershipValidationCard from './MemebershipValidationCard';
import WifiLoader from './WifiLoader';

const PricingTable = () => {
    const [membershipNumber, setMembershipNumber] = useState('');
    const [membershipBeingValidated, setMembershipNumberBeingValidated] = useState(false);
    const [membershipValid, setMembershipValid] = useState(null);
    const [isOOS, setIsOOS] = useState(false);
    const [isOphthalmologist, setIsOphthalmologist] = useState(false);

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

    // handle modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [hasoosMembership, setHasoosMembership] = useState(false);
    const [oosMembership, setoosMembership] = useState('');
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
        setMembershipNumber('');
        setMembershipValid(null);
        setIsModalOpen(true);
    };

    const validateMembershipNumber = (number) => {
        // Mock valid membership number for demonstration
        setMembershipNumberBeingValidated(true);
        const validMembershipNumber = 'OOS112';
        setTimeout(() => {
            setMembershipNumberBeingValidated(false)
            setMembershipValid(number.toUpperCase() === validMembershipNumber)
        }, 5000);
    };

    const handleMembershipNumberChange = (e) => {
        const number = e.target.value;
        setMembershipNumber(number);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setStep(1);
        // Reset form state
        setSelectedCountry('');
        setHasoosMembership(false);
        setoosMembership('');
        setPersonalInfo({
            firstName: '',
            lastName: '',
            email: '',
        });
        setAddressInfo({
            address: '',
            billingAddress: ''
        });
    };
    const handlePhoneChange = (value) => {
        setPersonalInfo({ ...personalInfo, mobile: value });
    };
    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    const handleoosMembershipChange = (e) => {
        setHasoosMembership(e.target.value === 'yes');
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
                hasoosMembership,
                oosMembership,
                personalInfo,
                addressInfo,
                selectedPrice,
                isOphthalmologist,
                isOOS
            }
        });
        closeModal();
    };

    const validateStep = () => {
        switch (step) {
            case 1:
                return selectedCountry !== '';
            case 2:
                if (hasoosMembership) {
                    return oosMembership !== '';
                }
                return true;
            case 3:
                return personalInfo.firstName !== '' && personalInfo.lastName !== '' && personalInfo.email !== '' && personalInfo.mobile !== '';
            case 4:
                return addressInfo.address !== '' && addressInfo.billingAddress !== '';
            default:
                return false;
        }
    };

    const nextStep = () => {
        if (validateStep()) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        setStep(step - 1);
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
                <div className="max-w-8xl mx-auto">

                    {/*  */}

                    <div className='flex flex-col justify-around items-center xl:flex-row'>
                        <div className='border-r-2 pr-11'>
                            {/* category and oos selection starts here */}
                            <div className='flex justify-center'>
                                <div className="flex text  items-center border-l-8 border-primary_brown bg-[#d8a75736] p-4 text-emerald-900 shadow-lg relative">
                                    <div className="min-w-0">
                                        <h2 className="text-ellipsis whitespace-nowrap">Select your appropriate category
                                            <span className='ml-3'>
                                                <div className="tooltip">
                                                    <div className="icon">i</div>
                                                    <div className="tooltiptext">The conference organizers <br /> reserve the right to request <br /> proof of profession or ID at  <br />the time of check-in.</div>
                                                </div>
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center m-5 ml-0'>
                                <div className="radio-inputs space-x-5">
                                    <label className='flex flex-col items-center space-y-2'>
                                        <input
                                            className="radio-input"
                                            type="radio"
                                            name="opthalmologist"
                                            checked={!isOphthalmologist}
                                            onChange={() => setIsOphthalmologist(false)}
                                        />
                                        <span className="radio-tile">
                                            <span className="radio-icon">
                                                <svg height="200px" width="200px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <path className="st0" d="M364.032,355.035c-3.862-1.446-8.072-3.436-12.35-5.794l-71.57,98.935l-5.09-64.814h-38.033l-5.091,64.814 l-71.569-98.935c-4.408,2.466-8.656,4.487-12.361,5.794c-37.478,13.193-129.549,51.136-123.607,122.21 C25.787,494.301,119.582,512,256.006,512c136.413,0,230.208-17.699,231.634-34.755 C493.583,406.102,401.273,368.961,364.032,355.035z"></path> <path className="st0" d="M171.501,208.271c5.21,29.516,13.966,55.554,25.494,68.38c0,15.382,0,26.604,0,35.587 c0,0.902-0.158,1.852-0.416,2.833l40.41,19.462v28.545h38.033v-28.545l40.39-19.452c-0.258-0.981-0.416-1.932-0.416-2.843 c0-8.983,0-20.205,0-35.587c11.548-12.826,20.304-38.864,25.514-68.38c12.143-4.338,19.096-11.281,27.762-41.658 c9.231-32.358-13.876-31.258-13.876-31.258c18.69-61.873-5.922-120.022-47.124-115.753c-28.426-49.73-123.627,11.36-153.48,7.102 c0,17.055,7.112,29.842,7.112,29.842c-10.379,19.69-6.378,58.951-3.446,78.809c-1.704-0.03-22.602,0.188-13.728,31.258 C152.405,196.99,159.338,203.934,171.501,208.271z"></path> </g> </g></svg>                                    </span>
                                        </span>
                                        <span className="radio-label">Non-Ophthalmologist</span>
                                    </label>

                                    <label className='flex flex-col items-center space-y-2'>
                                        <input
                                            className="radio-input"
                                            type="radio"
                                            name="opthalmologist"
                                            checked={isOphthalmologist}
                                            onChange={() => setIsOphthalmologist(true)}
                                        />
                                        <span className="radio-tile">
                                            <span className="radio-icon">
                                                <svg version="1.1" viewBox="0 0 2048 2028" width="1280" height="1280" xmlns="http://www.w3.org/2000/svg">
                                                    <path transform="translate(1510,1351)" d="m0 0h25l7 4v2l5-2h7l8 4h16l6 3 2 2 6-1h10l6 4v2l5-2 6-1 8 4v2l16-2 8 5h2l5 1v-2l7 1 5 3v2l7-1 5-1 9 5h5l5-1 5 2 4 3 8-1 8 5 6-1 8 1 5 3h7l7 3 10 3 21 7 16 8 11 7 10 6 8 8 9 7 8 6 8 8 6 9 9 10 12 19 11 22 10 29 2 11 6 17 1 9 3 7 7 21 1 7 7 21 1 7 5 16 3 9 3 7 1 10 3 6 3 10 1 7v5h2l3 11 3 7 3 9 1 4 1 8 3 8 6 18 2 5-1 2 6 18 3 7-1 3v5h2l2 5 2 7 2 5 2 8 2 6 1 8 3 6 2 8 2 5v4l1 4 2 5 2 7 2 5 3 9 2 5h-2l1 8h2l2 5 2 7 2 5 2 8 3 5-2 3 5 13 3 9v4l2 7 3 7 1 5 3 5v6l3 1v12h-2032l-1-11 1-16 8-21 6-19v-6l4-10v-6l3-5 2-10 3-6v-7l3-5 2-9 3-7 1-9 2-3 2-9 2-5v-6l4-10v-6l3-5 3-11 3-9 3-8v-6l3-6 2-9 3-9 1-7 3-9 1-6 2-3 2-9 2-6v-5l4-9 1-4 3-9v-6l3-5 1-11 3-5 2-8 2-4 2-9 3-8 1-8 2-3 2-9 2-5v-6l4-7v-5l4-10v-6l3-5 1-10 4-10 2-6 2-9 1-5 3-7 3-9 4-9 5-13 8-14 8-12 8-11 7-7 1-2h2l2-4h2l2-4h2l2-4 7-7 8-7 8-6 14-9 16-8 11-6 8-1 9-5 2-2 9 1 3-1 4-4 9 1h3l1-3 3-2 9 1 3-3 6-2 5 1h3l2-3h3v-2l12 2 3-1 1-3 7-1h4l1-3 8-1h9l2-3 7-1 5 1h3l2-4 6-1h4v2l6-1 5-5 11 1 5-5 8 1h6l5-5 11 1 2-3 9-1 5 5 10 19 4 6 4 7 14 27 9 17 5 8 15 29 9 15 9 17 7 7 17 9 9 6 17 8 2 4-18 18-6 13v12l7 8 38 38 9 6 10 9 41 41 2 1v2l6 2 12 11 41 41 10 6 46 46 5 4 7 4 46 46 6 3 7 6v2l4 2 41 41 8 5 11 11 2 1v2l4 2v2l4 2 7 8 24 24 10 6 8 8 5 1h9l5-3 387-387h2l2-5v-15l-16-16-6-10 2-4 6-5 11-7 10-7 6-4 5-3 8-8 5-11 13-40 7-19 3-7 2-10 5-11 12-36 6-16z" fill="currentColor" />
                                                    <path transform="translate(1238,274)" d="m0 0 4 1 7 8 6 9 4 5 3 6v2l4 2 5 10 4 3v2h2l5 9 5 6 2 7 4 2 5 6 5 8 3 4 4 7 4 5 4 7 7 8 6 9 6 10 4 4 4 8 7 7 1 6-1 5 4 4 1 6-1 17 4 4v30l3 5 1 1v19l4 4v27l4 4v27l4 4v12l9 9v2l5 2 8-1 4-3 7 1 5 4 1 2v12l4 4v32l-3 6h-2l1 10-1 5h-2l1 4-3 3 1 8-1 5-3 4v9l-4 2 1 11h-2v2l-2 2-1 9v8l-4 4 1 10-4 2v21l-2 3h-2v20l-4 5v7l-7 8-7 7h-8l-2 3-7 2-5-3-1-9-3-2v-26l-4-2v-29l-1-4-2-1-1-6v-24l-1-4-2-1-1-6v-23l-3-2-1-6 1-24-2-4-2-1-1-6 1-16-3-5-2-4 1-6-3-6-1-1-1-8-10-18-16-16-16-8-10-3-5-3h-10l-2-1v-3l-135 1-3 3-3 1-6-1-8 4h-5l-11 7-12 11-11 11-6 11-3 10-4 12-2 4v13l-4 4v32l-4 3v24l-3 2-1 37-3 2-1 29-3 1-1 30-3 1-1 34-3 1v32l3 1 1 7-1 4 3 8 8 16 5 8 11 11 11 7 8 5 17 8 4 3 6-2 4 2v2l12 1h9l6 3 4 1 1 2v98l-1 1-14 1-4 5-9 5-6 7-8 15-1 28-1 1h-14l-2 4-4 1-13-1-2 4h-47l-3-1-1-2h-12l-7-3-11-3-9-3-13-6-9-3-10-6-8-5-9-5-10-6-18-10-13-8-20-12-39-23-16-9-12-8-10-7-19-19-6-9-9-12-6-11-6-10-8-16-3-7-2-7-4-8-2-9-4-9-1-4-2-4v-7l-1-6h-3v-10l1-3-2-5-3-2v-7l-1-3-6-4-1-2h-8l-6-5-9 1-5-4v-2l-4-2v-2l-4-2-2-2-2-11-2-1-1-6 1-11-2-5-3-3 1-9-1-7-4-4 1-8-1-9-3-1-1-4 1-5-1-8-3-2v-10l-1-4-3-2v-9l-1-6-3-1 1-8-2-5-3-3 1-12-2-4-2-1v-38l29-1 7-6 6-12v-13l4-5v-14l4-5v-15l4-5v-14l3-4 1-8v-7l4-7v-6l7-8 9-7 5-3 9-9 11-7 12-8 10-6 22-11 12-4 5-2 7-2 6-2h6l1-3h22v-4l159-1 2-4h32l4-4 12 1 2-4 6-1 4 2 4-4 9-1 6-4 9-4 6-1 17-9 14-7 15-10 13-9 7-6 8-6 15-14 11-11 6-3 14-14 8-7 7-7 6-3 14-14 8-7z" fill="currentColor" />
                                                    <path transform="translate(1e3 11)" d="m0 0h57l3 1 1 2 9 1h18l4 2v2l3 1 10-2 9 5h6l4-1 6 3 1 1h7l6 4v2l4-2 7 1 7 3 6 2 10 5 10 3 19 9 8 3 10 6 13 8 22 15 10 9 11 8 17 17 7 10 10 12 22 33 8 14 10 21 4 11 8 16 1 4-1 4 7 14 1 1v13l3 1 1 6v7l4 4-1 10 5 6-1 17 4 5v15l4 4v32l4 3v40l-7 2-7-1-10-17-7-8-5-8-6-9-6-8-3-6-5-5-3-4-3-5-5-7-2-6-4-2-6-8-3-5-4-5-3-6-7-7-4-8-6-7-2-6-4-2-6-9-7-10-12-18-16-16-7-2-7 3-14 12-9 7-13 12-14 13-9 7-17 16-8 7-10 8-10 10-8 7-12 10-15 11-17 11-22 12-13 6-7 2-5 2h-5l-5 3-5 1h-6l-1 2-8 2-7-1v2l-4 2h-153l-1 4h-36l-5 2-6 3-8-1-3 3-5 2-6-1-8 4-5 1-15 7-9 3-24 12-24 16-8 6-12 10-6 4-20 20h-2l-2 4-1 3 1 7-2 3h-2v17l-4 6v13l-4 7-2 8-4 1-3-8v-9l1-4-4-4-1-37-3-2v-114l3-3v-29l3-5 1-1v-18l4-6v-17l4-6v-9l3-5 1-10 4-10 6-19 7-21 12-25 14-28 8-12 7-9 9-12 9-10 4-7 10-10 5-6 8-7 9-7 15-11 11-7 14-9 10-6 12-7 8-4 8-2 12-6 7-1 4-3 8-1 3-3 9 1 1-4 7-1h7l4-4h8l7 2 2-5h17l1-3 2-1h21l4 1 1-4z" fill="currentColor" />
                                                    <path transform="translate(717,1296)" d="m0 0 5 2 6 8 7 16 3 9 4 7 2 9 14 28 3 9 8 16 5 11 2 7 4 8 1 1 2 9 10 21 3 9 9 19 2 6 8 17 2 5 2 6 9 19 2 7 8 17 2 4 2 7 8 16 2 6 1 5 10 19 4 9 2 7 6 13 2 7 9 17 2 9 10 20 2 8 9 17 2 9 8 16 2 3 1 8 4 7 3 5 1 7 11 22 2 7 8 16 3 10 8 16 2 5 2 7 2 4-1 4-4 1-6-1-14-14-4-3v-2l-4-2-4-5-8-7-11-11v-2l-4-2-5-5h-3l-12-12-8-7-39-39-4-1-11-11-7-6v-2l-4-2-23-23-4-5-5-1-15-15-7-6v-2l-4-2v-2l-4-2v-2l-4-2v-2l-4-2-4-5-7-6-4-5-6-2-49-49-4-1-8-7-19-19 1-4 8-8 6-10 7-7 5-11 1-5-7-8-7-7-10-6-9-5-8-5-11-6-3-2v-2l-5-1-6-5-9-11-4-7-6-10-12-24-6-10-7-12-9-19-7-11-4-7-10-19v-5l6-4 4-2 7 2 5-5h4l5 1 3-1 4-4 9 1 3-1 1-2h2v-2l10 1 6-5 11 1 5-5 8 1h3l1-3h3v-2l4 1h7l2-3h3v-2l8 2 3-1 1-3 9-1h3l1-3 4-1 6-1 4-3h6l17-9z" fill="currentColor" />
                                                    <path transform="translate(1299,1293)" d="m0 0 5 1 17 9 13 5 20 7 10 3 3 2v2l8-2 7 1 5 4 9-1 7 5 2-1h6l8 5 9-2 9 5h7l4-1 7 4 13 1 6 2-3 10-5 10-2 12-5 10-3 10-5 14-3 10-19 57-4 8-6 5-14 9-12 7-11 7-7 5-5 3-9 9v16l4 5 5 4 7 8 5 8 2 3 3 1-1 4-293 293h-2v2l-6 5-4-1-1-4 3-5v-5l4-10 2-6 5-10 2-9 2-3 3-10 5-11 4-11 3-9 5-11 3-9 4-8 2-9 3-7 2-6 5-10 2-9 2-3 2-8 6-12 2-8 2-4 1-6 6-11 2-8 6-13 3-10 5-13 2-6 34-1 2-4 10 1 6-4 21-10 13-13 5-8 5-7 1-7 3-6v-12l3-3 1-201 8-21z" fill="currentColor" />
                                                    <path transform="translate(1131,602)" d="m0 0h100l2 3h18l16 8 8 6 6 10 6 13v13l3 3 1 4v24l3 3v27l4 5v32l3 1 1 2v26l4 5v31l4 4v31l4 4v25l-3 5-2 9-5 9-14 14-12 6-18 5-3 2-36 1-2 3h-80l-2-3h-29l-5-2-3-3-8 1-16-8-14-9-6-7-7-14v-54l3-3 1-28 3-3 1-32 3-4v-25l2-4h2v-31l1-3 3-3 1-32 3-4 1-17 2-4 2-9 7-13 8-8 6-4 9-2 2-2h20zm32 15-11 4-5 1-7 6-10 7-8 7-7 8-7 12-3 9-2 9v35l8 15 6 12 6 7 10 8 6 4 10 6 12 4 3 2h31l4-4h9l3-4 6 1 8-7v-2l4-2 15-15v-2h2l8-16 2-6v-7l3-3 1-22-3-5-2-3 1-7-7-13-6-9-7-8-7-7-19-10-15-5z" fill="currentColor" />
                                                    <path transform="translate(1009,1393)" d="m0 0 12 6 20 20 9 5 18 18 10 6 2 2 1 34-2 4-17 17h-2l-2 4h-2l-2 4h-2l-2 4-5 4-7 13 1 7 3 3v8l4 5v11l4 5v6l3 4 1 8 3 4 1 8 3 5 2 7 2 5 2 7 2 5 2 7 2 5 2 7 4 12 2 7 4 9v5l3 4 1 8 4 7v5l4 6-1 10 1 4-4 6-1 9h-2l-2 11-6 11-1 3-1 6-3 5-1 7-5 10h-2v8l-3 4-1 8-6 11-1 1-2 9-5 10h-2l1 5-3 6-3 10-5 10-6 20-6 7h-2l-6-10-5-10-3-10-8-16-2-9-3-4-4-8-2-5-4-8-2-6-3-7-8-16-1-8-4-6-5-11-2-4-1-7-3-4-6-12-2-3v-7l-4-4v-3l4-4v-18l4-5v-15l4-5v-14l2-3h2v-21l3-3 1-10v-6l2-3h2v-17l3-3 1-13-1-6 3-4h2v-16l-1-5v-8l5-5-1-9 1-5-12-11-1-3-4-2v-2l-4-2-26-26-5-6-5-5-3-4 12-12 5-1 7-8 8-8 9-7h3l7-8 10-10 7-2 7-8z" fill="currentColor" />
                                                    <path transform="translate(1124,1107)" d="m0 0h113l5 3 1 1v333l-1 1h-126l-1-1v-327l5-5z" fill="currentColor" />
                                                    <path transform="translate(796,1084)" d="m0 0 4 1 27 15 22 13 14 8 11 7 9 5 10 6 17 9 2 4 11 2 16 8 9 3 6 3 9 2 5 3 15-1 5 4 69 1v-4h22l1 1v130l-9 6-12 7-30 20-12 7-3 3-6-1-11-6-31-21-15-10-11-7-10-7-14-8-11-8-13-8-29-19-12-7-12-9-12-7-24-16-10-7-1-1v-9l3-3 1-5z" fill="currentColor" />
                                                    <path transform="translate(775,1238)" d="m0 0 5 2 10 7 11 7 15 9 36 24 14 9 15 9 51 34 14 9 15 9 14 10 6 3-6 7-9 8-11 9-12 12-8 5-13 12-5 4-5 3-4 4h-2v2l-8 7-3 3-5 2-8 8-8 7-6 6-5 2-3 1-2 4-4 2-1 3-5 4-5-2-5-7-3-6-1-8-4-6-5-11-2-3-1-8-3-4-2-5-2-6-6-14-5-9-2-9-10-19-4-9-2-7-6-12-4-10-2-7-8-15-3-11-10-20v-7l5-7 5-5 7-11z" fill="currentColor" />
                                                    <path transform="translate(1116,1480)" d="m0 0h127v69l-5 4-2 6-7 8-5 3h-7l-2 3-68 1-5-2v-2l-6-1-7-6v-2l-4-2v-2h-2l-4-4-1-6 1-5v-3h-2v-2h-2v-56z" fill="currentColor" />
                                                    <path transform="translate(895,1491)" d="m0 0 3 2v2h2l6 7 6 5 5 6 7 6 5 6 7 6v2l3 1 5 6 4 3v3l-3 2v15l-4 4v19l-4 5v14l-4 8v12l-3 4-1 19-1 3-2 1-2 10h-3l-6-9-9-19-4-12-5-9-2-5-2-4-1-7-3-4-4-8-4-10-2-6-8-16-1-1-1-9-3-3-3-7-1-2v-9l5-7h2v-2h2v-2l8-7 4-4 3-2h5l2-5z" fill="currentColor" />
                                                    <path transform="translate(1175,652)" d="m0 0h13l20 9 4 5 3 6 5 6 1 28-6 12-5 6-5 4-6 6-31 1-11-4-9-8-8-16-2-5v-14l3-10 6-10 10-10 4-2 9-2z" fill="currentColor" />
                                                    <path transform="translate(1158,971)" d="m0 0h42l1 1v95l-1 1h-42z" fill="currentColor" />
                                                    <path transform="translate(1295,955)" d="m0 0 6 1 1 1-1 9-6 8-6 11-8 10-6 9-15 15-9 7-8 4-3-1-1-48 1-10 3-3 4-1 18-1 3-3h10l14-7z" fill="currentColor" />
                                                    <path transform="translate(1094,1580)" d="m0 0 5 2 15 15 12 6 9 3 4 5v6l-3 4-2 9-2 3-2 9-9 17-3 1v-2h-2l-6-12v-4l-3-1v-13l-3-1-1-5v-6l-3-1-2-10-2-2-2-12h-2l-1-6z" fill="currentColor" />
                                                    <path transform="translate(717,1296)" d="m0 0 5 2 6 8 7 16 3 9 4 7 2 9 14 28 3 9 8 16 5 11 2 7 4 8 1 1 2 9 10 21 3 9 9 19 2 6 8 17 2 5 2 6 9 19 2 7 8 17 2 4 2 7 8 16 2 6 1 5 10 19 4 9 2 7 6 13 2 7 9 17 2 9 10 20 2 8 9 17 2 9 8 16 2 3 1 8 4 7 3 5 1 7 11 22 2 7 6 12-1 3-5-9-4-7-1-8-9-16-2-4-1-8-7-11-1-8-8-14-3-7-2-8-9-18-3-10-9-17-2-9-10-19-2-9-5-9-3-11-10-19-3-6-1-7-10-19-3-10-9-18-3-10-9-18-2-8-8-16-4-12-9-17-4-13-8-15-1-7-7-13-2-9-8-16-5-9-2-9-8-16-5-9-3-11-5-9-3-11-6-12-3-4-8-1z" fill="currentColor" />
                                                    <path transform="translate(1308,1651)" d="m0 0 2 2-207 207v-3l17-17 5-6 6-5 6-7 6-5 5-6 5-5h2l2-4h2l2-4h2l2-4 6-7 7-6 5-6 6-5 5-6 7-6 25-25 8-9h2l2-4 4-4h2l2-4 6-5 27-27 1-2h3l1-4 6-5 5-5z" fill="currentColor" />
                                                    <path transform="translate(1079,1665)" d="m0 0 2 3 1 5 3 6v5l3 4 1 8 4 7v5l4 6-1 10 1 4-4 6-1 9h-2l-2 11-6 11-1 3-1 6-3 5-1 7-5 10h-2v8l-3 4-1 8-6 11-1 1-2 9-5 10h-2l1 5-3 6-3 10-5 10-1 5-2-2 1-6 3-3 2-5 2-9 3-6 1-7 2-2 4-12 2-7h2l1-5 2-4 6-20 1-2h2l1-7 3-9 4-5-1-3 6-14 3-1-1-4 2-7 3-1-1-4 2-6 2-4 1-14-4-6-1-8-1-3h-2v-9h-2l-2-3v-9h-2l-2-7z" fill="currentColor" />
                                                    <path transform="translate(1152,1682)" d="m0 0 1 4-2 7-5 11-2 7-5 14-3 7-3 10-4 8-3 11-4 9-4 11-3 8-3 5-3 11-4 9-4 10-3 10-3 9-3 5-3 7-3 10v2h-2l-1-5 4-10 2-6 5-10 2-9 2-3 3-10 5-11 4-11 3-9 5-11 3-9 4-8 2-9 3-7 2-6 5-10 2-9 2-3 2-8 6-12 2-8z" fill="currentColor" />
                                                    <path transform="translate(754,1268)" d="m0 0 1 3 3 11 8 16 2 9 10 19 3 9 8 16 4 12 13 26 1 7 6 10 5 10 1 7 6 10 2 10 4 7 7 15 1 7 2 2v5l-3-3-3-6-1-8-4-6-5-11-2-3-1-8-3-4-2-5-2-6-6-14-5-9-2-9-10-19-4-9-2-7-6-12-4-10-2-7-8-15-3-11-10-20v-7z" fill="currentColor" />
                                                    <path transform="translate(1337,1675)" d="m0 0v3l-19 19-5 6-6 5-6 7h-2l-2 4-83 83h-2v2l-8 7-25 25-2-1z" fill="currentColor" />
                                                    <path transform="translate(725,1650)" d="m0 0 4 2 32 32v2l4 2 8 8v2l4 2v2l10 4 1 2 3 1 7 8 21 21 5 6 6 5 4 5-1 2-7-7-7-6v-2l-4-2-23-23-4-5-5-1-15-15-7-6v-2l-4-2v-2l-4-2v-2l-4-2v-2l-4-2-4-5-7-6-4-5-6-2-2-3z" fill="currentColor" />
                                                    <path transform="translate(880,1503)" d="m0 0v3l-10 10-3 4h-2l1 12 6 11 1 8 4 6 2 5 5 9 1 8 5 8 6 12 1 7 10 19 2 9 4 8 1 6-3-4-6-11-2-9-6-11-2-5-2-4-1-7-3-4-4-8-4-10-2-6-8-16-1-1-1-9-3-3-3-7-1-2v-9l5-7h2v-2h2v-2l8-7z" fill="currentColor" />
                                                    <path transform="translate(961,1663)" d="m0 0h2l-1 14-3 7-1 7v9l-3 5-1 18-3 4 3 6v6l4 7 3 7 5 10 1 7 3 4 4 10 3 5v6l-2 1-1-8-4-6-5-11-2-4-1-7-3-4-6-12-2-3v-7l-4-4v-3l4-4v-18l4-5v-15l4-5v-14z" fill="currentColor" />
                                                    <path transform="translate(1079,1665)" d="m0 0 2 3 1 5 3 6v5l3 4 1 8 4 7v5l4 6-1 10 1 4-4 6-1 9h-2l-2 11-6 11-1 3-1 4-3-1 2-8 2-3 2-5 3-1-1-4 2-7 3-1-1-4 2-6 2-4 1-14-4-6-1-8-1-3h-2v-9h-2l-2-3v-9h-2l-2-7z" fill="currentColor" />
                                                    <path transform="translate(718,1696)" d="m0 0 4 2 47 47 10 6 46 46 5 4 5 3-2 1-5-2-31-31-2-1v-2h-2v-2l-4-2-7-8-9-7-7-4-7-8-14-14-8-7-7-8-12-12z" fill="currentColor" />
                                                    <path transform="translate(1935,1646)" d="m0 0 2 4 3 8 6 18 1 2 1 10 3 6 3 10 1 7v5h2l3 11 3 7 3 9 1 4-2 4-1-1-2-9-4-13-2-7-3-6-1-10-3-6-3-9-2-12-3-7-2-8-2-4-1-7-2-2z" fill="currentColor" />
                                                    <path transform="translate(1966,1751)" d="m0 0 2 4 3 8 6 18 2 5-1 2 6 18 3 7-1 3v5h2l2 5 2 7 2 5 3 12-4-4-4-13-2-7-2-4-1-5v-6l-4-7-1-7-3-6-1-9-3-6-4-13-2-7-1-4z" fill="currentColor" />
                                                    <path transform="translate(541,1346)" d="m0 0 10 2v2h-12l-4 5 2 6 6 11 5 10 4 5 8 17 10 19-1 2-7-12-9-19-7-11-4-7-10-19v-5l6-4z" fill="currentColor" />
                                                    <path transform="translate(485,1359)" d="m0 0h6l5 5 10 19 4 6 4 7 14 27 8 15-1 2-7-11-8-17-12-22-6-8-6-14-4-6-7-2z" fill="currentColor" />
                                                    <path transform="translate(940,1582)" d="m0 0 1 4-4 5v14l-4 8v12l-3 4-1 19-1 3-2 1-2 10h-3v-3l2 1v-8l4-6-1-5 1-12 4-6v-14l4-5v-14z" fill="currentColor" />
                                                    <path transform="translate(961,1663)" d="m0 0h2l-1 14-3 7-1 7v9l-3 5-1 18h-3v-18l4-5v-15l4-5v-14z" fill="currentColor" />
                                                    <path transform="translate(838,1757)" d="m0 0 4 1 35 35v2l3 1 4 6-4-2-39-39-4-1z" fill="currentColor" />
                                                    <path transform="translate(671,1602)" d="m0 0 4 1 36 36 6 5 5 6-1 2-46-46-4-1-2-2z" fill="currentColor" />
                                                    <path transform="translate(280,1409)" d="m0 0 3 1-8 5-10 2-5 3-26 13-4 3-2-1 10-7 16-8 13-7 8-1z" fill="currentColor" />
                                                    <path transform="translate(1333,725)" d="m0 0h1l1 9 3 5 1 24-1 7h2l2 5v18l-2-4v-12l-1-4-2-1-1-6v-24l-1-4-2-1-1-6z" fill="currentColor" />
                                                    <path transform="translate(88,1754)" d="m0 0 1 3-2 12-3 7-1 9-3 7-5 17-2-4 2-6 3-11 3-9 1-7 3-9 1-6z" fill="currentColor" />
                                                    <path transform="translate(103,1701)" d="m0 0 1 4-1 2v7l-4 8-4 17-5 15h-1l1-9 2-6v-5l4-9 1-4 3-9v-6z" fill="currentColor" />
                                                    <path transform="translate(1051,1843)" d="m0 0 1 3-3 1 1 5-3 6-3 10-5 10-1 5-2-2 1-6 3-3 2-5 2-9 3-6 1-6z" fill="currentColor" />
                                                    <path transform="translate(68,1825)" d="m0 0 1 3-4 13-5 22-1 4-2 1v-10l4-10v-6l3-5 3-11z" fill="currentColor" />
                                                    <path transform="translate(936,1481)" d="m0 0 3 1 4 4v2l4 2 4 4v2l4 2v2l4 2v2l4 2v2h2l1 3-4-2-26-26z" fill="currentColor" />
                                                    <path transform="translate(212,1448)" d="m0 0 1 2h-2v2h-2l-2 4-11 11h-2l-2 4-10 10v-3l8-8 1-2h2l2-4h2l2-4h2l2-4 7-7z" fill="currentColor" />
                                                    <path transform="translate(146,1549)" d="m0 0 1 3-3 13-4 12-2 8-2 7-1-4v-6l4-10 2-6 2-9 1-5z" fill="currentColor" />
                                                    <path transform="translate(949,1825)" d="m0 0 3 3 3 9 8 17-1 3-7-13-5-8z" fill="currentColor" />
                                                    <path transform="translate(1092,1582)" d="m0 0 2 1v5l2 1 2 11 2 4 2 5-1 6-2-3-1-7-2-2-2-12h-2l-1-6z" fill="currentColor" />
                                                    <path transform="translate(1966,1751)" d="m0 0 2 4 3 8 6 18 1 4h-2l-4-9-4-13-2-7-1-4z" fill="currentColor" />
                                                    <path transform="translate(862,1467)" d="m0 0h5l1 2-5 2-3 1-2 4-4 2-1 3-5 4-5-2-2-4 4 2v2l3-1 3-3h2v-2l4-4h2l2-5z" fill="currentColor" />
                                                    <path transform="translate(964,1767)" d="m0 0 4 4 9 18v6l-2 1-1-8-4-6-5-11-2-3z" fill="currentColor" />
                                                    <path transform="translate(982,1544)" d="m0 0 1 3-1 13-2 2-2-6v-8z" fill="currentColor" />
                                                    <path transform="translate(111,1673)" d="m0 0 1 2-3 11-2 7v6h-2l-1 2v-11l3-5 2-8z" fill="currentColor" />
                                                    <path transform="translate(976,1796)" d="m0 0h2l5 9v4h2l4 10-1 5h-1l-3-11-8-16z" fill="currentColor" />
                                                    <path transform="translate(122,1635)" d="m0 0h1l-1 9-3 8-2 9-2 2 1-12 3-6 2-9z" fill="currentColor" />
                                                    <path transform="translate(134,1592)" d="m0 0 1 4-1 6-1 5-3 7-2 4-1-5 4-10v-6z" fill="currentColor" />
                                                    <path transform="translate(1105,1627)" d="m0 0h3l2 4-1 7 3 4 1 8-3-4v-4l-3-1v-13z" fill="currentColor" />
                                                    <path transform="translate(1260,238)" d="m0 0 2 1v2l4 2v2l4 1 1 3h2v2h2l-1 3-6-4-7-8-2-3z" fill="currentColor" />
                                                    <path transform="translate(2007,1894)" d="m0 0h2l4 10 4 12h-2v-2h-2v-4h-2l-2-9-2-3z" fill="currentColor" />
                                                    <path transform="translate(56,1868)" d="m0 0h1l-1 7-5 19-2-2 1-4 1-7 2-3 2-9z" fill="currentColor" />
                                                    <path transform="translate(889,1443)" d="m0 0h5l1 3-5 2-8 8-2-1 2-3h2v-2h2l2-6z" fill="currentColor" />
                                                    <path transform="translate(180,1481)" d="m0 0v3l-5 8-7 11-3 2 2-5 8-12z" fill="currentColor" />
                                                    <path transform="translate(1293,280)" d="m0 0 4 5 1 3h2l2 5-5-1-2-6-4-2-1-3z" fill="currentColor" />
                                                    <path transform="translate(990,1826)" d="m0 0 1 2h2l2 8h2l4 10 1 4-4-4-4-8-2-5-2-3z" fill="currentColor" />
                                                    <path transform="translate(1329,678)" d="m0 0h1l1 22 2 8-4-2-1-6z" fill="currentColor" />
                                                    <path transform="translate(1251,287)" d="m0 0 8 10 3 6-1 2-6-8v-3l-3-1-2-5z" fill="currentColor" />
                                                    <path transform="translate(1160,1662)" d="m0 0 1 2-4 9-2 8-2 1v-7z" fill="currentColor" />
                                                    <path transform="translate(913,1423)" d="m0 0 6 2-2 2-5 3-4 4-2-1 4-5 2-4z" fill="currentColor" />
                                                    <path transform="translate(1308,1651)" d="m0 0 2 2-10 10h-2l2-4z" fill="currentColo" />
                                                    <path transform="translate(127,1618)" d="m0 0 1 2-2 13-3 2v-10z" fill="currentColor" />
                                                    <path transform="translate(692,872)" d="m0 0h1l1 10 2 3v5l-2-4v-2h-3v-10z" fill="currentColor" />
                                                    <path transform="translate(18 2e3)" d="m0 0h1v10l-2 3-1-1v-7z" fill="currentColor" />
                                                    <path transform="translate(935,1405)" d="m0 0 6 1-5 4-4 4-2-1 4-5z" fill="currentColor" />
                                                    <path transform="translate(42,1918)" d="m0 0 2 2-4 11-2 3v-7z" fill="currentColor" />
                                                    <path transform="translate(349,1389)" d="m0 0 12 2 3-1-1 3-12-1-2-1z" fill="currentColor" />
                                                    <path transform="translate(601,1331)" d="m0 0 3 1-5 4-3 3-6-1 3-2 4-1z" fill="currentColor" />
                                                </svg>
                                            </span>
                                        </span>
                                        <span className="radio-label">Ophthalmologist</span>
                                    </label>
                                </div>
                            </div>
                            {/*  */}

                            {/*  */}
                            <div className='flex justify-center'>
                                <div className="flex text  items-center border-l-8 border-primary_brown bg-[#d8a75736] p-4 text-emerald-900 shadow-lg">
                                    <div className="min-w-0">
                                        <h2 className=" text-ellipsis whitespace-nowrap">Are you an OOS Member?
                                            <span className='ml-3'>
                                                <div className="tooltip">
                                                    <div className="icon">i</div>
                                                    <div className="tooltiptext">You must have a valid <br /> OOS-Membership as of <br />Registration date.</div>
                                                </div>
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center m-5 ml-0'>
                                <div className="radio-inputs space-x-9">
                                    <label className='flex flex-col items-center space-y-2'>
                                        <input
                                            className="radio-input"
                                            type="radio"
                                            name="oos-member"
                                            checked={!isOOS}
                                            onChange={() => setIsOOS(!isOOS)}
                                        />
                                        <span className="radio-tile">
                                            <span className="radio-icon relative">
                                                <span className="absolute scale-110 inset-0">
                                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 23.5l15-15M23.5 23.5l-15-15"></path> </g></svg>
                                                </span>
                                                <svg height="200px" width="200px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <path className="st0" d="M485.22,80.604H26.78C12.013,80.604,0,92.615,0,107.382v297.229c0,14.767,12.013,26.786,26.78,26.786h458.44 c14.767,0,26.78-12.019,26.78-26.786V107.382C512,92.615,499.987,80.604,485.22,80.604z M132.17,283.787v-4.472 c0-2.298-0.38-4.566-1.359-7.174c-0.188-0.248-18.793-25.357-18.793-48.059c0-27.05,16.988-46.685,40.394-46.685 s40.394,19.635,40.394,46.685c0,22.702-18.604,47.811-19.022,48.494c-0.751,2.166-1.132,4.433-1.132,6.739v4.472 c0,6.18,3.628,11.84,9.307,14.449l30.316,12.384c6.584,3.028,11.285,9.084,12.558,16.048l1.431,18.416H78.56l1.407-18.253 c1.294-7.128,5.998-13.184,12.518-16.18l30.442-12.446C128.542,295.627,132.17,289.967,132.17,283.787z M429.318,306.396v29.557 H266.745v-29.557H429.318z M429.318,242.793v29.558H266.745v-29.558H429.318z M231.481,208.748v-29.557h197.836v29.557H231.481z"></path> </g> </g></svg>
                                            </span>
                                        </span>
                                        <span className="radio-label">Non OOS-Member</span>
                                    </label>

                                    <label className='flex flex-col items-center space-y-2 ml-0'>
                                        <input
                                            className="radio-input"
                                            type="radio"
                                            name="oos-member"
                                            checked={isOOS}
                                            onChange={() => setIsOOS(!isOOS)}
                                        />
                                        <span className="radio-tile ">
                                            <span className="radio-icon">
                                                <svg height="200px" width="200px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <path className="st0" d="M485.22,80.604H26.78C12.013,80.604,0,92.615,0,107.382v297.229c0,14.767,12.013,26.786,26.78,26.786h458.44 c14.767,0,26.78-12.019,26.78-26.786V107.382C512,92.615,499.987,80.604,485.22,80.604z M132.17,283.787v-4.472 c0-2.298-0.38-4.566-1.359-7.174c-0.188-0.248-18.793-25.357-18.793-48.059c0-27.05,16.988-46.685,40.394-46.685 s40.394,19.635,40.394,46.685c0,22.702-18.604,47.811-19.022,48.494c-0.751,2.166-1.132,4.433-1.132,6.739v4.472 c0,6.18,3.628,11.84,9.307,14.449l30.316,12.384c6.584,3.028,11.285,9.084,12.558,16.048l1.431,18.416H78.56l1.407-18.253 c1.294-7.128,5.998-13.184,12.518-16.18l30.442-12.446C128.542,295.627,132.17,289.967,132.17,283.787z M429.318,306.396v29.557 H266.745v-29.557H429.318z M429.318,242.793v29.558H266.745v-29.558H429.318z M231.481,208.748v-29.557h197.836v29.557H231.481z"></path> </g> </g></svg>
                                            </span>
                                        </span>
                                        <span className="radio-label">OOS-Member</span>
                                    </label>
                                </div>
                            </div>
                            {/*  */}
                            {isOOS ? (
                                <>
                                    {!membershipValid && (
                                        <div className='flex justify-center flex-col items-center space-y-7'>
                                            {!membershipBeingValidated ? (
                                                <>
                                                    <input
                                                        className="validateInput"
                                                        value={membershipNumber}
                                                        placeholder="Enter your OOS-Membership"
                                                        onChange={handleMembershipNumberChange}
                                                        required
                                                    />
                                                    <button
                                                        className="validateBtn"
                                                        onClick={() => validateMembershipNumber(membershipNumber)}
                                                    >
                                                        Validate Membership
                                                        <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                                                            <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd"></path>
                                                        </svg>
                                                    </button>
                                                </>
                                            ) : (
                                                <WifiLoader />
                                            )}
                                        </div>
                                    )}
                                    {membershipValid !== null && !membershipBeingValidated && (
                                        <MemebershipValidationCard membershipIsValid={membershipValid} />
                                    )}
                                </>
                            ) : (
                                <div>
                                    <p>
                                        <div className='flex justify-center flex-col items-center space-y-7'>
                                            <button className="validateBtn" onClick={''}>
                                                Become an OOS-Member?
                                                <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                                                    <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </p>
                                </div>
                            )}
                            {/*  */}
                        </div>
                        <div>
                            {/* <h2 className="text-3xl text-gray-800 font-bold text-center m-9 mt-0">Registration Fees</h2> */}
                            <div className="grid grid-cols-12 gap-6">
                                {['early', 'standard', 'spot'].map((rate) => (
                                    <div key={rate} className="relative col-span-full md:col-span-4 bg-white shadow-2xl rounded-sm border border-gray-200 ">
                                        <span className="hidden md:block absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-primary_blue  to-primary_brown"></span>
                                        <span className="md:hidden absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-primary_blue  to-primary_brown"></span>
                                        <div className="px-5 pt-5 pb-6 border-b border-gray-200">
                                            <header className="flex items-center mb-2">
                                                <div className={`w-6 h-6 rounded-full flex-shrink-0 ${rate === 'early' ? 'bg-gradient-to-tr from-green-700 to-green-300' : rate === 'standard' ? 'bg-gradient-to-tr from-blue-700 to-blue-300' : 'bg-gradient-to-tr from-red-500 to-blue-300'} mr-3`}>
                                                    <svg className="w-6 h-6 fill-ccurrentColortext-white" viewBox="0 0 24 24">
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
                                                    className={`font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out ${(rate === 'early') && (isOOS && membershipValid || !isOOS) ? 'bg-primary_blue focus:outline-none focus-visible:ring-2 hover:bg-blue-700 text-white' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                                                    disabled={rate !== 'early' || (isOOS && !membershipValid)}
                                                    onClick={() => openModal(getPrice(rate))}
                                                >
                                                    {(isOOS && !membershipValid) ? 'Validate your membership' : " Register Now"}

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
                                                    <svg className="w-3 h-3 flex-shrink-0 fill-ccurrentColortext-green-500 mr-2" viewBox="0 0 12 12">
                                                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                                                    </svg>
                                                    <div className="text-sm">Access to Session Halls</div>
                                                </li>
                                                <li className="flex items-center py-1">
                                                    <svg className="w-3 h-3 flex-shrink-0 fill-ccurrentColortext-green-500 mr-2" viewBox="0 0 12 12">
                                                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                                                    </svg>
                                                    <div className="text-sm">Access to Exhibition Halls</div>
                                                </li>
                                                <li className="flex items-center py-1">
                                                    <svg className="w-3 h-3 flex-shrink-0 fill-ccurrentColortext-green-500 mr-2" viewBox="0 0 12 12">
                                                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                                                    </svg>
                                                    <div className="text-sm">Final Program</div>
                                                </li>
                                                <li className="flex items-center py-1">
                                                    <svg className="w-3 h-3 flex-shrink-0 fill-ccurrentColortext-green-500 mr-2" viewBox="0 0 12 12">
                                                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                                                    </svg>
                                                    <div className="text-sm">Lunch</div>
                                                </li>
                                                <li className="flex items-center py-1">
                                                    <svg className="w-3 h-3 flex-shrink-0 fill-ccurrentColortext-green-500 mr-2" viewBox="0 0 12 12">
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
                        {/* cards end here */}
                    </div>
                </div>
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
                                <button
                                    type="button"
                                    className={`mt-4 py-2 px-4 rounded-lg ${validateStep() ? 'bg-primary_blue text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                                    onClick={nextStep}
                                    disabled={!validateStep()}
                                >
                                    Next
                                </button>
                            </div>
                        )}
                        {step === 2 && (
                            <>
                                <div className="mb-4">
                                    <label htmlFor="oosMembership" className="block text-gray-700 mb-2">Are you OOS Member?</label>
                                    <select
                                        id="oosMembership"
                                        name="oosMembership"
                                        value={hasoosMembership ? 'yes' : 'no'}
                                        onChange={handleoosMembershipChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    >
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                    </select>
                                </div>
                                {hasoosMembership && (
                                    <div className="mb-4">
                                        <label htmlFor="oosMembershipInput" className="block text-gray-700 mb-2">Enter Redeem Code</label>
                                        <input
                                            type="text"
                                            id="oosMembershipInput"
                                            name="oosMembershipInput"
                                            value={oosMembership}
                                            onChange={(e) => setoosMembership(e.target.value)}
                                            className="w-full p-2 border rounded"
                                            required
                                        />
                                    </div>
                                )}
                                <div className="flex justify-between">
                                    <button type="button" className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700" onClick={prevStep}>Back</button>
                                    <button
                                        type="button"
                                        className={`py-2 px-4 rounded-lg ${validateStep() ? 'bg-primary_blue text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                                        onClick={nextStep}
                                        disabled={!validateStep()}
                                    >
                                        Next
                                    </button>
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
                                    {/* <input
                                        type="text"
                                        id="mobile"
                                        name="mobile"
                                        value={personalInfo.mobile}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    /> */}
                                    <PhoneInput
                                        country={'om'}
                                        id='mobile'
                                        name='mobile'
                                        value={personalInfo.mobile}
                                        onChange={handlePhoneChange}
                                        inputProps={{
                                            name: 'mobile',
                                            required: true,
                                            className: 'w-full rounded-lg border py-2 pl-14 dark:bg-gray-700 dark:text-white dark:border-none',
                                        }}
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <button type="button" className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700" onClick={prevStep}>Back</button>
                                    <button
                                        type="button"
                                        className={`py-2 px-4 rounded-lg ${validateStep() ? 'bg-primary_blue text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                                        onClick={nextStep}
                                        disabled={!validateStep()}
                                    >
                                        Next
                                    </button>
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
                                    <button type="submit" className="bg-primary_blue text-white py-2 px-4 rounded-lg hover:bg-blue-700">Continue to Checkout</button>
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
        </section>
    );
};

export default PricingTable;
