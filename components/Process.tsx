import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        num: '01',
        title: 'Consultation',
        desc: 'We begin by understanding your vision, space, and functional needs to create a design brief that resonates with your lifestyle.'
    },
    {
        num: '02',
        title: 'Material Selection',
        desc: 'Sourcing ethically harvested hardwoods and premium materials. Every plank is chosen for its grain character and structural integrity.'
    },
    {
        num: '03',
        title: 'Handcrafting',
        desc: 'Traditional joinery meets modern precision. Our master artisans cut, shape, and assemble each piece with obsessive attention to detail.'
    },
    {
        num: '04',
        title: 'Finishing',
        desc: 'Multiple stages of hand-sanding and oiling protect the wood while enhancing its natural beauty, ensuring a finish that ages gracefully.'
    }
];

const Process: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-luxury-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Our Methodology</h2>
            <div className="w-full h-px bg-luxury-200"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className="flex flex-col group"
                >
                    <span className="text-6xl md:text-7xl font-serif text-luxury-200 group-hover:text-stone-300 transition-colors duration-500 mb-6">
                        {step.num}
                    </span>
                    <h3 className="text-xl font-medium text-stone-800 mb-4 uppercase tracking-wide">
                        {step.title}
                    </h3>
                    <p className="text-stone-500 font-light leading-relaxed">
                        {step.desc}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Process;