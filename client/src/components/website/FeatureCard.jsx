import React from 'react';
import { CursorArrowRaysIcon, EllipsisHorizontalIcon, CheckBadgeIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const FeatureCard = ({ title, text, link, linkText }) => {
    return (
        <div className=" p-8 space-y-3 border-2 border-blue-400  dark:border-blue-300 rounded-lg myBoxShadow hover:scale-105 transition-all flex flex-col justify-between">
            <div>
                <span className="inline-block text-blue-500 dark:text-blue-400 rotate-45">
                    <ChevronDoubleRightIcon className="h-6 w-6 text-blue-500 " />
                </span>

                <h1 className="text-2xl font-semibold text-gray-700 my-3 capitalize dark:text-white">{title}</h1>

                <p className="text-gray-500 dark:text-gray-300">
                    {text}
                </p>
            </div>
            <div>
                <Link to={link} className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500 mt-auto">
                    <span className='font-semibold mr-2'>{linkText}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </Link>
            </div>

        </div>

    );
}

export default FeatureCard;
