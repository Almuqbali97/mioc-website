import React from 'react';

const CommonParagraph = ({ children }) => {
    return (
        <p className='mb-3 font-custom font-light lg:mr-5'>
            {children}
        </p>
    );
}

export default CommonParagraph;
