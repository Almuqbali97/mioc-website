import React, { useState, useContext } from 'react';
import ImageBgContainer from '../../../components/common/ImageBgContainer';
import AuthContext from '../../../context/AuthProvider';


const AbstractSubmission = () => {
    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        mobile: user.mobile || '',
        topic: '',
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

        // Create a FormData object to bundle the form data for sending
        const data = new FormData();
        data.append('firstName', formData.firstName);
        data.append('lastName', formData.lastName);
        data.append('email', formData.email);
        data.append('mobile', formData.mobile);
        data.append('topic', formData.topic)
        data.append('file', formData.file);

        // Sending the data to the server via fetch
        console.log(data);
        try {
            const response = await fetch('http://localhost:3000/abstract/submit', { // Modify '/api/abstracts' to your actual API endpoint
                method: 'POST',
                credentials: 'include',
                body: data,
            });

            const result = await response.json();
            if (response.ok) {
                console.log('Success:', result);
                // Reset the form if needed
                setFormData({ firstName: '', lastName: '', email: '', mobile: '', topic: '', file: null, fileName: '' });
            } else {
                throw new Error(result.message || 'Failed to submit abstract');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <section >
            <ImageBgContainer bgURL={'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}>
                <div className="w-full max-w-3xl mx-auto p-8">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700 mt-32">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Abstract Sumbission</h1>
                        <form className="mb-2" onSubmit={handleSubmit}>
                            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Personal information</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-gray-700 dark:text-white mb-1">First Name</label>
                                    <input onChange={handleChange} value={formData.firstName}
                                        type="text" id="firstName" name='firstName' className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-gray-700 dark:text-white mb-1">Last Name</label>
                                    <input onChange={handleChange} value={formData.lastName}
                                        type="text" id="lastName" name='lastName' className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                </div>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="email" className="block text-gray-700 dark:text-white mb-1">Email</label>
                                <input onChange={handleChange} value={formData.email}
                                    type="text" id="email" name='email' className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="mobile" className="block text-gray-700 dark:text-white mb-1">Mobile No:</label>
                                <input onChange={handleChange} value={formData.mobile}
                                    type="text" id="mobile" name='mobile' className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                            </div>
                            {/*  */}
                            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Add abstract file</h2>
                            <fieldset onChange={handleChange}>
                                <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
                                <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
                                <div className="mt-6 space-x-6 flex" >
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="topic-1"
                                            value={'topic-1'}
                                            name="topic"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                                            topic-1
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="topic-2"
                                            value={'topic-2'}
                                            name="topic"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                                            topic-2
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="topic-3"
                                            value={'topic-3'}
                                            name="topic"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                                            topic-3
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            <div className="relative border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md px-6 py-8 text-center">
                                {/* Remove value attribute from file input */}
                                <input onChange={handleChange} type='file' className="hidden" id="fileInput" name="fileInput" />
                                <svg className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
                                </svg>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Drag & Drop your files here or <label htmlFor="fileInput" className="cursor-pointer text-blue-500 hover:underline">browse</label> to upload.</p>
                                {formData.fileName && <p className="text-sm font-medium text-gray-800 dark:text-white">Uploaded File: {formData.fileName}</p>}
                            </div>
                            <div className="mt-5 flex justify-end">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>

            </ImageBgContainer>

        </section>


    );
}

export default AbstractSubmission;
