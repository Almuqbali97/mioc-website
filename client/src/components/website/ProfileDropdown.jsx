import { useState, useContext, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';
import UserProfile from '../../pages/user-pages/UserProfile.jsx';
import GeneralModal from '../../components/common/GeneralModal.jsx';

const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const { isLogin, user } = useContext(AuthContext);
    const profileDropDownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (profileDropDownRef.current && !profileDropDownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [profileDropDownRef]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = () => {
        setIsOpen(false);
    };

    const handleProfileClick = () => {
        setIsProfileOpen(true);
        setIsOpen(false);
    };

    const handleProfileClose = () => {
        setIsProfileOpen(false);
    };

    return (
        <div className="relative" ref={profileDropDownRef}>
            <button
                className="flex items-center gap-2 p-2 font-medium hover:cursor-pointer"
                onClick={handleToggle}
            >
                <img
                    className="w-6 h-6 rounded-full"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" // Replace with actual profile picture URL
                    alt="Profile"
                />
                <span className='flex capitalize'>{isLogin && user?.firstName} {isLogin && user?.lastName}</span>
                <svg
                    className={`w-5 h-5 text-gray-500 transition ${isOpen ? 'rotate-90' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <div className="px-4 py-2">
                        <div className="flex gap-2 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                                />
                            </svg>
                            <button onClick={handleProfileClick}>
                                Profile
                            </button>
                        </div>
                        <div className="flex gap-2 items-center mt-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                                />
                            </svg>
                            <Link to={'/user/conference/registration'} onClick={() => handleOptionClick()}>
                                Conference Registration
                            </Link>
                        </div>
                        <div className="flex gap-2 items-center mt-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                />
                            </svg>
                            <Link to={'/user/abstract'} onClick={() => handleOptionClick()}>
                                Submitted Abstracts
                            </Link>
                        </div>
                        <div className="flex gap-2 items-center mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z">
                                </path>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
                                </path>
                            </svg>
                            <Link to={'user/settings'} onClick={() => handleOptionClick('/conference-registration')}>
                                Settings
                            </Link>
                        </div>
                        <div className="flex gap-2 items-center mt-4">
                            <Link to={'/logout'}
                                type="submit"
                                className="text-red-500 text-sm px-2 py-1 hover:bg-red-200 rounded-md"
                            >
                                Log Out
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            <GeneralModal isOpen={isProfileOpen} onClose={handleProfileClose}>
                <UserProfile onClose={handleProfileClose} />
            </GeneralModal>
        </div>
    );
};

export default ProfileDropdown;
