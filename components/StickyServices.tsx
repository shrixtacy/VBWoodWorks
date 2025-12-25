import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const StickyServices: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(SERVICES[0].id);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SERVICES.forEach((service) => {
      const element = sectionRefs.current[service.id];
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(service.id);
            }
          });
        },
        {
          root: null,
          rootMargin: '-40% 0px -40% 0px', // Trigger when element is in the middle 20% of viewport
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const activeService = SERVICES.find((s) => s.id === activeId) || SERVICES[0];

  return (
    <section id="services" ref={containerRef} className="relative w-full bg-stone-900 text-stone-100">
      <div className="flex flex-col lg:flex-row">

        {/* Sticky Left Panel (Image) */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen sticky top-0 z-10 flex items-center justify-center overflow-hidden bg-stone-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.imageUrl}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={activeService.imageUrl}
                alt={activeService.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-stone-900/30" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-12 left-12 z-20 hidden lg:block">
            <h4 className="text-white/50 text-sm uppercase tracking-widest mb-2">Selected Service</h4>
            <div className="text-3xl font-serif">{activeService.title}</div>
          </div>
        </div>

        {/* Scrollable Right Panel (Content) */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              ref={(el) => (sectionRefs.current[service.id] = el)}
              className="min-h-screen flex items-center justify-center px-8 py-20 lg:px-24 bg-stone-900 border-b border-stone-800 lg:border-none"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className={`transition-opacity duration-500 ${activeId === service.id ? 'opacity-100' : 'opacity-40 lg:opacity-30'}`}
              >
                <div className="text-stone-500 text-sm uppercase tracking-widest mb-4">
                  0{SERVICES.indexOf(service) + 1} / 0{SERVICES.length}
                </div>
                <h3 className="text-4xl md:text-5xl font-serif text-white mb-8">
                  {service.title}
                </h3>
                <p className="text-stone-300 text-xl font-light leading-relaxed mb-6">
                  {service.description}
                </p>
                <p className="text-stone-500 leading-relaxed text-base max-w-md mb-8">
                  {service.details}
                </p>

                {service.path && (
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-2 text-stone-300 hover:text-white transition-colors group"
                  >
                    <span className="text-sm uppercase tracking-widest">Explore {service.title}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StickyServices;