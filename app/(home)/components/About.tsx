import React from 'react';
import Title from './Title';

interface AboutSectionProps {
  title: string;
  description: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, description }) => (
  <div className="py-3"> {/* Consistent padding */}
    <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default function About() {
  return (
    <div className="p-0">
      <Title text="About Me" className="flex flex-col items-center justify-center mb-10" />

      <div className="flex flex-col md:flex-row items-stretch">
        {/* Title section taking up 1/3 of the width */}
        <div className="md:w-1/3 md:pr-8 sm:pb-4 pb-5 mr-5"> {/* Adds padding bottom on mobile */}
        <img
  src="/IMG_7186.JPG"
  alt="James Fu"
  className="max-w-[12rem] md:max-w-full h-auto object-cover rounded-2xl mx-auto"
/>

        </div>

        {/* Content section taking up 2/3 of the width */}
        <div className="md:w-2/3 flex flex-col">
          {/* First section */}
          <AboutSection 
            title="Nice to meet you," 
            description="I'm James, a recent UCLA graduate with a B.S. in Computational Biology (Data Science specialization). Over the past few years, I've developed a passion for applying machine learning to real-world challenges, especially in data science and ML."
          />

          {/* Horizontal divider with even spacing */}
          <div className="border-t border-gray-700 my-4"></div>

          {/* Second section */}
          <AboutSection 
            title="Currently," 
            description="I'm a part-time Master’s student at UT Austin, where I'm learning to build language models by working with transformers and architectures like GPT-3. I'm passionate about uncovering patterns in data and am particularly interested in applying machine learning to healthcare to make it more accessible and impactful."
          />

          {/* Horizontal divider with even spacing */}
          <div className="border-t border-gray-700 my-4"></div>

          {/* Third section */}
          <AboutSection 
            title="My hobbies include" 
            description="trying new recipes and recreating cafe drinks, playing tennis, and building custom keyboards for friends. Over the past 7+ years, I've developed various coding projects, with a primary focus on Python and full-stack development. In my spare time, I’m working on a cost equity modeler that helps users determine fair pricing for medical services by comparing insurance and non-insurance rates and implementing synthetic data generation to enhance datasets."
          />
        </div>
      </div>
    </div>
  );
}
