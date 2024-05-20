import React from 'react';
import Navbar from '../components/common/Navbar';
import { Outlet } from 'react-router-dom';
import TopLogos from '../components/website/TopLogos';
import Footer from '../components/website/Footer';
import TopBar from '../components/website/TopBar';
import BottomBar from '../components/website/Bottombar';
import MapSection from '../components/website/MapSection';
import SposersAndOrganizersSection from '../components/website/SposersAndOrganizersSection';
const Website = () => {
    return (
        <div>
            <TopBar />
            <Navbar />
            <Outlet />
            <SposersAndOrganizersSection />
            <MapSection />
            <BottomBar />
        </div>
    );
}

export default Website;
