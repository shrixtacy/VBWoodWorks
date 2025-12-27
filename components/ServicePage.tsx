import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { ArrowLeft, ArrowDown, CheckCircle, Clock, Hammer, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SubCategory, Feature, ProcessStep } from '../types';

interface ServicePageProps {
  title: string;
  description: string;
  backgroundImage: string;
  woodType?: 'oak' | 'walnut' | 'teak' | 'mahogany' | 'pine';
  subCategories?: SubCategory[];
  features?: Feature[];
  process?: ProcessStep[];
}

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  description,
  backgroundImage,
  woodType = 'oak',
  subCategories,
  features,
  process
}) => {
  // CSS filters to simulate different wood types from a base texture
  const filters: Record<string, string> = {
    oak: 'none', // Natural
    walnut: 'brightness(0.7) sepia(0.3) contrast(1.1)', // Darker, richer
    teak: 'sepia(0.4) saturate(1.2) brightness(0.9)', // Golden brown
    mahogany: 'sepia(0.3) hue-rotate(-30deg) saturate(1.4) brightness(0.8)', // Reddish
    pine: 'brightness(1.1) saturate(0.8) sepia(0.2)', // Lighter, yellowish
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-900 text-stone-100 font-sans">
      <Navbar />

      <main className="flex-grow relative">
        {/* Fixed Background Image Layer */}
        <div
          className="fixed inset-0 z-0 bg-repeat bg-fixed"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: '800px',
            filter: filters[woodType],
          }}
        />

        {/* Overlay for legibility */}
        <div className="fixed inset-0 bg-stone-900/40 z-10" />

        {/* Scrollable Content Container */}
        <div className="relative z-20">

          {/* Hero Section */}
          <div className="container mx-auto px-6 min-h-screen flex flex-col items-center justify-center text-center pt-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="self-start absolute top-32 left-6 md:left-12 lg:left-24"
            >
              <Link to="/" className="inline-flex items-center gap-2 text-stone-200 hover:text-white transition-colors group px-4 py-2 bg-stone-900/30 rounded-full backdrop-blur-sm">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-xs uppercase tracking-widest font-semibold">Back</span>
              </Link>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-9xl font-serif text-stone-50 mb-8 tracking-tight drop-shadow-lg"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl font-light text-stone-100 max-w-3xl leading-relaxed mb-12 drop-shadow-md"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-12 animate-bounce"
            >
              <ArrowDown className="text-stone-300 w-8 h-8 opacity-70" />
            </motion.div>
          </div>

          {/* Features Section */}
          {features && features.length > 0 && (
            <section className="py-24 bg-stone-900/60 backdrop-blur-md border-y border-white/5">
              <div className="container mx-auto px-6">
                <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-serif text-center mb-16 text-stone-50">why choose our {title.toLowerCase()}</motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                  {features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      {...fadeInUp}
                      transition={{ delay: idx * 0.2, duration: 0.6 }}
                      className="p-8 border border-white/10 rounded-sm bg-stone-900/40 hover:bg-stone-800/60 transition-colors"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-stone-100/10 mb-6 text-stone-200">
                        {idx === 0 ? <Shield className="w-6 h-6" /> : idx === 1 ? <Hammer className="w-6 h-6" /> : <CheckCircle className="w-6 h-6" />}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 tracking-wide">{feature.title}</h3>
                      <p className="text-stone-400 font-light leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Collection Grid */}
          {subCategories && subCategories.length > 0 && (
            <section className="py-32 container mx-auto px-6">
              <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-serif text-center mb-24 drop-shadow-lg">curated collection</motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16 max-w-6xl mx-auto">
                {subCategories.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="aspect-[16/10] overflow-hidden rounded-sm mb-6 shadow-2xl border border-white/10 relative">
                      <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-500 z-10" />
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 saturate-[0.8] group-hover:saturate-100"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-serif text-stone-100 mb-2 italic">{item.title}</h3>
                      <p className="text-stone-300 font-light text-sm max-w-sm mx-auto">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* Process Timeline */}
          {process && process.length > 0 && (
            <section className="py-32 bg-stone-900/80 backdrop-blur-xl">
              <div className="container mx-auto px-6">
                <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-serif text-center mb-20 text-stone-100">our workflow</motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                  {/* Connecting Line (Desktop) */}
                  <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-stone-800 via-stone-500 to-stone-800 opacity-30" />

                  {process.map((step, idx) => (
                    <motion.div
                      key={idx}
                      {...fadeInUp}
                      transition={{ delay: idx * 0.2 }}
                      className="relative pt-8 md:pt-16 text-center"
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-stone-500 border-4 border-stone-900 hidden md:block" />
                      <span className="text-6xl font-serif text-stone-800 absolute -top-4 left-4 md:left-1/2 md:-translate-x-1/2 select-none -z-10 opacity-50">{step.step}</span>
                      <h3 className="text-xl font-semibold mb-4 text-stone-200 mt-6">{step.title}</h3>
                      <p className="text-stone-400 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Call to Action */}
          <section className="py-24 text-center">
            <motion.div
              {...fadeInUp}
              className="container mx-auto px-6 max-w-3xl"
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8 drop-shadow-md">ready to transform your space?</h2>
              <p className="text-stone-300 text-lg font-light mb-10">
                Let's collaborate to create bespoke wooden masterpieces that define your environment.
              </p>
              <Link
                to="/#contact" // Assuming a contact section or page exists, or using mailto
                className="inline-block px-12 py-4 bg-stone-100 text-stone-900 font-semibold tracking-widest uppercase text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Start a Project
              </Link>
            </motion.div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  );
};

export default ServicePage;
