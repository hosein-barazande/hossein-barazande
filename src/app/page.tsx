import Background from "@/components/layout/Background";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Contact from "@/components/sections/Contact";

export default function Home() {
    return (
        <>
            <Background />
            <Navbar />

            <main className="relative">
                <Hero />
                <About />
                <Skills />
                <FeaturedProjects />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
