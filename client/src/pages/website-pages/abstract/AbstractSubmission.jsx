import React, { useState, useContext,useEffect } from 'react';
import ImageBgContainer from '../../../components/common/ImageBgContainer';
import AuthContext from '../../../context/AuthProvider';
import Loading from '../../../components/common/Loading';
import { useNavigate } from 'react-router-dom';

const topics = [
    "Cataract & Lens Surgery",
    "Contact Lens and Refraction",
    "Cornea, External Eye Diseases, and Eye Banking",
    "Glaucoma",
    "Medical Retina",
    "Surgical Retina",
    "Neuro-ophthalmology",
    "Ocular Imaging",
    "Ocular Oncology",
    "Oculoplasty",
    "Ophthalmic Education/Young Ophthalmologists",
    "Ophthalmic Epidemiology",
    "Ophthalmic Trauma",
    "Ophthalmic Pathology and Microbiology",
    "Ophthalmic Nursing",
    "Ophthalmic Assistants & Technicians Optometry",
    "Orbital, Oculoplastic, and Lacrimal Diseases",
    "Pathology",
    "Pediatric Ophthalmology and Strabismus",
    "Refractive Surgery",
    "Uveitis",
    "Vision Rehabilitation",
    "Vision Sciences Vitreoretina",
    "Video Presentation",
];

const presentatoinType = ['Free Paper', 'Case', 'Poster', 'Video'];

const AbstractSubmission = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [loading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        mobile: user.mobile || '',
        title: '',
        mainAuthor: '',
        mainAuthorEmail: '',
        mainAuthorOrganization: '',
        topic: '',
        presentatoinType: '',
        file: null,
        fileName: '',
    });

    const handleChange = (e) => {
        const { name, files } = e.target;
        if (name === 'fileInput') {
            setFormData({
                ...formData,
                file: files[0],
                fileName: files[0].name
            });
        } else {
            setFormData({
                ...formData,
                [name]: e.target.value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const data = new FormData();
        data.append('firstName', formData.firstName);
        data.append('lastName', formData.lastName);
        data.append('email', formData.email);
        data.append('mobile', formData.mobile);
        data.append('title', formData.title);
        data.append('mainAuthor', formData.mainAuthor);
        data.append('mainAuthorEmail', formData.mainAuthorEmail);
        data.append('mainAuthorOrganization', formData.mainAuthorOrganization);
        data.append('topic', formData.topic);
        data.append('presentatoinType', formData.presentatoinType);
        data.append('file', formData.file);

        try {
            const response = await fetch('http://localhost:3000/abstract/submit', {
                method: 'POST',
                credentials: 'include',
                body: data,
            });

            const result = await response.json();
            if (response.ok) {
                setIsLoading(false);
                setSuccessMessage('Thanks for submitting! Please check your email.');
                setTimeout(() => {
                    navigate('/');
                }, 6500); // Redirects after 3 seconds
            } else {
                setIsLoading(false);
                throw new Error(result.message || 'Failed to submit abstract');
            }
        } catch (error) {
            setIsLoading(false);
            console.error('Error:', error);
        }
    };

    return (
        <section>
            <div className="w-full max-w-5xl mx-auto shadow-2xl my-16">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Abstract Submission</h1>
                    {loading ? (
                        <div className='h-[90vh] w-full'><Loading /></div>
                    ) : successMessage ? (
                        <div className="text-center text-green-500 text-lg font-semibold">{successMessage}</div>
                    ) : (
                        <form className="mb-2" onSubmit={handleSubmit}>
                            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Personal information</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-gray-700 dark:text-white my-2">First Name</label>
                                    <input onChange={handleChange} value={formData.firstName}
                                        type="text" id="firstName" name='firstName' className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-gray-700 dark:text-white my-2">Last Name</label>
                                    <input onChange={handleChange} value={formData.lastName}
                                        type="text" id="lastName" name='lastName' className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required />
                                </div>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="email" className="block text-gray-700 dark:text-white my-2">Email</label>
                                <input onChange={handleChange} value={formData.email}
                                    type="text" id="email" name='email' className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="mobile" className="block text-gray-700 dark:text-white my-2">Mobile No:</label>
                                <input onChange={handleChange} value={formData.mobile}
                                    type="text" id="mobile" name='mobile' className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-700 dark:text-white my-2">Add abstract information</h2>
                            <div>
                                <label htmlFor="title" className="block text-gray-700 dark:text-white my-2">Abstract title</label>
                                <input onChange={handleChange} value={formData.title}
                                    type="text" id="title" name='title' className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label htmlFor="mainAuthor" className="block text-gray-700 dark:text-white my-2">Main Author</label>
                                    <input onChange={handleChange} value={formData.mainAuthor}
                                        type="text" id="mainAuthor" name='mainAuthor' className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required />
                                </div>
                                <div>
                                    <label htmlFor="mainAuthorEmail" className="block text-gray-700 dark:text-white my-2">Email</label>
                                    <input onChange={handleChange} value={formData.mainAuthorEmail}
                                        type="text" id="mainAuthorEmail" name='mainAuthorEmail' className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required />
                                </div>
                                <div>
                                    <label htmlFor="mainAuthorOrganization" className="block text-gray-700 dark:text-white my-2">Organization</label>
                                    <input onChange={handleChange} value={formData.mainAuthorOrganization}
                                        type="text" id="mainAuthorOrganization" name='mainAuthorOrganization' className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required />
                                </div>
                            </div>
                            <label htmlFor="presentatoinType" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Select your presentation type</label>
                            <select
                                onChange={handleChange}
                                required
                                value={formData.presentatoinType}
                                name='presentatoinType' id="presentatoinType" className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-none dark:text-white">
                                <option defaultValue>Select type</option>
                                {presentatoinType.map(type => <option key={type} value={type}>{type}</option>)}
                            </select>
                            <label htmlFor="topic" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Select your topic</label>
                            <select
                                onChange={handleChange}
                                required
                                value={formData.topic}
                                name='topic' id="topic" className="bg-gray-50 border border-gray-300 text-gray-900 mb-3 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-none dark:text-white">
                                <option defaultValue>Select topic</option>
                                {topics.map(topic => <option key={topic} value={topic}>{topic}</option>)}
                            </select>
                            <label htmlFor="fileInput" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Upload your abstract (pdf)</label>
                                    <div className="relative border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md px-6 py-8 text-center">
                                        {/* Remove value attribute from file input */}
                                        <input onChange={handleChange} type='file' className="hidden" id="fileInput" name="fileInput" required />
                                        <svg className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
                                        </svg>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Drag & Drop your files here or <label htmlFor="fileInput" className="cursor-pointer text-blue-500 hover:underline">browse</label> to upload.</p>
                                        {formData.fileName && <p className="text-sm font-medium text-gray-800 dark:text-white">Uploaded File: {formData.fileName}</p>}
                                    </div>                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AbstractSubmission;
