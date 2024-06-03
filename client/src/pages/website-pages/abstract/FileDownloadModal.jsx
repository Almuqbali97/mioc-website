import React from 'react';
import { handleFileDownload } from '../../../helper/handleFilesDownload';

const FileDownloadModal = ({ isOpen, onClose, files }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <h2 className="text-xl font-bold mb-4">Download Presentation Templates</h2>
                <ul>
                    {files.map((file, index) => (
                        <li key={index} className="mb-2">
                            <button
                                className="text-blue-500 hover:underline"
                                onClick={() => handleFileDownload(file)}
                            >
                                {file}
                            </button>
                        </li>
                    ))}
                </ul>
                <button
                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default FileDownloadModal;
