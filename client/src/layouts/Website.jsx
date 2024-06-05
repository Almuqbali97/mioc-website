import React from 'react';
import Navbar from '../components/common/Navbar';
import { Outlet } from 'react-router-dom';
import TopBar from '../components/website/TopBar';
import BottomBar from '../components/website/Bottombar';
import MapSection from '../components/website/MapSection';
import SposersAndOrganizersSection from '../components/website/SposersAndOrganizersSection';
import PartnersSection from '../components/website/PartnersSection';
const Website = () => {
    return (
        <div>
            <TopBar />
            <Navbar />
            <Outlet />
            <SposersAndOrganizersSection />
            <PartnersSection />
            <MapSection />
            <BottomBar />
        </div>
    );
}

export default Website;
