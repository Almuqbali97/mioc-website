import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const EmailVerification = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [message, setMessage] = useState('');

    useEffect(() => {
        const verifyEmail = async () => {
            const token = searchParams.get('token');
            console.log('Received token:', token); // Log the token to ensure it is received correctly

            if (!token) {
                setMessage('Invalid verification link.');
                return;
            }

            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/user/verify-email?token=${token}`);
                const result = await response.json();

                if (response.ok) {
                    setMessage(result.message +'you will be redirected to login within 5 seconds');
                    setTimeout(() => {
                        navigate('/login');
                    }, 5000);
                } else {
                    setMessage(result.message);
                }
            } catch (error) {
                console.error('Error during verification:', error); // Log the error
                setMessage('An error occurred during verification.');
            }
        };

        verifyEmail();
    }, [navigate, searchParams]);

    return (
        <div className="h-[80vh] bg-gray-100 dark:bg-gray-900 flex justify-center items-center">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg">
                <h2 className="text-center text-gray-800 dark:text-white mb-4">Email Verification</h2>
                <p className="text-center text-gray-700 dark:text-gray-300">{message}</p>
            </div>
        </div>
    );
};

export default EmailVerification;
