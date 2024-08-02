import { useState, useEffect } from 'react';
import HeroImg1 from '../../assets/images/hero1.jpg';
// import HeroImg2 from '../../assets/images/hero2.jpg';
// import HeroImg3 from '../../assets/images/hero3.jpg';
// import HeroImg4 from '../../assets/images/hero4.jpg';
import omanVisionWhite from '../../assets/images/omanVisionWhite.png';
import TopLogos from './TopLogos';
import { Link } from 'react-router-dom';



const heroImages = [HeroImg1,];
const Hero = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(currentIndex => (currentIndex + 1) % heroImages.length);
        }, 8000); // changes every 4 seconds

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, []);
    return (
        <div className='bg-[#33689c] bg-opacity-40 h-screen w-full relative text-center'>
            <img key={heroImages[0]} src={heroImages[0]} className='w-full h-full object-cover absolute -z-50 ' />
            {/* // className='w-full h-full object-cover absolute -z-50 fading' /> */}
            <TopLogos />
            <img src={omanVisionWhite} className='h-16 sm:hidden mx-auto text-white ' />
            <img src={omanVisionWhite} className='h-12 sm:h-24 md:h-28 lg:h-36 hidden sm:block absolute top-50 sm:right-0 sm:top-0 text-white ' />

            <div className='flex justify-center items-start mt-7'>
                <div className="flex justify-center items-center text-white dark:bg-gray-800">
                    <div className="text-center max-w-7xl md:max-w-6xl mx-7 md:mx-10">
                        <h1 className="mb-2 -mt-2 md:mb-3 text-lg sm:text-xl font-semibold tracking-tight myTextShadow md:text-2xl dark:text-gray-100 ">
                            <span className="underline underline-offset-4">28-30 NOV </span> 2024 MUSCAT, OMAN
                        </h1>
                        <h1 className="mb-2 md:mb-3 text-xl sm:text-2xl font-semibold tracking-tight myTextShadow  md:text-4xl dark:text-gray-100 ">
                            20<sup>th</sup> Muscat International Ophthalmology<br />Conference (MIOC)
                        </h1>

                        <div className='flex justify-center items-center relative my-[2rem] md:my-[3.3rem]'>
                            <div className='h-[2px] w-[70%] bg-primary_brown'></div>
                            <span className='absolute bg-primary_brown rounded-xl px-5'>JOINTLY WITH</span>
                        </div>

                        <h1 className="my-2 md:my-3 text-xl sm:text-2xl font-semibold tracking-tight myTextShadow  md:text-3xl dark:text-gray-100">
                            4<sup>th</sup> Eastern
                            Mediterranean Council of <br />Optometry Conference (EMCO) and <br /> the International Keratoconus Society (IKS)
                        </h1>

                        <div className="flex font-semibold text-xl flex-col items-center justify-center gap-5 mt-10 md:mt-14 md:flex-row">
                            <Link
                                className="inline-block w-auto text-center min-w-[180px] px-3 py-3 sm:px-6 sm:py-4 text-white transition-all rounded-md sm:w-auto bg-gradient-to-r from-primary_blue to-blue-500 dark:shadow-blue-900 shadow-blue-300 hover:shadow-xl hover:shadow-blue-400 hover:-tranneutral-y-px "
                                to="/online-registration">Register Now
                            </Link>
                            <Link className="inline-block w-auto text-center min-w-[180px] px-3 py-3 sm:px-6 sm:py-4 text-white transition-all bg-[#d3ab6b] dark:bg-white dark:text-gray-800 rounded-md sm:w-auto hover:bg-[#D0A45D]  hover:text-white shadow-neutral-300 dark:shadow-neutral-700 hover:shadow-xl hover:shadow-[#D0A45D] hover:-tranneutral-y-px"
                                to="/abstract-submission">Submit Abstract
                            </Link>

                        </div>

                    </div>
                </div>
            </div>

        </div>

    );
}

export default Hero;
{/* <div className='bg-gradient-to-r from-[#33689c82]  to-[#d0a45d61] h-screen w-full  absolute top-[35px]'> */ }
{/* <div className='bg-gradient-to-r from-[#33689c82]  to-[#d0a45d61] h-screen w-full '> */ }
{/* <div className='bg-gradient-to-b from-[#33689c86] to-[#33689c3d] h-screen w-full absolute top-[35px]'> */ }
{/* <div className='bg-[#33689c] bg-opacity-45 h-screen w-full absolute top-[0px]'> */ }
