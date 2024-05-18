import React, { useState, useEffect } from 'react';

const AbstractsManagement = () => {

    const [abstracts, setAbstracts] = useState([]);
    const [fetchMsg, setFetchMsg] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/abstract/get/all', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                if (response.ok) {
                    const abstractsData = await response.json();
                    // const abstractsData = successRes.asbtracts;
                    // console.log(successRes);
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
    }, []); // Dependency array can be updated if needed
    // console.log(abstracts);

    const handleDownload = async (e, fileName) => {
        try {
            const response = await fetch(`http://localhost:3000/abstract/download/${fileName}`, {
                method: 'GET',
                credentials: 'include'
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const blob = await response.blob();
            console.log('Blob:', blob);
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
        }
    };


    const handleApprove = async (e, id, email) => {
        try {
            const response = await fetch(`http://localhost:3000/abstract/approve/${id}`, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',  // Setting Content-Type as application/json
                },
                body: JSON.stringify({ email: email }) 
            });
            // window.location.reload(); // Reload the page to reflect changes
            if (!response.ok) {
                // If the server responds with a non-200 status, throw an error
                throw new Error('Network response was not ok');
            }

            // If the response is okay, log success and reload the page
            console.log('Approval successful'); // Log that the approval was successful
        } catch (error) {
            // Log any errors that occur during the fetch operation
            console.error('Failed to approve:', error);
        }
    };

    const handleReject = async (e, id, email) => {
        try {
            const response = await fetch(`http://localhost:3000/abstract/reject/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',  // Setting Content-Type as application/json
                },
                credentials: 'include',
                body: JSON.stringify({ email: email }) 
            });
            window.location.reload(); // Reload the page to reflect changes
            if (!response.ok) {
                // If the server responds with a non-200 status, throw an error
                throw new Error('Network response was not ok');
            }

            // If the response is okay, log success and reload the page
            console.log('Reject successful'); // Log that the approval was successful
        } catch (error) {
            // Log any errors that occur during the fetch operation
            console.error('Failed to approve:', error);
        }
    };

    console.log(abstracts);
    return (
        <div>
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
                    {abstracts.map((abstract, index) => {
                        return <tr key={index}>
                            <td className="px-3 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    {/* <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full" src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=" alt=""/>
                                </div> */}
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
                                <button onClick={(e) => handleDownload(e, abstract.fileName)}>Download Doc</button>
                            </td>
                            <td className="px-3 py-4 whitespace-nowrap  text-sm font-medium">
                                <button onClick={(e) => handleApprove(e, abstract._id, abstract.email)} className="text-indigo-600 hover:text-indigo-900">Approve</button>
                                <button onClick={(e) => handleReject(e, abstract._id, abstract.email)} className="ml-2 text-red-600 hover:text-red-900">Reject</button>
                            </td>
                        </tr>

                    })}

                </tbody>
            </table>
        </div>
    );
}

export default AbstractsManagement;
