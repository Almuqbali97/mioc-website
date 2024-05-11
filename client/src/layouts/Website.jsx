import React from 'react';
import Navbar from '../components/common/Navbar';
import { Outlet } from 'react-router-dom';

const Website = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <footer>Footer Here</footer>
        </div>
    );
}

export default Website;
