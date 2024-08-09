import React from 'react';
import ContentContainer from '../../../components/common/ContentContainer';
import CommonParagraph from '../../../components/common/CommonParagraph';
import ParagraphTitle from '../../../components/website/ParagraphTitle';
import SectionHeadingTitleAndImage from '../../../components/website/SectionHeadingTitleAndImage';
import { Link } from 'react-router-dom';
import PrimaryButtonBlue from '../../../components/website/PrimaryButtonBlue';
const VisaInformation = () => {
    return (
        <div>
            <SectionHeadingTitleAndImage title={'VISA INFORMATION'} />
            <ContentContainer>
                <ParagraphTitle title={'Visa Requirements'} />
                <CommonParagraph>The Sultanate of Oman welcomes visitors from around the globe with tourist visas issued on arrival at Muscat International Airport to passport holders of more than 100 countries for up to 14 days as per the list below.</CommonParagraph>
                <CommonParagraph>Residents of GCC countries do not need a visa and all other countries may apply online for tourist visas directly with the Royal Oman Police <span className='text-primary_brown'><a href='www.rop.gov.om'>www.rop.gov.om</a></span> or your preferred travel agent.</CommonParagraph>
                <CommonParagraph>
                    Delegates requiring visa assistance through the congress secretariat must submit the request<span className='font-bold'> latest by 30 October 2024</span>.
                </CommonParagraph>
                <div className='w-full my-8'>
                    <div className='flex justify-center mt-6 sm:mt-0'>
                        <PrimaryButtonBlue text={'Apply For Visa'} link={'/apply-for-visa'} />
                    </div>
                </div>
                <ParagraphTitle title={'Visa on Arrival'} />
                <p className='font-bold'>Following countries are entitled to get a tourist visa and fee-exempt visa for a period of 14 days only.</p>
                <CommonParagraph>Andorra,Argentina, Australia, Austria, Belgium, Bolivia, Brazil, Bulgaria, Canada, Chile, China, Colombia, Croatia, Cyprus, Czech Republic, Denmark, Ecuador, Estonia, Finland, France, Georgia, Germany, Greece, Hong Kong, Hungary, Iceland, Indonesia, Iran, Ireland, Italy, Japan, Kazakhstan, Latvia, Lebanon, Liechtenstein, Lithuania, Luxembourg, Macao, Macedonia, Malaysia, Malta, Moldova, Monaco, Netherlands, Norway, Paraguay, Poland, Portugal, Romania, Russia, San Marino, Serbia, Seychelles, Singapore, Slovakia, Slovenia, South Africa, Spain, Suriname, Sweden, Switzerland, Taiwan, Thailand, Turkey, UK, Ukraine, Uruguay, USA, Vatican, Venezuela</CommonParagraph>
                <ParagraphTitle title={'Visa on Arrival (Applicable for GCC Residents Only)'} />
                <p className='font-bold'>Following countries are entitled to get a conditional  and fee-exempt visa for a period of 14 days only.</p>
                <CommonParagraph>
                    Albania, Armenia, Azerbaijan, Bhutan, Bosnia and Herzegovina, Costa Rica, Cuba, Guatemala, Honduras, India, Kyrgyzstan, Laos, Maldives, Mexico,Morocco, Nicaragua, Panama, Peru, Salvador, Tajikistan, Uzbekistan, Vietnam
                </CommonParagraph>
                <p className='font-bold'>
                    Following countries are entitled to a fee-exempt visa for a period of 14 days only.
                </p>
                <CommonParagraph>
                    Tunisia, Mauritania, Egypt, Jordan
                </CommonParagraph>
            </ContentContainer>
        </div>
    );
}

export default VisaInformation;
