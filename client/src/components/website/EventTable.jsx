import React, { useState } from 'react';
import classNames from 'classnames';

const sessions = [
    {
        time: '9:00-10:30',
        hall1: 'Ant. Seg/Cataract & IOL: From Cloudy to Clarity: Revolutionizing Cataract surgeries in challenging cases',
        hall2: 'Optometry: Advancements and future directions',
        hall3: 'Oculoplasty : Orbit: The Pandora’s box',
        hall4: 'Free Papers',
        hall5: 'The Cutting-Edge Artificial intelligence in Ophthalmology (Instructional Course)',
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
        hall1: 'Cornea/ Keratoconus',
        hall2: 'Optometric Business Management',
        hall3: 'Paediatric Oph 1: Through a Child’s Eyes: Navigating Pediatric Retina and lens Diseases for Better Vision and Quality of Life',
        hall4: 'Free Papers',
        hall5: 'The Cutting-Edge Artificial intelligence in Ophthalmology (Instructional Course)',
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
        hall1: 'Glaucoma Course: Correlating structure and function in Glaucoma',
        hall2: 'Optometry: Navigating Low Vision Challenges',
        hall3: 'Retina 1: Pearls in Medical Retina',
        hall4: 'Free Papers',
        hall5: 'Refractive Surgery Workup: A Step-by-Step Guide (Instructional Course)',
        hall6: 'Suturing Wet lab',
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
        hall1: 'Glaucoma Session 1: Tips and tricks from glaucoma surgeons to other ocular surgeons',
        hall2: 'Junior Optometrist session - winning research',
        hall3: [
            'Industry Session 1 (Retina) 40 min',
            'Break',
            'Industry Session 2 (Retina) 40 min'
        ],
        hall4: 'Free Papers',
        hall5: 'Refractive Surgery Workup: A Step-by-Step Guide (Instructional Course)',
        hall6: 'Suturing Wet lab',
    },
];

const categories = [
    'All',
    'Ant. Seg/Cataract & IOL',
    'Optometry',
    'Oculoplasty',
    'Free Papers',
    'Artificial intelligence',
    'Phaco Wet lab',
    'Cornea',
    'Optometric Business Management',
    'Paediatric Oph',
    'Glaucoma',
    'Retina',
    'Junior Optometrist session',
    'Industry Session',
    'Suturing Wet lab'
];

const EventTable = () => {
    const [filter, setFilter] = useState('All');

    const filteredSessions = filter === 'All' ? sessions : sessions.map(session => {
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
            case 'Ant. Seg/Cataract & IOL: From Cloudy to Clarity: Revolutionizing Cataract surgeries in challenging cases':
                return 'bg-[#017100] text-black border-gray-300';
            case 'Optometry: Advancements and future directions':
                return 'bg-[#FF95CA] text-black border-gray-300';
            case 'Oculoplasty : Orbit: The Pandora’s box':
                return 'bg-[#929000] text-black border-gray-300';
            case 'Free Papers':
                return 'bg-[#D4FB79] border-gray-300';
            case 'The Cutting-Edge Artificial intelligence in Ophthalmology (Instructional Course)':
                return 'bg-[#61D836] border-gray-300';
            case 'Phaco Wet lab':
                return 'bg-[#CB9DFF] text-black border-gray-300';
            case 'Cornea/ Keratoconus':
                return 'bg-[#73FCD6] text-black border-gray-300';
            case 'Optometric Business Management':
                return 'bg-[#FF95CA] text-black border-gray-300';
            case 'Paediatric Oph 1: Through a Child’s Eyes: Navigating Pediatric Retina and lens Diseases for Better Vision and Quality of Life':
                return 'bg-[#FEAE00] text-black border-gray-300';
            case 'Glaucoma Course: Correlating structure and function in Glaucoma':
                return 'bg-[#56C1FF] text-black border-gray-300';
            case 'Glaucoma Session 1: Tips and tricks from glaucoma surgeons to other ocular surgeons':
                return 'bg-[#56C1FF] text-black border-gray-300';
            case 'Optometry: Navigating Low Vision Challenges':
                return 'bg-[#FF95CA] text-black border-gray-300';
            case 'Retina 1: Pearls in Medical Retina':
                return 'bg-[#FF968D] text-black border-gray-300';
            case 'Refractive Surgery Workup: A Step-by-Step Guide (Instructional Course)':
                return 'bg-[#61D836] border-gray-300';
            case 'Suturing Wet lab':
                return 'bg-[#808CC9] text-black border-gray-300';
            case 'Junior Optometrist session - winning research':
                return 'bg-[#FF95CA] text-black border-gray-300';
            case 'Industry Session 1 (Retina) 40 min':
                return 'bg-[#009193] text-black border-gray-300';
            case 'Industry Session 2 (Retina) 40 min':
                return 'bg-[#009193] text-black border-gray-300';
            case 'Break':
                return 'bg-white text-black border-gray-300';
            default:
                return '';
        }
    };

    return (
        <div className="p-4">
            {/* <div className="mb-4">
                <label className="mr-2">Filter by Topic:</label>
                <select value={filter} onChange={e => setFilter(e.target.value)} className="p-2 border rounded">
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div> */}
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
                                        {session.hall2}
                                    </td>
                                    <td className={`border-[1px] border-gray-900 px-3 py-2 ${getColorClass(session.hall3)} text-xs md:text-sm font-medium min-w-[100px] h-[110px] `}>
                                        {Array.isArray(session.hall3) ? (
                                            session.hall3.map((item, subIndex) => (
                                                <div key={subIndex} className={`mb-1 p-2 ${getColorClass(item)} text-center text-xs md:text-sm font-medium min-w-[100px] xs:h-[20px]${item != 'Break' && 'md:h-[30px]'} `}>
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
        </div>
    );
};

export default EventTable;
