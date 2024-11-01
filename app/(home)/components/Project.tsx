import React from 'react';
import { SiPython, SiPytorch, SiTensorflow } from 'react-icons/si';
import Title from './Title';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from './ui/direction-aware-hover';

export default function Project() {
    const projects = [
        {
            title: "Custom Transformer Model for Next-Character Prediction",
            tech: [SiPython, SiPytorch, SiTensorflow],
            link: "https://github.com/jamespfu/AI-388/tree/main/Assignment%203",
            cover: "/project-1.png",
            background: "bg-zinc-900",
            description: "Built a custom Transformer model achieving 99.67% accuracy in character frequency classification and extended it to a full language model with a low perplexity of 6.13 for next-character prediction, using Transformer-based sequence modeling for accurate and efficient language prediction.",
        },
        {
            title: "ML-Based Astrocyte Subtype Quantification",
            tech: [SiPython, SiPytorch, SiTensorflow],
            link: "https://github.com/jamespfu/astrocyte-ML-pipeline/tree/main",
            cover: "/project-2.png",
            background: "bg-zinc-900",
            description: "Developed a pipeline using unsupervised machine learning to identify six astrocyte subtypes through spatial clustering of spatial transcriptomic data from the Allen Mouse Brain Atlas, discovered 104 astrocyte-specific genes through differential expression analysis with Bonferroni correction across 10+ million cells.",
        },
    ];

    return (
        <div id="projects" className="p-5 sm:p-0 py-10 mt-20">
            <Title text="Recent Work" className="flex flex-col items-center justify-center" />

            <div className="grid grid-cols-1 sm:grid-cols-2 pt-10 gap-5">
                {projects.map((project, index) => (
                    <div key={index}> {/* Added key prop here */}
                        <div className={cn("p-0 rounded-md shadow-lg", project.background)}>
                            {/* Browser window style with buttons */}
                            <div className="flex items-center space-x-2 p-2 bg-gray-800 rounded-t-md">
                                <div className="flex space-x-2 ml-2">
                                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                </div>
                            </div>

                            {/* Project content */}
                            <div className="p-4">
                                <h1 className="text-lg py-4 font-reg text-white">{project.title}</h1>
                                <DirectionAwareHover imageUrl={project.cover} className="w-full h-96 md:h-80 space-y-5 cursor-pointer">
                                    <div className="space-y-5 m-[10px]" >
                                        <p className="text-sm text-white mr-[30px]">{project.description}</p>
                                        <div className="flex items-center gap-5">
                                            {project.tech.map((Icon, idx) => (
                                                <Icon key={idx} className="w-5 h-5 text-white" />
                                            ))}
                                        </div>
                                        <div className="mt-10"> {/* Fixed typo from mt=[10px] to mt-10 */}
                                            <a href={project.link} className="inline-flex text-sm items-center px-4 py-2 text-white font-semibold rounded-sm bg-gradient-to-r from-indigo-900 to-purple-800 hover:from-indigo-800 hover:to-purple-700 shadow-lg">
                                                Github Repo
                                            </a>
                                        </div>
                                    </div>
                                </DirectionAwareHover>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
