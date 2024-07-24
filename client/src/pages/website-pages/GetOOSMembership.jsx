import React from 'react';
import OosPricingTable from '../../components/website/OosPricingTable';
import OOSLOGO from '../../assets/images/OOslogoMain.png'
const GetOOSMembership = () => {
    return (
        <div>
            <div className='flex'>
                <div className='w-26 mx-auto'>
                    {/* <img src={OOSLOGO} /> */}
                </div>
            </div>

            <OosPricingTable />
        </div>
    );
}

export default GetOOSMembership;
