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
    <p className="text-gray-300">{description}</p>
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
            title="💙 🐻" 
            description="This past year, I graduated from UCLA with a B.S. in Computational Biology (Data Science concentration), where I developed a strong foundation in data science and software engineering, with a particular focus on NLP, design, and biotech applications. I'm mainly proficient in Python, but I occasionally dabble in languages like C++, JavaScript, SQL, and R."
          />

          {/* Horizontal divider with even spacing */}
          <div className="border-t border-gray-700 my-2 w-full"></div>

          {/* Second section */}
          <AboutSection 
            title="👾 🤘" 
            description="I'm a Master's student in Data Science at UT Austin, studying transformer architectures like BERT and their applications in building LLMs. I'm also enhancing my skills in data analysis, statistical methods, and data structures and algorithms."
          />

          {/* Horizontal divider with even spacing */}
          <div className="border-t border-gray-700 my-2 w-full"></div>

          {/* Third section */}
          <AboutSection 
            title="⚙️ 🍵" 
            description="Over the past 7+ years, I’ve worked on various coding projects, with a focus on Python and full-stack development. I'm also seeking full-time opportunities in Data Science, Analytics, Software Engineering, or any related field. If I'm not at my computer, you'll find me in the kitchen trying new recipes or outside playing tennis."
          />
        </div>
      </div>
    </div>
  );
}
