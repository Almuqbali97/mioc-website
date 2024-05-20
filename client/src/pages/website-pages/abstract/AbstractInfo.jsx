import React from 'react';
import SectionHeadingTitleAndImage from '../../../components/website/SectionHeadingTitleAndImage';
import ContentContainer from '../../../components/common/ContentContainer';
import CommonParagraph from '../../../components/common/CommonParagraph';
import PrimaryButtonBlue from '../../../components/website/PrimaryButtonBlue';
import { CalendarDaysIcon, } from '@heroicons/react/24/outline'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import PrimaryButtonBrown from '../../../components/website/PrimaryButtonBrown';
import ParagraphTitle from '../../../components/website/ParagraphTitle';

let abstractDates = [
    { text: 'Abstract Submission Open', date: '01 June 2024' },
    { text: 'Abstract submission deadline', date: '01 September 2024' },
    { text: 'Abstract notification of acceptance', date: '01 October 2024' },
]

const topics = [
    "Cataract & Lens Surgery",
    "Contact Lens and Refraction",
    "Glaucoma",
    "Medical Retina",
    "Surgical Retina",
    "Neuro-ophthalmology",
    "Ocular Imaging",
    "Ocular Oncology",
    "Cornea, External Eye Diseases, and Eye Banking",
    "Oculoplasty",
    "Ophthalmic Education/Young",
    "Ophthalmologists",
    "Ophthalmic Epidemiology",
    "Ophthalmic Trauma",
    "Ophthalmic Pathology and Microbiology",
    "Ophthalmic Nursing",
    "Ophthalmic Assistants & Technicians Optometry",
    "Orbital, Oculoplastic, and Lacrimal Diseases",
    "Pathology",
    "Pediatric Ophthalmology and Strabismus",
    "Refractive Surgery",
    "Uveitis",
    "Vision Rehabilitation",
    "Vision Sciences Vitreoretina",
    "Video Presentation",
    "Other (please specify)"
];

let abstractStrcuture = ['Background and Purpose', 'Methods', 'Results', 'Conclusions'];

const AbstractInfo = () => {
    return (
        <div>

            <SectionHeadingTitleAndImage title={'ABSTRACT INFO'} image={'https://img.freepik.com/free-photo/high-angle-uncompleted-checking-boxes_23-2148265488.jpg?t=st=1716216341~exp=1716219941~hmac=d5a78be512ff8294ce97d6f9648cf68fdccd64004896a44a2f8c6f145b30404b&w=996'} />
            <ContentContainer>
                <CommonParagraph>
                    The scientific program of MIOC 2024 will include a wide range of Free Paper Presentation, Case Presentation, Poster Presentation and Videos, as well as lectures by world renowned and eminent guest speakers during plenary and special sessions.
                </CommonParagraph>
                <CommonParagraph>
                    We encourage our colleagues from around the world to take part and join our list of speakers by contributing an abstract to either conduct Free Paper Presentation, Case Presentation, Poster Presentation and Videos or participate.
                </CommonParagraph>
                <CommonParagraph>
                    Submissions are only accepted online. Helpful information is available under the <span className='text-primary_brown font-bold'><a href='/author-agreement'>author agreement</a></span>, <span className='text-primary_brown font-bold'><a href='/poster-presenter-guidelines'>poster presenter guidelines</a></span>.
                </CommonParagraph>
                <div className='mt-7'>
                    <PrimaryButtonBlue text={'Submit Your Abstract'} link={'/submit-abstract'} />
                </div>

                <div className='w-full mt-7 flex flex-col space-x-3 lg:flex-row font-custom' >
                    <div className='flex flex-col w-full'>
                        {abstractDates.map((date, index) => {
                            return <div className='flex items-start space-x-3'>
                                <CalendarDaysIcon className='text-primary_brown h-7' />
                                <div>
                                    <h1 className='font-bold text-blue-950 font-custom'>{date.text}</h1>
                                    <CommonParagraph>{date.date}</CommonParagraph>
                                </div>
                            </div>
                        })}

                        <div className='mt-5'>
                            <PrimaryButtonBrown text={'More Important Dates'} link={'/important-dates'} />
                        </div>
                    </div>
                    <div className='mt-11 lg:mt-0'>
                        <ParagraphTitle title={'Guidelines for submitting an abstract :'} />
                        <CommonParagraph>
                            A special criterion for accepting abstracts will be their topic as well as structure, content and degree of innovation. The scientific committee will accept abstracts based on their relevance and quality, structure, content and degree of innovation.
                        </CommonParagraph>
                        <ul className='list-disc ml-5 font-light'>
                            <li>Please note that a maximum of 300 words is permitted. The titles and the names of the authors are excluded from this number and have to be entered separately. Tables should not be included in the abstract body.
                            </li>
                            <li>Methods section should include type of statistical analysis done if applicable to the study.</li>
                            <li>Statements like “Results will be discussed” are not acceptable and may lead to a rejection of the abstract.</li>
                        </ul>
                    </div>
                </div>
                <div className='w-full h-[1.5px] bg-gradient-to-r from-transparent via-blue-900 to-transparent my-11'></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 font-custom font-light">
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
                <CommonParagraph>Submissions are only accepted online. Helpful information is available under the <span className='text-primary_brown'><a href='/author-agreement'>author agreement</a></span>, <span className='text-primary_brown'><a href='/poster-presenter-guidelines'>poster presenter guidelines</a></span></CommonParagraph>
                <CommonParagraph>Authors will be notified about the delivery of their abstract by e-mail immediately. In case you do not receive confirmation within 24 hours, please check your spam folder. In case of no confirmation e-mail, please contact: <span className='text-primary_brown'>info@meaco-oman.org</span></CommonParagraph>
            </ContentContainer>
        </div>
    );
}

export default AbstractInfo;
