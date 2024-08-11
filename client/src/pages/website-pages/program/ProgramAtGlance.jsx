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
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import PrimaryButtonBlue from '../../../components/website/PrimaryButtonBlue';


const ProgramAtGlance = () => {
    return (
        <div>
            <SectionHeadingTitleAndImage title={'MIOC-EMCO-IKS 2024 Preliminary Program'} />



            <div className='w-full max-w-[97%] lg:max-w-[84%] mx-auto'>
                <div className='flex flex-col lg:flex-row justify-between my-20'>
                    <div className='w-full'>
                        <CommonParagraph>The Scientific Organising Committee has crafted an exceptional program aimed at enhancing expertise in general ophthalmology and its subspecialties. The program includes symposia, specialized courses, and skills transfer workshops. It emphasizes groundbreaking research and the latest advancements in medical and surgical treatments.</CommonParagraph>
                        <CommonParagraph>Don't miss the opportunity to <strong>register for the conference</strong> and enjoy a discount by obtaining an <strong>OOS membership</strong>. For more information, please visit the following links.</CommonParagraph>
                        <div className="flex font-semibold text-xl flex-col items-center justify-center gap-5 mt-10 md:mt-14 md:flex-row">

                            <PrimaryButtonBlue text={'Register Now'} link={'/online-registration'} />


                            <Link to="/get-oos-memebership" className='inline-block sm:text-md font-semibold w-auto text-center min-w-[180px] px-1 py-3 sm:px-[1.20rem] sm:py-4 text-white transition-all rounded-md shadow-lg sm:w-auto bg-gradient-to-r from-yellow-600 to-primary_brown hover:bg-gradient-to-b dark:shadow-blue-900 shadow-amber-300 hover:shadow-xl hover:shadow-primary_brown hover:-tranneutral-y-px '>OOS Membership
                            </Link>

                        </div>
                    </div>
                    <div id='quick-links' className='mt-9 lg:mt-0 h-[270px] w-full lg:min-w-[250px] lg:max-w-[250px] font-custom font-light quickLinksCard justify-center flex-col p-4 space-y-5 lg:flex hidden'>
                        <h3 className='font-bold text-lg text-blue-900'>Quick Links</h3>
                        <div className='flex flex-col justify-center space-y-2  text-[1rem] text-slate-900'>
                            <Link to='/important-dates' className='border-b-[0.5px] border-gray-400 pb-2 flex items-center h-full hover:text-primary_brown hover:scale-105 transition-all'><span><ArrowRightIcon className='h-4 bg-gray-400 bg-opacity-50 mr-2 rounded-md' /></span>Important Dates<span></span></Link>
                            <Link to='/online-registration' className='border-b-[0.5px] border-gray-400 pb-2 flex items-center h-full hover:text-primary_brown hover:scale-105 transition-all'><span><ArrowRightIcon className='h-4 bg-gray-400 bg-opacity-50 mr-2 rounded-md' /></span>Online Registration<span></span></Link>
                            <Link to='/sientific-program' className='border-b-[0.5px] border-gray-400 pb-2 flex items-center h-full hover:text-primary_brown hover:scale-105 transition-all'><span><ArrowRightIcon className='h-4 bg-gray-400 bg-opacity-50 mr-2 rounded-md' /></span>Scientific Program<span></span></Link>
                            <Link to='/sponsers-and-exhibitors' className='border-b-[0.5px] border-gray-400 pb-2 flex items-center h-full hover:text-primary_brown hover:scale-105 transition-all'><span><ArrowRightIcon className='h-4 bg-gray-400 bg-opacity-50 mr-2 rounded-md' /></span>Sponsorship & Exhibition<span></span></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full max-w-[97%] lg:max-w-[84%] mx-auto'>
                <Tabs>
                    <TabList className="flex justify-around bg-gray-200 p-2 rounded-t-md">
                        <Tab className="cursor-pointer p-2 flex-grow text-center font-bold" selectedClassName="bg-white rounded-md  border-b-2 border-primary_blue">
                            <span className="hidden lg:inline">Day - 1 Thursday, 28 November.</span>
                            <span className="lg:hidden">Day - 1</span>
                        </Tab>
                        <Tab className="cursor-pointer p-2 flex-grow text-center font-bold" selectedClassName="bg-white rounded-md border-b-2 border-primary_blue">
                            <span className="hidden lg:inline">Day - 2 Friday, 29 November.</span>
                            <span className="lg:hidden">Day - 2</span>
                        </Tab>
                        <Tab className="cursor-pointer p-2 flex-grow text-center font-bold" selectedClassName="bg-white rounded-md border-b-2 border-primary_blue">
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
            <div id='quick-links' className='mt-9 lg:mt-0 h-[270px] w-full lg:min-w-[250px] lg:max-w-[250px] font-custom font-light quickLinksCard justify-center flex-col p-4 space-y-5 lg:hidden flex'>
                <h3 className='font-bold text-lg text-blue-900'>Quick Links</h3>
                <div className='flex flex-col justify-center space-y-2  text-[1rem] text-slate-900'>
                    <Link to='/important-dates' className='border-b-[0.5px] border-gray-400 pb-2 flex items-center h-full hover:text-primary_brown hover:scale-105 transition-all'><span><ArrowRightIcon className='h-4 bg-gray-400 bg-opacity-50 mr-2 rounded-md' /></span>Important Dates<span></span></Link>
                    <Link to='/online-registration' className='border-b-[0.5px] border-gray-400 pb-2 flex items-center h-full hover:text-primary_brown hover:scale-105 transition-all'><span><ArrowRightIcon className='h-4 bg-gray-400 bg-opacity-50 mr-2 rounded-md' /></span>Online Registration<span></span></Link>
                    <Link to='/sientific-program' className='border-b-[0.5px] border-gray-400 pb-2 flex items-center h-full hover:text-primary_brown hover:scale-105 transition-all'><span><ArrowRightIcon className='h-4 bg-gray-400 bg-opacity-50 mr-2 rounded-md' /></span>Scientific Program<span></span></Link>
                    <Link to='/sponsers-and-exhibitors' className='border-b-[0.5px] border-gray-400 pb-2 flex items-center h-full hover:text-primary_brown hover:scale-105 transition-all'><span><ArrowRightIcon className='h-4 bg-gray-400 bg-opacity-50 mr-2 rounded-md' /></span>Sponsorship & Exhibition<span></span></Link>
                </div>
            </div>
        </div>
    );
}

export default ProgramAtGlance;
