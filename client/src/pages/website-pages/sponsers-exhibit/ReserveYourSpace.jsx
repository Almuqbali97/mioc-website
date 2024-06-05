import React from 'react';
import ContentContainer from '../../../components/common/ContentContainer';
import CommonParagraph from '../../../components/common/CommonParagraph';
import PrimaryButtonBlue from '../../../components/website/PrimaryButtonBlue';
import SectionHeadingTitleAndImage from '../../../components/website/SectionHeadingTitleAndImage';
import resYourPlace from '../../../assets/images/resYourPlace.avif'

const ReserveYourSpace = () => {
    return (
        <div>
            <SectionHeadingTitleAndImage title={'Reserve Your Space'} image={resYourPlace} />
            <ContentContainer>
                <CommonParagraph>
                    MIOC-EMCO-IKS 2024 will provide sponsors with exposure and access to delegates who have the capacity to influence the selection of products and services with their organizations. The conference also provides you with the opportunity to demonstrate your support and commitment to the field of ophthalmology while our sponsorship/Exhibition program will extend your visibility beyond the exhibition hall to achieve maximum exposure at the conference.
                </CommonParagraph>
                <CommonParagraph>
                    In order to ensure that your company can achieve its objectives by taking part in the MIOC-EMCO-IKS 2024 conference, a wide range of sponsorship opportunities is available. In addition to packages, sponsors can also consider taking out individual items.
                </CommonParagraph>
                <div className='mt-7'>
                    <PrimaryButtonBlue text={'Request Sponsorship Prospectus'} link={'/submit-sponser-request'} />
                </div>
            </ContentContainer>
        </div>
    );
}

export default ReserveYourSpace;
