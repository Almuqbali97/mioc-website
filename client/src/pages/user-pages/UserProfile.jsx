import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';

const UserProfile = () => {
    const { isLogin } = useContext(AuthContext);
    const [userProfileData, setUserProfileData] = useState({});
    const [errFetchMsg, setErrFetchMsg] = useState(null);
    useEffect(() => {
        // when accessing user data, it is better not to depend on the data stored on the localstorage and better fetch the data each time 
        // so we alwayes check with the server if the user is authorized
        async function fetchUserData() {
            try {
                // Assuming you're making a POST request to submit the form data
                const response = await fetch('http://localhost:3000/user/profile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include',
                });
                // Handle response as needed
                if (response.ok) {
                    const successRes = await response.json();
                    const userData = successRes.user;
                    setUserProfileData(userData)
                } else {
                    const errRes = await response.json()
                    setErrFetchMsg(errRes.message);
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
        fetchUserData();
    }, []);

    return (
        <div>
            <Link to={'/'}><button>Home</button></Link>
            <h1>User profile page</h1>
            {(isLogin && Object.keys(userProfileData).length > 0) ? <p>{userProfileData.firstName + ' ' + userProfileData.email}</p> : <p>{errFetchMsg}</p>}
        </div>
    );
};


export default UserProfile;
