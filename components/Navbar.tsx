import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-6 flex justify-between items-center ${
          scrolled ? 'bg-luxury-50/90 backdrop-blur-md border-b border-luxury-200 shadow-sm' : 'bg-transparent'
        }`}
      >
        <a 
          href="#"
          className={`text-xl md:text-2xl font-serif font-semibold tracking-tighter transition-colors duration-300 ${scrolled ? 'text-stone-900' : 'text-stone-50'}`}
        >
          VBWoodworks.
        </a>
        
        <div className="hidden md:flex space-x-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 font-light ${scrolled ? 'text-stone-600 hover:text-stone-900' : 'text-stone-300 hover:text-white'}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden text-sm uppercase tracking-widest transition-colors duration-300 ${scrolled ? 'text-stone-900' : 'text-stone-50'}`}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-stone-900/95 backdrop-blur-lg z-[60] md:hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-stone-50 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X size={32} strokeWidth={1} />
            </button>

            {/* Menu Items */}
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="text-3xl md:text-4xl font-serif text-stone-50 hover:text-luxury-50 transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
              
              {/* Additional Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ 
                  duration: 0.4, 
                  delay: NAV_LINKS.length * 0.1,
                  ease: "easeOut"
                }}
                className="mt-12 text-center"
              >
                <p className="text-stone-400 text-sm uppercase tracking-widest mb-4">Get in Touch</p>
                <p className="text-stone-300 text-lg">+1 (555) 123-4567</p>
                <p className="text-stone-300 text-lg">hello@vbwoodworks.com</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;