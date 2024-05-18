import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';
import Navbar from '../common/Navbar.jsx'
import Hero from './Hero.jsx';
const Header = () => {
    // const { isLogin } = useContext(AuthContext);
    return (
        <header>
            <Navbar />
        </header>
    );
}

export default Header;
