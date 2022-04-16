import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = ({ site }) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home {...site.home} nav={site.nav} />} />
        <Route
          path='/about'
          element={<About {...site.about} nav={site.nav} />}
        />
        <Route
          path='/projects'
          element={<Projects nav={site.nav} {...site.projects} />}
        />
        <Route
          path='/skills'
          element={<Skills nav={site.nav} {...site.skills} />}
        />
        <Route
          path='/contact'
          element={<Contact nav={site.nav} {...site.contact} />}
        />
      </Routes>
    </AnimatePresence>
  );
};
export default AnimatedRoutes;
