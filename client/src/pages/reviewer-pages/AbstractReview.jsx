import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
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
    "alfarsi23@hotmail.com": ["Ophthalmic Education/Young Ophthalmologists"],
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
    "almuqbalimusab@gmail.com": ["Miscellaneous"],
    "mqbali97@gmail.com": ["Miscellaneous"]
};

const AbstractReview = () => {
    const [abstracts, setAbstracts] = useState([]);
    const [fetchMsg, setFetchMsg] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
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
            }
        };

        fetchData();
    }, []);

    const reviewerEmail = user?.email;
    const topicsForReviewer = reviewerTopics[reviewerEmail] || [];

    const filteredAbstracts = topicsForReviewer.length > 0
        ? abstracts.filter(abstract => topicsForReviewer.includes(abstract.topic))
        : [];

    // Calculate pagination
    const indexOfLastAbstract = currentPage * abstractsPerPage;
    const indexOfFirstAbstract = indexOfLastAbstract - abstractsPerPage;
    const currentAbstracts = filteredAbstracts.slice(indexOfFirstAbstract, indexOfLastAbstract);

    const totalPages = Math.ceil(filteredAbstracts.length / abstractsPerPage);
    const handleReviewAbstract = (id) => {
        navigate(`/abstract/reviewe/${id}`);
    };
    return (
        <div className="p-4">
            <div className="mb-4">
                <h1 className="text-3xl font-bold mb-6 text-indigo-600">Abstracts Review</h1>
                <p className="text-lg font-medium">Reviewer: {user?.firstName} {user?.lastName}</p>
                <p className="text-lg font-medium">Reviewing Topic: {topicsForReviewer.join(', ')}, Total ({filteredAbstracts.length})</p>
                {fetchMsg && <p className="text-red-500">{fetchMsg}</p>}
            </div>
            <div className="overflow-x-auto">
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
                            <tr key={index} className="hover:bg-indigo-50 transition duration-150">
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
            </div>
            <div className="mt-6 flex justify-between items-center">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 flex items-center text-white ${currentPage === 1 ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} rounded-md transition duration-150`}
                >
                    Previous
                </button>
                <span className="text-sm text-gray-700">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 flex items-center text-white ${currentPage === totalPages ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} rounded-md transition duration-150`}
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
