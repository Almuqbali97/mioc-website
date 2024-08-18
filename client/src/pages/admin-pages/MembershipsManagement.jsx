import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/common/Loading';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const MembershipsManagement = () => {
    const [memberships, setMemberships] = useState([]);
    const [fetchMsg, setFetchMsg] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const membershipsPerPage = 10;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + '/membership/get/all', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                if (response.ok) {
                    const membershipsData = await response.json();
                    setMemberships(membershipsData);
                } else {
                    const errRes = await response.json();
                    setFetchMsg(errRes.message || 'An error occurred.');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setFetchMsg('An error occurred. Please try again later.');
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset to the first page when the search query changes
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        setCurrentPage(1); // Reset to the first page when the filter changes
    };

    const filteredMemberships = memberships.filter(membership => {
        const matchesSearch =
            membership.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            membership.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            membership.membership_id.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesFilter =
            filter === 'all' ||
            (filter === '2024' && membership.expirationDate.includes('2024'));

        return matchesSearch && matchesFilter;
    });

    // Calculate pagination
    const indexOfLastMembership = currentPage * membershipsPerPage;
    const indexOfFirstMembership = indexOfLastMembership - membershipsPerPage;
    const currentMemberships = filteredMemberships.slice(indexOfFirstMembership, indexOfLastMembership);

    const totalPages = Math.ceil(filteredMemberships.length / membershipsPerPage);

    return (
        <div className="p-4">
            <div className="mb-4">
                <h1 className="text-3xl font-bold mb-6 text-indigo-600">Memberships Management</h1>
                <h2 className="text-lg font-semibold">Total Memberships: {filteredMemberships.length}</h2>
                {fetchMsg && <p className="text-red-500">{fetchMsg}</p>}
            </div>
            <div className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
                <input
                    type="text"
                    placeholder="Search by name, email, or membership ID"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full md:w-1/3 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <select
                    value={filter}
                    onChange={handleFilterChange}
                    className="w-full md:w-1/4 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                >
                    <option value="all">All</option>
                    <option value="2024">Expires in 2024</option>
                </select>
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <Loading />
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-indigo-600 text-white">
                            <tr>
                                <th scope="col" className="px-3 py-3 text-left text-sm font-medium uppercase tracking-wider">
                                    #
                                </th>
                                <th scope="col" className="px-3 py-3 text-left text-sm font-medium uppercase tracking-wider">
                                    Membership ID
                                </th>
                                <th scope="col" className="px-3 py-3 text-left text-sm font-medium uppercase tracking-wider">
                                    Full Name
                                </th>
                                <th scope="col" className="px-3 py-3 text-left text-sm font-medium uppercase tracking-wider">
                                    Email
                                </th>
                                <th scope="col" className="px-3 py-3 text-left text-sm font-medium uppercase tracking-wider">
                                    Payment Status
                                </th>
                                <th scope="col" className="px-3 py-3 text-left text-sm font-medium uppercase tracking-wider">
                                    Expiration Date
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {currentMemberships.map((membership, index) => (
                                <tr key={index} className="hover:bg-indigo-50 transition duration-150">
                                    <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {indexOfFirstMembership + index + 1}
                                    </td>
                                    <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {membership.membership_id}
                                    </td>
                                    <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {membership.fullName}
                                    </td>
                                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {membership.email}
                                    </td>
                                    <td className="px-3 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${membership.paymentStatus === 'Success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                            {membership.paymentStatus}
                                        </span>
                                    </td>
                                    <td className="px-3 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${membership.expirationDate.includes('2024') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                            {membership.expirationDate}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            <div className="mt-6 flex justify-between items-center">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 flex items-center text-white ${currentPage === 1 ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} rounded-md transition duration-150`}
                >
                    <FaArrowLeft className="mr-2" /> Previous
                </button>
                <span className="text-sm text-gray-700">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 flex items-center text-white ${currentPage === totalPages ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} rounded-md transition duration-150`}
                >
                    Next <FaArrowRight className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default MembershipsManagement;
