import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';
const Header = () => {
    const { isLogin } = useContext(AuthContext);
    return (
        <header>
            <nav>
                <ul>
                    {isLogin ?
                        <>
                            <li><Link to={'/logout'}>Logout</Link></li>
                            <li><Link to={'/user/profile'}>Porfile</Link></li>
                            <li><Link to={'/admin'}>Admin panel</Link></li>
                        </> : <>
                            <li><Link to={'/login'}>Login</Link></li>
                            <li><Link to={'/register'}>Register</Link></li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;
