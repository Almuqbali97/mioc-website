import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../components/common/Loading';

const ReviewAbstract = () => {
    const { id } = useParams();
    const [abstract, setAbstract] = useState(null);
    const [loading, setLoading] = useState(true);
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState('');
    const [reviewed, setReviewed] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [serverMessage, setServerMessage] = useState('');

    useEffect(() => {
        const fetchAbstract = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/abstract/get/spesific/${id}`, {
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
                    console.error('Error fetching data:', errRes.message || 'An error occurred.');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAbstract();
    }, [id]);

    const handleSubmitReview = async () => {
        setShowModal(false);
        setServerMessage('');
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/abstract/review/${id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ rating, comment })
            });

            if (response.ok) {
                const result = await response.json();
                setServerMessage(result.message);
                setReviewed(true);
                setAbstract(prevAbstract => ({
                    ...prevAbstract,
                    review: {
                        rating,
                        comment
                    }
                }));
                setComment('')
            } else {
                const errRes = await response.json();
                setServerMessage(errRes.message || 'An error occurred.');
                console.error('Error submitting review:', errRes.message || 'An error occurred.');
            }
        } catch (error) {
            setServerMessage('Error submitting review. Please try again.');
            console.error('Error submitting review:', error);
        }
    };

    if (loading) {
        return <Loading />;
    }

    if (!abstract) {
        return <div>Error loading abstract.</div>;
    }

    return (
        <div className="max-w-5xl mx-auto p-4">
            <Link className='bg-blue-200 p-2 rounded-lg text-blue-800 text-semibold' to={'/admin/abstracts'}>&larr; Backe to abstracts</Link>
            <h1 className="text-2xl font-bold mb-4 mt-4 ">Review Abstract</h1>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-blue-700">
                <div className="mb-4 border-b-2 border-gray-300 pb-4">
                    <h2 className="text-xl font-semibold text-blue-700 dark:text-white mb-2">Submitter Contact Information</h2>
                    <p><strong>First Name:</strong> {abstract.firstName}</p>
                    <p><strong>Last Name:</strong> {abstract.lastName}</p>
                    <p><strong>Email:</strong> {abstract.email}</p>
                    <p><strong>Mobile:</strong> {abstract.phoneNo}</p>
                </div>

                <div className="mb-4 border-b-2 border-gray-300 pb-4">
                    <h2 className="text-xl font-semibold text-blue-700 dark:text-white mb-2">Main Author Information</h2>
                    <p><strong>First Name:</strong> {abstract.mainAuthorFirstName}</p>
                    <p><strong>Last Name:</strong> {abstract.mainAuthorLastName}</p>
                    <p><strong>Email:</strong> {abstract.mainAuthorEmail}</p>
                    <p><strong>Organization:</strong> {abstract.mainAuthorOrganization}</p>
                    <p><strong>Country:</strong> {abstract.mainAuthorCountry}</p>
                </div>

                <div className="mb-4 border-b-2 border-gray-300 pb-4">
                    <h2 className="text-xl font-semibold text-blue-700 dark:text-white mb-2">Additional Authors</h2>
                    {abstract.additionalAuthors.length > 0 ? (
                        abstract.additionalAuthors.map((author, index) => (
                            <div key={index} className="mb-2">
                                <p><strong>Author {index + 1}:</strong></p>
                                <p><strong>First Name:</strong> {author.firstName}</p>
                                <p><strong>Last Name:</strong> {author.lastName}</p>
                                <p><strong>Email:</strong> {author.email}</p>
                                <p><strong>Organization:</strong> {author.organization}</p>
                                <p><strong>Country:</strong> {author.country}</p>
                                {index < abstract.additionalAuthors.length - 1 && <hr className="my-4" />}
                            </div>
                        ))
                    ) : (
                        <p>No additional authors</p>
                    )}
                </div>

                <div className="mb-4 border-b-2 border-gray-300 pb-4">
                    <h2 className="text-xl font-semibold text-blue-700 dark:text-white mb-2">Abstract Information</h2>
                    <p><strong>Title:</strong> {abstract.title}</p>
                    <p><strong>Topic:</strong> {abstract.topic}</p>
                    <p><strong>Presentation Type:</strong> {abstract.presentationType}</p>
                    <p><strong>Submission Date:</strong> {new Date(abstract.created_at).toLocaleDateString()}</p>
                </div>

                {abstract.presentationType === 'Oral presentation' || abstract.presentationType === 'Poster' ? (
                    <div className="mb-4 border-b-2 border-gray-300 pb-4">
                        <h2 className="text-xl font-semibold text-blue-700 dark:text-white mb-2">Research Details</h2>
                        <p><strong>Research Type:</strong> {abstract.researchType}</p>
                        {abstract.researchType === 'Original Research' && (
                            <>
                                <div className="mb-2">
                                    <p><strong>Objective:</strong></p>
                                    <textarea
                                        className="w-full p-2 border rounded-md dark:bg-blue-700 dark:text-white"
                                        value={abstract.objective}
                                        readOnly
                                    />
                                </div>
                                <div className="mb-2">
                                    <p><strong>Methods:</strong></p>
                                    <textarea
                                        className="w-full p-2 border rounded-md dark:bg-blue-700 dark:text-white"
                                        value={abstract.methods}
                                        readOnly
                                    />
                                </div>
                                <div className="mb-2">
                                    <p><strong>Results:</strong></p>
                                    <textarea
                                        className="w-full p-2 border rounded-md dark:bg-blue-700 dark:text-white"
                                        value={abstract.results}
                                        readOnly
                                    />
                                </div>
                                <div className="mb-2">
                                    <p><strong>Conclusions:</strong></p>
                                    <textarea
                                        className="w-full p-2 border rounded-md dark:bg-blue-700 dark:text-white"
                                        value={abstract.conclusions}
                                        readOnly
                                    />
                                </div>
                            </>
                        )}
                        {abstract.researchType === 'Case Presentation' && (
                            <div className="mb-2">
                                <p><strong>Description:</strong></p>
                                <textarea
                                    className="w-full p-2 border rounded-md dark:bg-blue-700 dark:text-white"
                                    value={abstract.description}
                                    readOnly
                                />
                            </div>
                        )}
                    </div>
                ) : abstract.presentationType === 'Video' ? (
                    <div className="mb-4 border-b-2 border-gray-300 pb-4">
                        <h2 className="text-xl font-semibold text-blue-700 dark:text-white mb-2">Video Details</h2>
                        <div className="mb-2">
                            <p><strong>Description:</strong></p>
                            <textarea
                                className="w-full p-2 border rounded-md dark:bg-blue-700 dark:text-white"
                                value={abstract.description}
                                readOnly
                            />
                        </div>
                        <div className="mt-4">
                            <a
                                href={`${import.meta.env.VITE_API_URL}/abstract/download/${abstract.fileName}`}
                                className="text-blue-600 hover:text-blue-900"
                            >
                                Download Video
                            </a>
                        </div>
                    </div>
                ) : null}

                {reviewed && abstract.review && (
                    <div className="mb-4 border-b-2 border-gray-300 pb-4">
                        <h2 className="text-xl font-semibold text-blue-700 dark:text-white mb-2">Current Review</h2>
                        <p><strong>Rating:</strong> {abstract.review.rating}</p>
                        <p><strong>Comment:</strong> {abstract.review.comment}</p>
                        {/* <p><strong>Reviewed On: </strong>{new Date(abstract.review.reviewedAt).toLocaleDateString()}</p> */}
                    </div>
                )}

                <div className="mt-4">
                    <label className="block mb-2 text-gray-700 dark:text-white">
                        Rating
                        <select
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            className="block w-full mt-1 p-2 border rounded-md dark:bg-gray-700 dark:text-white"
                        >
                            <option value={1}>1 - Poor</option>
                            <option value={2}>2 - Fair</option>
                            <option value={3}>3 - Good</option>
                            <option value={4}>4 - Very Good</option>
                            <option value={5}>5 - Excellent</option>
                        </select>
                    </label>

                    <label className="block mb-2 text-gray-700 dark:text-white">
                        Review Comment
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="block w-full mt-1 p-2 border rounded-md dark:bg-blue-700 dark:text-white"
                        />
                    </label>
                </div>

                <div className="mt-4">
                    <button
                        onClick={() => setShowModal(true)}
                        className={`${reviewed ? "bg-yellow-400 hover:bg-yellow-700" : "bg-blue-500 hover:bg-blue-700"} text-white font-bold py-2 px-4 rounded`}
                    >
                        {reviewed ? 'Update Review' : 'Submit Review'}
                    </button>
                </div>

                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold mb-4">Confirm Review</h2>
                            <p>Are you sure you want to {reviewed ? 'update' : 'submit'} this review?</p>
                            <div className="mt-4">
                                <button
                                    onClick={handleSubmitReview}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                >
                                    Yes
                                </button>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {serverMessage && (
                    <div className="mt-4 p-4 bg-green-200 text-green-800 rounded-md">
                        {serverMessage}
                    </div>
                )}

                <div className='mt-8'>
                    <Link className='bg-blue-200 p-2 rounded-lg text-blue-800 text-semibold' to={'/admin/abstracts'}>&larr; Backe to abstracts</Link>
                </div>
            </div>
        </div>
    );
};

export default ReviewAbstract;
