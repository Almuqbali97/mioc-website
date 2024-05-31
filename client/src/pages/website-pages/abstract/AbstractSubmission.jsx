import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Loading2 from '../../../components/common/Loading2';
import { countries } from '../../../constants';
import { topics } from '../../../constants';

const presentationType = ['Oral presentation', 'Poster', 'Video'];


const AbstractSubmission = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [loading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [currentStep, setCurrentStep] = useState(1);
    const [errors, setErrors] = useState({});
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        mobile: user.mobile || '',
        title: '',
        mainAuthorFirstName: '',
        mainAuthorLastName: '',
        mainAuthorEmail: '',
        mainAuthorOrganization: '',
        mainAuthorCountry: '',
        topic: '',
        presentationType: '',
        researchType: '',
        file: null,
        fileName: '',
        additionalAuthors: [],
        objective: '',
        methods: '',
        results: '',
        conclusions: '',
        description: ''
    });

    const [charCount, setCharCount] = useState({
        objective: 0,
        methods: 0,
        results: 0,
        conclusions: 0,
        description: 0
    });

    const handleChange = async (e) => {
        const { name, value, files } = e.target;
        setErrors({ ...errors, [name]: '' });

        if (name === 'fileInput') {
            const file = files[0];
            let newErrors = { ...errors };

            if (file && file.type !== 'video/mp4') {
                newErrors.file = 'Only MP4 videos are allowed';
                setFormData({
                    ...formData,
                    file: null,
                    fileName: ''
                });
            } else {
                const videoDuration = await getVideoDuration(file);
                if (videoDuration > 330) { // 5 minutes and 30 seconds
                    newErrors.file = 'Video duration cannot exceed 5 minutes and 30 seconds';
                    setFormData({
                        ...formData,
                        file: null,
                        fileName: ''
                    });
                } else {
                    newErrors.file = '';
                    setFormData({
                        ...formData,
                        file,
                        fileName: file.name
                    });
                }
            }

            setErrors(newErrors);
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
            if (name in charCount) {
                setCharCount({ ...charCount, [name]: value.length });
            }
        }
    };

    const getVideoDuration = (file) => {
        return new Promise((resolve) => {
            const video = document.createElement('video');
            video.preload = 'metadata';

            video.onloadedmetadata = () => {
                window.URL.revokeObjectURL(video.src);
                resolve(video.duration);
            };

            video.src = URL.createObjectURL(file);
        });
    };


    const handlePhoneChange = (value) => {
        setFormData({
            ...formData,
            mobile: value
        });
        setErrors({ ...errors, mobile: '' });
    };

    const handleAddAuthor = () => {
        setFormData({
            ...formData,
            additionalAuthors: [...formData.additionalAuthors, { firstName: '', lastName: '', email: '', organization: '', country: '' }]
        });
    };

    const handleRemoveAuthor = (index) => {
        const newAuthors = formData.additionalAuthors.slice();
        newAuthors.splice(index, 1);
        setFormData({
            ...formData,
            additionalAuthors: newAuthors
        });
    };

    const handleAuthorChange = (index, field, value) => {
        const newAuthors = formData.additionalAuthors.slice();
        newAuthors[index][field] = value;
        setFormData({
            ...formData,
            additionalAuthors: newAuthors
        });
        setErrors({ ...errors, [`additionalAuthors[${index}][${field}]`]: '' });
    };

    const handleNextStep = () => {
        if (validateStep()) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePreviousStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const validateStep = () => {
        let newErrors = {};
        if (currentStep === 1) {
            if (!formData.firstName) newErrors.firstName = 'First Name is required';
            if (!formData.lastName) newErrors.lastName = 'Last Name is required';
            if (!formData.email) newErrors.email = 'Email is required';
            if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
        } else if (currentStep === 2) {
            if (!formData.mainAuthorFirstName) newErrors.mainAuthorFirstName = 'Main Author First Name is required';
            if (!formData.mainAuthorLastName) newErrors.mainAuthorLastName = 'Main Author Last Name is required';
            if (!formData.mainAuthorEmail) newErrors.mainAuthorEmail = 'Main Author Email is required';
            if (!formData.mainAuthorOrganization) newErrors.mainAuthorOrganization = 'Main Author Organization is required';
            if (!formData.mainAuthorCountry) newErrors.mainAuthorCountry = 'Main Author Country is required';
            formData.additionalAuthors.forEach((author, index) => {
                if (!author.firstName) newErrors[`additionalAuthors[${index}][firstName]`] = 'First Name is required';
                if (!author.lastName) newErrors[`additionalAuthors[${index}][lastName]`] = 'Last Name is required';
                if (!author.email) newErrors[`additionalAuthors[${index}][email]`] = 'Email is required';
                if (!author.organization) newErrors[`additionalAuthors[${index}][organization]`] = 'Organization is required';
                if (!author.country) newErrors[`additionalAuthors[${index}][country]`] = 'Country is required';
            });
        } else if (currentStep === 3) {
            if (!formData.title) newErrors.title = 'Abstract Title is required';
            if (!formData.topic) newErrors.topic = 'Topic is required';
            if (!formData.presentationType) newErrors.presentationType = 'Presentation Type is required';
            if (formData.presentationType === 'Oral presentation' || formData.presentationType === 'Poster') {
                if (!formData.researchType) newErrors.researchType = 'Research Type is required';
                if (formData.researchType === 'Original Research') {
                    if (!formData.objective) newErrors.objective = 'Objective is required';
                    if (!formData.methods) newErrors.methods = 'Methods are required';
                    if (!formData.results) newErrors.results = 'Results are required';
                    if (!formData.conclusions) newErrors.conclusions = 'Conclusions are required';
                } else if (formData.researchType === 'Case Presentation') {
                    if (!formData.description) newErrors.description = 'Description is required';
                }
            } else if (formData.presentationType === 'Video') {
                if (!formData.description) newErrors.description = 'Description is required';
                if (!formData.file) newErrors.file = 'Video file is required';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateStep()) return;
        setIsLoading(true);

        const data = new FormData();
        data.append('firstName', formData.firstName);
        data.append('lastName', formData.lastName);
        data.append('email', formData.email);
        data.append('mobile', formData.mobile);
        data.append('title', formData.title);
        data.append('mainAuthorFirstName', formData.mainAuthorFirstName);
        data.append('mainAuthorLastName', formData.mainAuthorLastName);
        data.append('mainAuthorEmail', formData.mainAuthorEmail);
        data.append('mainAuthorOrganization', formData.mainAuthorOrganization);
        data.append('mainAuthorCountry', formData.mainAuthorCountry);
        data.append('topic', formData.topic);
        data.append('presentationType', formData.presentationType);
        data.append('researchType', formData.researchType);
        if (formData.researchType === 'Original Research') {
            data.append('objective', formData.objective);
            data.append('methods', formData.methods);
            data.append('results', formData.results);
            data.append('conclusions', formData.conclusions);
        } else if (formData.researchType === 'Case Presentation' || formData.presentationType === 'Video') {
            data.append('description', formData.description);
        }
        if (formData.presentationType === 'Video') {
            data.append('file', formData.file);
        }
        data.append('additionalAuthors', JSON.stringify(formData.additionalAuthors));

        const url = formData.presentationType === 'Video'
            ? `${import.meta.env.VITE_API_URL}/abstract/submit/video`
            : `${import.meta.env.VITE_API_URL}/abstract/submit`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                credentials: 'include',
                body: data,
            });

            const result = await response.json();
            setIsLoading(false);
            if (response.ok) {
                setSuccessMessage(result.message);
                setFormData({
                    firstName: user.firstName || '',
                    lastName: user.lastName || '',
                    email: user.email || '',
                    mobile: user.mobile || '',
                    title: '',
                    mainAuthorFirstName: '',
                    mainAuthorLastName: '',
                    mainAuthorEmail: '',
                    mainAuthorOrganization: '',
                    mainAuthorCountry: '',
                    topic: '',
                    presentationType: '',
                    researchType: '',
                    file: null,
                    fileName: '',
                    additionalAuthors: [],
                    objective: '',
                    methods: '',
                    results: '',
                    conclusions: '',
                    description: ''
                })
                window.scrollTo(0, 0);
                // setTimeout(() => {
                //     navigate('/');
                // }, 6500);
            } else {
                setSuccessMessage('');
                setErrors({ ...errors, server: result.message || 'Failed to submit abstract' });
            }
        } catch (error) {
            setIsLoading(false);
            setErrors({ ...errors, server: 'Failed to submit abstract' });
            console.error('Error:', error);
        }
    };

    return (
        <section>
            <div className="w-full max-w-5xl mx-auto -mb-16">
                {currentStep === 1 && <div className="p-4 space-y-2">
                    <h3 className="text-base font-semibold">Step 1: Personal Info</h3>
                    <div className="flex max-w-xs space-x-3">
                        <span className="w-12 h-2 rounded-full bg-gray-800 animate-pulse"></span>
                        <span className="w-12 h-2 rounded-full bg-gray-400"></span>
                        <span className="w-12 h-2 rounded-full bg-gray-400"></span>
                    </div>
                </div>}
                {currentStep === 2 && <div className="p-4 space-y-2">
                    <h3 className="text-base font-semibold">Step 2: Authors Info</h3>
                    <div className="flex max-w-xs space-x-3">
                        <span className="w-12 h-2 rounded-full bg-primary_blue"></span>
                        <span className="w-12 h-2 rounded-full bg-gray-800 animate-pulse"></span>
                        <span className="w-12 h-2 rounded-full bg-gray-400"></span>
                    </div>
                </div>}
                {currentStep === 3 && <div className="p-4 space-y-2">
                    <h3 className="text-base font-semibold">Step 3: Abstract Info</h3>
                    <div className="flex max-w-xs space-x-3">
                        <span className="w-12 h-2 rounded-full bg-primary_blue"></span>
                        <span className="w-12 h-2 rounded-full bg-primary_blue"></span>
                        <span className="w-12 h-2 rounded-full bg-gray-800 animate-pulse"></span>
                    </div>
                </div>}
            </div>

            <div className="w-full max-w-5xl mx-auto shadow-2xl my-16">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Abstract Submission</h1>

                    <form className="mb-2" onSubmit={handleSubmit}>
                        {currentStep === 1 && (
                            <>
                                <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Submitter Personal Information</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-gray-700 dark:text-white my-2">First Name *</label>
                                        <input onChange={handleChange} value={formData.firstName}
                                            type="text" id="firstName" name='firstName' className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required />
                                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-gray-700 dark:text-white my-2">Last Name *</label>
                                        <input onChange={handleChange} value={formData.lastName}
                                            type="text" id="lastName" name='lastName' className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required />
                                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="email" className="block text-gray-700 dark:text-white my-2">Email *</label>
                                    <input onChange={handleChange} value={formData.email}
                                        type="text" id="email" name='email' className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="mobile" className="block text-gray-700 dark:text-white my-2">Mobile No: *</label>
                                    <PhoneInput
                                        country={'om'}
                                        value={formData.mobile}
                                        onChange={handlePhoneChange}
                                        inputProps={{
                                            name: 'mobile',
                                            required: true,
                                            className: 'w-full rounded-lg border py-2 pl-14 dark:bg-gray-700 dark:text-white dark:border-none',
                                        }}
                                    />
                                    {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <button
                                        disabled={currentStep === 1}
                                        type="button"
                                        onClick={handlePreviousStep}
                                        className={`px-6 py-2 text-white rounded-md focus:outline-none ${currentStep === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-600 hover:bg-gray-700 focus:bg-gray-700'
                                            }`}
                                    >
                                        Previous
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleNextStep}
                                        className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                                    >
                                        Next
                                    </button>
                                </div>
                            </>
                        )}
                        {currentStep === 2 && (
                            <>
                                <h2 className="text-xl font-semibold text-gray-700 dark:text-white my-2">Author(s) Information</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="mainAuthorFirstName" className="block text-gray-700 dark:text-white my-2">Main Author First Name *</label>
                                        <input onChange={handleChange} value={formData.mainAuthorFirstName}
                                            type="text" id="mainAuthorFirstName" name='mainAuthorFirstName' className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required />
                                        {errors.mainAuthorFirstName && <p className="text-red-500 text-sm">{errors.mainAuthorFirstName}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="mainAuthorLastName" className="block text-gray-700 dark:text-white my-2">Main Author Last Name *</label>
                                        <input onChange={handleChange} value={formData.mainAuthorLastName}
                                            type="text" id="mainAuthorLastName" name='mainAuthorLastName' className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required />
                                        {errors.mainAuthorLastName && <p className="text-red-500 text-sm">{errors.mainAuthorLastName}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="mainAuthorEmail" className="block text-gray-700 dark:text-white my-2">Email *</label>
                                        <input onChange={handleChange} value={formData.mainAuthorEmail}
                                            type="text" id="mainAuthorEmail" name='mainAuthorEmail' className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required />
                                        {errors.mainAuthorEmail && <p className="text-red-500 text-sm">{errors.mainAuthorEmail}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="mainAuthorCountry" className="block text-gray-700 dark:text-white my-2">Country of Residence *</label>
                                        <select
                                            onChange={handleChange}
                                            required
                                            value={formData.mainAuthorCountry}
                                            name='mainAuthorCountry' id="mainAuthorCountry" className="bg-gray-50 border border-gray-300 text-gray-900 mb-3 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-none dark:text-white">
                                            <option defaultValue>Select country</option>
                                            {countries.map(country => <option key={country} value={country}>{country}</option>)}
                                        </select>
                                        {errors.mainAuthorCountry && <p className="text-red-500 text-sm">{errors.mainAuthorCountry}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="mainAuthorOrganization" className="block text-gray-700 dark:text-white my-2">Organization *</label>
                                        <input onChange={handleChange} value={formData.mainAuthorOrganization}
                                            type="text" id="mainAuthorOrganization" name='mainAuthorOrganization' className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required />
                                        {errors.mainAuthorOrganization && <p className="text-red-500 text-sm">{errors.mainAuthorOrganization}</p>}
                                    </div>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-700 dark:text-white mt-4 mb-2">Additional Authors</h2>
                                {formData.additionalAuthors.map((author, index) => (
                                    <>
                                        <div key={index} className="grid sm:grid-cols-2 gap-4 mb-2">
                                            <input
                                                type="text"
                                                value={author.firstName}
                                                onChange={(e) => handleAuthorChange(index, 'firstName', e.target.value)}
                                                placeholder="First Name"
                                                className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                                                required
                                            />
                                            <input
                                                type="text"
                                                value={author.lastName}
                                                onChange={(e) => handleAuthorChange(index, 'lastName', e.target.value)}
                                                placeholder="Last Name"
                                                className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                                                required
                                            />
                                            <input
                                                type="email"
                                                value={author.email}
                                                onChange={(e) => handleAuthorChange(index, 'email', e.target.value)}
                                                placeholder="Email"
                                                className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                                                required
                                            />
                                            <input
                                                type="text"
                                                value={author.organization}
                                                onChange={(e) => handleAuthorChange(index, 'organization', e.target.value)}
                                                placeholder="Organization"
                                                className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                                                required
                                            />
                                            <select
                                                onChange={(e) => handleAuthorChange(index, 'country', e.target.value)}
                                                required
                                                value={author.country}
                                                className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                                            >
                                                <option defaultValue>Select country</option>
                                                {countries.map(country => <option key={country} value={country}>{country}</option>)}
                                            </select>
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveAuthor(index)}
                                                className="px-4 py-2 text-red-600 border border-red-600 rounded-md hover:bg-red-600 hover:text-white transition duration-300"
                                            >
                                                Remove author
                                            </button>
                                            {errors[`additionalAuthors[${index}][firstName]`] && <p className="text-red-500 text-sm col-span-6">{errors[`additionalAuthors[${index}][firstName]`]}</p>}
                                            {errors[`additionalAuthors[${index}][lastName]`] && <p className="text-red-500 text-sm col-span-6">{errors[`additionalAuthors[${index}][lastName]`]}</p>}
                                            {errors[`additionalAuthors[${index}][email]`] && <p className="text-red-500 text-sm col-span-6">{errors[`additionalAuthors[${index}][email]`]}</p>}
                                            {errors[`additionalAuthors[${index}][organization]`] && <p className="text-red-500 text-sm col-span-6">{errors[`additionalAuthors[${index}][organization]`]}</p>}
                                            {errors[`additionalAuthors[${index}][country]`] && <p className="text-red-500 text-sm col-span-6">{errors[`additionalAuthors[${index}][country]`]}</p>}
                                        </div>
                                        <hr className='my-9' />
                                    </>
                                ))}
                                <button
                                    type="button"
                                    onClick={handleAddAuthor}
                                    className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
                                >
                                    Add another author
                                </button>
                                <div className="mt-4 flex justify-between">
                                    <button
                                        type="button"
                                        onClick={handlePreviousStep}
                                        className="px-6 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleNextStep}
                                        className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                                    >
                                        Next
                                    </button>
                                </div>
                            </>
                        )}
                        {currentStep === 3 && (
                            <>
                                <h2 className="text-xl font-semibold text-gray-700 dark:text-white my-2">Add Abstract Information</h2>
                                <div>
                                    <label htmlFor="title" className="block text-gray-700 dark:text-white my-2">Abstract Title *</label>
                                    <input onChange={handleChange} value={formData.title}
                                        type="text" id="title" name='title' className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required />
                                    {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                                </div>
                                <label htmlFor="topic" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Select Your Topic *</label>
                                <select
                                    onChange={handleChange}
                                    required
                                    value={formData.topic}
                                    name='topic' id="topic" className="bg-gray-50 border border-gray-300 text-gray-900 mb-3 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-none dark:text-white">
                                    <option defaultValue>Select topic</option>
                                    {topics.map(topic => <option key={topic} value={topic}>{topic}</option>)}
                                </select>
                                {errors.topic && <p className="text-red-500 text-sm">{errors.topic}</p>}
                                <label htmlFor="presentationType" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Select Your Presentation Type *</label>
                                <select
                                    onChange={handleChange}
                                    required
                                    value={formData.presentationType}
                                    name='presentationType' id="presentationType" className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-none dark:text-white">
                                    <option defaultValue>Select type</option>
                                    {presentationType.map(type => <option key={type} value={type}>{type}</option>)}
                                </select>
                                {errors.presentationType && <p className="text-red-500 text-sm">{errors.presentationType}</p>}
                                {formData.presentationType === 'Oral presentation' || formData.presentationType === 'Poster' ? (
                                    <>
                                        {formData.presentationType === 'Poster' && <button className='border-2 rounded-lg border-blue-500  p-2'>Download poster Guidelines here</button>
                                        }
                                        <label className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Select Research Type *</label>
                                        <div className="flex space-x-4">
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="researchType"
                                                    value="Original Research"
                                                    checked={formData.researchType === 'Original Research'}
                                                    onChange={handleChange}
                                                    className="form-radio text-blue-600"
                                                />
                                                <span className="ml-2 text-gray-700 dark:text-white">Original Research</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="researchType"
                                                    value="Case Presentation"
                                                    checked={formData.researchType === 'Case Presentation'}
                                                    onChange={handleChange}
                                                    className="form-radio text-blue-600"
                                                />
                                                <span className="ml-2 text-gray-700 dark:text-white">Case Presentation</span>
                                            </label>
                                        </div>
                                        {errors.researchType && <p className="text-red-500 text-sm">{errors.researchType}</p>}
                                        {formData.researchType === 'Original Research' && (
                                            <>
                                                <label htmlFor="objective" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Objective *</label>
                                                <textarea
                                                    id="objective"
                                                    name="objective"
                                                    maxLength="250"
                                                    placeholder="Maximum 250 characters"
                                                    value={formData.objective}
                                                    onChange={handleChange}
                                                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                                                    required
                                                ></textarea>
                                                <div className="text-sm text-gray-600 dark:text-gray-400">{charCount.objective}/250 characters</div>
                                                {errors.objective && <p className="text-red-500 text-sm">{errors.objective}</p>}
                                                <label htmlFor="methods" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Methods *</label>
                                                <textarea
                                                    id="methods"
                                                    name="methods"
                                                    maxLength="1000"
                                                    placeholder="Maximum 1000 characters"
                                                    value={formData.methods}
                                                    onChange={handleChange}
                                                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                                                    required
                                                ></textarea>
                                                <div className="text-sm text-gray-600 dark:text-gray-400">{charCount.methods}/1000 characters</div>
                                                {errors.methods && <p className="text-red-500 text-sm">{errors.methods}</p>}
                                                <label htmlFor="results" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Results *</label>
                                                <textarea
                                                    id="results"
                                                    name="results"
                                                    maxLength="1000"
                                                    placeholder="Maximum 1000 characters"
                                                    value={formData.results}
                                                    onChange={handleChange}
                                                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                                                    required
                                                ></textarea>
                                                <div className="text-sm text-gray-600 dark:text-gray-400">{charCount.results}/1000 characters</div>
                                                {errors.results && <p className="text-red-500 text-sm">{errors.results}</p>}
                                                <label htmlFor="conclusions" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Conclusions *</label>
                                                <textarea
                                                    id="conclusions"
                                                    name="conclusions"
                                                    maxLength="500"
                                                    placeholder="Maximum 500 characters"
                                                    value={formData.conclusions}
                                                    onChange={handleChange}
                                                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                                                    required
                                                ></textarea>
                                                <div className="text-sm text-gray-600 dark:text-gray-400">{charCount.conclusions}/500 characters</div>
                                                {errors.conclusions && <p className="text-red-500 text-sm">{errors.conclusions}</p>}
                                            </>
                                        )}
                                        {formData.researchType === 'Case Presentation' && (
                                            <>
                                                <label htmlFor="description" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Description *</label>
                                                <textarea
                                                    id="description"
                                                    name="description"
                                                    maxLength="1500"
                                                    placeholder="Maximum 1500 characters"
                                                    value={formData.description}
                                                    onChange={handleChange}
                                                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                                                    required
                                                ></textarea>
                                                <div className="text-sm text-gray-600 dark:text-gray-400">{charCount.description}/1500 characters</div>
                                                {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                                            </>
                                        )}
                                    </>
                                ) : formData.presentationType === 'Video' ? (
                                    <>
                                        <button className='border-2 rounded-lg border-blue-500  p-2'>Download video Guidelines here</button>
                                        <label htmlFor="description" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Description *</label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            maxLength="1500"
                                            placeholder="Maximum 1500 characters"
                                            value={formData.description}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                                            required
                                        ></textarea>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">{charCount.description}/1500 characters</div>
                                        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                                        <label htmlFor="fileInput" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Upload Your Video *
                                        </label>
                                        <div className="relative border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md px-6 py-8 text-center">
                                            <input
                                                onChange={handleChange}
                                                type='file'
                                                className="hidden"
                                                id="fileInput"
                                                name="fileInput"
                                                required
                                            />
                                            <svg className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
                                            </svg>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Click here <label htmlFor="fileInput" className="cursor-pointer text-blue-500 hover:underline">browse</label> to upload.</p>
                                            {formData.fileName && <p className="text-sm font-medium text-gray-800 dark:text-white">Uploaded File: {formData.fileName}</p>}
                                        </div>
                                        {errors.file && <p className="text-red-500 text-sm">{errors.file}</p>}

                                    </>
                                ) : null}
                                <div className="mt-4 flex justify-between">
                                    <button
                                        type="button"
                                        onClick={handlePreviousStep}
                                        className="px-6 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                                    >
                                        Submit
                                    </button>
                                </div>
                                <div className='flex justify-center'>
                                    {loading && <Loading2 loadingMsg={'Submitting ...'} />}

                                </div>
                                {!loading && successMessage && <div className="text-center text-green-500 text-lg font-semibold">{successMessage} <span className='text-black'><br /><Link to={'/'} className='border-b-2'>Go Back Home</Link></span></div>}
                            </>
                        )}
                        {errors.server && <div className="text-red-500 text-center text-sm">{errors.server}</div>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AbstractSubmission;



