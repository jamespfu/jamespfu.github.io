"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function HeroSection() {
  const fullText = "working in supply chain @ supermicro";
  const [text, setText] = useState("");

  useEffect(() => {
    let isCancelled = false;

    const runTypingEffect = () => {
      let currentIndex = 0;
      setText(""); 

      const typingInterval = setInterval(() => {
        if (isCancelled) return;

        if (currentIndex < fullText.length) {
          setText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          
          const pauseTimeout = setTimeout(() => {
            if (!isCancelled) {
              runTypingEffect();
            }
          }, 5000);

          return () => clearTimeout(pauseTimeout);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    };

    const cleanup = runTypingEffect();

    return () => {
      isCancelled = true;
      if (typeof cleanup === 'function') cleanup();
    };
  }, []);

  const socials = [
    {
      link: "https://linkedin.com/in/jamespfu/",
      label: "LinkedIn",
      Icon: FaLinkedin,
      text: "in/jamespfu"
    },
    {
      link: "https://github.com/jamespfu/",
      label: "Github",
      Icon: FaGithub,
      text: "jamespfu"
    },
    {
      link: "mailto:jamesfup@gmail.com",
      label: "Email",
      Icon: FaEnvelope,
      text: "jamesfup@gmail.com"
    },
  ];

  return (
    <div className="min-h-[50vh] max-w-6xl mx-auto flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row items-center justify-between px-6 lg:px-12 py-12">
      <div className="space-y-6 lg:text-left max-w-xl">
        <div>
          <h1 className="text-4xl lg:text-5xl font-black mt-4 lg:mt-0">
            <div className="introWrap">
              <span className="intro">Nice to meet you,<br/>I&apos;m James Fu </span>👋
            </div>
            <div className="introMob">
              <span className="intro">Hello! I&apos;m James Fu </span>👋
            </div>
          </h1>
        </div>

        <div className="w-16 my-1 mx-0 border-t border-b-2 border-gray-300"></div>

        <p className="text-base lg:text-lg text-white leading-relaxed">
          {/*Currently seeking new opportunities, let&apos;s connect!*/}
          Data & Supply Chain Analyst
        </p>
        
        <div className="flex justify-start items-center gap-6 mt-4">
          {socials.map((social, index) => {
            const Icon = social.Icon;
            return (
              <Link href={social.link} key={index} aria-label={social.label} className="hover:scale-105 transition-all flex items-center gap-2">
                <Icon className="w-4 h-4 text-white" />
                <span className="hidden lg:inline-block text-sm text-white">{social.text}</span>
              </Link>
            );
          })}
        </div>
      </div>
      
      <div className="relative pt-8 sm:pt-0 sm:block flex h-auto justify-center">
        {/* Rotated Square Container */}
        <div className="shapes grid grid-cols-2 gap-[4px] w-64 h-64 rotate-[-30deg]">
          <div className="blob bg-gradient-to-r from-[#f5e0dc] via-[#f2cdcd] to-[#cba6f7] rounded-2xl w-28 h-28 z-12"></div>
          <div className="blob bg-gradient-to-r from-[#f38ba8] via-[#eba0ac] to-[#fab387] rounded-full w-28 h-28 z-12"></div>
          <div className="blob bg-gradient-to-r from-[#a6e3a1] via-[#94e2d5] to-[#89dceb] rounded-2xl w-28 h-28 -ml-10 z-12"></div>
          <div className="blob bg-gradient-to-r from-[#8aadf4] via-[#babbf1] to-[#f4b8e4] rounded-full w-28 h-28 -ml-10 z-12"></div>
          <div className="glow absolute top-[50%] right-1/2 -z-10"></div>
        </div>
      </div>
    </div>
  );
}