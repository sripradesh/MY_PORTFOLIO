import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="Hero"><Hero /></div>
      <div id="skills"><Skills /></div>
      <div id="Projects"><Projects /></div>
      <div id="certifications"><Certifications /></div>
      <Footer />
    </div>
  );
}

export default App;