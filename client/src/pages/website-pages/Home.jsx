import TeamSection from "../../components/website/TeamSection";
import Hero from "../../components/website/Hero";
import MapSection from "../../components/website/MapSection";
import Statistics from "../../components/website/Statistics";
import FeaturesSection from "../../components/website/FeaturesSection";
import InstagramGallery from "../../components/website/instagramWall/InstagramGallery";
import SposersAndOrganizersSection from "../../components/website/SposersAndOrganizersSection";
import { ArrowUpCircleIcon } from '@heroicons/react/20/solid'
import MuscatPreviewSection from "../../components/website/MuscatPreviewSection";
const Home = () => {

    return (
        <section className="relative">
            <a href="#top-bar" className=" fixed text-primary_brown z-50 bottom-5 right-5"><ArrowUpCircleIcon className="h-7 w-7" /></a>
            <Hero />
            <TeamSection />
            <Statistics />
            <FeaturesSection />
            <InstagramGallery />
            <MuscatPreviewSection />
            {/* <SposersAndOrganizersSection /> */}
            {/* <MapSection /> */}

        </section>
    );
}

export default Home;
