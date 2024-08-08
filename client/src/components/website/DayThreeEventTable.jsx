import React, { useState } from 'react';
import classNames from 'classnames';

const sessionsDayThree = [
    {
        time: '9:00-10:30',
        hall1: 'IKS Day',
        hall2: 'Certified Course: Paediatric Optometry',
        hall3: 'MEACOUS -Uveitis Session 2',
        hall4: 'Strabismus Workshop: Dive Deeper into Strabismus: A Hands-On Simulation Workshop',
        hall5: 'Emirates Society of Ophthalmology Session',
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
        hall2: 'Optometry Free papers',
        hall3: 'Ocular Oncology',
        hall4: 'Strabismus Workshop Cont.',
        hall5: 'Free Papers',
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
        hall2: 'Optometry: The Era of Myopic Management',
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
        time: '14:30-15:00',
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
    'Paediatric Optometry',
    'MEACOUS',
    'Strabismus Workshop',
    'Emirates Society',
    'Suturing Wet lab',
    'Optometry Free papers',
    'Ocular Oncology',
    'Free Papers',
    'Phaco Wet lab',
    'Myopic Management',
    'Young Oph.',
    'Closing Remarks',
    'Lunch',
];

const DayThreeEventTable = () => {
    const [filter, setFilter] = useState('All');
    const [hoveredSession, setHoveredSession] = useState(null);

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
            case 'Certified Course: Paediatric Optometry':
                return 'bg-[#FF95CA] text-black border-gray-300';
            case 'MEACOUS -Uveitis Session 2':
                return 'bg-[#FF95CA] text-black border-gray-300';
            case 'Strabismus Workshop: Dive Deeper into Strabismus: A Hands-On Simulation Workshop':
            case 'Strabismus Workshop Cont.':
                return 'bg-[#FEAE00] text-black border-gray-300';
            case 'Emirates Society of Ophthalmology Session':
                return 'bg-[#FF968D] text-white border-gray-300';
            case 'Suturing Wet lab':
                return 'bg-[#808CC9] text-black border-gray-300';
            case 'Optometry Free papers':
                return 'bg-[#FF95CA] text-black border-gray-300';
            case 'Ocular Oncology':
                return 'bg-[#009193] text-white border-gray-300';
            case 'Free Papers':
                return 'bg-[#D4FB79] border-gray-300';
            case 'Phaco Wet lab':
                return 'bg-[#CB9DFF] text-black border-gray-300';
            case 'Optometry: The Era of Myopic Management':
                return 'bg-[#929000] text-black border-gray-300';
            case 'Young Oph.':
                return 'bg-[#808080] text-white border-gray-300';
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

    const handleMouseEnter = (index, hall) => {
        setHoveredSession({ index, hall });
    };

    const handleMouseLeave = () => {
        setHoveredSession(null);
    };

    return (
        <div className="p-4">
            <div className="mb-4">
                <label className="mr-2">Filter by Topic:</label>
                <select value={filter} onChange={e => setFilter(e.target.value)} className="p-2 border rounded">
                    {categoriesDayThree.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div className="overflow-x-auto rounded-md shadow-2xl mb-12">
                <table className="border-collapse border border-gray-200 min-w-[1000px]">
                    <thead>
                        <tr>
                            <th className="border-[2.3px] border-gray-300 bg-gray-200 p-2">Time</th>
                            <th className="border-[2.3px] border-gray-300 bg-gray-200 p-2">Hall 1</th>
                            <th className="border-[2.3px] border-gray-300 bg-gray-200 p-2">Hall 2</th>
                            <th className="border-[2.3px] border-gray-300 bg-gray-200 p-2">Hall 3</th>
                            <th className="border-[2.3px] border-gray-300 bg-gray-200 p-2">Hall 4</th>
                            <th className="border-[2.3px] border-gray-300 bg-gray-200 p-2">Hall 5</th>
                            <th className="border-[2.3px] border-gray-300 bg-gray-200 p-2">Hall 6</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSessions.map((session, index) => {
                            if (session.hall1 === 'Coffee Break' || session.hall1 === 'Lunch' || session.hall1 === 'Break' || session.hall1 === 'Closing Remarks') {
                                return (
                                    <tr key={index}>
                                        <td className="border-[2.3px] border-gray-300 p-2 bg-gray-200 text-center min-w-[100px]">{session.time}</td>
                                        <td className="border-[2.3px] border-gray-300 p-2 text-center bg-gray-200" colSpan="6">
                                            {session.hall1}
                                        </td>
                                    </tr>
                                );
                            }
                            return (
                                <tr key={index}>
                                    <td className="border-[2.3px] border-gray-300 p-2 bg-gray-200 min-w-[100px] text-center min-h-[200px]">{session.time}</td>
                                    <td
                                        className={classNames(`border-[1px] border-gray-900 px-3 py-2 ${getColorClass(session.hall1)} h-[130px] w-[200px]`, {
                                            'hover:scale-125 transition-transform duration-300': filter === 'All'
                                        })}
                                        onMouseEnter={() => filter === 'All' && handleMouseEnter(index, 'hall1')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {hoveredSession && hoveredSession.index === index && hoveredSession.hall === 'hall1' && filter === 'All' && (
                                            <div className="text-xs mb-1">{session.time} - Hall 1</div>
                                        )}
                                        {session.hall1}
                                    </td>
                                    <td
                                        className={classNames(`border-[1px] border-gray-900 px-3 py-2 ${getColorClass(session.hall2)} h-[130px] w-[200px]`, {
                                            'hover:scale-125 transition-transform duration-300': filter === 'All'
                                        })}
                                        onMouseEnter={() => filter === 'All' && handleMouseEnter(index, 'hall2')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {hoveredSession && hoveredSession.index === index && hoveredSession.hall === 'hall2' && filter === 'All' && (
                                            <div className="text-xs mb-1">{session.time} - Hall 2</div>
                                        )}
                                        {session.hall2}
                                    </td>
                                    <td
                                        className={classNames(`border-[1px] border-gray-900 px-3 py-2 ${getColorClass(session.hall3)} h-[130px] w-[200px]`, {
                                            'hover:scale-125 transition-transform duration-300': filter === 'All'
                                        })}
                                        onMouseEnter={() => filter === 'All' && handleMouseEnter(index, 'hall3')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {hoveredSession && hoveredSession.index === index && hoveredSession.hall === 'hall3' && filter === 'All' && (
                                            <div className="text-xs mb-1">{session.time} - Hall 3</div>
                                        )}
                                        {Array.isArray(session.hall3) ? (
                                            session.hall3.map((item, subIndex) => (
                                                <div key={subIndex} className={`mb-1 p-2 ${getColorClass(item)} text-center`}>
                                                    {item}
                                                </div>
                                            ))
                                        ) : (
                                            session.hall3
                                        )}
                                    </td>
                                    <td
                                        className={classNames(`border-[1px] border-gray-900 px-3 py-2 ${getColorClass(session.hall4)} h-[130px] w-[200px]`, {
                                            'hover:scale-125 transition-transform duration-300': filter === 'All'
                                        })}
                                        onMouseEnter={() => filter === 'All' && handleMouseEnter(index, 'hall4')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {hoveredSession && hoveredSession.index === index && hoveredSession.hall === 'hall4' && filter === 'All' && (
                                            <div className="text-xs mb-1">{session.time} - Hall 4</div>
                                        )}
                                        {session.hall4}
                                    </td>
                                    <td
                                        className={classNames(`border-[1px] border-gray-900 px-3 py-2 ${getColorClass(session.hall5)} h-[130px] w-[200px]`, {
                                            'hover:scale-125 transition-transform duration-300': filter === 'All'
                                        })}
                                        onMouseEnter={() => filter === 'All' && handleMouseEnter(index, 'hall5')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {hoveredSession && hoveredSession.index === index && hoveredSession.hall === 'hall5' && filter === 'All' && (
                                            <div className="text-xs mb-1">{session.time} - Hall 5</div>
                                        )}
                                        {session.hall5}
                                    </td>
                                    <td
                                        className={classNames(`border-[1px] border-gray-900 px-3 py-2 ${getColorClass(session.hall6)} h-[130px] w-[200px]`, {
                                            'hover:scale-125 transition-transform duration-300': filter === 'All'
                                        })}
                                        onMouseEnter={() => filter === 'All' && handleMouseEnter(index, 'hall6')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {hoveredSession && hoveredSession.index === index && hoveredSession.hall === 'hall6' && filter === 'All' && (
                                            <div className="text-xs mb-1">{session.time} - Hall 6</div>
                                        )}
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
