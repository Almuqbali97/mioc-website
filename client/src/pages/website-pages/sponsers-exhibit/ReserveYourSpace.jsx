import React from 'react';
import ContentContainer from '../../../components/common/ContentContainer';
import CommonParagraph from '../../../components/common/CommonParagraph';
import PrimaryButtonBlue from '../../../components/website/PrimaryButtonBlue';
import SectionHeadingTitleAndImage from '../../../components/website/SectionHeadingTitleAndImage';

const ReserveYourSpace = () => {
    return (
        <div>
            <SectionHeadingTitleAndImage title={'Reserve Your Space'} image={'https://img.freepik.com/free-photo/successful-business-partnership-formed-through-handshake-teamwork-generated-by-ai_188544-55771.jpg?t=st=1716228510~exp=1716232110~hmac=bf4c01321e8f862f6453c40f2ce1530308cd7720e76556510a987594809c0077&w=1060'} />
            <ContentContainer>
                <CommonParagraph>
                    MIOC 2024 will provide sponsors with exposure and access to delegates who have the capacity to influence the selection of products and services with their organizations. The conference also provides you with the opportunity to demonstrate your support and commitment to the field of internal medicine while our sponsorship/Exhibition program will extend your visibility beyond the exhibition hall to achieve maximum exposure at the conference.
                </CommonParagraph>
                <CommonParagraph>
                    In order to ensure that your company can achieve its objectives by taking part in the MEACO 2023 conference, a wide range of sponsorship opportunities is available. In addition to packages, sponsors can also consider taking out individual items.
                </CommonParagraph>
                <div className='mt-7'>
                    <PrimaryButtonBlue text={'Request Sposership Prospectus'} link={'/reserve-your-space'}/>
                </div>
            </ContentContainer>
        </div>
    );
}

export default ReserveYourSpace;
