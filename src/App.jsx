import React from 'react';
import Header from '../src/Components/Header';
import Hero from '../src/Components/Hero';
import Services from '../src/Components/Services';
import About from '../src/Components/About';
import Contact from '../src/Components/Contact';
import Footer from '../src/Components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App