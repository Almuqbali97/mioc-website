import SectionHeadingTitleAndImage from '../../../components/website/SectionHeadingTitleAndImage';
import ParagraphTitle from '../../../components/website/ParagraphTitle';
import CommonParagraph from '../../../components/common/CommonParagraph';
import PricingTable from '../../../components/website/PricingTable';
import Accordian from '../../../components/website/Accordian';


const OnlineRegistration = () => {
    return (
        <div>
            <SectionHeadingTitleAndImage title={'ONLINE REGISTRATION'}/>
            <div className='max-w-[90%] mx-auto my-20'>
                <ParagraphTitle title={'Register for MIOC-EMCO-IKS 2024'} />
                <CommonParagraph>
                    The MIOC-EMCO-IKS 2024 offers a unique platform and the opportunity to meet with and network with a truly international audience and gain insight into the latest product information and trends. Do not miss this opportunity to network and learn from experts in the field.
                </CommonParagraph>
                <CommonParagraph>
                    Please register as per your relevant category. The conference organizers reserve the right to request proof of profession or ID at the time of check-in.
                </CommonParagraph>
                <PricingTable />
                <Accordian />
            </div>
        </div>
    );
}

export default OnlineRegistration;
