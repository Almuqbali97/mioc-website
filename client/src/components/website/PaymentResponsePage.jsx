import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentResponsePage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    useEffect(() => {
        const forwardResponse = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + '/oos/membership/payment/response', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        encResp: queryParams.get('encResp')
                    })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                const { orderStatus, orderId } = data;

                // Redirect to the final frontend status page
                // window.location.href = `/registration/payment/response?orderStatus=${orderStatus}&orderId=${orderId}`;
            } catch (error) {
                console.error('Error forwarding payment response:', error);
            }
        };

        forwardResponse();
    }, [queryParams]);

    return (
        <div>
            <h1>Processing Payment...</h1>
        </div>
    );
};

export default PaymentResponsePage;
