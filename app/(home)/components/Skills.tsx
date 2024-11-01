"use client";

import React from 'react';
import Title from './Title';
import { HoverEffect } from './ui/card-hover-effect';
import { 
    SiPython, 
    SiPytorch, 
    SiTensorflow, 
    SiPandas, 
    SiNumpy, 
    SiScikitlearn, 
    SiTableau,
    SiGit,
    SiReact, 
} from 'react-icons/si';

export default function Skills() {
    const skills = [
        { text: 'Python', Icon: SiPython },  
        { text: 'PyTorch', Icon: SiPytorch },  
        { text: 'TensorFlow', Icon: SiTensorflow },  
        { text: 'Pandas', Icon: SiPandas },  
        { text: 'NumPy', Icon: SiNumpy },  
        { text: 'scikit-learn', Icon: SiScikitlearn },  
        { text: 'Tableau', Icon: SiTableau },  
        { text: 'Git', Icon: SiGit },  
        { text: 'React', Icon: SiReact, },
    ];

    return (
        <div className="max-w-5xl mx-auto px-8 mt-20"> 
            <Title text="Skills" className="flex flex-col items-center justify-center" />
            <HoverEffect items={skills} />
        </div>
    );
}

