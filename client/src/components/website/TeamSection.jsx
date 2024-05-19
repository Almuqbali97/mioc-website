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
                    sectionRef.current.classList.add('RightlideAnimatoin');
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
                    secondSectionRef.current.classList.add('LeftlideAnimatoin');
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
                <div className="lg:absolute lg:inset-y-0 lg:-right-20 xl:right-0 lg:w-1/2 " ref={sectionRef}>
                    <img className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full" src={drRashid} alt="" />
                </div>
                <p className='block sm:hidden mt-2 text-center'><span className='font-semibold'> Dr Rashid Al Saidi,MD,FEBO.</span>
                    <br />Chairman of the Joint Organizing Committee</p>
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
                                    Bringing a global perspective to the latest clinical and scientific advances in Ophthalmology and related disciplines.
                                </h2>
                                <p className='mb-4 -mt- hidden sm:block'><span className='font-semibold'>Figure: Dr Rashid Al Saidi,MD,FEBO.</span>
                                    <br />Chairman of the Joint Organizing Committee</p>
                                <PrimaryButtonBlue text='Program at a glance' link={'/program-at-a-glance'} />

                            </div>
                        </main>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default TeamSection;
