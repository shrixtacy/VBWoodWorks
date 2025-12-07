import React from 'react';

const Marquee: React.FC = () => {
  const logos = [
    "Architectural Digest", "Vogue Living", "Elle Decor", "Dezeen", "Wallpaper*", "The Local Project", 
    "Architectural Digest", "Vogue Living", "Elle Decor", "Dezeen", "Wallpaper*", "The Local Project"
  ];

  return (
    <section className="py-12 bg-luxury-50 border-b border-luxury-200 overflow-hidden">
      <div className="flex items-center gap-4 mb-4 justify-center">
         <span className="text-xs uppercase tracking-[0.2em] text-stone-600">Featured In</span>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="mx-8 md:mx-16 text-2xl md:text-3xl font-serif text-stone-700 italic select-none"
            >
              {logo}
            </div>
          ))}
        </div>
        
        {/* Gradients to fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-luxury-50 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-luxury-50 to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default Marquee;