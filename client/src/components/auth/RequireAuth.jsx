import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { Outlet, Navigate, useLocation, } from "react-router-dom";
const RequireAuth = () => {
    const { user } = useContext(AuthContext)
    const location = useLocation();
    return (
        user ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
    );
}

export default RequireAuth;
