import React from 'react';
import Title from './Title';

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
        {/* Title section taking up 1/3 of the width */}
        <div className="md:w-1/3 md:pr-8 sm:pb-4 pb-5 mr-5 flex justify-center"> {/* Center image on mobile */}
          <img
            src="/IMG_7186.JPG"
            alt="James Fu"
            className="max-w-[12rem] md:max-w-full h-auto object-cover rounded-2xl mx-auto"
          />
        </div>

        {/* Content section taking up 2/3 of the width */}
        <div className="md:w-2/3 flex flex-col items-center md:items-start"> {/* Center text content */}
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
            description="Currently, I'm a Master's student in Data Science at UT austin, where I'm learning to build language models by working with transformers and architectures like GPT-3. My interests lie in uncovering patterns in data and I am particularly interested in applying machine learning to healthcare to make it more accessible and impactful."
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
