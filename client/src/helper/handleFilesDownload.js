export const handleFileDownload = async (fileName) => {
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
    }
};

export const hanldeZipFileDownload = async (fileName) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/abstract/download/${fileName}`, {
            method: 'GET',
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const { presignedURL } = await response.json();

        // Redirect to the presigned URL
        window.location.href = presignedURL;
    } catch (error) {
        console.error('Failed to download the file:', error);
    }
};
