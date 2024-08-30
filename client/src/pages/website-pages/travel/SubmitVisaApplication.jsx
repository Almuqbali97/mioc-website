import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { countries } from '../../../constants';
import Loading from '../../../components/common/Loading.jsx';

const allowedFileTypes = ['image/jpeg', 'image/png', 'application/pdf'];

const SubmitVisaApplication = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        country: '',
        passportFile: null,
        personalFile: null
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [showResponse, setShowResponse] = useState(false);
    const [passportPreview, setPassportPreview] = useState(null);
    const [personalPreview, setPersonalPreview] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const file = files[0];
        if (file) {
            if (!allowedFileTypes.includes(file.type)) {
                setErrors({ ...errors, [name]: 'Invalid file type. Only JPEG, PNG, and PDF files are allowed.' });
                return;
            }

            setFormData({
                ...formData,
                [name]: file
            });
            setErrors({
                ...errors,
                [name]: ''
            });

            const reader = new FileReader();
            reader.onloadend = () => {
                if (name === 'passportFile') {
                    setPassportPreview(reader.result);
                } else if (name === 'personalFile') {
                    setPersonalPreview(reader.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePhoneChange = (value) => {
        setFormData({
            ...formData,
            mobile: value
        });
        setErrors({
            ...errors,
            mobile: ''
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.lastName) newErrors.lastName = 'Last Name is required';
        if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.passportFile) newErrors.passportFile = 'Passport image is required';
        if (!formData.personalFile) newErrors.personalFile = 'Personal image is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const getPresignedUrl = async (fileType) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/visa/presigned-url?fileType=${fileType}&firstName=${formData.firstName}&lastName=${formData.lastName}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error generating presigned URL:', error);
            throw new Error('Failed to upload files');
        }
    };

    const uploadFileToS3 = async (file, url) => {
        try {
            await fetch(url, {
                method: 'PUT',
                body: file,
                headers: {
                    'Content-Type': file.type || 'image/jpeg'
                }
            });
        } catch (error) {
            console.error('Error uploading file to S3:', error);
            throw new Error('Failed to upload file');
        }
    };

    const handleSubmit = async (e) => {
        window.scrollTo(0, 0)
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        setShowResponse(false);

        try {
            // Get presigned URLs and upload files to S3
            const passportData = await getPresignedUrl('passport');
            await uploadFileToS3(formData.passportFile, passportData.presignedURL);

            const personalData = await getPresignedUrl('personal');
            await uploadFileToS3(formData.personalFile, personalData.presignedURL);

            // Submit form data with S3 keys
            const response = await fetch(`${import.meta.env.VITE_API_URL}/submit/visa-request`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    mobile: formData.mobile,
                    email: formData.email,
                    country: formData.country,
                    passportFileName: passportData.key,
                    personalFileName: personalData.key
                })
            });

            const result = await response.json();
            setLoading(false);

            if (response.ok) {
                setSuccessMessage(result.message);
                setFormData({
                    firstName: '',
                    lastName: '',
                    mobile: '',
                    email: '',
                    country: '',
                    passportFile: null,
                    personalFile: null
                });
                setPassportPreview(null);
                setPersonalPreview(null);
            } else {
                setErrors({ ...errors, server: result.message || 'Failed to submit visa request' });
            }

            setShowResponse(true);
        } catch (error) {
            setLoading(false);
            setErrors({ ...errors, server: error.message || 'Failed to submit visa request' });
            setShowResponse(true);
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8 mt-10 mb-10">
            <h1 className="text-3xl font-bold mb-4">Visa Request</h1>
            <p className="text-[0.9rem] text-gray-900 mb-6 bg-red-100 p-2 rounded-md">
                Note <span className='text-red-500 font-bold'>*</span>: Applications of individuals who have not registered for the conference will be ignored.
            </p>
            {loading && <div className='flex justify-center'><div className='max-w-[200px]'><Loading /></div></div>}
            {!loading && showResponse && (
                <div className={`p-4 mb-4 rounded-lg ${successMessage ? 'bg-green-100' : 'bg-red-100'}`}>
                    <p className="text-lg font-medium">{successMessage || errors.server}</p>
                    {!successMessage && (
                        <button
                            onClick={() => setShowResponse(false)}
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
                        >
                            Try Again
                        </button>
                    )}
                </div>
            )}
            {!loading && !showResponse && (
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-700">First Name *</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-blue-300"
                            required
                        />
                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-700">Last Name *</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-blue-300"
                            required
                        />
                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-blue-300"
                            required
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mobile" className="block text-gray-700">Mobile *</label>
                        <PhoneInput
                            country={'om'}
                            id='mobile'
                            name='mobile'
                            value={formData.mobile}
                            onChange={handlePhoneChange}
                            inputProps={{
                                name: 'mobile',
                                required: true,
                                className: 'w-full rounded-lg border py-2 pl-14 focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white dark:border-none',
                            }}
                        />
                        {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="country" className="block text-gray-700">Country *</label>
                        <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                            required
                        >
                            <option value="">Select your country</option>
                            {countries.map(country => (
                                <option key={country} value={country}>{country}</option>
                            ))}
                        </select>
                        {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="personalFile" className="block text-gray-700">Personal Image (JPEG, PNG, PDF) *</label>
                        <input
                            type="file"
                            id="personalFile"
                            name="personalFile"
                            accept=".jpeg, .jpg, .png, .pdf"
                            onChange={handleFileChange}
                            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-blue-300"
                            required
                        />
                        {errors.personalFile && <p className="text-red-500 text-sm">{errors.personalFile}</p>}
                        {personalPreview && !formData.personalFile.type.includes('pdf') && (
                            <img src={personalPreview} alt="Personal Image Preview" className="mt-2 h-32" />
                        )}
                        {personalPreview && formData.personalFile.type.includes('pdf') && (
                            <p className="mt-2 text-gray-700">{formData.personalFile.name}</p>
                        )}

                    </div>
                    <div className="mb-4">
                        <label htmlFor="passportFile" className="block text-gray-700">Passport Image (JPEG, PNG, PDF) *</label>
                        <input
                            type="file"
                            id="passportFile"
                            name="passportFile"
                            accept=".jpeg, .jpg, .png, .pdf"
                            onChange={handleFileChange}
                            className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-blue-300"
                            required
                        />
                        {errors.passportFile && <p className="text-red-500 text-sm">{errors.passportFile}</p>}
                        {passportPreview && !formData.passportFile.type.includes('pdf') && (
                            <img src={passportPreview} alt="Passport Preview" className="mt-2 h-32" />
                        )}
                        {passportPreview && formData.passportFile.type.includes('pdf') && (
                            <p className="mt-2 text-gray-700">{formData.passportFile.name}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className={`w-full bg-primary_blue text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default SubmitVisaApplication;
