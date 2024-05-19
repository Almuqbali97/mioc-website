import React from 'react';
import logo1 from '../../assets/images/OcenterWhite.svg'
import logo2 from '../../assets/images/omanOSosWhite.svg'
import logo3 from '../../assets/images/medicalCityWhite.svg'
import logo4 from '../../assets/images/OOWhite.svg'
import organizers from '../../assets/images/organizers.png'

const customBg = `data:image/svg+xml;base64,${btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
    <g mask="url(&quot;#SvgjsMask2318&quot;)" fill="none">
        <rect width="1440" height="560" x="0" y="0" fill="url(&quot;#SvgjsLinearGradient2319&quot;)"></rect>
        <path d="M1440 0L1155.32 0L1440 84.38z" fill="rgba(255, 255, 255, .1)"></path>
        <path d="M1155.32 0L1440 84.38L1440 186.20999999999998L587.1099999999999 0z" fill="rgba(255, 255, 255, .075)"></path>
        <path d="M587.1099999999999 0L1440 186.20999999999998L1440 231.77999999999997L496.7799999999999 0z" fill="rgba(255, 255, 255, .05)"></path>
        <path d="M496.77999999999986 0L1440 231.77999999999997L1440 335.96L395.73999999999984 0z" fill="rgba(255, 255, 255, .025)"></path>
        <path d="M0 560L681.94 560L0 380.32z" fill="rgba(0, 0, 0, .1)"></path>
        <path d="M0 380.32L681.94 560L843.1 560L0 285.48z" fill="rgba(0, 0, 0, .075)"></path>
        <path d="M0 285.48L843.1 560L1044.66 560L0 118.89000000000001z" fill="rgba(0, 0, 0, .05)"></path>
        <path d="M0 118.88999999999999L1044.66 560L1266.66 560L0 70.23999999999998z" fill="rgba(0, 0, 0, .025)"></path>
    </g>
    <defs>
        <mask id="SvgjsMask2318">
            <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
        <linearGradient x1="15.28%" y1="-39.29%" x2="84.72%" y2="139.29%" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient2319">
            <stop stop-color="rgba(72, 125, 180, 1)" offset="0"></stop>
            <stop stop-color="rgba(216, 167, 87, 1)" offset="1"></stop>
        </linearGradient>
    </defs>
</svg>`
)}`
const SposersAndOrganizersSection = () => {
    return (
        <div className='h-52 sm:h-72 md:h-96 bg-gray-500 flex justify-center items-center' style={{
            backgroundImage: `url(${customBg})`,
            backgroundSize: 'cover',
            width: '100%',
            // height: '100vh'
        }}>
            {/* <div className='flex flex-col'>
                <div className='flex justify-around space-x-16 my-3 font-semibold text-white'>
                    <p>Organized By :</p>
                    <p>CO-Organizers :</p>
                </div>
                <div className='h-[2px] bg-gradient-to-r from-transparent via-white to-transparent'></div>
                <div className='flex justify-around sm:space-x-16'>
                    <div className="relative flex justify-center items-center -mb-2">
                        <img className=" h-[5rem] sm:h-32 md:h-40 lg:h-44" src={logo3} alt="Logo 3" />
                        <div className="absolute left-1/2 rotate-90 transform -translate-x-1/2 h-[1.5px] w-32 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                        <img className="h-[6rem] sm:h-36 md:h-48 lg:h-52" src={logo1} alt="Logo 1" />
                    </div>

                    <div className='flex relative justify-center items-center'>
                        <img className='h-[5rem] sm:h-32 md:h-44 lg:h-48 -mb-7' src={logo2} />
                        <div className="absolute left-1/2 rotate-90 transform -translate-x-1/2 h-[1.5px] w-32 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                        <img className='h-[6rem] sm:h-36 md:h-48 lg:h-52 ml-6' src={logo4} />
                    </div>
                </div>
            </div> */}
            <img src={organizers} className='px-2 sm:px-0 w-[60rem]'/>
        </div>
    );
}

export default SposersAndOrganizersSection;
