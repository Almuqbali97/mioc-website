import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import ContentContainer from '../../../components/common/ContentContainer';
import SectionHeadingTitleAndImage from '../../../components/website/SectionHeadingTitleAndImage';

let importantDates = [
    {
        event: "Abstract Submission Opens",
        date: "01 June 2024"
    },
    {
        event: "Early Bird Registration Opens",
        date: "01 June 2024"
    },
    {
        event: "Program Schedule & Topics",
        date: "01 June 2024"
    },
    {
        event: "Accommodation Booking Opens",
        date: "15 June 2024"
    },
    {
        event: "Invited Speakers Announcement",
        date: "31 July 2024"
    },
    {
        event: "Conference Courses",
        date: "31 July 2024"
    },
    {
        event: "Abstract Submission Deadline",
        date: "01 September 2024"
    },
    {
        event: "Notification to Submitting Author",
        date: "01 October 2024"
    },
    {
        event: "Final Program Announced",
        date: "15 October 2024"
    },
    {
        event: "Accommodation Booking Closes",
        date: "01 November 2024"
    },
    {
        event: "Early Bird Registration Deadline",
        date: "01 November 2024"
    },
    {
        event: "CME Announcement",
        date: "12 November 2024"
    },
    {
        event: "Standard Registration Deadline",
        date: "21 November 2024"
    },
    {
        event: "MIOC-EMCO-IKS 2024 Goes Live",
        date: "28 November 2024"
    }
];
const ImportantDates = () => {
    return (
        <div>
            <SectionHeadingTitleAndImage title='important dates '/>
            <ContentContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {importantDates.map((date, index) => {
                        return (
                            <div key={index} className="flex items-center space-x-4">
                                <CalendarDaysIcon className='bg-primary_brown h-16 p-3 text-white rounded-full' />
                                <div>
                                    <h1 className="font-custom font-bold text-xl text-blue-950">{date.event}</h1>
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
