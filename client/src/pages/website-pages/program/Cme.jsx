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
                <ParagraphTitle title={'CME Accredation'} />
                <CommonParagraph>
                    An application has been made to the UEMS EACCME® for CME accreditation of this congress.
                </CommonParagraph>

                <ParagraphTitle title={'Instructions for Claiming CME Certificates:'} />
                <CommonParagraph>
                    <ul className="list-disc ml-5">
                        <li>A survey in the form of an online questionnaire will be emailed post the conference to be completed by delegates.</li>
                        <li>The CME Certificate will be e-mailed to the registered email address upon completion of the online questionnaire.</li>
                        <li>Please ensure that the email provided at the time of registration is accurate, otherwise certificate of attendance and the CME certificate may not be received.</li>
                        <li>Delegates will be able to check that their email is accurate at the onsite registration desks during operational hours.</li>
                    </ul>
                </CommonParagraph>

                <ParagraphTitle title={'American Medical Association (AMA)'} />
                <CommonParagraph>
                    Information on the process to convert EACCME credit to AMA credit can be found at <span className='text-primary_brown'><a href='https://www.ama-assn.org/education/ama-pra-credit-system/agreement-european-union-medical-specialties-uems'>https://www.ama-assn.org/education/ama-pra-credit-system/agreement-european-union-medical-specialties-uems.</a></span>
                </CommonParagraph>

                <ParagraphTitle title={'Royal College of Physicians and Surgeons of Canada'} />
                <CommonParagraph>
                    Live educational activities, occurring outside of Canada, recognized by the UEMS-EACCME for ECMEC credits are deemed to be Accredited Group Learning Activities (Section 1) as defined by the Maintenance of Certification Program of The Royal College of Physicians and Surgeons of Canada. For more information, visit:
                    <span className='text-primary_brown'><a href=' http://www.royalcollege.ca/rcsite/cpd/providers/international-accreditation-agreements-e'> http://www.royalcollege.ca/rcsite/cpd/providers/international-accreditation-agreements-e.</a></span>
                </CommonParagraph>

                <ParagraphTitle title={'To Receive Your CME/CPD Certificate'} />
                <CommonParagraph>
                    <ul className='list-disc ml-5'>
                        <li>The CME/CPD certificate will be available after completing the online evaluation and credit claiming procedure.
                        </li>
                        <li>A survey in the form of an online questionnaire will be emailed post the conference to be completed by delegates.
                        </li>
                        <li>The CME Certificate will be e-mailed to the registered email address upon completion of the online questionnaire.</li>
                    </ul>

                </CommonParagraph>

                <ParagraphTitle title={'Disclosure and Resolution of Personal Conflicts of Interest'} />
                <CommonParagraph>
                    This event is supported, in part, by funding from industry. All support is managed in strict accordance with CME/CPD accreditation criteria and standards for commercial support.
                </CommonParagraph>

                <ParagraphTitle title={'Industry Support Disclosure'} />
                <CommonParagraph>This event is supported, in part, by funding from industry. All support is managed in strict accordance with CME/CPD accreditation criteria and standards for commercial support.</CommonParagraph>
                <ParagraphTitle title={'Session Attendance Scanning :'} />
                <CommonParagraph>
                    <ul className='list-disc ml-5'>
                        <li>Attendance to the sessions will be monitored through scanning of the barcode on your conference badge at the entrance of the session hall.</li>
                        <li>CME credits awarded will be dependent on session attendance.</li>
                    </ul>
                </CommonParagraph>
            </ContentContainer>
        </div>
    );
}

export default Cme;
