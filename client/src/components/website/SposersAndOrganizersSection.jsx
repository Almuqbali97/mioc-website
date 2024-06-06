import logo1 from '../../assets/images/oca.png';
import logo2 from '../../assets/images/oos.png';
import logo3 from '../../assets/images/mc.png';
import logo4 from '../../assets/images/ooc.png';
import emcoWhite from '../../assets/images/EMCOwhite-cropped.svg';
import IKSwhite from '../../assets/images/IKSwhite2-cropped.svg';

const customBg = `data:image/svg+xml;base64,${btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="1440" height="250" preserveAspectRatio="none" viewBox="0 0 1440 250">
    <g mask="url(&quot;#SvgjsMask1012&quot;)" fill="none">
        <rect width="1440" height="250" x="0" y="0" fill="rgba(9, 92, 159, 1)"></rect>
        <path d="M10 250L260 0L392 0L142 250z" fill="url(&quot;#SvgjsLinearGradient1013&quot;)"></path>
        <path d="M269.6 250L519.6 0L843.6 0L593.6 250z" fill="url(&quot;#SvgjsLinearGradient1013&quot;)"></path>
        <path d="M506.20000000000005 250L756.2 0L901.7 0L651.7 250z" fill="url(&quot;#SvgjsLinearGradient1013&quot;)"></path>
        <path d="M733.8000000000001 250L983.8000000000001 0L1156.3000000000002 0L906.3000000000001 250z" fill="url(&quot;#SvgjsLinearGradient1013&quot;)"></path>
        <path d="M1410 250L1160 0L939.5 0L1189.5 250z" fill="url(&quot;#SvgjsLinearGradient1014&quot;)"></path>
        <path d="M1186.4 250L936.4000000000001 0L826.9000000000001 0L1076.9 250z" fill="url(&quot;#SvgjsLinearGradient1014&quot;)"></path>
        <path d="M943.8 250L693.8 0L617.3 0L867.3 250z" fill="url(&quot;#SvgjsLinearGradient1014&quot;)"></path>
        <path d="M701.1999999999999 250L451.19999999999993 0L197.69999999999993 0L447.69999999999993 250z" fill="url(&quot;#SvgjsLinearGradient1014&quot;)"></path>
        <path d="M1274.333889632016 250L1440 84.33388963201614L1440 250z" fill="url(&quot;#SvgjsLinearGradient1013&quot;)"></path>
        <path d="M0 250L165.66611036798386 250L 0 84.33388963201614z" fill="url(&quot;#SvgjsLinearGradient1014&quot;)"></path>
    </g>
    <defs>
        <mask id="SvgjsMask1012">
            <rect width="1440" height="250" fill="#ffffff"></rect>
        </mask>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="SvgjsLinearGradient1013">
            <stop stop-color="rgba(216, 167, 87, 0.33)" offset="0"></stop>
            <stop stop-opacity="0" stop-color="rgba(216, 167, 87, 0.33)" offset="0.66"></stop>
        </linearGradient>
        <linearGradient x1="100%" y1="100%" x2="0%" y2="0%" id="SvgjsLinearGradient1014">
            <stop stop-color="rgba(216, 167, 87, 0.33)" offset="0"></stop>
            <stop stop-opacity="0" stop-color="rgba(216, 167, 87, 0.33)" offset="0.66"></stop>
        </linearGradient>
    </defs>
</svg>`
)}`

const SposersAndOrganizersSection = () => {

    return (
        <section className="py-6" style={{
            backgroundImage: `url(${customBg})`,
            backgroundSize: 'cover',
            width: '100%',
            //             // height: '100vh'
        }}>
            <div className="container mx-auto px-4 flex justify-center flex-col md:flex-row space-y-7 md:space-y-0 md:space-x-14 pb-4">
                <div>
                    <h2 className="text-2xl font-semibold text-center mb-8 ">  <span className="inline-block">
                        <span className="relative whitespace-nowrap text-primary_brown font-custom ">
                            <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-primary_brown/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
                            <span className="relative ">Organizers</span></span>
                    </span>
                    </h2>
                    <div className="flex justify-center space-x-9 content-end h-14 sm:h-20 lg:h-[6.8rem] bottom-0 p-0 md:border-r-[1px] md:pr-11">
                        <img src={logo3} alt={'organizer.name'} className="object-contain" />
                        <img src={logo1} alt={'organizer.name'} className="object-contain" />
                    </div>
                </div>


                <div>
                    <h2 className="text-2xl font-semibold text-center mb-8">  <span className="inline-block">
                        <span className="relative whitespace-nowrap text-primary_brown font-custom">
                            <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-primary_brown/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
                            <span className="relative">Co-Organizers</span></span>
                    </span>
                    </h2>
                    <div className="flex justify-center space-x-5 sm:space-x-9 content-end h-11 sm:h-16 lg:h-24">
                        <img src={emcoWhite} alt={'coOrganizer'} className="-mb-[0.06rem] object-contain" />
                        <img src={IKSwhite} alt={'coOrganizer'} className="-mb-[0.1rem] object-contain" />
                        <img src={logo2} alt={'coOrganizer'} className=" object-contain" />
                        <img src={logo4} alt={'coOrganizer'} className=" object-contain" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SposersAndOrganizersSection;
