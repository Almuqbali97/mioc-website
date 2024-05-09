import { createContext, useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({
    setUser: () => { },
});

export const AuthProvider = ({ children }) => {
    // const navigate = useNavigate();
    const [user, setUser] = useState(() => {
        // Try to retrieve authentication information from localStorage on app start
        const userProfile = localStorage.getItem("userProfile");
        return userProfile ? JSON.parse(userProfile) : null;
    });
    const [isLogin, setIslogin] = useState(false);

    useEffect(() => {
        localStorage.setItem('userProfile', JSON.stringify(user));
        if (user) {
            setIslogin(true);
        }
        if (user === null) {
            localStorage.removeItem('userProfile')
            setIslogin(false);
        }
    }, [user]);


    return (
        <AuthContext.Provider value={{ user, setUser, isLogin }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
