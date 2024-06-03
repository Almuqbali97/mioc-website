import { useEffect, useState, useContext } from 'react';
import AuthContext from '../../context/AuthProvider';

const UserProfile = ({ onClose }) => {
    const { isLogin } = useContext(AuthContext);
    const [userProfileData, setUserProfileData] = useState({});
    const [errFetchMsg, setErrFetchMsg] = useState(null);

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + '/user/profile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include',
                });

                if (response.ok) {
                    const successRes = await response.json();
                    const userData = successRes.user;
                    setUserProfileData(userData);
                } else {
                    const errRes = await response.json();
                    setErrFetchMsg(errRes.message);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
        fetchUserData();
    }, []);

    return (
        <div className='relative w-full'>
            <h1 className="text-3xl text-primary_blue text-center font-bold mt-8 mb-6">User Profile</h1>
            <img className='h-20 w-20 rounded-full absolute -top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' />
            {isLogin && Object.keys(userProfileData).length > 0 ? (
                <div className="bg-white shadow-md rounded-lg p-6 w-full ">
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold">Profile Information</h2>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Name:</label>
                        <p className="text-gray-900">{userProfileData.firstName} {userProfileData.lastName}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Email:</label>
                        <p className="text-gray-900">{userProfileData.email}</p>
                    </div>
                    {/* Add more profile information here */}
                </div>
            ) : (
                <p className="text-red-500">{errFetchMsg}</p>
            )}
        </div>
    );
};

export default UserProfile;
