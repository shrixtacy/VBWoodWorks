import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServicePageProps {
    title: string;
    description: string;
    backgroundImage: string;
}

const ServicePage: React.FC<ServicePageProps> = ({ title, description, backgroundImage }) => {
    return (
        <div className="min-h-screen flex flex-col bg-stone-900 text-stone-100">
            <Navbar />

            <main className="flex-grow relative">
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-stone-900/40 z-10" />
                    <img
                        src={backgroundImage}
                        alt="Wood Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="relative z-20 container mx-auto px-6 py-32 md:py-48 flex flex-col items-center justify-center min-h-[80vh] text-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="self-start mb-12"
                    >
                        <Link to="/" className="inline-flex items-center gap-2 text-stone-300 hover:text-white transition-colors group">
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm uppercase tracking-widest">Back to Home</span>
                        </Link>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-50 mb-8"
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl font-light text-stone-200 max-w-3xl leading-relaxed"
                    >
                        {description}
                    </motion.p>

                    {/* Spacer to demonstrate scrolling if needed, or just visual balance */}
                    <div className="h-24"></div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ServicePage;
