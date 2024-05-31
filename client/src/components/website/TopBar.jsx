import React from 'react';
import SocialIcons from './SocialIcons';

const TopBar = () => {
    return (
        <div id='top-bar' className='h-[35px] bg-gradient-to-r from-primary_blue to-[#D0A45D]'>
            <div className='flex justify-center items-center h-full sm:space-x-6'>
                <ul className='flex items-center text-sm  h-full space-x-6 justify-center place-self-center text-white font-light'>
                    <li className='hover:scale-110 transition-all'> <a href='/'>HOME</a></li>
                    <li className='hover:scale-110 transition-all'><a href='#bottom-bar'>SUBPPORT</a></li>
                    <li className='hover:scale-110 transition-all'><a href='#bottom-bar'>CONTACT</a></li>
                    {/* <li className='hover:scale-110 transition-all'>ABOUT</li> */}
                </ul>
                <SocialIcons />
            </div>
        </div>
    );
}

export default TopBar;
