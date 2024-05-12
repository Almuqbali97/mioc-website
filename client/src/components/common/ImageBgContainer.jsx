import React from 'react';

const ImageBgContainer = ({ bgURL, children }) => {
    return (
        <div className="bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${bgURL})` }}>
            <div className="h-[90vh] flex justify-center items-center">
                {children}
            </div>
        </div>
    );
}

export default ImageBgContainer;
