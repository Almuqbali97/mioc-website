import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButtonBlue = ({ text, link }) => {
    return (
        <Link
            className="inline-block sm:text-lg font-semibold w-auto text-center min-w-[180px] px-3 py-3 sm:px-6 sm:py-4 text-white transition-all rounded-md shadow-lg sm:w-auto bg-gradient-to-r from-blue-600 to-primary_blue hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-300 hover:shadow-xl hover:shadow-blue-400 hover:-tranneutral-y-px "
            to={link}>{text}
        </Link>
    );
}

export default PrimaryButtonBlue;
