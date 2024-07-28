import React from 'react';
import OosPricingTable from '../../components/website/OosPricingTable';
import OOSLOGO from '../../assets/images/OOslogoMain.png'
import OosBenefits from '../../components/website/OosBenefits';
import OosPageHeader from '../../components/website/OosPageHeader';
import OosPageFooter from '../../components/website/OosPageFooter';
const GetOOSMembership = () => {
    return (
        <div className=''>
            <OosPageHeader />
            <div className='-mt-64 xl:-mt-80'>
                <div className='flex justify-center'>

                    <OosBenefits />
                </div>
                <OosPricingTable />
            </div>
            <OosPageFooter />

        </div>
    );
}

export default GetOOSMembership;
