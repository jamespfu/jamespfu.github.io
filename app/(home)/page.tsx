import React from 'react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Project from './components/Project';
import Footer from './components/Footer';
import { Contact } from './components/Contact';
import About from './components/About';
import '../globals.css';

export default function page() {
  return (
    <div className="min-h-[100vh] overflow-hidden" style={{ backgroundColor: 'rgb(25, 25, 41)' }}>
      <div className="relative">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar />
          <HeroSection />
        </div>
      </div>
      <div className="h-10 xl:h-32 absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      <div className="max-w-7xl mx-auto p-5 mt-10">
      <About />
      <Project/>
      <Skills />
      <Contact />
      <Footer/>
      </div>
    </div>
    
  );
}
