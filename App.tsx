import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Home from './components/Home';
import ServicePage from './components/ServicePage';
import { SERVICES } from './constants';

// ScrollToTop component to handle scroll reset on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Map wood types to service IDs for consistent styling
const WOOD_TYPES = {
  'educational': 'oak',
  'office': 'walnut',
  'home': 'teak',
  'interior': 'mahogany',
  'artefacts': 'pine'
} as const;

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="antialiased text-stone-900 bg-luxury-50 selection:bg-stone-800 selection:text-luxury-50">
        <Routes>
          <Route path="/" element={<Home />} />
          {SERVICES.map((service, index) => (
            service.path && (
              <Route
                key={service.id}
                path={service.path}
                element={
                  <ServicePage
                    title={service.title}
                    description={service.description}
                    backgroundImage={`/backgrounds/wood${index + 1}.jpg`}
                    woodType={WOOD_TYPES[service.id as keyof typeof WOOD_TYPES] || 'oak'}
                    subCategories={service.subCategories}
                    features={service.features}
                    process={service.process}
                  />
                }
              />
            )
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;