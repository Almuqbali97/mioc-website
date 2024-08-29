import React, { useState } from 'react';

const sessionsDayThree = [
    {
        time: '9:00-10:30',
        hall1: 'IKS Day',
        hall2: 'Ocular Imaging',
        hall3: 'MEACOUS -Uveitis Session 2',
        hall4: 'Strabismus Workshop: Dive Deeper into Strabismus: A Hands-On Simulation Workshop',
        hall5: 'Free Papers',
        hall6: 'Suturing Wet lab',
    },
    {
        time: '10:30-11:00',
        hall1: 'Coffee Break',
        hall2: 'Coffee Break',
        hall3: 'Coffee Break',
        hall4: 'Coffee Break',
        hall5: 'Coffee Break',
        hall6: 'Coffee Break',
    },
    {
        time: '11:00-12:30',
        hall1: 'IKS Day',
        hall2: 'Ocular Oncology',
        hall3: 'iTeach Session',
        hall4: 'Strabismus Workshop Cont.',
        hall5: [
            'Coffee Break',
            'Emirates Society of Ophthalmology Session',
        ],
        hall6: 'Phaco Wet lab',
    },
    {
        time: '12:30-12:45',
        hall1: 'Break',
        hall2: 'Break',
        hall3: 'Break',
        hall4: 'Break',
        hall5: 'Break',
        hall6: 'Break',
    },
    {
        time: '12:45-14:15',
        hall1: 'IKS Day',
        hall2: 'Oculoplasty: Dacryology: Nitty gritty of lacrimal apparatus',
        hall3: 'Young Oph.',
        hall4: 'Strabismus Workshop Cont.',
        hall5: 'Free Papers',
        hall6: 'Phaco Wet lab',
    },
    {
        time: '14:15-14:30',
        hall1: 'Closing Remarks',
        hall2: 'Closing Remarks',
        hall3: 'Closing Remarks',
        hall4: 'Closing Remarks',
        hall5: 'Closing Remarks',
        hall6: 'Closing Remarks',
    },
    {
        time: '14:30',
        hall1: 'Lunch',
        hall2: 'Lunch',
        hall3: 'Lunch',
        hall4: 'Lunch',
        hall5: 'Lunch',
        hall6: 'Lunch',
    },
];

const categoriesDayThree = [
    'All',
    'IKS Day',
    'Ocular Imaging',
    'MEACOUS',
    'Strabismus Workshop',
    'Free Papers',
    'Suturing Wet lab',
    'Ocular Oncology',
    'iTeach Session',
    'Emirates Society',
    'Phaco Wet lab',
    'Young Oph.',
    'Oculoplasty',
    'Closing Remarks',
    'Lunch',
];

const DayThreeEventTable = () => {
    const [filter, setFilter] = useState('All');

    const filteredSessions = filter === 'All' ? sessionsDayThree : sessionsDayThree.map(session => {
        const filteredSession = { ...session };
        Object.keys(session).forEach(key => {
            if (key !== 'time' && !session[key].toString().toLowerCase().includes(filter.toLowerCase())) {
                filteredSession[key] = '';
            }
        });
        return filteredSession;
    });

    const getColorClass = (hall) => {
        if (Array.isArray(hall)) {
            return hall.map(getColorClass);
        }
        switch (hall) {
            case 'IKS Day':
                return 'bg-[#8B3A62] text-white border-gray-300';
            case 'Ocular Imaging':
                return 'bg-[#009193] text-black border-gray-300';
            case 'MEACOUS -Uveitis Session 2':
                return 'bg-[#FF85FF] text-black border-gray-300';
            case 'Strabismus Workshop: Dive Deeper into Strabismus: A Hands-On Simulation Workshop':
            case 'Strabismus Workshop Cont.':
                return 'bg-[#FEAE00] text-black border-gray-300';
            case 'Free Papers':
                return 'bg-[#D4FB79] border-gray-300 border-b-0';
            case 'Suturing Wet lab':
                return 'bg-[#808CC9] text-black border-gray-300';
            case 'Ocular Oncology':
                return 'bg-[#0076BA] text-black border-gray-300';
            case 'iTeach Session':
                return 'bg-[#FF5733] text-black border-gray-300';
            case 'Emirates Society of Ophthalmology Session':
                return 'bg-[#F36758] text-black border-gray-300 bg-[#F36758]';
            case 'Phaco Wet lab':
                return 'bg-[#CB9DFF] text-black border-gray-300';
            case 'Young Oph.':
                return 'bg-[#808080] text-black border-gray-300';
            case 'Oculoplasty: Dacryology: Nitty gritty of lacrimal apparatus':
                return 'bg-[#929000] text-black border-gray-300';
            case 'Closing Remarks':
                return 'bg-[#929000] text-black border-gray-300';
            case 'Lunch':
                return 'bg-[#D4FB79] border-gray-300';
            case 'Break':
                return 'bg-white text-black border-gray-300';
            default:
                return '';
        }
    };

    return (
        <div className="p-4">
            <div className="overflow-x-auto rounded-md shadow-2xl mb-12">
                <table className="border-collapse border border-gray-200 min-w-[500px]">
                    <thead>
                        <tr>
                            <th className="border-[2.3px] border-gray-300 bg-gray-200 p-2 text-xs md:text-sm">Time</th>
                            <th className="border-[2.3px] border-gray-300 bg-gray-200 p-2 text-xs md:text-sm">Hall 1</th>
                            <th className="border-[2.3px] border-gray-300 bg-gray-200 p-2 text-xs md:text-sm">Hall 2</th>
                            <th className="border-[2.3px] border-gray-300 bg-gray-200 p-2 text-xs md:text-sm">Hall 3</th>
                            <th className="border-[2.3px] border-gray-300 bg-gray-200 p-2 text-xs md:text-sm">Hall 4</th>
                            <th className="border-[2.3px] border-gray-300 bg-gray-200 p-2 text-xs md:text-sm">Hall 5</th>
                            <th className="border-[2.3px] border-gray-300 bg-gray-200 p-2 text-xs md:text-sm">Hall 6</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSessions.map((session, index) => {
                            if (session.hall1 === 'Coffee Break') {
                                return (
                                    <tr key={index}>
                                        <td className="border-[2.3px] border-gray-300 p-2 bg-gray-200 text-center min-w-[50px] md:min-w-[100px] text-xs md:text-sm">{session.time}</td>
                                        <td className="border-[2.3px] border-gray-300 p-2 text-center bg-gray-200 text-xs md:text-sm" colSpan="4">
                                            {session.hall1}
                                        </td>
                                        <td className="  p-2 text-center bg-[#D4FB79] text-xs md:text-sm" colSpan="1">
                                            {/* {session.hall1} */}
                                        </td>
                                        <td className="border-[2.3px] border-gray-300 p-2 text-center bg-gray-200 text-xs md:text-sm" colSpan="1">
                                            {session.hall1}
                                        </td>
                                    </tr>
                                );
                            }
                            if (session.hall1 === 'Lunch' || session.hall1 === 'Break' || session.hall1 === 'Closing Remarks') {
                                return (
                                    <tr key={index}>
                                        <td className="border-[2.3px] border-gray-300 p-2 bg-gray-200 text-center min-w-[50px] md:min-w-[100px] text-xs md:text-sm">{session.time}</td>
                                        <td className="border-[2.3px] border-gray-300 p-2 text-center bg-gray-200 text-xs md:text-sm" colSpan="6">
                                            {session.hall1}
                                        </td>
                                    </tr>
                                );
                            }
                            return (
                                <tr key={index}>
                                    <td className="border-[2.3px] border-gray-300 p-2 bg-gray-200 text-center min-w-[50px] md:min-w-[100px] text-xs md:text-sm">{session.time}</td>
                                    <td className={`border-[1px] border-gray-900 px-3 py-2 ${getColorClass(session.hall1)} text-xs md:text-sm font-medium min-w-[100px] h-[110px] `}>
                                        {session.hall1}
                                    </td>
                                    <td className={`border-[1px] border-gray-900 px-3 py-2 ${getColorClass(session.hall2)} text-xs md:text-sm font-medium min-w-[100px] h-[110px] `}>
                                        {session.hall2}
                                    </td>
                                    <td className={`border-[1px] border-gray-900 px-3 py-2 ${getColorClass(session.hall3)} text-xs md:text-sm font-medium min-w-[100px] h-[110px] `}>
                                        {session.hall3}
                                    </td>
                                    <td className={`border-[1px] border-gray-900 px-3 py-2 ${getColorClass(session.hall4)} text-xs md:text-sm font-medium min-w-[100px] h-[110px] `}>
                                        {session.hall4}
                                    </td>
                                    <td className={`border-[1px] border-gray-900  ${getColorClass(session.hall5)} text-xs md:text-sm font-medium  ${session.hall5 != 'Free Papers' ? 'bg-[#F36758]' : ''}}`}>
                                        {Array.isArray(session.hall5) ? (
                                            session.hall5.map((item, subIndex) => (
                                                <div key={subIndex} className={`mb-1 ${getColorClass(item)} text-center text-xs md:text-sm font-medium min-w-[100px] xs:h-[20px]${item != 'Coffee Break' && 'md:h-[30px]'} ${item == 'Coffee Break' && 'bg-gray-200 -mt-9 border-t-0 py-1'} `}>
                                                    {item}
                                                </div>
                                            ))
                                        ) : (
                                            session.hall5
                                        )}
                                    </td>
                                    <td className={`border-[1px] border-gray-900 px-3 py-2 ${getColorClass(session.hall6)} text-xs md:text-sm font-medium min-w-[100px] h-[110px] `}>
                                        {session.hall6}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DayThreeEventTable;
