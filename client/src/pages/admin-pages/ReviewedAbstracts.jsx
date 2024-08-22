import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/common/Loading';

const ReviewedAbstracts = () => {
    const [abstracts, setAbstracts] = useState([]);
    const [fetchMsg, setFetchMsg] = useState(null);
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
                    const reviewedAbstracts = abstractsData.filter(abstract => abstract.status === 'reviewed');
                    setAbstracts(reviewedAbstracts);
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

    const handleDetails = (id) => {
        navigate(`/review-abstract/${id}`);
    };

    const handleApprove = async (abstract) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/abstract/approve`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    id: abstract.id,
                    email: abstract.email,
                    firstName: abstract.firstName,
                    lastName: abstract.lastName,
                    title: abstract.title
                })
            });

            if (response.ok) {
                setAbstracts(prevAbstracts =>
                    prevAbstracts.map(a => a.id === abstract.id ? { ...a, status: 'approved' } : a)
                );
            } else {
                const errRes = await response.json();
                alert(errRes.message || 'Failed to approve the abstract.');
            }
        } catch (error) {
            console.error('Error approving abstract:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    const handleReject = async (id) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/abstract/reject`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ id })
            });

            if (response.ok) {
                setAbstracts(prevAbstracts =>
                    prevAbstracts.map(a => a.id === id ? { ...a, status: 'rejected' } : a)
                );
            } else {
                const errRes = await response.json();
                alert(errRes.message || 'Failed to reject the abstract.');
            }
        } catch (error) {
            console.error('Error rejecting abstract:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    const getRatingColor = (rating) => {
        if (rating >= 4.5) return 'bg-green-500';
        if (rating >= 3.5) return 'bg-yellow-500';
        if (rating >= 2.5) return 'bg-orange-500';
        return 'bg-red-500';
    };

    // Calculate pagination
    const indexOfLastAbstract = currentPage * abstractsPerPage;
    const indexOfFirstAbstract = indexOfLastAbstract - abstractsPerPage;
    const currentAbstracts = abstracts.slice(indexOfFirstAbstract, indexOfLastAbstract);

    const totalPages = Math.ceil(abstracts.length / abstractsPerPage);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="mb-6">
                <h1 className="text-4xl font-extrabold mb-8 text-indigo-700">Reviewed Abstracts</h1>
                <h2 className="text-xl font-semibold mb-4">Total Reviewed Abstracts: {abstracts.length}</h2>
                {fetchMsg && <p className="text-red-600 font-medium">{fetchMsg}</p>}
            </div>
            <div className="overflow-x-auto shadow-sm rounded-lg">
                <table className="min-w-full bg-white divide-y divide-gray-200">
                    <thead className="bg-indigo-600">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                Author
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                Presentation Type
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                Rating
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-white uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentAbstracts.map((abstract, index) => (
                            <tr key={index} className="hover:bg-indigo-50 transition duration-150">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {indexOfFirstAbstract + index + 1}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    <div className="text-sm font-medium text-gray-900">
                                        {abstract.firstName} {abstract.lastName}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {abstract.email}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {abstract.title.length > 100 ? abstract.title.slice(0, 50) + "..." : abstract.title}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {abstract.presentationType}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {abstract.review ? (
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRatingColor(abstract.review.rating)}`}>
                                            {abstract.review.rating}
                                        </span>
                                    ) : 'N/A'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex justify-end space-x-4">
                                        <button
                                            className="px-4 py-2 text-white bg-green-600 hover:bg-green-700 rounded-md transition duration-150"
                                            onClick={() => handleApprove(abstract)}
                                            disabled={abstract.status === 'approved' || abstract.status === 'rejected'}
                                        >
                                            Approve
                                        </button>
                                        <button
                                            className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md transition duration-150"
                                            onClick={() => handleReject(abstract.id)}
                                            disabled={abstract.status === 'approved' || abstract.status === 'rejected'}
                                        >
                                            Reject
                                        </button>
                                    </div>
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

export default ReviewedAbstracts;
