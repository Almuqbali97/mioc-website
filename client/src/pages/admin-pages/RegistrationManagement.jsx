import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';
import Loading from '../../components/common/Loading';

const RegistrationManagement = () => {
    const [registrants, setRegistrants] = useState([]);
    const [fetchMsg, setFetchMsg] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + '/registration/get/all', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                if (response.ok) {
                    const registrantsData = await response.json();
                    setRegistrants(registrantsData);
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

    const handlePrintBadge = (registrant) => {
        const qrCodeDataUrl = document.getElementById(`qr-${registrant.id}`).toDataURL();

        const badgeWindow = window.open('', 'Print Badge', 'height=400,width=600');
        badgeWindow.document.write('<html><head><title>Print Badge</title>');
        badgeWindow.document.write('</head><body>');
        badgeWindow.document.write(`<div style="text-align: center;">
                                        <h1>${registrant.fullName}</h1>
                                        <p>${registrant.email}</p>
                                        <div>
                                            <img src="${qrCodeDataUrl}" alt="QR Code" />
                                        </div>
                                    </div>`);
        badgeWindow.document.write('</body></html>');
        badgeWindow.document.close();
        // badgeWindow.print();
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredRegistrants = registrants.filter(registrant =>
        registrant.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        // registrant.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        registrant.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <div className="mb-4">
                <h1 className="text-2xl font-bold mb-4">Registrants Management</h1>
                {fetchMsg && <p className="text-red-500">{fetchMsg}</p>}
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by name or email"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
            </div>
            {loading ? <Loading /> : (
                <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Full Name
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Ticket Type
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Amount
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Payment Status
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Details
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredRegistrants.map((registrant, index) => (
                            <tr key={index}>
                                <td className="px-3 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">
                                        {registrant.fullName}
                                    </div>
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{registrant.email}</div>
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{registrant.ticketType}</div>
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{registrant.amount} OMR</div>
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap">
                                    {registrant.paymentStatus === 'Success' ? (
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Paid
                                        </span>
                                    ) : (
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                            Unpaid
                                        </span>
                                    )}
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap text-sm font-medium">
                                    <QRCode
                                        id={`qr-${registrant.id}`}
                                        value={`${registrant.id}`}
                                        size={128}
                                        level={"H"}
                                        includeMargin={true}
                                        style={{ display: 'none' }} // Hide the QR code in the main page
                                    />
                                    <button
                                        onClick={() => handlePrintBadge(registrant)}
                                        className="text-indigo-600 hover:text-indigo-900"
                                    >
                                        Create & Print Badge
                                    </button>
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap text-sm font-medium">
                                    <button
                                        onClick={() => navigate(`/admin/registration/${registrant.id}`)}
                                        className="text-indigo-600 hover:text-indigo-900"
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default RegistrationManagement;
