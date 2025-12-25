import React, { useState, useEffect } from 'react';
import { NAV_LINKS, SERVICES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

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
    setDropdownOpen(false);
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

  const getLinkHref = (href: string) => {
    if (href.startsWith('#')) {
      return isHome ? href : `/${href}`;
    }
    return href;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-6 flex justify-between items-center ${scrolled || !isHome ? 'bg-luxury-50/90 backdrop-blur-md border-b border-luxury-200 shadow-sm' : 'bg-transparent'
          }`}
      >
        <Link
          to="/"
          className={`text-xl md:text-2xl font-serif font-semibold tracking-tighter transition-colors duration-300 ${scrolled || !isHome ? 'text-stone-900' : 'text-stone-50'}`}
        >
          VBWoodworks.
        </Link>

        <div className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map((link) => {
            if (link.label === 'Services') {
              return (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <a
                    href={getLinkHref(link.href)}
                    className={`text-sm tracking-widest uppercase transition-colors duration-300 font-light flex items-center gap-1 ${scrolled || !isHome ? 'text-stone-600 hover:text-stone-900' : 'text-stone-300 hover:text-white'}`}
                  >
                    {link.label}
                    <ChevronDown className="w-3 h-3" />
                  </a>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white shadow-xl rounded-sm py-4 mt-2 border border-stone-100"
                      >
                        {SERVICES.map((service) => (
                          service.path && (
                            <Link
                              key={service.id}
                              to={service.path}
                              className="block px-6 py-3 text-sm text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors"
                            >
                              {service.title}
                            </Link>
                          )
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={getLinkHref(link.href)}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 font-light ${scrolled || !isHome ? 'text-stone-600 hover:text-stone-900' : 'text-stone-300 hover:text-white'}`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden text-sm uppercase tracking-widest transition-colors duration-300 ${scrolled || !isHome ? 'text-stone-900' : 'text-stone-50'}`}
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
            className="fixed inset-0 bg-stone-900/95 backdrop-blur-lg z-[60] md:hidden overflow-y-auto"
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
            <div className="flex flex-col items-center justify-start pt-32 min-h-full gap-8 pb-12">
              {NAV_LINKS.map((link, index) => {
                if (link.label === 'Services') {
                  return (
                    <div key={link.label} className="flex flex-col items-center gap-4">
                      <a
                        href={getLinkHref(link.href)}
                        onClick={handleLinkClick}
                        className="text-3xl font-serif text-stone-50 hover:text-luxury-50 transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                      {SERVICES.map(s => (
                        s.path && (
                          <Link
                            key={s.id}
                            to={s.path}
                            onClick={handleLinkClick}
                            className="text-lg text-stone-400 font-light"
                          >
                            {s.title}
                          </Link>
                        )
                      ))}
                    </div>
                  )
                }
                return (
                  <a
                    key={link.label}
                    href={getLinkHref(link.href)}
                    onClick={handleLinkClick}
                    className="text-3xl font-serif text-stone-50 hover:text-luxury-50 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                );
              })}

              {/* Additional Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 text-center"
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