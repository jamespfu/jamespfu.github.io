"use client";

import React from 'react';
import Title from './Title';
import { HoverEffect } from './ui/card-hover-effect';
import { 
    SiPython, 
    SiPytorch, 
    SiPandas, 
    SiGit,
    SiReact, 
} from 'react-icons/si';
import { FaDatabase, FaChartBar, FaBoxesStacked, FaNetworkWired } from 'react-icons/fa6';

export default function Skills() {
    const skills = [
        // 1. Core Language & Data Wrangling (The foundation)
        { text: 'Python', Icon: SiPython },  
        { text: 'Pandas', Icon: SiPandas },  
        { text: 'SQL', Icon: FaDatabase },  
        
        // 2. Supply Chain & Operations Core (Your professional focus)
        { text: 'SAP ERP', Icon: FaBoxesStacked }, 
        { text: 'Power Automate', Icon: FaNetworkWired },  
        { text: 'Tableau', Icon: FaChartBar },  
        
        // 3. Machine Learning (Kept light for general technical depth)
        { text: 'PyTorch', Icon: SiPytorch },  
        
        // 4. Engineering & Web Tools (Development support)
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