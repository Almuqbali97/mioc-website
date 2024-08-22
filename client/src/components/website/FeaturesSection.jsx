import React, { useRef, useEffect } from 'react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
    const slideBottomAnimationRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // slideBottomAnimationRef.current.classList.add('slideFromBottom');
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
            }
        );

        observer.observe(slideBottomAnimationRef.current);

        return () => {
            if (slideBottomAnimationRef.current) {
                observer.unobserve(slideBottomAnimationRef.current);
            }
        };
    }, []);
    return (
        <section className="bg-white dark:bg-gray-900" ref={slideBottomAnimationRef}>
            <div className="container px-6 py-8 mx-auto">
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 r">
                    <FeatureCard
                        title='Meet the Experts'
                        text='MIOC 2024 is an opportunity to meet and network with some of the world’s most renowned experts.​ Engage with global key opinion leaders in clinical practice as well as leading and emerging scientists who are advancing research in Ophthalmology​.'
                        link='/faculty'
                        linkText='View Faculty' />
                    <FeatureCard
                        title='Courses & Workshops'
                        text='Discover a new horizon in ophthalmology only at the MIOC 2024 congress with our unparalleled educational offerings, including skill transfer workshops and instructional courses conducted by world-renowned experts.'
                        link='/courses-and-workshops'
                        linkText='View More' />
                    <FeatureCard
                        title='Become a Sponsor'
                        text='MIOC 2024 will provide sponsors with exposure and access to delegates who have the capacity to influence the selection of products and services with their organizations.'
                        link='/reserve-your-space'
                        linkText='Reserve Your Space' />
                </div>
            </div>
        </section>


    );
}

export default FeaturesSection;
