import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserMultiFormatReader } from '@zxing/library';
import Webcam from 'react-webcam';

const RegistrationDesk = () => {
    const navigate = useNavigate();
    const [attendantData, setAttendantData] = useState(null);
    const [fetchMsg, setFetchMsg] = useState(null);
    const [showScanner, setShowScanner] = useState(false);
    const webcamRef = useRef(null);
    const codeReader = useRef(new BrowserMultiFormatReader());

    const handleScan = async (retry = false) => {
        setFetchMsg(null);
        const imageSrc = webcamRef.current.getScreenshot();

        if (imageSrc) {
            const img = new Image();
            img.src = imageSrc;

            img.onload = async () => {
                try {
                    const result = await codeReader.current.decodeFromImageElement(img);
                    const scannedId = result.getText();
                    fetchAttendantData(scannedId);
                } catch (err) {
                    console.error('Error decoding barcode:', err);
                    if (!retry) {
                        setTimeout(() => handleScan(true), 1000); // Retry after a short delay
                    } else {
                        setFetchMsg('Failed to scan barcode. Please try again.');
                    }
                }
            };
        } else {
            console.error('No image captured from webcam.');
            setFetchMsg('Failed to capture image. Please try again.');
        }
    };

    const fetchAttendantData = async (scannedId) => {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + `/registration/get/${scannedId}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            });

            if (response.ok) {
                const data = await response.json();
                setAttendantData(data);
                setShowScanner(false);
            } else {
                const errRes = await response.json();
                setFetchMsg(errRes.message || 'An error occurred.');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setFetchMsg('An error occurred. Please try again later.');
        }
    };

    const toggleScanner = () => {
        setShowScanner(!showScanner);
        setFetchMsg(null);
    };

    const handleScanAgain = () => {
        setAttendantData(null);
        toggleScanner();
    };

    return (
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Registration Desk</h1>
            {fetchMsg && <p className="text-red-500">{fetchMsg}</p>}
            {showScanner && (
                <>
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        className="mb-4"
                        width={500}
                        height={500}
                    />
                    <button onClick={() => handleScan(false)} className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded">
                        Scan Barcode
                    </button>
                </>
            )}
            {!showScanner && !attendantData && (
                <button onClick={toggleScanner} className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded">
                    {showScanner ? 'Hide Scanner' : 'Show Scanner'}
                </button>
            )}
            {attendantData && (
                <div className="mt-6 bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="px-4 py-5 bg-gray-100 border-b border-gray-200">
                        <h3 className="text-lg leading-6 font-bold text-gray-900">Attendant Information</h3>
                    </div>
                    <div className="px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                            <div className="sm:col-span-1 bg-gray-50 p-4 rounded-md">
                                <dt className="text-sm font-bold text-gray-500">Full Name</dt>
                                <dd className="mt-1 text-sm text-gray-900">{attendantData.firstName} {attendantData.lastName}</dd>
                            </div>
                            <div className="sm:col-span-1 bg-white p-4 rounded-md">
                                <dt className="text-sm font-bold text-gray-500">Country</dt>
                                <dd className="mt-1 text-sm text-gray-900">{attendantData.country}</dd>
                            </div>
                            <div className="sm:col-span-1 bg-gray-50 p-4 rounded-md">
                                <dt className="text-sm font-bold text-gray-500">Email</dt>
                                <dd className="mt-1 text-sm text-gray-900">{attendantData.email}</dd>
                            </div>
                            <div className="sm:col-span-1 bg-white p-4 rounded-md">
                                <dt className="text-sm font-bold text-gray-500">Phone</dt>
                                <dd className="mt-1 text-sm text-gray-900">{attendantData.mobile}</dd>
                            </div>
                            <div className="sm:col-span-1 bg-gray-50 p-4 rounded-md">
                                <dt className="text-sm font-bold text-gray-500">Ticket Type</dt>
                                <dd className="mt-1 text-sm text-gray-900">{attendantData.ticketType}</dd>
                            </div>
                            <div className="sm:col-span-1 bg-white p-4 rounded-md">
                                <dt className="text-sm font-bold text-gray-500">Amount</dt>
                                <dd className="mt-1 text-sm text-gray-900">{attendantData.amount} OMR</dd>
                            </div>
                            <div className="sm:col-span-1 bg-gray-50 p-4 rounded-md">
                                <dt className="text-sm font-bold text-gray-500">OOS Membership</dt>
                                <dd className="mt-1 text-sm text-gray-900">{attendantData.oosMembership}</dd>
                            </div>
                            <div className="sm:col-span-1 bg-white p-4 rounded-md">
                                <dt className="text-sm font-bold text-gray-500">Payment Date</dt>
                                <dd className="mt-1 text-sm text-gray-900">{attendantData.paymentDate}</dd>
                            </div>
                            <div className={`sm:col-span-1 p-4 rounded-md ${attendantData.paymentStatus === 'Success' ? 'bg-green-100' : 'bg-red-100'}`}>
                                <dt className="text-sm font-bold text-gray-500">Payment Status</dt>
                                <dd className={`mt-1 text-sm ${attendantData.paymentStatus === 'Success' ? 'text-green-800' : 'text-red-800'}`}>{attendantData.paymentStatus}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            )}
            {attendantData && (
                <div className="mt-6">
                    <button
                        onClick={handleScanAgain}
                        className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded"
                    >
                        Scan Again
                    </button>
                </div>
            )}
            <div className="mt-6">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default RegistrationDesk;
