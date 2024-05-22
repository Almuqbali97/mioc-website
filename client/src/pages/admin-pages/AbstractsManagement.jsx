import React, { useState, useEffect } from 'react';
import Loading from '../../components/common/Loading';

const topics = [
    "Cataract & Lens Surgery",
    "Contact Lens and Refraction",
    "Cornea, External Eye Diseases, and Eye Banking",
    "Glaucoma",
    "Medical Retina",
    "Surgical Retina",
    "Neuro-ophthalmology",
    "Ocular Imaging",
    "Ocular Oncology",
    "Oculoplasty",
    "Ophthalmic Education/Young Ophthalmologists",
    "Ophthalmic Epidemiology",
    "Ophthalmic Trauma",
    "Ophthalmic Pathology and Microbiology",
    "Ophthalmic Nursing",
    "Ophthalmic Assistants & Technicians Optometry",
    "Orbital, Oculoplastic, and Lacrimal Diseases",
    "Pathology",
    "Pediatric Ophthalmology and Strabismus",
    "Refractive Surgery",
    "Uveitis",
    "Vision Rehabilitation",
    "Vision Sciences Vitreoretina",
    "Video Presentation",
];

const AbstractsManagement = () => {
    const [abstracts, setAbstracts] = useState([]);
    const [fetchMsg, setFetchMsg] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState('');
    const [downloadingAbstracts, setDownloadingAbstracts] = useState({});
    const [confirmAction, setConfirmAction] = useState(null); // To manage confirmation dialog
    const [loading, setLoading] = useState(false); // To manage the loading state for approve/reject actions

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

    const handleDownload = async (e, id, fileName) => {
        setDownloadingAbstracts(prevState => ({ ...prevState, [id]: true }));
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/abstract/download/${fileName}`, {
                method: 'GET',
                credentials: 'include'
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
            window.URL.revokeObjectURL(downloadUrl);
        } catch (error) {
            console.error('Failed to download the file:', error);
        } finally {
            setDownloadingAbstracts(prevState => ({ ...prevState, [id]: false }));
        }
    };

    const handleConfirm = async () => {
        if (!confirmAction) return;
        const { type, id, email } = confirmAction;
        setLoading(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/abstract/${type}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ email: email })
            });

            if (response.ok) {
                console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} successful`);
                window.location.reload();
            } else {
                const errRes = await response.json();
                throw new Error(errRes.message || 'Network response was not ok');
            }
        } catch (error) {
            console.error(`Failed to ${type}:`, error);
        } finally {
            setLoading(false);
            setConfirmAction(null);
        }
    };

    const handleReject = (e, id, email) => {
        setConfirmAction({ type: 'reject', id, email });
    };

    const handleApprove = (e, id, email) => {
        setConfirmAction({ type: 'approve', id, email });
    };

    const handleFilterChange = (event) => {
        setSelectedTopic(event.target.value);
    };

    const filteredAbstracts = selectedTopic
        ? abstracts.filter(abstract => abstract.topic === selectedTopic)
        : abstracts;

    return (
        <div>
            {confirmAction && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                            Confirm {confirmAction.type}
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Are you sure you want to {confirmAction.type} this abstract?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleConfirm}
                                    disabled={loading}
                                >
                                    {loading ? 'Processing...' : 'Yes'}
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setConfirmAction(null)}
                                    disabled={loading}
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="mb-4">
                <label htmlFor="topicFilter" className="block text-sm font-medium text-gray-700">Filter by Topic:</label>
                <select
                    id="topicFilter"
                    name="topicFilter"
                    value={selectedTopic}
                    onChange={handleFilterChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                    <option value="">All Topics</option>
                    {topics.map((topic, index) => (
                        <option key={index} value={topic}>{topic}</option>
                    ))}
                </select>
            </div>
            <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Author
                        </th>
                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Title
                        </th>
                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Topic
                        </th>
                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Download
                        </th>
                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {filteredAbstracts.map((abstract, index) => (
                        <tr key={index}>
                            <td className="px-3 py-4 whitespace-nowrap">
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
                            <td className="px-3 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{abstract.title}</div>
                            </td>
                            <td className="px-3 py-4 whitespace-nowrap">
                                {abstract.status === 'approved' ? (
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        {abstract.status}
                                    </span>
                                ) : abstract.status === 'rejected' ? (
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                        {abstract.status}
                                    </span>
                                ) : (
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                        {abstract.status}
                                    </span>
                                )}
                            </td>
                            <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                                {abstract.topic}
                            </td>
                            <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                                <button onClick={(e) => handleDownload(e, abstract.id, abstract.fileName)}>
                                    {downloadingAbstracts[abstract.id] ? <div className='h-6'><Loading /></div> : 'Download Doc'}
                                </button>
                            </td>
                            <td className="px-3 py-4 whitespace-nowrap text-sm font-medium">
                                <button
                                    onClick={(e) => handleApprove(e, abstract.id, abstract.email)}
                                    className="text-indigo-600 hover:text-indigo-900"
                                    disabled={abstract.status === 'approved' || abstract.status === 'rejected'}
                                >
                                    Approve
                                </button>
                                <button
                                    onClick={(e) => handleReject(e, abstract.id, abstract.email)}
                                    className="ml-2 text-red-600 hover:text-red-900"
                                    disabled={abstract.status === 'approved' || abstract.status === 'rejected'}
                                >
                                    Reject
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AbstractsManagement;
