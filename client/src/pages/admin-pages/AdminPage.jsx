import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminPage = () => {
    const [secretInfo, setSecretInfo] = useState(null);
    const [fetchMsg, setFetchMsg] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/admin', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                if (response.ok) {
                    const successRes = await response.json();
                    const userData = successRes.user;
                    console.log(userData);
                    setSecretInfo(userData);
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

    return (
        <div>
            <Link to={'/'}><button>Home</button></Link>
            <p>This info should only be accessed by admin.</p>
            <p>Here is the information:</p>
            {secretInfo && (
                <div>
                    {secretInfo.firstName}<br />{secretInfo.admin_role ? 'This user is an admin' : ''}
                </div>
            )}
            {fetchMsg && <p>{fetchMsg}</p>}
        </div>
    );
};

export default AdminPage;
