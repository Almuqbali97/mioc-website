export const handleFileDownload = async (fileKey) => {
    try {
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
    }
};