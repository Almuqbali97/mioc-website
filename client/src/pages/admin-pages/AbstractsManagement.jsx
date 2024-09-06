import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { topics } from '../../constants';
import Loading from '../../components/common/Loading';

const AbstractStatistics = ({ abstracts }) => {
    // Count total abstracts
    const totalAbstracts = abstracts.length;

    // Count abstracts by topic
    const topicCounts = topics.reduce((acc, topic) => {
        acc[topic] = abstracts.filter(abstract => abstract.topic === topic).length;
        return acc;
    }, {});

    // Count by presentation type
    const totalOralPresentations = abstracts.filter(abstract => abstract.presentationType === 'Oral presentation').length;
    const totalVideoPresentations = abstracts.filter(abstract => abstract.presentationType === 'Video').length;
    const totalPosters = abstracts.filter(abstract => abstract.presentationType === 'Poster').length;

    return (
        <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Abstract Statistics</h3>
            <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Total Abstracts</td>
                        <td className="px-6 py-4 whitespace-nowrap">{totalAbstracts}</td>
                    </tr>
                    {topics.map(topic => (
                        <tr key={topic}>
                            <td className="px-6 py-4 whitespace-nowrap">Total {topic} Abstracts</td>
                            <td className="px-6 py-4 whitespace-nowrap">{topicCounts[topic]}</td>
                        </tr>
                    ))}
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Total Oral Presentations</td>
                        <td className="px-6 py-4 whitespace-nowrap">{totalOralPresentations}</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Total Video Presentations</td>
                        <td className="px-6 py-4 whitespace-nowrap">{totalVideoPresentations}</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Total Posters</td>
                        <td className="px-6 py-4 whitespace-nowrap">{totalPosters}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};


const AbstractsManagement = () => {
    const [abstracts, setAbstracts] = useState([]);
    const [fetchMsg, setFetchMsg] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const abstractsPerPage = 10;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + '/abstract/get/all', {
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

    const handleFilterChange = (event) => {
        setSelectedTopic(event.target.value);
        setCurrentPage(1); // Reset to the first page when the filter changes
    };

    const handleReviewAbstract = (id) => {
        navigate(`/review-abstract/${id}`);
    };

    const filteredAbstracts = selectedTopic
        ? abstracts.filter(abstract => abstract.topic === selectedTopic)
        : abstracts;

    // Calculate pagination
    const indexOfLastAbstract = currentPage * abstractsPerPage;
    const indexOfFirstAbstract = indexOfLastAbstract - abstractsPerPage;
    const currentAbstracts = filteredAbstracts.slice(indexOfFirstAbstract, indexOfLastAbstract);

    const totalPages = Math.ceil(filteredAbstracts.length / abstractsPerPage);

    return (
        <div className="p-4">
            <div className="mb-4">
                <h1 className="text-3xl font-bold mb-6 text-indigo-600">Abstracts Management</h1>
                <h2 className="text-lg font-semibold">Total Abstracts: {filteredAbstracts.length}</h2>
                {fetchMsg && <p className="text-red-500">{fetchMsg}</p>}
            </div>
            <div className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
                <select
                    value={selectedTopic}
                    onChange={handleFilterChange}
                    className="w-full md:w-1/4 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                >
                    <option value="">All Topics</option>
                    {topics.map((topic, index) => (
                        <option key={index} value={topic}>{topic}</option>
                    ))}
                </select>
            </div>
            {/* Add the new AbstractStatistics component here */}
            <AbstractStatistics abstracts={abstracts} />
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


export default AbstractsManagement;

