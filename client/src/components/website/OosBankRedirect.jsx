import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const  OosBankRedirect = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const encResp = query.get('encResp');
    const [decryptedResponse, setDecryptedResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDecryptedResponse = async () => {
            try {
                const response = await fetch('http://localhost:3000/oos/membership/payment/response', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ encResp })
                });

                if (!response.ok) {
                    throw new Error('Failed to decrypt response');
                }

                const data = await response.json();
                setDecryptedResponse(data.decryptedResponse);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchDecryptedResponse();
    }, [encResp]);

    return (
        <div className="payment-response">
            <h1>Payment Response</h1>
            {error && <p>Error: {error}</p>}
            {decryptedResponse ? (
                <div>
                    <h2>Decrypted Response:</h2>
                    <pre>{JSON.stringify(decryptedResponse, null, 2)}</pre>
                </div>
            ) : (
                <p>Processing your payment...</p>
            )}
        </div>
    );
};

export default  OosBankRedirect;
