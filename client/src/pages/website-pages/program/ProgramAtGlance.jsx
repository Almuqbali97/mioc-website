import React from 'react';
import SectionHeadingTitleAndImage from '../../../components/website/SectionHeadingTitleAndImage';
import ContentContainer from '../../../components/common/ContentContainer';
import Timetable from '../../../components/website/TimeTable';
import CommonParagraph from '../../../components/common/CommonParagraph';
import EventTable from '../../../components/website/EventTable';
import DayTwoEventTable from '../../../components/website/DayTwoEventTable';
import DayThreeEventTable from '../../../components/website/DayThreeEventTable';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ProgramAtGlance = () => {
    return (
        <div>
            <SectionHeadingTitleAndImage
                title={'MIOC-EMCO-IKS 2024 Preliminary Program'} />
            <ContentContainer>
                {/* <div className='flex justify-start items-center lg:items-start flex-col mb-5'> */}
                <CommonParagraph>The Scientific Organising Committee has crafted an exceptional program aimed at enhancing expertise in general ophthalmology and its subspecialties. The program includes symposia, specialized courses, and skills transfer workshops. It emphasizes groundbreaking research and the latest advancements in medical and surgical treatments.
                        
                    </CommonParagraph>
                {/* </div> */}
            </ContentContainer>

            {/* <div className='w-full max-w-[97%] lg:max-w-[84%] mx-auto'>
                <p className='font-bold'>Day - 1 Thursday, 28 November.</p>
                <EventTable />
                <p className='font-bold'>Day - 2 Friday, 29 November.</p>
                <DayTwoEventTable />
                <p className='font-bold'>Day - 3 Saturday, 30 November.</p>
                <DayThreeEventTable />

            </div> */}
            <div className='w-full max-w-[97%] lg:max-w-[84%] mx-auto'>
                <Tabs>
                    <TabList className="flex justify-around bg-gray-200 p-2 rounded-t-md">
                        <Tab className="cursor-pointer p-2 flex-grow text-center font-bold" selectedClassName="bg-white border-b-2 border-blue-500">
                            <span className="hidden lg:inline">Day - 1 Thursday, 28 November.</span>
                            <span className="lg:hidden">Day - 1</span>
                        </Tab>
                        <Tab className="cursor-pointer p-2 flex-grow text-center font-bold" selectedClassName="bg-white border-b-2 border-blue-500">
                            <span className="hidden lg:inline">Day - 2 Friday, 29 November.</span>
                            <span className="lg:hidden">Day - 2</span>
                        </Tab>
                        <Tab className="cursor-pointer p-2 flex-grow text-center font-bold" selectedClassName="bg-white border-b-2 border-blue-500">
                            <span className="hidden lg:inline">Day - 3 Saturday, 30 November.</span>
                            <span className="lg:hidden">Day - 3</span>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <EventTable />
                    </TabPanel>
                    <TabPanel>
                        <DayTwoEventTable />
                    </TabPanel>
                    <TabPanel>
                        <DayThreeEventTable />
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
}

export default ProgramAtGlance;
