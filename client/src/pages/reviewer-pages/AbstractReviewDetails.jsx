import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../components/common/Loading.jsx';
import HandleDownloadFiles from '../../components/common/HandleDownloadFiles.jsx';

const AbstractReviewDetails = () => {
    const { id } = useParams();
    const [abstract, setAbstract] = useState(null);
    const [loading, setLoading] = useState(true);
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState('');
    const [reviewed, setReviewed] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [serverMessage, setServerMessage] = useState('');
    const [serverMessageType, setServerMessageType] = useState('success');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAbstract = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/abstract/reviewer/get/spesific/${id}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                if (response.ok) {
                    const abstractData = await response.json();
                    setAbstract(abstractData);
                    setReviewed(abstractData.status === 'reviewed');
                    if (abstractData.review) {
                        setRating(abstractData.review.rating);
                        setComment(abstractData.review.comment);
                    }
                } else {
                    const errRes = await response.json();
                    setError(errRes.message || 'An error occurred while fetching the abstract.');
                }
            } catch (error) {
                setError('Error fetching data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchAbstract();
    }, [id]);

    const handleSubmitReview = async () => {
        setShowModal(false);
        if (comment.trim() === '') {
            setServerMessage('Comment cannot be empty.');
            setServerMessageType('error');
            return;
        }

        setServerMessage('');
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/abstract/reviewer/review/${id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ rating, comment })
            });

            if (response.ok) {
                const result = await response.json();
                setServerMessage(result.message);
                setServerMessageType('success');
                setReviewed(true);
                setAbstract(prevAbstract => ({
                    ...prevAbstract,
                    review: {
                        rating,
                        comment
                    }
                }));
                setComment('');
            } else {
                const errRes = await response.json();
                setServerMessage(errRes.message || 'An error occurred.');
                setServerMessageType('error');
            }
        } catch (error) {
            setServerMessage('Error submitting review. Please try again.');
            setServerMessageType('error');
        }
    };

    if (loading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <div className='h-24'>
                    <Loading />;
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-5xl mx-auto p-4 text-red-600">
                <p>{error}</p>
                <Link to={'/abstract/reviewer'} className="bg-blue-200 p-2 rounded-lg text-blue-800">
                    &larr; Back to abstracts
                </Link>
            </div>
        );
    }

    if (!abstract) {
        return <div className="max-w-5xl mx-auto p-4">Error loading abstract.</div>;
    }

    return (
        <div className='w-full bg-blue-50'>
            <div className="max-w-5xl mx-auto p-4 space-y-6">
                <Link className="bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700 font-semibold" to={'/abstract/reviewer'}>
                    &larr; Back to abstracts
                </Link>
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Review Abstract</h1>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-blue-700 space-y-6">
                    <Section title="Submitter Contact Information">
                        <AuthorInfo label="First Name" value={abstract.firstName} />
                        <AuthorInfo label="Last Name" value={abstract.lastName} />
                        <AuthorInfo label="Email" value={abstract.email} />
                        <AuthorInfo label="Mobile" value={abstract.phoneNo} />
                    </Section>
                    <Section title="Main Author Information">
                        <AuthorInfo label="First Name" value={abstract.mainAuthorFirstName} />
                        <AuthorInfo label="Last Name" value={abstract.mainAuthorLastName} />
                        <AuthorInfo label="Email" value={abstract.mainAuthorEmail} />
                        <AuthorInfo label="Organization" value={abstract.mainAuthorOrganization} />
                        <AuthorInfo label="Country" value={abstract.mainAuthorCountry} />
                    </Section>
                    <Section title="Additional Authors">
                        {abstract.additionalAuthors.length > 0 ? (
                            abstract.additionalAuthors.map((author, index) => (
                                <div key={index} className="mb-4">
                                    <AuthorInfo label={`Author ${index + 1}`} value="" />
                                    <AuthorInfo label="First Name" value={author.firstName} />
                                    <AuthorInfo label="Last Name" value={author.lastName} />
                                    <AuthorInfo label="Email" value={author.email} />
                                    <AuthorInfo label="Organization" value={author.organization} />
                                    <AuthorInfo label="Country" value={author.country} />
                                    {index < abstract.additionalAuthors.length - 1 && <hr className="my-4" />}
                                </div>
                            ))
                        ) : (
                            <p>No additional authors</p>
                        )}
                    </Section>
                    <Section title="Abstract Information">
                        <AuthorInfo label="Title" value={abstract.title} />
                        <AuthorInfo label="Topic" value={abstract.topic} />
                        <AuthorInfo label="Presentation Type" value={abstract.presentationType} />
                        <AuthorInfo label="Submission Date" value={new Date(abstract.created_at).toLocaleDateString()} />
                    </Section>
                    {(abstract.presentationType === 'Oral presentation' || abstract.presentationType === 'Poster') && (
                        <Section title="Research Details">
                            <AuthorInfo label="Research Type" value={abstract.researchType} />
                            {abstract.researchType === 'Original Research' && (
                                <>
                                    <TextArea label="Objective" value={abstract.objective} />
                                    <TextArea label="Methods" value={abstract.methods} />
                                    <TextArea label="Results" value={abstract.results} />
                                    <TextArea label="Conclusions" value={abstract.conclusions} />
                                </>
                            )}
                            {abstract.researchType === 'Case Presentation' && (
                                <TextArea label="Description" value={abstract.description} />
                            )}
                        </Section>
                    )}
                    {abstract.presentationType === 'Video' && (
                        <Section title="Video Details">
                            <TextArea label="Description" value={abstract.description} />
                            <HandleDownloadFiles fileKey={abstract.fileName} />
                        </Section>
                    )}
                    {reviewed && abstract.review && (
                        <Section title="Current Review">
                            <AuthorInfo label="Rating" value={abstract.review.rating} />
                            <AuthorInfo label="Comment" value={abstract.review.comment} />
                        </Section>
                    )}
                    <div className="mt-6">
                        <label className="block mb-4 text-gray-700 dark:text-white">
                            Rating
                            <select
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                className="block w-full mt-2 p-3 border rounded-md dark:bg-gray-700 dark:text-white"
                            >
                                <option value={1}>1 - Poor</option>
                                <option value={2}>2 - Fair</option>
                                <option value={3}>3 - Good</option>
                                <option value={4}>4 - Very Good</option>
                                <option value={5}>5 - Excellent</option>
                            </select>
                        </label>
                        <label className="block mb-4 text-gray-700 dark:text-white">
                            Review Comment
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="block w-full mt-2 p-3 border rounded-md dark:bg-blue-700 dark:text-white"
                            />
                        </label>
                    </div>
                    <div className="mt-6">
                        <button
                            onClick={() => setShowModal(true)}
                            className={`${reviewed ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-500 hover:bg-blue-600"} text-white font-bold py-3 px-6 rounded shadow-md`}
                        >
                            {reviewed ? 'Update Review' : 'Submit Review'}
                        </button>
                    </div>
                    {showModal && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                                <h2 className="text-xl font-semibold mb-4">Confirm Review</h2>
                                <p>Are you sure you want to {reviewed ? 'update' : 'submit'} this review?</p>
                                <div className="mt-6 flex justify-end space-x-4">
                                    <button
                                        onClick={handleSubmitReview}
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Yes
                                    </button>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                                    >
                                        No
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    {serverMessage && (
                        <div className={`mt-6 p-4 rounded-md ${serverMessageType === 'success' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                            {serverMessage}
                        </div>
                    )}
                    <div className="mt-8">
                        <Link className="bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700 font-semibold" to={'/abstract/reviewer'}>
                            &larr; Back to abstracts
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Section = ({ title, children }) => (
    <div className="p-4 mb-4 rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <h2 className="text-xl font-semibold text-blue-700 dark:text-white mb-2">{title}</h2>
        {children}
    </div>
);

const AuthorInfo = ({ label, value }) => (
    <p className="text-gray-700 dark:text-gray-300"><strong>{label}:</strong> {value}</p>
);

const TextArea = ({ label, value }) => (
    <div className="mb-4">
        <p className="text-gray-700 dark:text-gray-300"><strong>{label}:</strong></p>
        <textarea
            className="w-full p-3 border rounded-md dark:bg-blue-700 dark:text-white"
            value={value}
            readOnly
        />
    </div>
);

export default AbstractReviewDetails;
