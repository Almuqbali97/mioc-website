import React from 'react';
import { Link } from 'react-router-dom';

const SideBarItem = (props) => {
    return (
        <>
            <li>
                <Link to={props.path}
                    // target="_blank"
                    className="flex items-center p-2 text-base font-normal text-bodydark1 rounded-sm dark:text-white hover:bg-graydark transition duration-200 ease-in-out focus:bg-graydark dark:hover:bg-gray-700">
                    {props.svg}
                    <span className="flex-1 ml-3 whitespace-nowrap">{props.content}</span>
                    {/* <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                </Link>
            </li>
        </>
    );
}

export default SideBarItem;
