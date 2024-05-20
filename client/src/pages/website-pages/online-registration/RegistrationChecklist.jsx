import React from 'react';
import SectionHeadingTitleAndImage from '../../../components/website/SectionHeadingTitleAndImage';
import ContentContainer from '../../../components/common/ContentContainer';
import ParagraphTitle from '../../../components/website/ParagraphTitle';
import CommonParagraph from '../../../components/common/CommonParagraph';
const RegistrationChecklist = () => {
    return (
        <div>
            <SectionHeadingTitleAndImage title={'REGISTRATION CHECKLIST'} image={'https://img.freepik.com/free-photo/high-angle-uncompleted-checking-boxes_23-2148265488.jpg?t=st=1716216341~exp=1716219941~hmac=d5a78be512ff8294ce97d6f9648cf68fdccd64004896a44a2f8c6f145b30404b&w=996'} />
            <ContentContainer>
                <ParagraphTitle title={'Getting Started'} />
                <CommonParagraph>
                    Please follow the below process to register for MIOC 2024. You can create a profile using your email address or social media account and can always return back to update, edit or add services to your profile.
                </CommonParagraph>
                <CommonParagraph>
                    Please do not share your password with any other person. Only one profile is permitted per delegate.
                </CommonParagraph>
                <ParagraphTitle title={'Step 1: Register Socially or With Email'} />
                <CommonParagraph>
                    If you click on Register Now button, you will get a pop up with an option to register using Facebook or Twitter. Choose the platform and authorize EventsAir access to the account.
                </CommonParagraph>
                <CommonParagraph>This option can be skipped if you prefer to register using an email address.</CommonParagraph>
                <ParagraphTitle title={'Step 2: Name and Address'} />
                <CommonParagraph>You will be asked to enter your name, nationality, age group, organization, job title, contact info, and billing address. Please enter your information carefully, as it will be used for your name badge.</CommonParagraph>
                <ParagraphTitle title={'Step 3: Registrant Profile'} />
                <CommonParagraph>
                    You will be asked a series of demographic questions. Your answers will be kept confidential and will help us ensure that future MIOC 2024 meets your educational needs.
                </CommonParagraph>
                <ParagraphTitle title={'Step 4: Package Selection'} />
                <CommonParagraph>
                    Step 4: Package Selection
                    You will register for MEACO – MIOC 2023 and choose the registration category applicable for you. View <span className='text-primary_brown font-bold'><a href='/online-registration'>Registration categories and prices</a></span>
                </CommonParagraph>
                <ParagraphTitle title={'Step 5: Review Information'} />
                <CommonParagraph>Please be sure to review all of your information carefully along with the terms and conditions.</CommonParagraph>
                <ParagraphTitle title={'Step 6: Payment'} />
                <CommonParagraph>You will be asked to enter your payment information.</CommonParagraph>
                <ParagraphTitle title={'Step 7: Confirm'} />
                <CommonParagraph><span className='font-bold'>Online Payment:</span> A confirmation will be sent to the email address you entered along with the payment receipt and tax invoice for your registration which serves as a confirmation of your registration</CommonParagraph>
                <CommonParagraph><span className='font-bold'>Pay Later:</span> An email will be sent with the summary of your registration information and a quote with our bank details to process the bank transfer. It is important to include the quote reference in the transfer remarks while processing the payment. Proof of payment must be submitted via email to exampl@email....</CommonParagraph>
                <CommonParagraph>You must be registered for MEACO – MIOC 2023 in order to book your accommodation. For questions about registration or housing, please contact info@email ....</CommonParagraph>
            </ContentContainer>
        </div>
    );
}

export default RegistrationChecklist;
