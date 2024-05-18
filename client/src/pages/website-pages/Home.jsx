import Header from "../../components/website/Header";
import { useState } from "react";
import TeamSection from "../../components/website/TeamSection";
import TopLogos from "../../components/website/TopLogos";
import Hero from "../../components/website/Hero";
import Gallery from "../../components/website/Gallery";
import MapSection from "../../components/website/MapSection";
import Statistics from "../../components/website/Statistics";
const Home = () => {

    return (
        <section>
            <Hero />
            <TeamSection />
            <Statistics />
            <Gallery />
            <MapSection />

        </section>
    );
}

export default Home;
