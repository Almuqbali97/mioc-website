import React from 'react';

const MemebershipValidationCard = () => {
    return (
        <div className='flex justify-center'>
            <div className="validation-card">
                <button className="validation-dismiss" type="button">×</button>
                <div className="validation-header">
                    <div className="validation-div_image_v">
                        <div className="validation-image">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="validation-content">
                        <span className="validation-title">Membership validated</span>
                        <p className="validation-message">Dear Musaab, Your membership is valid untill <b>31-12-2024</b></p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MemebershipValidationCard;
