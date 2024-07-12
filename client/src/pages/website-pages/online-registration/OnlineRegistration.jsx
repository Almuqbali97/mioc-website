import SectionHeadingTitleAndImage from '../../../components/website/SectionHeadingTitleAndImage';
import ParagraphTitle from '../../../components/website/ParagraphTitle';
import CommonParagraph from '../../../components/common/CommonParagraph';
import PricingTable from '../../../components/website/PricingTable';
import Accordian from '../../../components/website/Accordian';


const OnlineRegistration = () => {
    return (
        <div>
            <SectionHeadingTitleAndImage title={'ONLINE REGISTRATION'} />
            <div className='max-w-[90%] mx-auto my-20'>
                <ParagraphTitle title={'Register for MIOC-EMCO-IKS 2024'} />
                <CommonParagraph>
                    The MIOC-EMCO-IKS 2024 offers a unique platform and the opportunity to meet with and network with a truly international audience and gain insight into the latest product information and trends. Do not miss this opportunity to network and learn from experts in the field.
                </CommonParagraph>
                <CommonParagraph>
                    Please register as per your relevant category. The conference organizers reserve the right to request proof of profession or ID at the time of check-in.
                </CommonParagraph>
                <PricingTable />
                <div className="bg-red-50 p-4 rounded-lg shadow-md mb-8">
                    <h3 className="text-xl font-semibold mb-2">Important Information</h3>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Non-Ophthalmologists: Optometrists, Residents, Nurses, Technicians, Assistants, Students (You will be asked to provide verification ID).</li>
                        <li>OOS membership must be valid as of registration date.</li>
                        <li>The prices are in Omani Rials.</li>
                        <li>OOS: Oman Ophthalmic Society.</li>
                        <li>Please contact us on <a href="mailto:info@mioc.org.om" className="text-blue-600 underline">info@mioc.org.om</a> for discounted group registration rates.</li>
                    </ul>
                </div>
                <Accordian />
            </div>
        </div>
    );
}

export default OnlineRegistration;
