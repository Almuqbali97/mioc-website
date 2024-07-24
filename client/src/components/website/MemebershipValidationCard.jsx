import React from 'react';

const MemebershipValidationCard = ({ membershipIsValid, name, expirationDate, memerbrshipNotFound }) => {
    return (
        <div className='flex justify-center mt-5'>
            <div className="validation-card">
                <button className="validation-dismiss" type="button">×</button>
                <div className="validation-header">
                    <div className={`validation-div_image_v ${membershipIsValid ? 'bg-[#47c9a2]' : 'bg-[#f87171]'}`}>
                        <div className="validation-image">
                            {membershipIsValid ? <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </g>
                            </svg> : <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 12C4 7.58172 7.58172 4 12 4C13.6284 4 15.1432 4.48652 16.4068 5.32214L6.07523 17.3757C4.78577 15.9554 4 14.0694 4 12ZM7.59321 18.6779C8.85689 19.5135 10.3716 20 12 20C16.4183 20 20 16.4183 20 12C20 9.93057 19.2142 8.04467 17.9248 6.62436L7.59321 18.6779ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="#ff0000"></path> </g></svg>}

                        </div>
                    </div>
                    <div className="validation-content">
                        <span className="validation-title">
                            {membershipIsValid ? 'Membership validated' : 'Membership invalid'}
                        </span>
                        <p className="validation-message min-w-72">
                            {memerbrshipNotFound ? memerbrshipNotFound : <>  {membershipIsValid
                                ? <span><strong>{name}</strong>, Your membership is valid until <b>{expirationDate}</b><br />You can proceed with registration</span>
                                : <span><strong>{name}</strong>, Your membership expired on <strong>{expirationDate}</strong>.<br /> Kindly renew your memebership or contact support for help.</span>
                            }</>}

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MemebershipValidationCard;
