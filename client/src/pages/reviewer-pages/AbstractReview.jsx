import React, { useState, useEffect, useContext, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/common/Loading';
import AuthContext from '../../context/AuthProvider';

const reviewerTopics = {
    "drrikin@gmail.com": ["Cataract & Lens Surgery"],
    "SawsanAl.bloushi@gmail.com": ["Contact Lens and Refraction", "Optometry"],
    "tr.saifbanioraba@gmail.com": ["Cornea, External Eye Diseases and Eye Banking"],
    "walugail@yahoo.co.uk": ["Glaucoma"],
    "rashid3099@hotmail.com": ["Keratoconus"],
    "nisreenasser87@gmail.com": ["Neuro-ophthalmology"],
    "umali_mahrezi@yahoo.com": ["Ocular Imaging", "Ophthalmic Assistants & Technicians"],
    "dr.masoomian@yahoo.com": ["Ocular Oncology"],
    "m.mameesh@gmail.com": ["Ophthalmic Education/Young Ophthalmologists"],
    "sajinidurairaj@yahoo.co.in": ["Ophthalmic Epidemiology", "Ophthalmic Pathology and Microbiology"],
    "asooy927@gmail.com": ["Ophthalmic Nursing"],
    "alfarsi52888@gmail.com": ["Ophthalmic Trauma"],
    "draliraza12@gmail.com": ["Orbital, Oculoplastic, and Lacrimal Diseases"],
    "kisheyeh@gmail.com": ["Pediatric Ophthalmology and Strabismus"],
    "almahrouqi.h@gmail.com": ["Refractive Surgery"],
    "sreelathasantosh@gmail.com": ["Retina - Medical"],
    "predev28@gmail.com": ["Retina - Surgical"],
    "amal_alaliyani@icloud.com": ["Uveitis"],
    "dr.shihab89@gmail.com": ["Video Presentation"],
    "optomnoufal@gmail.com": ["Vision Rehabilitation"],
    "ashokabandara75@gmail.com": ["Miscellaneous"],
    "almuqbalimusab@gmail.com": ["Keratoconus"],
    "mqbali97@gmail.com": ["Miscellaneous"]
};

const AbstractReview = () => {
    const [abstracts, setAbstracts] = useState([]);
    const [fetchMsg, setFetchMsg] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const abstractsPerPage = 10;
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + '/abstract/reviewer/get/all', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                if (response.ok) {
                    const abstractsData = await response.json();
                    setAbstracts(abstractsData);
                } else {
                    const errRes = await response.json();
                    setFetchMsg(errRes.message || 'An error occurred.');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setFetchMsg('An error occurred. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const reviewerEmail = user?.email;
    const topicsForReviewer = reviewerTopics[reviewerEmail] || [];

    const filteredAbstracts = useMemo(() => {
        return topicsForReviewer.length > 0
            ? abstracts.filter(abstract => topicsForReviewer.includes(abstract.topic))
            : [];
    }, [abstracts, topicsForReviewer]);

    // Calculate pagination
    const indexOfLastAbstract = currentPage * abstractsPerPage;
    const indexOfFirstAbstract = indexOfLastAbstract - abstractsPerPage;
    const currentAbstracts = filteredAbstracts.slice(indexOfFirstAbstract, indexOfLastAbstract);

    const totalPages = Math.ceil(filteredAbstracts.length / abstractsPerPage);

    const handleReviewAbstract = (id) => {
        navigate(`/abstract/review/${id}`);
    };

    if (isLoading) {
        return <div className=' h-screen flex justify-center items-center'>
            <div className='h-24'>
                <Loading />;

            </div>
        </div>
    }

    return (
        <div className='w-full bg-blue-50 min-h-screen'>
            <div className=" space-y-5 p-4">
                <Link to={'/'} className='bg-blue-200 px-3 py-2 rounded-md shadow-md text-blue-900 font-semibold'>
                    Back to MIOC Website
                </Link>
                <h1 className="text-3xl font-bold text-indigo-600">Abstracts Review</h1>
            </div>
            <div className="mb-4 mt-3 px-4">
                <p className="text-lg font-medium">Reviewer: {user?.firstName} {user?.lastName}</p>
                <p className="text-lg font-medium">Reviewing Topic: {topicsForReviewer.join(', ')}, Total ({filteredAbstracts.length})</p>
                {fetchMsg && (
                    <div className="mt-4 text-red-600">
                        {fetchMsg}
                    </div>
                )}
            </div>
            <div className="overflow-x-auto px-4">
                {filteredAbstracts.length === 0 ? (
                    <p className="text-gray-500 mt-4">No abstracts available for review.</p>
                ) : (
                    <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-indigo-600 text-white">
                            <tr>
                                <th scope="col" className="px-3 py-3 text-left text-sm font-medium uppercase tracking-wider">
                                    #
                                </th>
                                <th scope="col" className="px-3 py-3 text-left text-sm font-medium uppercase tracking-wider">
                                    Author
                                </th>
                                <th scope="col" className="px-3 py-3 text-left text-sm font-medium uppercase tracking-wider">
                                    Title
                                </th>
                                <th scope="col" className="px-3 py-3 text-left text-sm font-medium uppercase tracking-wider">
                                    Status
                                </th>
                                <th scope="col" className="px-3 py-3 text-left text-sm font-medium uppercase tracking-wider">
                                    Topic
                                </th>
                                <th scope="col" className="px-3 py-3 text-left text-sm font-medium uppercase tracking-wider">
                                    Presentation Type
                                </th>
                                <th scope="col" className="px-3 py-3 text-left text-sm font-medium uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {currentAbstracts.map((abstract, index) => (
                                <tr key={index} className="hover:bg-gray-100 transition duration-150">
                                    <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {indexOfFirstAbstract + index + 1}
                                    </td>
                                    <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {abstract.firstName} {abstract.lastName}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {abstract.email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-3 py-4">
                                        <div className="text-sm text-gray-900">
                                            {abstract.title.length > 100 ? abstract.title.slice(0, 50) + "..." : abstract.title}
                                        </div>
                                    </td>

                                    <td className="px-3 py-4 whitespace-nowrap">
                                        {abstract.status === 'pending' && (
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                Pending
                                            </span>
                                        )}
                                        {abstract.status === 'reviewed' && (
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                Reviewed
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-3 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{abstract.topic}</div>
                                    </td>
                                    <td className="px-3 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{abstract.presentationType}</div>
                                    </td>
                                    <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button
                                            className="text-indigo-600 hover:text-indigo-900"
                                            onClick={() => handleReviewAbstract(abstract.id)}
                                        >
                                            Review
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            <div className="mt-6 flex justify-between items-center px-4">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1 || isLoading || filteredAbstracts.length === 0}
                    className={`px-4 py-2 flex items-center text-white ${currentPage === 1 || filteredAbstracts.length === 0 ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} rounded-md transition duration-150`}
                >
                    Previous
                </button>
                <span className="text-sm text-gray-700">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages || isLoading || filteredAbstracts.length === 0}
                    className={`px-4 py-2 flex items-center text-white ${currentPage === totalPages || filteredAbstracts.length === 0 ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} rounded-md transition duration-150`}
                >
                    Next
                </button>
            </div>
            {fetchMsg && (
                <div className="mt-4 text-red-600">
                    {fetchMsg}
                </div>
            )}
        </div>
    );
};

export default AbstractReview;
