import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/common/Loading';
import AuthContext from '../../context/AuthProvider';
import HandleDownloadFiles from '../../components/common/HandleDownloadFiles.jsx';
import Loading2 from '../../components/common/Loading2.jsx';
import { ArrowRightIcon, ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

const ViewEditAbstract = () => {
    const [abstracts, setAbstracts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);
    const [serverMessages, setServerMessages] = useState({});
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [editMode, setEditMode] = useState({});
    const [newVideoFiles, setNewVideoFiles] = useState({});
    const [originalValues, setOriginalValues] = useState({});

    useEffect(() => {
        const fetchAbstracts = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/abstract/get/by-email/${user.email}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                if (response.ok) {
                    const abstractData = await response.json();
                    setAbstracts(abstractData);
                } else {
                    const errRes = await response.json();
                    console.error('Error fetching data:', errRes.message || 'An error occurred.');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (user?.email) {
            fetchAbstracts();
        }
    }, [user?.email]);

    const handleInputChange = (index, e) => {
        const { name, value, files } = e.target;
        setAbstracts(prevState => {
            const updatedAbstracts = [...prevState];
            updatedAbstracts[index][name] = value;
            return updatedAbstracts;
        });

        if (name === 'newVideoFile') {
            setNewVideoFiles(prevState => ({
                ...prevState,
                [index]: files[0]
            }));
        }
    };

    const handleSubmitEdit = async (id, index) => {
        const updatedMessages = { ...serverMessages };
        delete updatedMessages[index];
        setServerMessages(updatedMessages);

        try {
            let videoFileName = null;
            if (abstracts[index].presentationType === 'Video' && newVideoFiles[index]) {
                const presignedResponse = await fetch(`${import.meta.env.VITE_API_URL}/abstract/presigned-url`);
                if (!presignedResponse.ok) {
                    throw new Error('Failed to get presigned URL');
                }

                const { presignedURL, key } = await presignedResponse.json();

                const s3Response = await fetch(presignedURL, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'video/mp4',
                    },
                    body: newVideoFiles[index],
                });

                if (!s3Response.ok) {
                    throw new Error('Failed to upload video to S3');
                }

                videoFileName = key;
            }

            const data = {
                ...abstracts[index],
                fileName: videoFileName || abstracts[index].fileName,
                additionalAuthors: JSON.stringify(abstracts[index].additionalAuthors), // Stringify additionalAuthors if necessary
            };

            const response = await fetch(`${import.meta.env.VITE_API_URL}/abstract/update/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                setServerMessages(prevState => ({
                    ...prevState,
                    [index]: result.message
                }));
            } else {
                const errRes = await response.json();
                setServerMessages(prevState => ({
                    ...prevState,
                    [index]: errRes.message || 'An error occurred.'
                }));
                console.error('Error submitting edit:', errRes.message || 'An error occurred.');
            }
        } catch (error) {
            setServerMessages(prevState => ({
                ...prevState,
                [index]: 'Error submitting edit. Please try again.'
            }));
            console.error('Error submitting edit:', error);
        }

        // Clear edit mode and original values
        setEditMode(prevState => {
            const updatedEditMode = { ...prevState };
            Object.keys(updatedEditMode).forEach(key => {
                if (key.startsWith(`${index}-`)) {
                    delete updatedEditMode[key];
                }
            });
            return updatedEditMode;
        });
        setOriginalValues(prevState => {
            const updatedOriginalValues = { ...prevState };
            delete updatedOriginalValues[index];
            return updatedOriginalValues;
        });
    };

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const toggleEditMode = (index, field) => {
        setEditMode(prevState => ({
            ...prevState,
            [`${index}-${field}`]: !prevState[`${index}-${field}`]
        }));
        setOriginalValues(prevState => ({
            ...prevState,
            [`${index}-${field}`]: abstracts[index][field]
        }));
    };

    const handleCancelChanges = (index, field) => {
        setAbstracts(prevState => {
            const updatedAbstracts = [...prevState];
            updatedAbstracts[index][field] = originalValues[`${index}-${field}`];
            return updatedAbstracts;
        });
        toggleEditMode(index, field);
    };

    if (loading) {
        return <Loading2 />;
    }

    if (abstracts.length === 0) {
        return <div>No abstracts found for this email.</div>;
    }

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 mt-4">Your Submitted Abstracts</h1>
            {abstracts.map((abstract, index) => (
                <div key={abstract.id} className="mb-6">
                    <div className="flex justify-between items-center bg-gray-100 hover:bg-blue-50 p-4 rounded-lg cursor-pointer" onClick={() => toggleExpand(index)}>
                        <span>Abstract ({index + 1}). Title: {abstract.title}</span>
                        <span>{expandedIndex === index ? <ArrowUpIcon className='h-5 w-5' /> : <ArrowDownIcon className='h-5 w-5' />}</span>
                    </div>
                    {expandedIndex === index && (
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-blue-700 mt-2">
                            <div className="mb-4 border-b-2 border-gray-300 pb-4">
                                <h2 className="text-xl font-semibold text-blue-700 dark:text-white mb-2">Submitter Contact Information</h2>

                                {['firstName', 'lastName', 'email', 'phoneNo'].map((field) => (
                                    <div key={field} className="mb-2">
                                        <p><strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong> {field === 'phoneNo' && editMode[`${index}-${field}`] ? (
                                            <input
                                                type="text"
                                                name={field}
                                                value={abstract[field]}
                                                onChange={(e) => handleInputChange(index, e)}
                                                className="block w-full mt-1 p-2 border rounded-md dark:bg-blue-700 dark:text-white"
                                            />
                                        ) : (
                                            abstract[field]
                                        )}
                                        </p>
                                        {field === 'phoneNo' && !editMode[`${index}-${field}`] && (
                                            <>
                                                <button onClick={() => toggleEditMode(index, field)} className="text-yellow-400 hover:text-yellow-600">Edit {field.charAt(0).toUpperCase() + field.slice(1)}</button>
                                            </>
                                        )}
                                        {field === 'phoneNo' && editMode[`${index}-${field}`] && (
                                            <>
                                                <button onClick={() => handleSubmitEdit(abstract.id, index)} className="text-green-600 hover:text-green-800 ml-2">Accept Changes</button>
                                                <button onClick={() => handleCancelChanges(index, field)} className="text-red-600 hover:text-red-800 ml-2">Cancel Changes</button>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="mb-4 border-b-2 border-gray-300 pb-4">
                                <h2 className="text-xl font-semibold text-blue-700 dark:text-white mb-2">Main Author Information</h2>
                                {['mainAuthorFirstName', 'mainAuthorLastName', 'mainAuthorEmail', 'mainAuthorOrganization', 'mainAuthorCountry'].map((field) => (
                                    <div key={field} className="mb-2">
                                        <p><strong>{field.replace('mainAuthor', '').replace(/([A-Z])/g, ' $1').trim()}:</strong> {editMode[`${index}-${field}`] ? (
                                            <input
                                                type="text"
                                                name={field}
                                                value={abstract[field]}
                                                onChange={(e) => handleInputChange(index, e)}
                                                className="block w-full mt-1 p-2 border rounded-md dark:bg-blue-700 dark:text-white"
                                            />
                                        ) : (
                                            abstract[field]
                                        )}
                                        </p>
                                        {!editMode[`${index}-${field}`] && (
                                            <button onClick={() => toggleEditMode(index, field)} className="text-yellow-400 hover:text-blue-900">Edit {field.replace('mainAuthor', '').replace(/([A-Z])/g, ' $1').trim()}</button>
                                        )}
                                        {editMode[`${index}-${field}`] && (
                                            <>
                                                <button onClick={() => handleSubmitEdit(abstract.id, index)} className="text-green-600 hover:text-green-800 ml-2">Accept Changes</button>
                                                <button onClick={() => handleCancelChanges(index, field)} className="text-red-600 hover:text-red-800 ml-2">Cancel Changes</button>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="mb-4 border-b-2 border-gray-300 pb-4">
                                <h2 className="text-xl font-semibold text-blue-700 dark:text-white mb-2">Abstract Information</h2>
                                {['title', 'topic'].map((field) => (
                                    <div key={field} className="mb-2">
                                        <p><strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong> {editMode[`${index}-${field}`] ? (
                                            <input
                                                type="text"
                                                name={field}
                                                value={abstract[field]}
                                                onChange={(e) => handleInputChange(index, e)}
                                                className="block w-full mt-1 p-2 border rounded-md dark:bg-blue-700 dark:text-white"
                                            />
                                        ) : (
                                            abstract[field]
                                        )}
                                        </p>
                                        {!editMode[`${index}-${field}`] && (
                                            <button onClick={() => toggleEditMode(index, field)} className="text-yellow-400 hover:text-blue-900">Edit {field.charAt(0).toUpperCase() + field.slice(1)}</button>
                                        )}
                                        {editMode[`${index}-${field}`] && (
                                            <>
                                                <button onClick={() => handleSubmitEdit(abstract.id, index)} className="text-green-600 hover:text-green-800 ml-2">Accept Changes</button>
                                                <button onClick={() => handleCancelChanges(index, field)} className="text-red-600 hover:text-red-800 ml-2">Cancel Changes</button>
                                            </>
                                        )}
                                    </div>
                                ))}
                                <p><strong>Presentation Type:</strong> {abstract.presentationType}</p>
                            </div>

                            {abstract.presentationType === 'Oral presentation' || abstract.presentationType === 'Poster' ? (
                                <div className="mb-4 border-b-2 border-gray-300 pb-4">
                                    <h2 className="text-xl font-semibold text-blue-700 dark:text-white mb-2">Research Details</h2>
                                    <p><strong>Research Type:</strong> {abstract.researchType}</p>
                                    {abstract.researchType === 'Case Presentation' ? (
                                        <div className="mb-2">
                                            <p><strong>Description:</strong> {editMode[`${index}-description`] ? (
                                                <textarea
                                                    name="description"
                                                    value={abstract.description}
                                                    onChange={(e) => handleInputChange(index, e)}
                                                    className="block w-full mt-1 p-2 border rounded-md dark:bg-blue-700 dark:text-white"
                                                />
                                            ) : (
                                                abstract.description
                                            )}
                                            </p>
                                            {!editMode[`${index}-description`] && (
                                                <button onClick={() => toggleEditMode(index, 'description')} className="text-yellow-400 hover:text-blue-900">Edit Description</button>
                                            )}
                                            {editMode[`${index}-description`] && (
                                                <>
                                                    <button onClick={() => handleSubmitEdit(abstract.id, index)} className="text-green-600 hover:text-green-800 ml-2">Accept Changes</button>
                                                    <button onClick={() => handleCancelChanges(index, 'description')} className="text-red-600 hover:text-red-800 ml-2">Cancel Changes</button>
                                                </>
                                            )}
                                        </div>
                                    ) : (
                                        ['objective', 'methods', 'results', 'conclusions'].map((field) => (
                                            abstract[field] !== undefined && (
                                                <div key={field} className="mb-2">
                                                    <p><strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong> {editMode[`${index}-${field}`] ? (
                                                        <textarea
                                                            name={field}
                                                            value={abstract[field]}
                                                            onChange={(e) => handleInputChange(index, e)}
                                                            className="block w-full mt-1 p-2 border rounded-md dark:bg-blue-700 dark:text-white"
                                                        />
                                                    ) : (
                                                        abstract[field]
                                                    )}
                                                    </p>
                                                    {!editMode[`${index}-${field}`] && (
                                                        <button onClick={() => toggleEditMode(index, field)} className="text-yellow-400 hover:text-blue-900">Edit {field.charAt(0).toUpperCase() + field.slice(1)}</button>
                                                    )}
                                                    {editMode[`${index}-${field}`] && (
                                                        <>
                                                            <button onClick={() => handleSubmitEdit(abstract.id, index)} className="text-green-600 hover:text-green-800 ml-2">Accept Changes</button>
                                                            <button onClick={() => handleCancelChanges(index, field)} className="text-red-600 hover:text-red-800 ml-2">Cancel Changes</button>
                                                        </>
                                                    )}
                                                </div>
                                            )
                                        ))
                                    )}
                                </div>
                            ) : abstract.presentationType === 'Video' ? (
                                <div className="mb-4 border-b-2 border-gray-300 pb-4">
                                    <h2 className="text-xl font-semibold text-blue-700 dark:text-white mb-2">Video Details</h2>
                                    <div className="mb-2">
                                        <p><strong>Description:</strong> {editMode[`${index}-description`] ? (
                                            <textarea
                                                name="description"
                                                value={abstract.description}
                                                onChange={(e) => handleInputChange(index, e)}
                                                className="block w-full mt-1 p-2 border rounded-md dark:bg-blue-700 dark:text-white"
                                            />
                                        ) : (
                                            abstract.description
                                        )}
                                        </p>
                                        {!editMode[`${index}-description`] && (
                                            <button onClick={() => toggleEditMode(index, 'description')} className="text-yellow-400 hover:text-blue-900">Edit Description</button>
                                        )}
                                        {editMode[`${index}-description`] && (
                                            <>
                                                <button onClick={() => handleSubmitEdit(abstract.id, index)} className="text-green-600 hover:text-green-800 ml-2">Accept Changes</button>
                                                <button onClick={() => handleCancelChanges(index, 'description')} className="text-red-600 hover:text-red-800 ml-2">Cancel Changes</button>
                                            </>
                                        )}
                                    </div>
                                    <div className="mt-4">
                                        <HandleDownloadFiles fileKey={abstract.fileName} />
                                    </div>
                                    {editMode[`${index}-newVideoFile`] ? (
                                        <div className="mt-4">
                                            <label className="block text-gray-700 dark:text-white mb-2">Upload New Video</label>
                                            <input
                                                type="file"
                                                name="newVideoFile"
                                                onChange={(e) => handleInputChange(index, e)}
                                                className="block w-full mt-1 p-2 border rounded-md dark:bg-blue-700 dark:text-white"
                                            />
                                        </div>
                                    ) : (
                                        <button onClick={() => toggleEditMode(index, 'newVideoFile')} className="text-yellow-400 hover:text-blue-900 mt-4">Upload New Video</button>
                                    )}
                                </div>
                            ) : null}

                            <div className="mt-4">
                                <button
                                    onClick={() => handleSubmitEdit(abstract.id, index)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Submit Changes
                                </button>
                            </div>

                            {serverMessages[index] && (
                                <div className="mt-4 p-4 bg-green-200 text-green-800 rounded-md">
                                    {serverMessages[index]}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ViewEditAbstract;
