import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 px-6 md:px-12 bg-luxury-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">Curated Works</h2>
            <div className="w-24 h-px bg-stone-300"></div>
          </div>
          <p className="text-stone-500 max-w-md text-right md:text-left">
            A selection of our finest pieces, demonstrating our commitment to structural elegance and aesthetic purity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/5] bg-luxury-200 mb-6">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-500 ease-in-out"></div>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs uppercase tracking-widest text-stone-400 mb-2">{item.category}</span>
                <h3 className="text-2xl font-serif text-stone-800 group-hover:text-stone-600 transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
             <button className="px-8 py-4 border border-stone-300 text-stone-600 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 uppercase tracking-widest text-xs bg-transparent">
                 View Full Catalogue
             </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;