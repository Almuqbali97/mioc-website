import React from 'react';
import Navbar from '../components/common/Navbar';
import { Outlet } from 'react-router-dom';
import TopBar from '../components/website/TopBar';
import BottomBar from '../components/website/Bottombar';
import MapSection from '../components/website/MapSection';
import SposersAndOrganizersSection from '../components/website/SposersAndOrganizersSection';
import PartnersSection from '../components/website/PartnersSection';
import ChatWithUsCard from '../components/website/ChatWithUsCard';
const Website = () => {
    return (
        <div className='relative'>
            <TopBar />
            <Navbar />
            <Outlet />
            {/* <div className='fixed text-primary_brown z-50 bottom-5 left-5'>
                <ChatWithUsCard />
            </div> */}
            <SposersAndOrganizersSection />
            <PartnersSection />
            <MapSection />
            <BottomBar />
        </div>
    );
}

export default Website;
