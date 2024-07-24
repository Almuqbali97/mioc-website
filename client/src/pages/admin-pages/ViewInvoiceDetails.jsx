import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ViewInvoiceDetails = () => {
    const { order_id } = useParams();
    const navigate = useNavigate();
    const [invoiceDetails, setInvoiceDetails] = useState(null);
    const [fetchMsg, setFetchMsg] = useState(null);

    useEffect(() => {
        const fetchInvoiceDetails = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + `/invoice/${order_id}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                if (response.ok) {
                    const data = await response.json();
                    setInvoiceDetails(data);
                } else {
                    const errRes = await response.json();
                    setFetchMsg(errRes.message || 'An error occurred.');
                }
            } catch (error) {
                console.error('Error fetching invoice details:', error);
                setFetchMsg('An error occurred. Please try again later.');
            }
        };

        fetchInvoiceDetails();
    }, [order_id]);

    if (!invoiceDetails) {
        return <div>Loading...</div>;
    }

    const statusClasses = {
        Success: 'bg-green-100 text-green-800',
        Failure: 'bg-red-100 text-red-800',
    };

    return (
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Invoice Details</h1>
            {fetchMsg && <p className="text-red-500">{fetchMsg}</p>}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="px-4 py-5 bg-gray-100 border-b border-gray-200">
                    <h3 className="text-lg leading-6 font-bold text-gray-900">Invoice Information</h3>
                </div>
                <div className="px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        {Object.entries(invoiceDetails).map(([key, value], index) => (
                            <div key={index} className={`sm:col-span-1 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} p-4 rounded-md`}>
                                <dt className="text-sm font-bold text-gray-500">{key.replace(/_/g, ' ')}</dt>
                                <dd className="mt-1 text-sm text-gray-900">{value}</dd>
                            </div>
                        ))}
                    </dl>
                    <div className={`px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 mt-8 rounded-md ${statusClasses[invoiceDetails.order_status]}`}>
                        <dt className="text-sm font-bold text-gray-500">Order Status</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{invoiceDetails.order_status}</dd>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded"
                >
                    Back to Registration Details
                </button>
            </div>
        </div>
    );
};

export default ViewInvoiceDetails;
