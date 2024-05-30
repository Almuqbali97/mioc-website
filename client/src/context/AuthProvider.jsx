import { createContext, useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({
    setUser: () => { },
});

export const AuthProvider = ({ children }) => {
    // const navigate = useNavigate();
    const [user, setUser] = useState(() => {
        const userProfile = localStorage.getItem("userProfile");
        const loginTime = localStorage.getItem("loginTime");

        if (userProfile && loginTime) {
            const currentTime = new Date().getTime();
            const oneMonthInMilliseconds = 30 * 24 * 60 * 60 * 1000;

            if (currentTime - loginTime > oneMonthInMilliseconds) {
                localStorage.removeItem("userProfile");
                localStorage.removeItem("loginTime");
                return null;
            }
            return JSON.parse(userProfile);
        }
        return null;
    });
    const [isLogin, setIslogin] = useState(false);

    useEffect(() => {
        if (user) {
            localStorage.setItem('userProfile', JSON.stringify(user));
            localStorage.setItem('loginTime', new Date().getTime());
            setIslogin(true);
        } else {
            localStorage.removeItem('userProfile');
            localStorage.removeItem('loginTime');
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
