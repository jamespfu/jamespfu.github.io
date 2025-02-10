"use client";
import React, { useRef, useState, useEffect } from "react";
import { SiPython, SiPytorch, SiPandas, SiTensorflow, SiScikitlearn, SiOpencv, SiKeras, SiDialogflow, SiGoogleassistant } from "react-icons/si";
import { FaJava, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Title from "./Title";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export default function Project() {
    const projects = [
        {
            title: "Zipursky Lab, UCLA CaSB Thesis",
            subtitle: "Gene Expression and Subtype Analysis of Astrocytes in the Mouse Brain",
            tech: [SiPython, SiPandas, SiScikitlearn],
            link: "/James_Fu_Poster_Final.pdf",
            cover: "/project-2.png",
            background: "bg-zinc-900",
            description: "Developed a pipeline using unsupervised machine learning to identify six astrocyte subtypes through spatial clustering of spatial transcriptomic data from the Allen Mouse Brain Atlas, discovered 104 astrocyte-specific genes through differential expression analysis with Bonferroni correction across 10+ million cells.",
        },
        {
            title: "NLI Cartography Study, UT Austin CS388",
            subtitle: "Enhancing Robustness in Natural Language Inference Models",
            tech: [SiPython, SiPytorch, SiTensorflow],
            link: "/NLI Robustness Study - James Fu.pdf",
            cover: "/SNLI_dark.png",
            background: "bg-zinc-900",
            description: "Followed-up on methods explored in Swayamdipta et al. (2020) to improve NLI robustness. Fine-tuned ELECTRA-small using dataset cartography and contrast sets with distractors, reweighting hard-to-learn examples during training to reduce artifacts. Achieved an 8% accuracy increase on novel contrast sets.",
        },
        {
            title: "Faircare, LA Hacks 2024",
            subtitle: "Developing Faircare for Transparent Pricing",
            tech: [SiPython, SiKeras, SiPytorch],
            link: "",
            cover: "/project-3.png",
            background: "bg-zinc-900",
            description: "A healthcare cost modeling website that leverages machine learning and deep learning to generate synthetic data and make accurate cost predictions. It provides intuitive visualizations summarizing fair treatment cost estimates, ensuring transparency for all users, regardless of insurance coverage.",
        },
        {
            title: "Dotmentia, Los Altos Hacks IV",
            subtitle: "Dementia Care via Voice Assistance and Facial Recognition",
            tech: [SiOpencv, SiDialogflow, SiGoogleassistant, FaJava],
            link: "https://devpost.com/software/dotmentia",
            cover: "/googlehome.jpg",
            background: "bg-zinc-900",
            description: "Won 1st place by building Dotmentia, an assistive AI system that leverages facial recognition (OpenCV) and Google Assistant integration (DialogFlow) to help dementia patients recognize family members and those around them in real-time, enhancing their daily interactions and independence."
        },
    ];

    const scrollContainerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollToProject = (index) => {
        if (scrollContainerRef.current) {
            const projectWidth = scrollContainerRef.current.children[index].offsetWidth;
            scrollContainerRef.current.scrollTo({
                left: index * projectWidth,
                behavior: "smooth",
            });
        }
    };

    const handleNext = () => {
        if (currentIndex === projects.length - 1) {
            scrollToProject(0);
            setCurrentIndex(0);
        } else {
            scrollToProject(currentIndex + 1);
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex === 0) {
            scrollToProject(projects.length - 1);
            setCurrentIndex(projects.length - 1);
        } else {
            scrollToProject(currentIndex - 1);
            setCurrentIndex(currentIndex - 1);
        }
    };

    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, isHovered]);

    return (
        <div id="projects" className="relative p-5 sm:p-0 py-10 mt-20 px-4">
            <Title text="Projects" className="flex flex-col items-center justify-center" />

            {/* Left Arrow (Only Visible on Desktop) */}
            <button 
                onClick={handlePrev} 
                className="hidden sm:block absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
            >
                <FaChevronLeft className="text-white w-6 h-6" />
            </button>



            {/* Scrollable Container */}
            <div 
                ref={scrollContainerRef} 
                className="w-full flex flex-col sm:flex-row overflow-x-auto sm:space-x-5 scrollbar-hide scroll-smooth mt-10 p-5 justify-start snap-x snap-mandatory"
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
            >
                {projects.map((project, index) => (
                    <div 
                    key={index} 
                    className="flex flex-col w-full sm:w-[500px] flex-shrink-0 snap-center my-5 sm:my-0"
                >
                        <div className={cn("p-0 rounded-md shadow-lg flex flex-col h-full", project.background)}>
                            <div className="flex items-center space-x-2 p-2 bg-gray-800 rounded-t-md">
                                <div className="flex space-x-2 ml-2">
                                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                </div>
                            </div>
                            <div className="p-4 flex-grow">
                                <h1 className="text-lg font-semibold text-white text-center py-4">
                                    {project.title}
                                </h1>
                                <DirectionAwareHover 
                                    imageUrl={project.cover} 
                                    className="w-full space-y-5 h-[29rem] sm:h-[24rem] cursor-pointer"
                                >

                                    <div className="space-y-5 m-[10px]">
                                        <h2 className="text-md font-semibold text-white-300 text-left">
                                            {project.subtitle}
                                        </h2>
                                        <p className="text-sm text-gray-300">{project.description}</p>
                                        <div className="hidden sm:flex items-center gap-5">
                                            {project.tech.map((Icon, idx) => (
                                                <Icon key={idx} className="w-5 h-5 text-gray-300" />
                                            ))}
                                        </div>
                                        <div className="mt-10"> {/* Fixed typo from mt=[10px] to mt-10 */}
                                            <a href={project.link} className="inline-flex text-sm items-center px-4 py-2 text-white font-semibold rounded-sm bg-gradient-to-r from-indigo-900 to-purple-800 hover:from-indigo-800 hover:to-purple-700 shadow-lg">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </DirectionAwareHover>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Arrow (Only Visible on Desktop) */}
            <button 
                onClick={handleNext} 
                className="hidden sm:block absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
            >
                <FaChevronRight className="text-white w-6 h-6" />
            </button>
        </div>
    );
}
