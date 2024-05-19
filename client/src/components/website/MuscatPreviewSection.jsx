import React, { useState } from 'react';
import PrimaryButtonBlue from './PrimaryButtonBlue.jsx'
import { PlayCircleIcon } from '@heroicons/react/24/outline'
const MuscatPreviewSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
        setIsPlaying(true);
    };
    return (
        <div className='flex xlg:-space-x-11 -space-y-24 sm:-space-y-0 flex-col lg:flex-row px-3 sm:px-0 '
        // style={{
        //     backgroundImage: `url(${'https://media.cntravellerme.com/photos/65a0f8b68ed728ca56ab8eb3/16:9/w_2560%2Cc_limit/1141069897'})`,
        //     backgroundSize: 'cover',
        //     width: '100%',
        //     // height: '100vh'
        // }}
        >
            <div class="flex flex-col justify-center items-center  min-h-screen w-full">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
                    <div className='relative w-full h-64'>
                        {isPlaying ? (
                            <iframe
                                className="absolute inset-0 w-full h-full rounded-t-lg"
                                src="https://www.youtube.com/embed/ZZF2qzU7WO4?autoplay=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <>
                                <img src="https://cdn.mos.cms.futurecdn.net/nCxeLJ64Nd8PH88rAtg6aZ.jpg" alt="Mountain" className="w-full h-full object-cover rounded-t-lg" />
                                <PlayCircleIcon
                                    onClick={handlePlayClick}
                                    className='cursor-pointer h-32 w-32 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ffffffba] hover:text-white hover:scale-110 transition-all'
                                />
                            </>
                        )}
                    </div>
                    <div class="p-6">
                        <h2 class="text-2xl font-bold text-gray-800 mb-2">MUSCAT</h2>
                        <h3 class="text-2xl font-semibold text-blue-700 mb-2">Your Host City</h3>
                        <p class="text-gray-700 leading-tight mb-4">
                            The Sultanate of Oman is located in the southern part of the Arabian Peninsula with a total area of 309,500 square kilometers.Oman is a high-income country with and divided 11 governorates.
                        </p>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center">
                                <PrimaryButtonBlue text='About Muscat' link={'/muscat-city'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center min-h-screen w-full">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
                    <img src="https://www.worldconstructionnetwork.com/wp-content/uploads/sites/26/2017/10/1l-image-99.jpg" alt="Mountain" class="w-full h-64 object-cover" />
                    <div class="p-6">
                        <h2 class="text-2xl font-bold text-gray-800 mb-2">CONFERENCE VENUE</h2>
                        <h3 class="text-2xl font-semibold text-blue-700 mb-2">Convention & Exhibition Center Muscat</h3>
                        <p class="text-gray-700 leading-tight mb-4">
                            Oman Convention and Exhibition centre is one of largest event venue in the region and its strategically located in the business district, within a 15 minute drive from Muscat International Airpor.
                        </p>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center">
                                <PrimaryButtonBlue text='Travel page' link={'/transportation'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MuscatPreviewSection;
