import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ViewRegistrationDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [registrationDetails, setRegistrationDetails] = useState(null);
    const [fetchMsg, setFetchMsg] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + `/registration/get/${id}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                if (response.ok) {
                    const data = await response.json();
                    setRegistrationDetails(data);
                } else {
                    const errRes = await response.json();
                    setFetchMsg(errRes.message || 'An error occurred.');
                }
            } catch (error) {
                console.error('Error fetching details:', error);
                setFetchMsg('An error occurred. Please try again later.');
            }
        };

        fetchDetails();
    }, [id]);

    if (!registrationDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Registration Details</h1>
            {fetchMsg && <p className="text-red-500">{fetchMsg}</p>}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 bg-gray-100">
                    <h3 className="text-lg leading-6 font-bold text-gray-900">Registrant Information</h3>
                </div>
                <div className="border-t-2 border-gray-200">
                    <dl>
                        <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-bold text-gray-500">Full Name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{registrationDetails.fullName} {registrationDetails.lastName}</dd>
                        </div>
                        {/* <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-bold text-gray-500">Email</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{registrationDetails.email}</dd>
                        </div> */}
                        <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-bold text-gray-500">Mobile</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{registrationDetails.mobile}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-bold text-gray-500">Country</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{registrationDetails.country}</dd>
                        </div>
                        <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-bold text-gray-500">State</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{registrationDetails.state}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-bold text-gray-500">City</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{registrationDetails.city}</dd>
                        </div>
                        <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-bold text-gray-500">Zip</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{registrationDetails.zip}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-bold text-gray-500">Amount</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{registrationDetails.amount} OMR</dd>
                        </div>
                        <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-bold text-gray-500">Ticket Type</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{registrationDetails.ticketType}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-bold text-gray-500">OOS Membership</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{registrationDetails.oosMembership}</dd>
                        </div>
                        <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-bold text-gray-500">Payment Date</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{registrationDetails.paymentDate}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-bold text-gray-500">Payment Status</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{registrationDetails.paymentStatus === 'Success' ? <span className='bg-green-200 p-1 rounded-md'>{registrationDetails.paymentStatus}</span> : <span className='bg-red-200 p-1 rounded-md'>{registrationDetails.paymentStatus}</span>}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-bold text-gray-500">Order ID</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {registrationDetails.orderId}
                                <button
                                    onClick={() => navigate(`/admin/invoice/${registrationDetails.orderId}`)}
                                    className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                                >
                                    Invoice Details
                                </button>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className="mt-6">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded"
                >
                    Back to Registration List
                </button>
            </div>
        </div>
    );
};

export default ViewRegistrationDetails;
