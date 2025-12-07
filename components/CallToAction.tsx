import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CallToAction: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2500&auto=format&fit=crop" 
                alt="Minimalist Furniture Detail" 
                className="w-full h-[120%] object-cover"
             />
             <div className="absolute inset-0 bg-stone-900/60 mix-blend-multiply"></div>
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-serif text-luxury-50 mb-8 leading-tight">
                Ready to elevate<br/> your environment?
            </h2>
            <p className="text-lg md:text-xl text-stone-300 font-light mb-12 max-w-2xl mx-auto">
                Let us craft a space that reflects your distinct taste and requirements.
            </p>
            <a 
                href="#contact" 
                className="inline-block px-10 py-4 bg-white text-stone-900 text-xs uppercase tracking-[0.2em] hover:bg-luxury-200 transition-colors duration-300"
            >
                Start a Project
            </a>
        </div>
    </section>
  );
};

export default CallToAction;