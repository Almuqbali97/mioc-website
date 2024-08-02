import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { countries } from '../../constants';
import PhoneInput from 'react-phone-input-2';
import WifiLoader from './WifiLoader';

const hospitals = [
    "Al Buraimi Hospital", "Al Masarra Hospital", "Al Nahdha Hospital", "Directorate General of Khoula Hospital", "Ibra Hospital", "Ibri Hospital",
    "Nizwa Hospital", "Royal Hospital", "Rustaq Hospital", "Sohar Hospital", "Sultan Qaboos Hospital", "Arab Specialized Hospital",
    "International Eye Center", "Gulf Specialized Hospital", "Muscat Laser Eye Treatment Center", "Noor Iranian Medical Complex",
    "Finnish Eye Center", "German Eye Center", "Apex Eye Centre", "Sanaa Center"
];

const OosPricingTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [nationality, setNationality] = useState('');
    const [isNewMember, setIsNewMember] = useState(null);
    const [memebershipValidationErrMsg, SetMemebershipValidationErrMsg] = useState(null);
    const [memebershipDetails, setMembershipDetails] = useState('');
    const [membershipBeingValidated, setMembershipNumberBeingValidated] = useState(false);
    const [membershipValid, setMembershipValid] = useState(null);
    const [personalInfo, setPersonalInfo] = useState({ firstName: '', lastName: '', email: '', mobile: '' });
    const [addressInfo, setAddressInfo] = useState({ address: '', postal: '', city: '' });
    const [workInfo, setWorkInfo] = useState({ workingPlace: '', profession: '' });
    const [otherWorkPlace, setOtherWorkPlace] = useState('');
    const [otherProfession, setOtherProfession] = useState('');
    const [selectedPrice, setSelectedPrice] = useState(0);
    const [membershipType, setMembershipType] = useState('');

    const navigate = useNavigate();

    const openModal = (price, type) => {
        setSelectedPrice(price);
        setMembershipType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setStep(1);
        setSelectedCountry('');
        setNationality('');
        setPersonalInfo({ firstName: '', lastName: '', email: '', mobile: '' });
        setAddressInfo({ address: '', postal: '', city: '' });
        setWorkInfo({ workingPlace: '', profession: '' });
        setOtherWorkPlace('');
        setOtherProfession('');
        setMembershipType('');
    };

    const handlePhoneChange = (value) => {
        setPersonalInfo({ ...personalInfo, mobile: value });
    };

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    const handleNationalityChange = (e) => {
        setNationality(e.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo({ ...personalInfo, [name]: value });
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setAddressInfo({ ...addressInfo, [name]: value });
    };

    const handleWorkChange = (e) => {
        const { name, value } = e.target;
        setWorkInfo({ ...workInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/oos-membership/checkout', {
            state: {
                selectedCountry,
                nationality,
                personalInfo,
                addressInfo,
                workInfo,
                otherWorkPlace,
                otherProfession,
                selectedPrice,
                membershipType
            }
        });
        closeModal();
    };

    const validateStep = () => {
        switch (step) {
            case 1:
                return selectedCountry !== '' && nationality !== '';
            case 2:
                return personalInfo.firstName !== '' && personalInfo.lastName !== '' && personalInfo.email !== '' && personalInfo.mobile !== '';
            case 3:
                return workInfo.workingPlace !== '' && workInfo.profession !== '';
            case 4:
                return addressInfo.address !== '' && addressInfo.postal !== '' && addressInfo.city !== '';
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

    const validateMembershipNumber = async (number) => {
        setMembershipNumberBeingValidated(true);
        const oosNumber = (number).toUpperCase();
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/get/membership/${oosNumber}`);
            const membership = await response.json();

            if (response.ok && membership) {
                setTimeout(() => {
                    SetMemebershipValidationErrMsg(null);
                    setMembershipDetails(membership);
                    setMembershipValid(true);
                }, 2800);
            } else {
                SetMemebershipValidationErrMsg(membership.message);
                setMembershipValid(false);
            }
        } catch (error) {
            console.error('Error validating membership:', error);
            setMembershipValid(false);
        }
        setTimeout(() => {
            setMembershipNumberBeingValidated(false);
        }, 2800);
    };

    const [membershipNumber, setMembershipNumber] = useState('');
    const handleMembershipNumberChange = (e) => {
        const number = e.target.value;
        setMembershipNumber(number);
    };

    const handleConfirmRenewal = (editableDetails) => {
        const {
            fullName,
            email,
            contactNumber,
            profession,
            residence,
            nationality,
            workingPlace,
            membershipType,
            price,
            address,
            postal,
            city,
        } = editableDetails;
        const nameParts = fullName.trim().split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(' ');

        navigate('/oos-membership/checkout', {
            state: {
                selectedCountry: residence,
                nationality,
                personalInfo: {
                    firstName,
                    lastName,
                    email,
                    mobile: contactNumber
                },
                addressInfo: {
                    address: address || '',
                    postal: postal || '',
                    city: city || ''
                },
                workInfo: {
                    workingPlace,
                    profession
                },
                otherWorkPlace: workingPlace === 'Other' ? '' : '',
                otherProfession: profession === 'Other' ? '' : '',
                selectedPrice: price,
                membershipType: membershipType,
                isRenewal: true,
                membership_id: memebershipDetails.membership_id
            }
        });
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
        <section className="flex flex-col justify-center antialiased text-gray-600 p-4 mb-20">
            <div className="h-full">
                <div className='flex justify-center mb-5'>
                    <div className="flex text items-center border-l-8 border-gray-500 bg-green-100 p-2 font-semibold text-emerald-900 shadow-lg relative">
                        <div className="min-w-0">
                            <h2 className="text-ellipsis whitespace-nowrap">Are you a new or an existing member?
                                <span className='ml-3'>
                                    <div className="tooltip">
                                        <div className="icon">i</div>
                                        <div className="tooltiptext">If you have OOS<br /> Membership You can <br />  renew it.</div>
                                    </div>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="radio-inputs">
                        <label className='flex w-32 flex-col items-center space-y-2'>
                            <input
                                className="radio-input"
                                type="radio"
                                name="renew-oos"
                                checked={isNewMember === false}
                                onChange={() => setIsNewMember(false)}
                            />
                            <span className="radio-tile">
                                <span className="radio-icon relative">
                                    <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#c20000" d="M22,29c-1.657,0-3,1.343-3,3v2c0,1.657,1.343,3,3,3s3-1.343,3-3v-2C25,30.343,23.657,29,22,29z"></path> <path fill="#c20000" d="M22,23c-6.627,0-12,5.373-12,12c0,3.072,1.165,5.867,3.064,7.989C14.343,41.326,17.014,39,22,39 c-2.762,0-5-2.238-5-5v-2c0-2.762,2.238-5,5-5s5,2.238,5,5v2c0,2.762-2.238,5-5,5c4.986,0,7.657,2.326,8.936,3.989 C32.835,40.867,34,38.072,34,35C34,28.373,28.627,23,22,23z"></path> <path fill="#c20000" d="M22,41c-4.361,0-6.543,2.08-7.479,3.374C16.572,46.014,19.169,47,22,47s5.428-0.986,7.48-2.626 C28.545,43.082,26.363,41,22,41z"></path> <path fill="#c20000" d="M60,11h-8V6c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5H20V6c0-0.553-0.447-1-1-1h-6 c-0.553,0-1,0.447-1,1v5H4c-2.211,0-4,1.789-4,4v40c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V15C64,12.789,62.211,11,60,11z M46,7h4v8h-4V7z M41,25h6c0.553,0,1,0.447,1,1s-0.447,1-1,1h-6c-0.553,0-1-0.447-1-1S40.447,25,41,25z M14,7h4v8h-4V7z M22,49 c-7.731,0-14-6.269-14-14s6.269-14,14-14s14,6.269,14,14S29.731,49,22,49z M55,45H41c-0.553,0-1-0.447-1-1s0.447-1,1-1h14 c0.553,0,1,0.447,1,1S55.553,45,55,45z M40,38c0-0.553,0.447-1,1-1h10c0.553,0,1,0.447,1,1s-0.447,1-1,1H41 C40.447,39,40,38.553,40,38z M55,33H41c-0.553,0-1-0.447-1-1s0.447-1,1-1h14c0.553,0,1,0.447,1,1S55.553,33,55,33z"></path> </g> </g></svg>
                                </span>
                            </span>
                            <span className="radio-label font-bold">Get A new Membership</span>
                        </label>

                        <label className='flex w-32 flex-col items-center space-y-2 ml-0'>
                            <input
                                className="radio-input"
                                type="radio"
                                name="new-oos"
                                checked={isNewMember === true}
                                onChange={() => setIsNewMember(true)}
                            />
                            <span className="radio-tile">
                                <span className="radio-icon">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.18182 12.0909C8.18182 9.98455 9.89364 8.27273 12 8.27273C12.6427 8.27273 13.2536 8.43182 13.7818 8.71818L14.7109 7.78909C13.9282 7.29273 12.9991 7 12 7C9.18727 7 6.90909 9.27818 6.90909 12.0909H5L7.54545 14.6364L10.0909 12.0909H8.18182ZM16.4545 9.54545L13.9091 12.0909H15.8182C15.8182 14.1973 14.1064 15.9091 12 15.9091C11.3573 15.9091 10.7464 15.75 10.2182 15.4636L9.28909 16.3927C10.0718 16.8891 11.0009 17.1818 12 17.1818C14.8127 17.1818 17.0909 14.9036 17.0909 12.0909H19L16.4545 9.54545Z" fill="#0B9100"></path> </g></svg>
                                </span>
                            </span>
                            <span className="radio-label font-bold">Renew existing memebership</span>
                        </label>
                    </div>
                </div>

                {isNewMember && !membershipValid ?
                    <div className='flex justify-center flex-col items-center space-y-7'>
                        {!membershipBeingValidated ? (
                            <>
                                <input
                                    className="validateInput mt-5"
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
                                        <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
                                    </svg>
                                </button>
                                <p className='text-red-400'>{memebershipValidationErrMsg}</p>
                            </>
                        ) : (
                            <WifiLoader />
                        )}
                    </div> : ''
                }
                {(membershipValid && isNewMember) && <MemberProfile membershipDetails={memebershipDetails} onConfirm={handleConfirmRenewal} />}
                {!isNewMember &&
                    <div className="max-w-5xl mx-auto">
                        {(isNewMember === false) && <>     <h2 className="text-3xl text-gray-800 font-bold text-center m-7">OOS Membership Fees</h2>
                            <div className="flex justify-center">
                                <div className="flex flex-col md:flex-row items-center justify-center space-x-0 space-y-7 md:space-y-0 md:space-x-7">
                                    {[
                                        { title: 'Ophthalmologist', price: 26.25, type: 'Ophthalmologist' },
                                        { title: 'Non-Ophthalmologist', price: 15, type: 'Non-Ophthalmologist', descrition: 'Residents, optometrist, ophthalmic technician, orthoptist, Students' },
                                    ].map((card) => (
                                        <div key={card.title} className="relative max-w-[350px] bg-white shadow-2xl rounded-sm border border-gray-200">
                                            <span className="hidden md:block absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#D32A18] to-black"></span>
                                            <span className="md:hidden absolute inset-x-0 top-0 h-2 bg-gradient-to-r  from-[#D32A18] to-black"></span>
                                            <div className="px-5 pt-5 pb-6 border-b border-gray-200">
                                                <header className="flex items-center mb-2">
                                                    <div className="w-6 h-6 rounded-full flex-shrink-0 bg-gradient-to-tr from-green-700 to-green-300 mr-3">
                                                        <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                                                            <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                                                        </svg>
                                                    </div>
                                                    <h3 className="text-lg text-gray-800 font-semibold" title={card.title === 'Non-Ophthalmologist' && 'Residents, optometrist, ophthalmic technician, orthoptist'}>{card.title}</h3>
                                                </header>
                                                <p className=' font-light'>{card.title === 'Non-Ophthalmologist' && 'Residents, Optometrist, Ophthalmic technician, Orthoptist'}</p>
                                                <p className={` font-light my-2 ${card.title === 'Ophthalmologist' && 'my-5'}`}>{card.title === 'Ophthalmologist' && 'Ophthalmologist, Physician'}</p>
                                                <div className="text-gray-800 font-bold mb-4">
                                                    <span class="text-red-400 text-2xl line-through font-semibold ">{card.title === 'Ophthalmologist' ? '35/OMR' : '20 /OMR'}</span>
                                                    <br />
                                                    <span className="text-3xl">{card.price}</span>
                                                    <span className="text-gray-500 font-medium text-sm">/OMR</span>
                                                    <span className="text-green-400  text-sm italic"> 25% off</span>
                                                </div>
                                                <div className="relative group">
                                                    <button
                                                        className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-[#D32A18] text-white hover:bg-red-700"
                                                        onClick={() => openModal(card.price, card.type)}
                                                    >
                                                        Register Now
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="px-5 pt-4 pb-5">
                                                <div className="text-xs text-gray-800 font-semibold uppercase mb-4">What's included</div>
                                                <ul className='space-y-4'>
                                                    <li className="flex items-center py-1">
                                                        <svg className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                                                            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                                                        </svg>
                                                        <div className="text-sm">Online access to Oman Journal of Ophthalmology</div>
                                                    </li>
                                                    <li className="flex items-center py-1">
                                                        <svg className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                                                            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                                                        </svg>
                                                        <div className="text-sm">The right to participate in OOS board elections</div>
                                                    </li>
                                                    <li className="flex items-center py-1">
                                                        <svg className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                                                            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                                                        </svg>
                                                        <div className="text-sm">Professional development through conferences, workshops and annual OOS meetings</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div></>}
                    </div>}
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
                                <label htmlFor="country" className="block text-gray-700 mb-2">Country of residence</label>
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
                                <label htmlFor="nationality" className="block text-gray-700 mb-2 mt-4">Nationality</label>
                                <input
                                    type="text"
                                    id="nationality"
                                    name="nationality"
                                    value={nationality}
                                    onChange={handleNationalityChange}
                                    className="w-full p-2 border rounded"
                                    required
                                />
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
                        {step === 3 && (
                            <>
                                <div className="mb-4">
                                    <label htmlFor="workingPlace" className="block text-gray-700 mb-2">Working Place</label>
                                    <select
                                        id="workingPlace"
                                        name="workingPlace"
                                        value={workInfo.workingPlace}
                                        onChange={handleWorkChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    >
                                        <option value="">Select your working place</option>
                                        {hospitals.map((hospital, index) => {
                                            return <option key={index} value={`${hospital}`}>{hospital}</option>
                                        })}
                                        <option value="Other">Other (Specify)</option>
                                    </select>
                                    {workInfo.workingPlace === 'Other' && (
                                        <input
                                            type="text"
                                            id="otherWorkPlace"
                                            name="otherWorkPlace"
                                            value={otherWorkPlace}
                                            onChange={(e) => setOtherWorkPlace(e.target.value)}
                                            className="w-full p-2 border rounded mt-2"
                                            placeholder="Please specify"
                                        />
                                    )}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="profession" className="block text-gray-700 mb-2">Profession</label>
                                    <select
                                        id="profession"
                                        name="profession"
                                        value={workInfo.profession}
                                        onChange={handleWorkChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    >
                                        <option value="">Select your profession</option>
                                        <option value="Ophthalmologist">Ophthalmologist</option>
                                        <option value="Physician">Physician</option>
                                        <option value="Optometrist">Optometrist</option>
                                        <option value="Orthoptist">Orthoptist</option>
                                        <option value="Ocularist">Ocularist</option>
                                        <option value="Resident">Resident</option>
                                        <option value="Ophthalmic Nurse">Ophthalmic Nurse</option>
                                        <option value="General Nurse">General Nurse</option>
                                        <option value="Ophthalmic Assistant">Ophthalmic Assistant</option>
                                        <option value="Medical Assistant">Medical Assistant</option>
                                        <option value="Ophthalmic Technician">Ophthalmic Technician</option>
                                        <option value="Student">Student</option>
                                        <option value="Other">Other (Specify)</option>
                                    </select>
                                    {workInfo.profession === 'Other' && (
                                        <input
                                            type="text"
                                            id="otherProfession"
                                            name="otherProfession"
                                            value={otherProfession}
                                            onChange={(e) => setOtherProfession(e.target.value)}
                                            className="w-full p-2 border rounded mt-2"
                                            placeholder="Please specify"
                                        />
                                    )}
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
                                <label><strong>Billing Address</strong></label>
                                <div className="mb-4">
                                    <label htmlFor="address" className="block text-gray-700 mb-2">Address Line 1</label>
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
                                    <label htmlFor="postal" className="block text-gray-700 mb-2">Postal code</label>
                                    <input
                                        type="text"
                                        id="postal"
                                        name="postal"
                                        value={addressInfo.postal}
                                        onChange={handleAddressChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="billingAddress" className="block text-gray-700 mb-2">City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={addressInfo.city}
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




function MemberProfile({ membershipDetails, onConfirm }) {
    const [step, setStep] = useState(1);
    const [editableDetails, setEditableDetails] = useState({
        fullName: membershipDetails.fullName,
        email: membershipDetails.email,
        contactNumber: membershipDetails.contactNumber,
        profession: membershipDetails.designation,
        residence: membershipDetails.country,
        nationality: membershipDetails.nationality,
        workingPlace: membershipDetails.workingPlace,
        // membershipType: '',
        // price: 0,
        // address: '',
        // postal: '',
        // city: ''
    });

    const [editableFields, setEditableFields] = useState({
        fullName: false,
        email: false,
        contactNumber: false,
        profession: false,
        residence: false,
        nationality: false,
        workingPlace: false,
    });

    const handleChange = (field, value) => {
        setEditableDetails(prev => ({ ...prev, [field]: value }));
    };

    const handleEdit = (field) => {
        setEditableFields(prev => ({ ...prev, [field]: !prev[field] }));
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleMembershipTypeChange = (e) => {
        const { value } = e.target;
        const price = value === 'Ophthalmologist' ? 26.25 : 15;
        setEditableDetails(prev => ({ ...prev, membershipType: value, price }));
    };

    return (
        <div className='flex justify-center mt-5'>
            <div className='w-[30rem] border rounded-lg shadow-lg'>
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Membership Details
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Edit the fields and confirm to renew your membership.
                    </p>
                </div>
                {step === 1 && (
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-[0.90rem] sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Membership ID
                                </dt>
                                <dd className="sm:ml-5 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {membershipDetails.membership_id}
                                </dd>
                            </div>
                            {Object.entries(editableDetails).map(([key, value]) => (
                                <div key={key} className="py-[0.90rem] sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    {/* {(key !=''|| ||) <></>} */}
                                    <dt className="text-sm font-medium text-gray-500 flex items-center">
                                        {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                                    </dt>
                                    <dd className="sm:ml-5 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {editableFields[key] ? (
                                            <input
                                                type="text"
                                                value={value}
                                                onChange={(e) => handleChange(key, e.target.value)}
                                                className="w-[83%] p-2 border rounded"
                                            />
                                        ) : (
                                            value
                                        )}
                                        <button
                                            onClick={() => handleEdit(key)}
                                            className="ml-5 text-blue-500 hover:text-blue-700"
                                        >
                                            Edit
                                        </button>
                                    </dd>
                                </div>
                            ))}
                            <div className="py-[0.90rem] sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Expiration Date
                                </dt>
                                <dd className="sm:ml-5 mt-1 text-sm text-red-500 sm:mt-0 sm:col-span-2">
                                    {membershipDetails.expirationDate}
                                </dd>
                            </div>
                            <div className="py-[0.90rem] sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Paid Price
                                </dt>
                                <dd className="sm:ml-5 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {membershipDetails.amount} OMR <span className='font-thin'>will be <strong>25% off</strong></span>
                                </dd>
                            </div>
                        </dl>
                        <button
                            onClick={nextStep}
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
                        >
                            Confirm Renewal
                        </button>
                    </div>
                )}
                {step === 2 && (
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Select Membership Type
                        </h3>
                        <div className="mt-4">
                            <label className="block text-gray-700">Membership Type</label>
                            <select
                                value={editableDetails.membershipType}
                                onChange={handleMembershipTypeChange}
                                className="w-full p-2 border rounded"
                                required
                            >
                                <option value="">Select type</option>
                                <option value="Ophthalmologist">Ophthalmologist</option>
                                <option value="Non-Ophthalmologist">Non-Ophthalmologist</option>
                            </select>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={prevStep}
                                className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
                            >
                                Back
                            </button>
                            <button
                                onClick={nextStep}
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
                {step === 3 && (
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Billing Address
                        </h3>
                        <div className="mb-4">
                            <label htmlFor="address" className="block text-gray-700 mb-2">Address Line 1</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={editableDetails.address}
                                onChange={(e) => handleChange('address', e.target.value)}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="postal" className="block text-gray-700 mb-2">Postal code</label>
                            <input
                                type="text"
                                id="postal"
                                name="postal"
                                value={editableDetails.postal}
                                onChange={(e) => handleChange('postal', e.target.value)}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="city" className="block text-gray-700 mb-2">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={editableDetails.city}
                                onChange={(e) => handleChange('city', e.target.value)}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="flex justify-between">
                            <button
                                onClick={prevStep}
                                className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
                            >
                                Back
                            </button>
                            <button
                                onClick={() => onConfirm(editableDetails)}
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                            >
                                Continue to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}





export default OosPricingTable;
