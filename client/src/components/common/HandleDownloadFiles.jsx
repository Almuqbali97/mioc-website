import { useState } from 'react';

const HandleDownloadFiles = ({ fileKey }) => {
    const [downloadLink, setDownloadLink] = useState('');
    const [error, setError] = useState('');

    const fetchPresignedURL = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/abstract/download/${fileKey}`);
            if (!response.ok) {
                throw new Error('Failed to get presigned URL');
            }

            const data = await response.json();
            setDownloadLink(data.presignedURL);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <button onClick={fetchPresignedURL} className="bg-blue-500 text-white px-4 py-2 rounded">
                Get Download Link
            </button>
            {downloadLink && (
                <div className="mt-4">
                    <a href={downloadLink} download className="bg-green-500 text-white px-4 py-2 rounded">
                        Download Video
                    </a>
                </div>
            )}
            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    );
};

export default HandleDownloadFiles;
