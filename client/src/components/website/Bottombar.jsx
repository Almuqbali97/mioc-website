import React from 'react';
import { Link } from 'react-router-dom';

const BottomBar = () => {
    return (
        <div id='bottom-bar' className='h-[35px] bg-gradient-to-r from-[#d8a757] to-primary_blue '>
            <div className='flex justify-center gap-9 items-center h-full text-white'>
                <p className=''>@2024 MIOC All Rights Reserved </p>
                <Link to={'/privacy-terms'}>Privacy terms</Link>
            </div>
        </div>
    );
}

export default BottomBar;
