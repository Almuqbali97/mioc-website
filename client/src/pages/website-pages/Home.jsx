import TeamSection from "../../components/website/TeamSection";
import Hero from "../../components/website/Hero";
import Statistics from "../../components/website/Statistics";
import FeaturesSection from "../../components/website/FeaturesSection";
import InstagramGallery from "../../components/website/instagramWall/InstagramGallery";
import { ArrowUpCircleIcon } from '@heroicons/react/20/solid'
import MuscatPreviewSection from "../../components/website/MuscatPreviewSection";
const Home = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <section className="relative">
            <button onClick={scrollToTop} className=" fixed text-primary_brown z-50 bottom-5 right-5"><ArrowUpCircleIcon className="h-7 w-7" /></button>
            <Hero />
            <TeamSection />
            {/* <Statistics /> */}
            <FeaturesSection />
            <InstagramGallery />
            <MuscatPreviewSection />


        </section>
    );
}

export default Home;
