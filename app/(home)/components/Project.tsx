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
            background: "bg-[#0b0d14]",
            description: "Developed a pipeline using unsupervised machine learning to identify six astrocyte subtypes through spatial clustering of spatial transcriptomic data from the Allen Mouse Brain Atlas, discovered 104 astrocyte-specific genes through differential expression analysis with Bonferroni correction across 10+ million cells.",
        },
        {
            title: "NLI Cartography Study, UT Austin CS388",
            subtitle: "Enhancing Robustness in Natural Language Inference Models",
            tech: [SiPython, SiPytorch, SiTensorflow],
            link: "/NLI Robustness Study - James Fu.pdf",
            cover: "/SNLI_dark.png",
            background: "bg-[#0b0d14]",
            description: "Followed-up on methods explored in Swayamdipta et al. (2020) to improve NLI robustness. Fine-tuned ELECTRA-small using dataset cartography and contrast sets with distractors, reweighting hard-to-learn examples during training to reduce artifacts. Achieved an 8% accuracy increase on novel contrast sets.",
        },
        {
            title: "Faircare, LA Hacks 2024",
            subtitle: "Developing Faircare for Transparent Pricing",
            tech: [SiPython, SiKeras, SiPytorch],
            link: "/",
            cover: "/project-3.png",
            background: "bg-[#0b0d14]",
            description: "Built a healthcare cost modeling website leveraging synthetic data augmentation and data analysis to make accurate cost predictions. Increasing volume of MEPS dataset by 253%, this tool provides intuitive visualizations summarizing fair treatment cost estimates, ensuring transparency for all users, regardless of insurance coverage.",
        },
        {
            title: "Dotmentia, Los Altos Hacks IV",
            subtitle: "Dementia Care via Voice Assistance and Facial Recognition",
            tech: [SiOpencv, SiDialogflow, SiGoogleassistant, FaJava],
            link: "https://devpost.com/software/dotmentia",
            cover: "/googlehome.jpg",
            background: "bg-[#0b0d14]",
            description: "Won 1st place by building Dotmentia, an assistive AI system that leverages facial recognition (OpenCV) and Google Assistant integration (DialogFlow) to help dementia patients recognize family members and those around them in real-time, enhancing their daily interactions and independence."
        },
    ];

    const scrollContainerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollToProject = (index) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const card = container.children[index];
            if (card) {
                const gap = 24; 
                const scrollLeft = index * (card.offsetWidth + gap);
                container.scrollTo({
                    left: scrollLeft,
                    behavior: "smooth",
                });
            }
        }
    };

    const handleNext = () => {
        const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
        scrollToProject(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
        scrollToProject(prevIndex);
    };

    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = prevIndex === projects.length - 1 ? 0 : prevIndex + 1;
                scrollToProject(nextIndex);
                return nextIndex;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [isHovered, projects.length]);

    return (
        <div id="projects" className="relative max-w-6xl mx-auto py-16 px-6 lg:px-12 mt-10">
            <Title text="Projects" className="flex flex-col items-center justify-center mb-12" />

            <div className="relative group">
                {/* Left Navigation Arrow - Positioned cleanly outside the card boundary */}
                <button 
                    onClick={handlePrev} 
                    aria-label="Previous Project"
                    className="hidden lg:flex items-center justify-center absolute -left-7 top-1/2 -translate-y-1/2 z-30 bg-[#0b0d14] border border-gray-800 text-white p-3 rounded-full shadow-2xl hover:bg-purple-950/40 hover:border-purple-500/50 transition-all"
                >
                    <FaChevronLeft className="w-4 h-4" />
                </button>

                {/* Scrollable Container */}
                <div 
                    ref={scrollContainerRef} 
                    className="w-full flex flex-col lg:flex-row overflow-x-auto gap-6 scrollbar-hide scroll-smooth p-2 justify-start snap-x snap-mandatory"
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col w-full lg:w-[calc(50%-12px)] flex-shrink-0 snap-center"
                        >
                            {/* macOS Window Frame Container */}
                            <div className={cn("rounded-xl border border-gray-800 shadow-2xl overflow-hidden flex flex-col h-full bg-[#0b0d14]", project.background)}>
                                
                                {/* macOS Window Titlebar */}
                                <div className="flex items-center justify-between px-4 py-3 bg-[#131620] border-b border-gray-800/80">
                                    <div className="flex items-center space-x-2">
                                        <span className="w-3 h-3 bg-[#ff5f56] rounded-full inline-block shadow-inner"></span>
                                        <span className="w-3 h-3 bg-[#ffbd2e] rounded-full inline-block shadow-inner"></span>
                                        <span className="w-3 h-3 bg-[#27c93f] rounded-full inline-block shadow-inner"></span>
                                    </div>
                                    <span className="text-xs text-gray-400 font-mono tracking-wider truncate max-w-[250px] sm:max-w-xs">
                                        {project.title}
                                    </span>
                                    <div className="w-10"></div> {/* Spacer for symmetry */}
                                </div>

                                {/* Window Body */}
                                <div className="p-5 flex-grow flex flex-col">
                                    <DirectionAwareHover 
                                        imageUrl={project.cover} 
                                        className="w-full h-[26rem] sm:h-[22rem] cursor-pointer rounded-lg overflow-hidden border border-gray-800/50"
                                    >
                                        <div className="space-y-3 p-3 backdrop-blur-md bg-black/60 rounded-lg">
                                            <h4 className="text-sm font-semibold text-purple-300">
                                                {project.subtitle}
                                            </h4>
                                            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">{project.description}</p>
                                            
                                            <div className="flex items-center gap-4 pt-1">
                                                {project.tech.map((Icon, idx) => (
                                                    <Icon key={idx} className="w-4 h-4 text-gray-300" />
                                                ))}
                                            </div>

                                            {project.link && (
                                                <div className="pt-2">
                                                    <a 
                                                        href={project.link} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="inline-flex text-xs items-center px-4 py-2 text-white font-semibold rounded-md bg-gradient-to-r from-purple-900 to-purple-800 hover:from-purple-800 hover:to-purple-700 shadow-lg transition-all"
                                                    >
                                                        Read More <span className="ml-1">→</span>
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </DirectionAwareHover>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Navigation Arrow - Positioned cleanly outside the card boundary */}
                <button 
                    onClick={handleNext} 
                    aria-label="Next Project"
                    className="hidden lg:flex items-center justify-center absolute -right-7 top-1/2 -translate-y-1/2 z-30 bg-[#0b0d14] border border-gray-800 text-white p-3 rounded-full shadow-2xl hover:bg-purple-950/40 hover:border-purple-500/50 transition-all"
                >
                    <FaChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}