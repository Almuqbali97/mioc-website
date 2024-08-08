import React from 'react';

const Timetable = ({ schedule }) => {
    return (
        <div className="container pr-8 pl-0">
            <div className="grid grid-cols-7 gap-0">
                <div className="col-span-1 bg-gray-300 p-2 ">
                    <div className="font-bold text-center">Time (Oman Time/GMT+4)</div>
                </div>
                {['Hall 1', 'Hall 2', 'Hall 3', 'Hall 4', 'Hall 5', 'Hall 6'].map((hall, index) => (
                    <div key={index} className="bg-gray-300 p-1 font-bold text-center border content-center">{hall}</div>
                ))}
                {schedule.map((slot, index) => (
                    <React.Fragment key={index}>
                        <div className="col-span-1 bg-gray-300 p-2 text-center font-bold content-center border ">{slot.time}</div>
                        {slot.sessions.map((session, idx) => (
                            <div
                                key={idx}
                                className={`col-span-${session.hall === 'All' ? 6 : 1} ${session.bgColor} p-2 border border-gray-400`}
                            >
                                {session.hall !== 'All' && <p className="text-sm font-bold">{session.hall}</p>}
                                <p className="text-sm">{session.title}</p>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Timetable;
