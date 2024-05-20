import React from 'react';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import ContentContainer from '../../../components/common/ContentContainer';
import SectionHeadingTitleAndImage from '../../../components/website/SectionHeadingTitleAndImage';

let importantDates = [
    { text: 'Abstract Submission Open', date: '01 June 2024' },
    { text: 'Abstract submission deadline', date: '01 September 2024' },
    { text: 'Abstract notification of acceptance', date: '01 October 2024' },
    { text: 'Early bird deadline and presenter registration deadline', date: '15 October 2024' },
    { text: 'Program Schedule & Topics', date: '06 June 2024' },
    { text: 'Accommodation Booking Opens', date: '06 June 2024' },
    { text: 'Accommodation Booking Opens', date: '06 June 2024' },
    { text: 'Accommodation Booking Opens', date: '06 June 2024' },
    { text: 'Accommodation Booking Opens', date: '06 June 2024' },
    { text: 'Accommodation Booking Opens', date: '06 June 2024' },
    { text: 'Accommodation Booking Opens', date: '06 June 2024' },
    { text: 'Accommodation Booking Opens', date: '06 June 2024' },
];
const ImportantDates = () => {
    return (
        <div>
            <SectionHeadingTitleAndImage title='important dates ' image={'https://img.freepik.com/premium-photo/calendar-page-flipping-sheet-wood-table_293060-1995.jpg?w=1380'} />
            <ContentContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {importantDates.map((date, index) => {
                        return (
                            <div key={index} className="flex items-center space-x-4">
                                <CalendarDaysIcon className='bg-primary_brown h-16 p-3 text-white rounded-full' />
                                <div>
                                    <h1 className="font-custom font-bold text-xl text-blue-950">{date.text}</h1>
                                    <p className="font-custom font-semibold text-blue-900">{date.date}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </ContentContainer>
        </div>
    );
}

export default ImportantDates;
