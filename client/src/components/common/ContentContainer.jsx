import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const ContentContainer = ({ children }) => {
    return (
        <div className='w-full max-w-[97%] lg:max-w-[80%] mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between my-20'>
                <div className='w-full'>
                    {children}
                </div>
                <div id='quick-links' className='mt-9 lg:mt-0 h-[270px] w-full lg:min-w-[250px] lg:max-w-[250px] font-custom font-light quickLinksCard flex justify-center flex-col p-4 space-y-5'>
                    <h3 className='font-bold text-lg text-blue-900'>Quick Links</h3>
                    <div className='flex flex-col justify-center space-y-2  text-[1rem] text-slate-900'>
                        <a href='/important-dates' className='border-b-[0.5px] border-gray-400 pb-2 flex items-center h-full hover:text-primary_brown hover:scale-105 transition-all'><span><ArrowRightIcon className='h-4 bg-gray-400 bg-opacity-50 mr-2 rounded-md' /></span>Important Dates<span></span></a>
                        <a href='/online-registration' className='border-b-[0.5px] border-gray-400 pb-2 flex items-center h-full hover:text-primary_brown hover:scale-105 transition-all'><span><ArrowRightIcon className='h-4 bg-gray-400 bg-opacity-50 mr-2 rounded-md' /></span>Online Registration<span></span></a>
                        <a href='/sientific-program' className='border-b-[0.5px] border-gray-400 pb-2 flex items-center h-full hover:text-primary_brown hover:scale-105 transition-all'><span><ArrowRightIcon className='h-4 bg-gray-400 bg-opacity-50 mr-2 rounded-md' /></span>Scientific Program<span></span></a>
                        <a href='/sponsers-and-exhibitors' className='border-b-[0.5px] border-gray-400 pb-2 flex items-center h-full hover:text-primary_brown hover:scale-105 transition-all'><span><ArrowRightIcon className='h-4 bg-gray-400 bg-opacity-50 mr-2 rounded-md' /></span>Sponsorship & Exhibition<span></span></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentContainer;
