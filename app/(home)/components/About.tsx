"use client";
import React, { useState, useEffect } from 'react';
import Title from './Title';
import { MovingBorderBtn } from './ui/moving-border';

export default function About() {
  const fullText = "working in supply chain @ supermicro";
  const [text, setText] = useState("");

  useEffect(() => {
    let isCancelled = false;

    const runTypingEffect = () => {
      let currentIndex = 0;
      setText(""); 

      const typingInterval = setInterval(() => {
        if (isCancelled) return;

        if (currentIndex < fullText.length) {
          setText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          
          const pauseTimeout = setTimeout(() => {
            if (!isCancelled) {
              runTypingEffect();
            }
          }, 5000);

          return () => clearTimeout(pauseTimeout);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    };

    const cleanup = runTypingEffect();

    return () => {
      isCancelled = true;
      if (typeof cleanup === 'function') cleanup();
    };
  }, []);

  return (
    <div id="about" className="p-5 max-w-6xl mx-auto flex flex-col items-center mt-10 font-sans">
      
      {/* Top Section: Profile and Text */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start w-full mb-20 px-6 lg:px-12">
        
        {/* Left Sidebar: Glowing Profile & Stats */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-purple-500 rounded-full blur-[40px] opacity-40"></div>
            <img
              src="uta.jpeg"
              alt="James Fu"
              className="relative w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-2 border-gray-800 shadow-2xl z-10"
            />
          </div>
          <h2 className="text-2xl font-bold text-white mt-2">James Fu</h2>
          <p className="text-purple-300 text-sm mt-1 mb-6">MSDS @ UT Austin</p>
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-[280px]">
            <div className="flex flex-col items-center justify-center bg-[#151b2b] p-3 rounded-lg border border-gray-800 shadow-md">
              <span className="text-xl font-bold text-white">8+</span>
              <span className="text-[10px] uppercase tracking-wider text-gray-400 mt-1 text-center">Years Coding</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#151b2b] p-3 rounded-lg border border-gray-800 shadow-md">
              <span className="text-xl font-bold text-white">10+</span>
              <span className="text-[10px] uppercase tracking-wider text-gray-400 mt-1 text-center">Projects Built</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#151b2b] p-3 rounded-lg border border-gray-800 shadow-md">
              <span className="text-lg font-bold text-white text-center">UCLA</span>
              <span className="text-[10px] uppercase tracking-wider text-gray-400 mt-1 text-center">Undergrad</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#151b2b] p-3 rounded-lg border border-gray-800 shadow-md">
              <span className="text-lg font-bold text-white text-center">UT Austin</span>
              <span className="text-[10px] uppercase tracking-wider text-gray-400 mt-1 text-center">Grad School</span>
            </div>
          </div>
        </div>

        {/* Right Section: Terminal Text & Bio */}
        <div className="w-full md:w-2/3 flex flex-col pt-4">
          
          {/* Terminal / Typing Box Restored */}
          <div className="bg-[#0b0d14] border border-gray-800 rounded-xl p-5 mb-8 shadow-lg">
            <p className="text-gray-300 font-mono text-sm sm:text-base">
              {text}<span className="animate-pulse text-purple-400 font-bold">|</span>
            </p>
          </div>

          {/* Bio Paragraphs */}
          <div className="space-y-5 text-gray-400 text-sm sm:text-base leading-relaxed">
            <p>
              I recently completed my MS in Data Science from UT Austin. Prior to that, I earned my BS as a proud Bruin studying Computational Systems and Biology @ UCLA.
            </p>
            <p>
              My background bridges advanced data analytics and supply chain operations, currently working on improving inventory planning + automating long workflows. Whether I&apos;m coding for fun or professionally, I thrive on solving complex challenges through analytics and ML.
            </p>
            <p>
              A fun fact is that previously taught computer science and math. Check out my the page below to see some of my favorite shots from my Ricoh!
            </p>
          </div>

          <div className="mt-8 flex justify-start">
            <MovingBorderBtn borderRadius="0.5rem" className="px-6 py-3 font-semibold bg-gray-900 text-white">
              <a href="/photos">Photo Blog</a>
            </MovingBorderBtn>
          </div>
        </div>
      </div>

      {/* Education Timeline Section */}
      <div className="w-full max-w-3xl mt-10 px-6">
        <Title text="Education" className="flex flex-col items-center justify-center mb-16" />
        
        {/* Timeline Container */}
        <div className="relative border-l-2 border-purple-600/30 ml-4 md:ml-0 space-y-12 pb-8">
          
          {/* UT Austin Card */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[11px] top-6 w-5 h-5 bg-purple-500 rounded-full border-4 border-[#0b0d14] shadow-[0_0_12px_rgba(168,85,247,0.8)]"></div>
            
            <div className="bg-[#0b0d14] border border-gray-800 rounded-xl p-6 shadow-lg hover:border-purple-500/30 transition-colors">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                <h3 className="text-lg font-bold text-white">M.S. Data Science</h3>
                <span className="text-xs font-semibold px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full w-fit mt-2 sm:mt-0">2024–2026</span>
              </div>
              <p className="text-purple-400 font-medium text-sm mb-3">University of Texas at Austin</p>
              <p className="text-gray-400 text-sm mb-4">Focus on data analysis, predictive modeling, and statistical methods.</p>
              <a href="/JamesFu_Resume.pdf" className="inline-flex items-center text-xs font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-full transition-colors">
                Explore <span className="ml-1">→</span>
              </a>
            </div>
          </div>

          {/* UCLA Card */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[11px] top-6 w-5 h-5 bg-purple-500 rounded-full border-4 border-[#0b0d14] shadow-[0_0_12px_rgba(168,85,247,0.8)]"></div>
            
            <div className="bg-[#0b0d14] border border-gray-800 rounded-xl p-6 shadow-lg hover:border-purple-500/30 transition-colors">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                <h3 className="text-lg font-bold text-white">B.S. Computational Systems and Biology</h3>
                <span className="text-xs font-semibold px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full w-fit mt-2 sm:mt-0">2020–2024</span>
              </div>
              <p className="text-purple-400 font-medium text-sm mb-3">University of California, Los Angeles</p>
              <p className="text-gray-400 text-sm mb-4">Concentration in Data Science. Focus on health data analytics and ML, working on spatial transcriptomics at the Zipursky Lab (23-24), PM on the Biomedical Engineering Society&apos;s Build Team (23-24), front end development @ DevX (22-23).</p>
              
              <a href="/JamesFu_Resume.pdf" className="inline-flex items-center text-xs font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-full transition-colors">
                Explore <span className="ml-1">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}