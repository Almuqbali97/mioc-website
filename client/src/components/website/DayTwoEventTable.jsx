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
            'Industry Session 3 (Aesthetics)',
            'Break',
            'Industry Session 4 (Ant.Seg.)'
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
            'Industry Session 5 (Retina)',
            'Break',
            'Industry Session 6 (Retina)'
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
                return 'bg-[#F27200] text-black border-gray-300';
            case 'Paediatric Oph 2: Solving the Strabismus Conundrum: Expert Strategies for Complex Cases':
                return 'bg-[#FEAE00] text-black border-gray-300';
            case 'Ocular Imaging':
                return 'bg-[#00AB8E] text-black border-gray-300';
            case 'Dry Eye & Ocular Surface Society (DEOSS) Session':
                return 'bg-[#CB8FAB] border-gray-300';
            case 'Phaco Wet lab':
                return 'bg-[#CB9DFF] text-black border-gray-300';
            case 'Refractive Surgery and Ocular Surface':
                return 'bg-[#73FCD6] border-gray-300';
            case 'Optometry Certified Course: Anterior Ocular Health and Contact Lenses':
            case 'Optometry: Modern Approaches of Contact Lenses Practice':
                return 'bg-[#FF95CA] text-black border-gray-300';
            case 'MEACOUS -Uveitis Course':
            case 'MEACOUS -Uveitis Session 1':
                return 'bg-[#FF85FF] text-black border-gray-300';
            case 'Oculoplasty : Dacryology: Nitty gritty of lacrimal apparatus':
                return 'bg-[#929000] text-black border-gray-300';
            case 'Neuro Oph.':
            case 'Neuro Imaging Course':
                return 'bg-[#FFFC79] text-black border-gray-300';
            case 'Retina 2: What’s new in Retina world-Are we there yet ?':
                return 'bg-[#FF968D] text-black border-gray-300';
            case 'Comprehensive Keratoconus Management: The Optometrist’s Role (Instructional Course)':
                return 'bg-[#61D836] border-gray-300';
            case 'Oph. Nursing Session: Let’s keep an eye on ocular emergencies':
            case 'Oph. Nursing (Hands-on workshop) Mastering Eye Safety: Expert Tips for Preparing Intraocular Lenses with Confidence!”':
                return 'bg-[#FFD479] text-black border-gray-300';
            case 'Aesthetic Workshop':
                return 'bg-[#F27200] text-black border-gray-300';
            case 'Industry Session 3 (Aesthetics)':
            case 'Industry Session 4 (Ant.Seg.)':
            case 'Industry Session 5 (Retina)':
            case 'Industry Session 6 (Retina)':
                return 'bg-[#009193] text-black border-gray-300';
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
                            if (session.hall1 === 'Coffee Break' || session.hall1 === 'Lunch Break') {
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
                                        {Array.isArray(session.hall2) ? (
                                            session.hall2.map((item, subIndex) => (
                                                <div key={subIndex} className={`mb-1 p-2 ${getColorClass(item)} text-center text-xs md:text-sm font-medium min-w-[130px] ${item != 'Break' && 'md:h-[50px]'}`}>
                                                    {item}
                                                </div>
                                            ))
                                        ) : (
                                            session.hall2
                                        )}
                                    </td>
                                    <td className={`border-[1px] border-gray-900 px-3 py-2 ${getColorClass(session.hall3)} text-xs md:text-sm font-medium min-w-[100px] h-[110px] `}>
                                        {Array.isArray(session.hall3) ? (
                                            session.hall3.map((item, subIndex) => (
                                                <div key={subIndex} className={`mb-1 p-2 ${getColorClass(item)} text-center text-xs md:text-sm font-medium min-w-[120px] ${item != 'Break' && 'md:h-[50px]'}`}>
                                                    {item}
                                                </div>
                                            ))
                                        ) : (
                                            session.hall3
                                        )}
                                    </td>
                                    <td className={`border-[1px] border-gray-900 px-3 py-2 ${getColorClass(session.hall4)} text-xs md:text-sm font-medium min-w-[100px] h-[110px] `}>
                                        {session.hall4}
                                    </td>
                                    <td className={`border-[1px] border-gray-900 px-3 py-2 ${getColorClass(session.hall5)} text-xs md:text-sm font-medium min-w-[100px] h-[110px] `}>
                                        {session.hall5}
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
        </div >
    );
};

export default DayTwoEventTable;
