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
// import { useState } from 'react';

// const HandleDownloadFiles = ({ fileKey }) => {
//     const [error, setError] = useState('');

//     const fetchAndDownloadFile = async () => {
//         try {
//             const response = await fetch(`${import.meta.env.VITE_API_URL}/abstract/download/${fileKey}`);
//             if (!response.ok) {
//                 throw new Error('Failed to get presigned URL');
//             }

//             const data = await response.json();
//             const presignedURL = data.presignedURL;

//             const fileResponse = await fetch(presignedURL);
//             if (!fileResponse.ok) {
//                 throw new Error('Failed to download file');
//             }

//             const blob = await fileResponse.blob();
//             const url = window.URL.createObjectURL(blob);

//             const link = document.createElement('a');
//             link.href = url;
//             link.setAttribute('download', fileKey);
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);

//             // Cleanup
//             window.URL.revokeObjectURL(url);
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     return (
//         <div>
//             <button onClick={fetchAndDownloadFile} className="bg-blue-500 text-white px-4 py-2 rounded">
//                 Download File
//             </button>
//             {error && <p className="text-red-500 mt-4">{error}</p>}
//         </div>
//     );
// };

// export default HandleDownloadFiles;
