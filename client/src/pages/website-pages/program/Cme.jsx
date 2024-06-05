import React from 'react';
import SectionHeadingTitleAndImage from '../../../components/website/SectionHeadingTitleAndImage';
import ContentContainer from '../../../components/common/ContentContainer';
import ParagraphTitle from '../../../components/website/ParagraphTitle';
import CommonParagraph from '../../../components/common/CommonParagraph';
import cmeImg from '../../../assets/images/cmeImg.avif'

const Cme = () => {
    return (
        <div>

            <SectionHeadingTitleAndImage title={'CME'} image={cmeImg} />
            <ContentContainer>
                <ParagraphTitle title={'CME Accreditation'} />
                <CommonParagraph>
                    An application has been made to the Oman Medical Specialty Board (OMSB) for CME accreditation for this congress.
                </CommonParagraph>

                <ParagraphTitle title={'Instructions for Claiming CME Certificates:'} />
                <CommonParagraph>
                    <ul className="list-disc ml-5">
                        <li>A survey in the form of an online questionnaire will be emailed after the conference to be completed by delegates.</li>
                        <li>The CME Certificate will be available upon completion of the online questionnaire to download as a soft copy or print onsite on the last day of the conference.</li>
                        <li>Please ensure that the email provided at the time of registration is accurate; otherwise, a certificate of attendance and the CME certificate may not be received.</li>
                        <li>Delegates will be able to check that their email is accurate at the onsite registration desks during operational hours.</li>
                    </ul>
                </CommonParagraph>

                <ParagraphTitle title={'Disclosure and Resolution of Personal Conflicts of Interest'} />
                <CommonParagraph>
                    This event is supported, in part, by funding from industry. All support is managed in strict accordance with CME/CPD accreditation criteria and standards for commercial support.
                </CommonParagraph>

                <ParagraphTitle title={'Industry Support Disclosure'} />
                <CommonParagraph>
                    This event is supported, in part, by funding from industry. All support is managed in strict accordance with CME/CPD accreditation criteria and standards for commercial support.
                </CommonParagraph>

                <ParagraphTitle title={'Session Attendance Scanning:'} />
                <CommonParagraph>
                    <ul className='list-disc ml-5'>
                        <li>Attendance at the sessions will be monitored through the scanning of the barcode on your conference badge at the entrance of the session hall.</li>
                        <li>CME credits awarded will be dependent on session attendance.</li>
                    </ul>
                </CommonParagraph>
            </ContentContainer>
        </div>
    );
}

export default Cme;
