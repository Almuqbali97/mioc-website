import { useState } from 'react';

const DirectFileDownload = ({ fileKey, btnText }) => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchAndDownloadFile = async () => {
        try {
            setLoading(true);
            setError('');

            const response = await fetch(`${import.meta.env.VITE_API_URL}/abstract/download/${fileKey}`);
            if (!response.ok) {
                throw new Error('Failed to get presigned URL');
            }

            const data = await response.json();
            const presignedURL = data.presignedURL;

            const fileResponse = await fetch(presignedURL);
            if (!fileResponse.ok) {
                throw new Error('Failed to download file');
            }

            const blob = await fileResponse.blob();
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileKey);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Cleanup
            window.URL.revokeObjectURL(url);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button
                onMouseDown={fetchAndDownloadFile}
                className='inline-block sm:text-md font-semibold w-auto text-center min-w-[180px] px-1 py-3 sm:px-[1.20rem] sm:py-4 text-white transition-all rounded-md shadow-lg sm:w-auto bg-gradient-to-r from-yellow-600 to-primary_brown hover:bg-gradient-to-b dark:shadow-blue-900 shadow-amber-300 hover:shadow-xl hover:shadow-primary_brown hover:-tranneutral-y-px '
                disabled={loading}
            >
                {loading ? 'Downloading...' : btnText}
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    );
};

export default DirectFileDownload;
