import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Home from './components/Home';
import ServicePage from './components/ServicePage';

// ScrollToTop component to handle scroll reset on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

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
          <Route
            path="/educational-furniture"
            element={
              <ServicePage
                title="Educational Furniture"
                description="Inspiring minds through ergonomic design."
                backgroundImage="/backgrounds/wood1.jpg"
                woodType="oak"
              />
            }
          />
          <Route
            path="/office-furniture"
            element={
              <ServicePage
                title="Office Furniture"
                description="Productivity meets elegance."
                backgroundImage="/backgrounds/wood2.jpg"
                woodType="walnut"
              />
            }
          />
          <Route
            path="/home-furniture"
            element={
              <ServicePage
                title="Home Furniture"
                description="Warmth and sophistication for your sanctuary."
                backgroundImage="/backgrounds/wood3.jpg"
                woodType="teak"
              />
            }
          />
          <Route
            path="/interior-solutions"
            element={
              <ServicePage
                title="Interior Solutions"
                description="Holistic spatial transformation."
                backgroundImage="/backgrounds/wood4.jpg"
                woodType="mahogany"
              />
            }
          />
          <Route
            path="/artefacts"
            element={
              <ServicePage
                title="Artefacts"
                description="Details that define character."
                backgroundImage="/backgrounds/wood5.jpg"
                woodType="pine"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;