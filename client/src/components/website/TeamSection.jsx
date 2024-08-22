import React, { useEffect, useRef } from 'react';
import drrashidProfile from '../../assets/images/drRashid.png'
import drRashid from '../../assets/images/drRashidImg1.png'
import PrimaryButtonBlue from './PrimaryButtonBlue';

const TeamSection = () => {
    const sectionRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // sectionRef.current.classList.add('RightlideAnimatoin');
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
            }
        );

        observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);


    const secondSectionRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // secondSectionRef.current.classList.add('LeftlideAnimatoin');
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
            }
        );

        observer.observe(secondSectionRef.current);

        return () => {
            if (secondSectionRef.current) {
                observer.unobserve(secondSectionRef.current);
            }
        };
    }, []);

    return (
        <section className="">
            <div id="about" className="relative bg-white overflow-hidden">
                {/* <div className="lg:absolute lg:inset-y-0 lg:-right-20 xl:right-0 lg:w-1/2 " ref={sectionRef}> */}
                <div className="lg:absolute lg:inset-y-0 lg:-right-20 xl:right-0 lg:w-1/2 " ref={sectionRef}>
                    <img className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full" src={drRashid} alt="" />
                </div>
                <p className='block sm:hidden mt-2 text-center text-primary_brown'><span className='font-semibold text-primary_brown'> Dr Rashid Al Saidi,MD,FEBO.</span>
                    <br /> <span className='text-primary_blue'>Chairman of the Joint Organizing Committee</span></p>
                <div className="max-w-7xl mx-auto">
                    <div className="relative pb-8 bg-white sm:pb-16 lg:max-w-2xl lg:w-full lg:pb-[5.5rem]">
                        <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                            fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100"></polygon>
                        </svg>

                        <div className="pt-1"></div>

                        <main ref={secondSectionRef} className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-26">
                            <div className="text-center lg:text-left ">
                                <h2 className='text-2xl sm:text-4xl font-light mb-8'>
                                    <span className="inline-block">
                                        <span className="relative whitespace-nowrap text-primary_brown font-custom">
                                            <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-primary_brown/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
                                            <span className="relative">Bringing a global</span></span>
                                    </span>
                                     <span> perspective to the latest clinical and scientific advances in Ophthalmology and related disciplines.</span> 
                                </h2>
                                <p className='mb-4 -mt- hidden sm:block'><span className='font-semibold text-primary_brown'>Dr Rashid Al Saidi,MD,FEBO.</span>
                                    <br /><span className='text-primary_blue'>Chairman of the Joint Organizing Committee</span></p>
                                <PrimaryButtonBlue text='Welcome Message' link={'/welcome-message'} />

                            </div>
                        </main>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default TeamSection;
