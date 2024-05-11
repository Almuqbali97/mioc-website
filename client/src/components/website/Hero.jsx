import React from 'react';

const Hero = () => {
    return (
            <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden z-0">
                <div class="absolute inset-0">
                <img src="https://img.freepik.com/free-photo/corporate-businessman-giving-presentation-large-audience_53876-101865.jpg?t=st=1715426668~exp=1715430268~hmac=6195b9c3570a768dc1b33c9ef44f2c7c116aca6581b49690be3ebf055d1a21f1&w=1380" alt="Background Image" class="object-cover object-center w-full h-full" />
                    <div class="absolute inset-0 bg-black opacity-50"></div>
                </div>

                <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
                    <h1 class="text-5xl font-bold leading-tight mb-4">Welcome to Our Awesome Website</h1>
                    <p class="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
                    <a href="#" class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
                </div>
            </div>

    );
}

export default Hero;
