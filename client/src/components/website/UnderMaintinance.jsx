import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UnderMaintenance = () => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const nextNoon = new Date(now);

        if (now.getHours() >= 12) {
            // If it's past noon, set nextNoon to tomorrow at 12:00 PM
            nextNoon.setDate(now.getDate() + 1);
        }
        nextNoon.setHours(12, 0, 0, 0); // Set to 12:00 PM

        const difference = nextNoon - now;
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div>
            <div className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80')" }}>
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-90"></div>

                <div className="z-10 text-xl capitalize">
                    The service will be back soon, stay close!
                </div>

                <div className="flex items-end justify-center z-10">
                    <div className="m-2 sm:m-5">
                        <span className="text-primary_blue font-bold text-xl sm:text-5xl">{timeLeft.days || '0'}</span>
                        <p>Days</p>
                    </div>
                    <div className="m-2 sm:m-5">
                        <span className="text-primary_blue font-bold text-xl sm:text-5xl">{timeLeft.hours || '0'}</span>
                        <p>Hours</p>
                    </div>
                    <div className="m-2 sm:m-5">
                        <span className="text-primary_blue font-bold text-xl sm:text-5xl">{timeLeft.minutes || '0'}</span>
                        <p>Minutes</p>
                    </div>
                    <div className="m-2 sm:m-5">
                        <span className="text-primary_blue font-bold text-xl sm:text-5xl">{timeLeft.seconds || '0'}</span>
                        <p>Seconds</p>
                    </div>
                </div>

                <div className="rounded-md shadow z-10 mt-5">
                    <Link to={'/'}
                        className="w-full px-8 py-3 border border-transparent text-base leading-6 font-bold rounded-full text-white bg-primary_brown hover:bg-primary_blue focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-md md:px-16">
                        <span>Home</span>

                    </Link>
                </div>
            </div>
        </div>
    );
}

export default UnderMaintenance;
