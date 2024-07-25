import React from 'react';
import {Link} from 'react-router-dom'

const OosPageHeader = () => {
    return (
        <section
            className="relative overflow-hidden bg-gradient-to-b from-red-100 via-transparent to-transparent pt-24 h-screen">
            <div className="relative z-10">
                <div
                    className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
                    <svg className="h-[60rem] w-[100rem] flex-none stroke-red-600 opacity-20" aria-hidden="true">
                        <defs>
                            <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%"
                                patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                                <path d="M.5 200V.5H200" fill="none"></path>
                            </pattern>
                        </defs>
                        <svg x="50%" y="50%" className="overflow-visible fill-blue-50">
                            <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0"></path>
                        </svg>
                        <rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)">
                        </rect>
                    </svg>
                </div>
            </div>
            <div className="relative z-20 mx-auto">
                <div className=" absolute mx-auto -top-20 z-10 right-[50%] translate-x-[50%]">
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <div className="flex">
                            <div className="bg-white hover:bg-red-700 border-red-500 border hover:text-white transition-all duration-500 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-3 shadow-2xl">
                                <Link to={'/online-registration'} className='flex justify-center items-center space-x-2'>
                                    <button className="text-sm font-semibold ">Back to MIOC Website</button>
                                    <svg className='w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 16L15 12M15 12L11 8M15 12H3M4.51555 17C6.13007 19.412 8.87958 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C8.87958 3 6.13007 4.58803 4.51555 7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Oman<span className="text-red-700"> Ophthalmic </span>Society
                    </h1>
                    <h2 className="mt-6 text-lg leading-8 text-gray-600">
                        You Vision Is Our Mission
                    </h2>

                </div>

            </div>
        </section>
    );
}

export default OosPageHeader;
