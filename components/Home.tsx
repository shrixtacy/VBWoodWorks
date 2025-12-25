import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Marquee from './Marquee';
import About from './About';
import StickyServices from './StickyServices';
import Process from './Process';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import Footer from './Footer';

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className="relative z-10">
                <Hero />
                <Marquee />
                <About />
                <StickyServices />
                <Process />
                <Portfolio />
                <Testimonials />
                <CallToAction />
            </main>
            <Footer />
        </>
    );
};

export default Home;
