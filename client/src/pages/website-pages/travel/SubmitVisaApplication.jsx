import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Make sure to import the necessary CSS
import { countries } from '../../../constants';
import Loading from '../../../components/common/Loading.jsx';

const SubmitVisaApplication = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        country: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [showResponse, setShowResponse] = useState(false);

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

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        setShowResponse(false);

        try {
            const response = await fetch(import.meta.env.VITE_API_URL + '/submit/visa-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
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
                    country: ''
                });
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
            <p className="text-[0.9rem] text-gray-900 mb-6 bg-red-100 p-2 rounded-md"> Note <span className='text-red-500 font-bold'>*</span>: Applications of individuals who have not registered for the conference will be ignored.</p>
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
                    <button type="submit" className="w-full bg-primary_blue text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300">
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
};

export default SubmitVisaApplication;
