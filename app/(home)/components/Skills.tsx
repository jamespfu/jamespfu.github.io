"use client";

import React from 'react';
import Title from './Title';
import { HoverEffect } from './ui/card-hover-effect';
import { 
    SiPython, 
    SiPytorch, 
    SiTensorflow, 
    SiPandas, 
    SiScikitlearn, 
    SiTableau,
    SiGit,
    SiReact, 
} from 'react-icons/si';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; // Database icon for SQL

export default function Skills() {
    const skills = [
        { text: 'Python', Icon: SiPython },  
        { text: 'PyTorch', Icon: SiPytorch },  
        { text: 'TensorFlow', Icon: SiTensorflow },  
        { text: 'Pandas', Icon: SiPandas },  
        { text: 'SQL', Icon: faDatabase, isFontAwesome: true }, // Specify FontAwesome icons with a flag
        { text: 'scikit-learn', Icon: SiScikitlearn },  
        { text: 'Tableau', Icon: SiTableau },  
        { text: 'Git', Icon: SiGit },  
        { text: 'React', Icon: SiReact },
    ];

    return (
        <div className="max-w-5xl mx-auto px-8 mt-20"> 
            <Title text="Skills" className="flex flex-col items-center justify-center" />
            <HoverEffect className="text-white" items={skills} />
        </div>
    );
}
