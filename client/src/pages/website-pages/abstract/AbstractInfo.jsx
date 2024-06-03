import SectionHeadingTitleAndImage from '../../../components/website/SectionHeadingTitleAndImage';
import ContentContainer from '../../../components/common/ContentContainer';
import CommonParagraph from '../../../components/common/CommonParagraph';
import PrimaryButtonBlue from '../../../components/website/PrimaryButtonBlue';
import { CalendarDaysIcon, } from '@heroicons/react/24/outline'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import ParagraphTitle from '../../../components/website/ParagraphTitle';
import { Link } from 'react-router-dom';
import { handleFileDownload } from '../../../helper/handleFilesDownload';
import DirectFileDownload from '../../../helper/DirectFileDownload';
let abstractDates = [
    { text: 'Abstract Submission Open', date: '01 June 2024' },
    { text: 'Abstract submission deadline', date: '01 September 2024' },
    { text: 'Abstract notification of acceptance', date: '01 October 2024' },
]
import { topics } from '../../../constants';

let abstractStrcuture = ['Background and Purpose', 'Methods', 'Results', 'Conclusions'];

const AbstractInfo = () => {

    async function handleGuidanceDownload() {
        const fileName = 'Presentation_Guidelines_101.pdf';
        await handleFileDownload(fileName)
    };
 

    return (
        <div>

            <SectionHeadingTitleAndImage title={'ABSTRACT SUBMISSION'} />
            <ContentContainer>
                <CommonParagraph>
                    The scientific program of MIOC 2024 will include a wide range of Free Paper Presentation, Case Presentation, Poster Presentation and Videos, as well as lectures by world renowned and eminent guest speakers during plenary and special sessions.
                </CommonParagraph>
                <CommonParagraph>
                    We encourage our colleagues from around the world to take part and join our list of speakers by contributing an abstract to either conduct Free Paper Presentation, Case Presentation, Poster Presentation and Videos or participate.
                </CommonParagraph>
                <CommonParagraph>
                    Submissions are only accepted online. Find more info here: <span className='text-primary_brown font-bold'><Link to='/author-agreement'>author agreement</Link></span>, <span className='text-primary_brown font-bold'><button onClick={() => handleGuidanceDownload()}>Presentaion guidelines (Download)</button></span>.
                </CommonParagraph>


                <div className='w-full mt-11 flex flex-col lg:flex-row font-custom justify-center' >
                    <div className='flex flex-col w-full'>
                        {abstractDates.map((date, index) => {
                            return <div key={index} className='flex items-start space-x-3'>
                                <CalendarDaysIcon className='text-primary_brown h-7' />
                                <div>
                                    <h1 className='font-bold text-blue-950 font-custom'>{date.text}</h1>
                                    <CommonParagraph>{date.date}</CommonParagraph>
                                </div>
                            </div>
                        })}

                    </div>
                    <div className='w-full'>
                        <div className=' h-full flex items-start justify-start space-y-7 flex-col mt-6 sm:mt-0'>
                            <PrimaryButtonBlue text={'Submit Your Abstract'} link={'/submit-abstract'} />
                            <DirectFileDownload fileKey={'pptTemplateMioc2024.zip'} btnText={'Download PPT Templates'}/>
                        </div>
                        {/* <div className=''>
                            <PrimaryButtonBlue text={'Submit Your Abstract'} link={'/submit-abstract'} />
                        </div> */}
                        {/* <div className='mt-3'>
                            <PrimaryButtonBlue text={'Submit Your Abstract'} link={'/submit-abstract'} />
                        </div> */}
                    </div>
                </div>


                <div className='w-full h-[1.5px] bg-gradient-to-r from-transparent via-blue-900 to-transparent my-11'></div>
                <ParagraphTitle title={'Categories'} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 pl-0  font-custom font-light">
                    {topics.map((topic, index) => (
                        <div key={index} className="flex h-full justify-start items-center space-x-2 border-b">
                            <ArrowRightIcon className='h-5 text-primary_blue rounded-full' />
                            <span>{topic}</span>

                        </div>
                    ))}
                </div>

                <div className='w-full h-[1.5px] bg-gradient-to-r from-transparent via-blue-900 to-transparent my-11'></div>

                <ParagraphTitle title={'Structure of the Abstract'} />

                <div className='font-light font-custom'>
                    {abstractStrcuture.map((topic, index) => (
                        <div key={index} className="flex  items-center space-x-2 space-y-2">
                            <ArrowRightIcon className='h-5 text-primary_blue rounded-full mt-2' />
                            <span>{topic}</span>

                        </div>
                    ))}
                </div>

                <div className='w-full h-[1.5px] bg-gradient-to-r from-transparent via-blue-900 to-transparent my-11'></div>
                <ParagraphTitle title={'Abstract Delivery Notification'} />
                <CommonParagraph>Submissions are only accepted online. Helpful information is available under the <span className='text-primary_brown font-bold'><Link to='/author-agreement'>author agreement</Link></span>, <span className='text-primary_brown font-bold'><button onClick={() => handleGuidanceDownload()}>Presentaion guidelines (Download)</button></span></CommonParagraph>
                <CommonParagraph>Authors will be notified about the delivery of their abstract by e-mail immediately. In case you do not receive confirmation within 24 hours, please check your spam folder. In case of no confirmation e-mail, please contact: <span className='text-primary_brown'>info@mioc.org.om</span></CommonParagraph>
            </ContentContainer>
        </div>
    );
}

export default AbstractInfo;
