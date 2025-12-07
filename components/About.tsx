import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-luxury-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
        >
            <div className="aspect-[3/4] overflow-hidden">
                <img 
                    src="https://picsum.photos/id/250/1200/1600" 
                    alt="Artisan working on wood" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out grayscale hover:grayscale-0"
                />
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
        >
            <h3 className="text-3xl md:text-4xl font-serif text-stone-800 mb-8">
                The Art of Subtle Perfection.
            </h3>
            <div className="w-12 h-px bg-stone-400 mb-8"></div>
            <p className="text-stone-600 text-lg md:text-xl font-light leading-relaxed mb-6">
                At VBWoodworks, we believe that furniture is not just functional—it is emotional. Every grain of wood tells a story, and every joint we craft is a promise of longevity.
            </p>
            <p className="text-stone-600 text-lg md:text-xl font-light leading-relaxed">
                Combining traditional joinery techniques with modern minimalist aesthetics, we create pieces that stand quietly in a room, commanding presence through their sheer quality and detail.
            </p>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                    <span className="block text-3xl font-serif text-stone-800">25+</span>
                    <span className="text-xs uppercase tracking-widest text-stone-500 mt-1">Years Experience</span>
                </div>
                <div>
                    <span className="block text-3xl font-serif text-stone-800">400+</span>
                    <span className="text-xs uppercase tracking-widest text-stone-500 mt-1">Projects Completed</span>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;