import React from 'react';

const SectionHeadingTitleAndImage = ({ title, image }) => {
    return (
        <div className={`w-full bg-cover bg-center h-[120px] md:h-[220px]`} style={{ backgroundImage: `url(${image})` }}>
            <div className="flex items-center justify-center h-full w-full bg-gradient-to-r from-[#01669946] to-[#d8a75755]">
                <div className="text-center">
                    <h1 className="text-white text-2xl font-semibold  md:text-3xl myTextShadoe uppercase">{title} </h1>
                </div>
            </div>
        </div>
    );
}

export default SectionHeadingTitleAndImage;
