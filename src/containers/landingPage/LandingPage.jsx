import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Footer from './components/Footer';

const LandingPage = () => {
    return (
        <div className='bg-white'>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Work />
          <Footer />
        </div>
    );
};

export default LandingPage;