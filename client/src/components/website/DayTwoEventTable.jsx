import React, { useState } from 'react';
import classNames from 'classnames';

const sessionsDayTwo = [
    {
        time: '9:00-10:30',
        hall1: 'Glaucoma Session 2: Hot topics in surgical management: what to do next if a trabeculectomy fails?',
        hall2: 'Aesthetics',
        hall3: 'Paediatric Oph 2: Solving the Strabismus Conundrum: Expert Strategies for Complex Cases',
        hall4: 'Ocular Imaging',
        hall5: 'Dry Eye & Ocular Surface Society (DEOSS) Session',
        hall6: 'Phaco Wet lab',
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
        hall1: 'Refractive Surgery and Ocular Surface',
        hall2: [
            'Industry Session 3 (Aesthetics) 40 min',
            'Break',
            'Industry Session 4 (Ant.Seg.) 40 min'
        ],
        hall3: 'Optometry Certified Course: Anterior Ocular Health and Contact Lenses',
        hall4: 'MEACOUS -Uveitis Course',
        hall5: 'Oculoplasty : Dacryology: Nitty gritty of lacrimal apparatus',
        hall6: 'Phaco Wet lab',
    },
    {
        time: '12:30-14:00',
        hall1: 'Lunch Break',
        hall2: 'Lunch Break',
        hall3: 'Lunch Break',
        hall4: 'Lunch Break',
        hall5: 'Lunch Break',
        hall6: 'Lunch Break',
    },
    {
        time: '14:00-15:30',
        hall1: 'Glaucoma Session 3: Masquerade angle closure glaucoma attacks',
        hall2: 'Neuro Oph.',
        hall3: 'Retina 2: What’s new in Retina world-Are we there yet ?',
        hall4: 'Comprehensive Keratoconus Management: The Optometrist’s Role (Instructional Course)',
        hall5: 'Oph. Nursing Session: Let’s keep an eye on ocular emergencies',
        hall6: 'Aesthetic Workshop',
    },
    {
        time: '15:30-16:00',
        hall1: 'Coffee Break',
        hall2: 'Coffee Break',
        hall3: 'Coffee Break',
        hall4: 'Coffee Break',
        hall5: 'Coffee Break',
        hall6: 'Coffee Break',
    },
    {
        time: '16:00-17:30',
        hall1: 'Optometry: Modern Approaches of Contact Lenses Practice',
        hall2: 'Neuro Imaging Course',
        hall3: [
            'Industry Session 5 (Retina) 40 min',
            'Break',
            'Industry Session 6 (Retina) 40 min'
        ],
        hall4: 'MEACOUS -Uveitis Session 1',
        hall5: 'Oph. Nursing (Hands-on workshop) Mastering Eye Safety: Expert Tips for Preparing Intraocular Lenses with Confidence!”',
        hall6: 'Aesthetic Workshop',
    },
];

const categoriesDayTwo = [
    'All',
    'Glaucoma',
    'Aesthetics',
    'Paediatric Oph',
    'Ocular Imaging',
    'Dry Eye',
    'Phaco Wet lab',
    'Refractive Surgery',
    'Industry Session',
    'Optometry',
    'MEACOUS',
    'Oculoplasty',
    'Neuro Oph.',
    'Retina',
    'Comprehensive Keratoconus',
    'Oph. Nursing',
    'Aesthetic Workshop'
];

const DayTwoEventTable = () => {
    const [filter, setFilter] = useState('All');
    const [hoveredSession, setHoveredSession] = useState(null);

    const filteredSessions = filter === 'All' ? sessionsDayTwo : sessionsDayTwo.map(session => {
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
            case 'Glaucoma Session 2: Hot topics in surgical management: what to do next if a trabeculectomy fails?':
            case 'Glaucoma Session 3: Masquerade angle closure glaucoma attacks':
                return 'bg-[#56C1FF] text-black border-gray-300';
            case 'Aesthetics':
                return 'bg-[#FEAE00] text-black border-gray-300';
            case 'Paediatric Oph 2: Solving the Strabismus Conundrum: Expert Strategies for Complex Cases':
                return 'bg-[#FEAE00] text-black border-gray-300';
            case 'Ocular Imaging':
                return 'bg-[#929000] text-black border-gray-300';
            case 'Dry Eye & Ocular Surface Society (DEOSS) Session':
                return 'bg-[#61D836] border-gray-300';
            case 'Phaco Wet lab':
                return 'bg-[#CB9DFF] text-black border-gray-300';
            case 'Refractive Surgery and Ocular Surface':
                return 'bg-[#D4FB79] border-gray-300';
            case 'Optometry Certified Course: Anterior Ocular Health and Contact Lenses':
            case 'Optometry: Modern Approaches of Contact Lenses Practice':
                return 'bg-[#FF95CA] text-black border-gray-300';
            case 'MEACOUS -Uveitis Course':
            case 'MEACOUS -Uveitis Session 1':
                return 'bg-[#FF95CA] text-black border-gray-300';
            case 'Oculoplasty : Dacryology: Nitty gritty of lacrimal apparatus':
                return 'bg-[#929000] text-black border-gray-300';
            case 'Neuro Oph.':
            case 'Neuro Imaging Course':
                return 'bg-[#009193] text-black border-gray-300';
            case 'Retina 2: What’s new in Retina world-Are we there yet ?':
                return 'bg-[#FF968D] text-black border-gray-300';
            case 'Comprehensive Keratoconus Management: The Optometrist’s Role (Instructional Course)':
                return 'bg-[#61D836] border-gray-300';
            case 'Oph. Nursing Session: Let’s keep an eye on ocular emergencies':
            case 'Oph. Nursing (Hands-on workshop) Mastering Eye Safety: Expert Tips for Preparing Intraocular Lenses with Confidence!”':
                return 'bg-[#929000] text-black border-gray-300';
            case 'Aesthetic Workshop':
                return 'bg-[#FEAE00] text-black border-gray-300';
            case 'Industry Session 3 (Aesthetics) 40 min':
            case 'Industry Session 4 (Ant.Seg.) 40 min':
            case 'Industry Session 5 (Retina) 40 min':
            case 'Industry Session 6 (Retina) 40 min':
                return 'bg-[#929000] text-black border-gray-300';
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
                    {categoriesDayTwo.map(category => (
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
                            if (session.hall1 === 'Coffee Break' || session.hall1 === 'Lunch Break') {
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
                                        onMouseEnter={() => filter === 'All' && handleMouseEnter(index, 'hall3')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {hoveredSession && hoveredSession.index === index && hoveredSession.hall === 'hall3' && filter === 'All' && (
                                            <div className="text-xs mb-1">{session.time} - Hall 2</div>
                                        )}
                                        {Array.isArray(session.hall2) ? (
                                            session.hall2.map((item, subIndex) => (
                                                <div key={subIndex} className={`mb-1 p-2 ${getColorClass(item)} text-center`}>
                                                    {item}
                                                </div>
                                            ))
                                        ) : (
                                            session.hall2
                                        )}
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

export default DayTwoEventTable;
