import React from 'react';
import Navbar from '../components/common/Navbar';
import { Outlet } from 'react-router-dom';
import TopLogos from '../components/website/TopLogos';
import Footer from '../components/website/Footer';
import TopBar from '../components/website/TopBar';
const Website = () => {
    return (
        <div>
            <TopBar/>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
}

export default Website;
