import React, { useRef, useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2500&auto=format&fit=crop",
  "/hero/wood1.png",
  "/hero/wood2.png",
  "/hero/wood3.png",
  "/hero/wood4.png",
  "/hero/wood5.png"
];

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect: Image moves slower than content (y) and scales up slightly
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-stone-900"
    >
      {/* Parallax Background Layer */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0 bg-stone-900"
      >
        <AnimatePresence mode="popLayout">
          <motion.img 
            key={currentImageIndex}
            src={images[currentImageIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            alt="Luxury Woodwork Interior" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Dark overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-stone-900/40 z-10"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 text-center px-4 max-w-4xl relative"
      >
        <h2 className="text-sm md:text-base uppercase tracking-[0.3em] text-stone-300 mb-6 font-medium">
          Established 1998
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-50 leading-[1.1] mb-8">
          Crafting Spaces.<br />
          Crafting Experiences.
        </h1>
        <p className="text-stone-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Premium furniture and interior craftsmanship by VBWoodworks.
          Where timeless design meets structural integrity.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 z-10"
      >
        <a
          href="#services"
          className="group flex flex-col items-center gap-3 text-stone-300 hover:text-white transition-colors duration-500 cursor-pointer"
        >
          <span className="text-xs uppercase tracking-widest font-medium">View Our Work</span>
          <ArrowDown className="w-5 h-5 animate-bounce group-hover:stroke-2" strokeWidth={1} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;