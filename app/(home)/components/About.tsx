import React from 'react';
import Title from './Title';
import { MovingBorderBtn } from './ui/moving-border';

interface AboutSectionProps {
  title: string;
  description: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, description }) => (
  <div className="py-3"> {/* Consistent padding */}
    <h2 className="text-lg font-bold text-white mb-2">{title}</h2>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default function About() {
  return (
    <div id="about" className="p-5 flex flex-col items-center"> {/* Center entire section */}
      <Title text="About Me" className="flex flex-col items-center justify-center mb-10" />

      <div className="flex flex-col md:flex-row items-center md:items-stretch">
        {/* Image and Button Container */}
        <div className="md:w-1/3 md:pr-8 sm:pb-4 pb-5 mr-5 flex justify-center relative"> {/* Center image on mobile and set relative position */}
          <img
            src="/IMG_7186.JPG"
            alt="James Fu"
            className="max-w-[12rem] md:max-w-full h-auto object-cover rounded-2xl mx-auto"
          />
          <div className="absolute -bottom-[10px] z-300 w-full flex justify-center hover:scale-105 transform transition duration-200"> {/* Adjust bottom positioning */}
            <MovingBorderBtn
              borderRadius="0.5rem"
              className="p-3 font-semibold"
            >
              <a href="/James_Fu_Resume_2024.pdf">📄 &nbsp; View Resume</a>
            </MovingBorderBtn>
          </div>
        </div>

        {/* Content section taking up 2/3 of the width */}
        <div className="md:w-2/3 flex flex-col items-center md:items-start mt-10 lg:mt-0 md:mt-0"> {/* Center text content */}
          {/* First section */}
          <AboutSection 
            title="🎓 🔵" 
            description="I recently graduated from UCLA with a B.S. in Computational Biology (Data Science specialization). Over the few years, I've developed a passion for applying machine learning to real-world challenges, especially in data science and ML."
          />

          {/* Horizontal divider with even spacing */}
          <div className="border-t border-gray-700 my-2 w-full"></div>

          {/* Second section */}
          <AboutSection 
            title="📘 🟠" 
            description="Currently, I'm a Master's student in Data Science at UT Austin, where I'm learning to build language models by working with transformers and architectures like GPT-3. My interests lie in uncovering patterns in data and I am particularly interested in applying machine learning to healthcare to make it more accessible and impactful."
          />

          {/* Horizontal divider with even spacing */}
          <div className="border-t border-gray-700 my-2 w-full"></div>

          {/* Third section */}
          <AboutSection 
            title="⚙️ 🍵" 
            description="In my spare time, I enjoy cooking and recreating cafe drinks and playing tennis. Over the past 7+ years, I've developed various coding projects, with a focus on Python and full-stack development. I’m currently working on a cost equity modeler that helps users determine fair pricing for medical services by comparing insurance and non-insurance rates and implementing synthetic data generation."
          />
        </div>
      </div>
    </div>
  );
}
