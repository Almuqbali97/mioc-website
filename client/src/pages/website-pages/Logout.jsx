import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';
import { googleLogout } from '@react-oauth/google'

const Logout = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);
    useEffect(() => {
        async function logoutFn() {
            try {
                googleLogout();
                const response = await fetch(import.meta.env.VITE_API_URL + "/user/logout", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include',
                })
                if (response.ok) {
                    setUser(null);
                    navigate('/');
                } else {
                    console.log('could not logout');
                }
            } catch (error) {
                console.log(error);
            }
        }
        logoutFn()
    }, []);
    return (
        <div>
            logging out ...
        </div>
    );
}

export default Logout;
