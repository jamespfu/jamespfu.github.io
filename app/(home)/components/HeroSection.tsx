import Link from 'next/link';
import React from 'react';
import { MovingBorderBtn } from './ui/moving-border';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function HeroSection() {
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
    <div className="min-h-[65vh] flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row items-center justify-between p-5">
      <div className="space-y-8 lg:text-left">
        <div>
          <h1 className="text-5xl lg:text-5xl font-black -mt-96 lg:mt-0">
            <div className="introWrap">
              <span className="intro">Nice to meet you!<br/>I&apos;m James Fu </span>👋
            </div>
            <div className="introMob">
              <span className="intro">Hello! I'm James Fu </span>👋
            </div>
          </h1>
        </div>

        <div className="w-20 my-1 mx-0 border-t border-b-2 border-gray-300"></div>

        <p className="md:w-1/2 text-lg text-gray-300">
          A current M.S. Data Science student @ UT Austin. I aim to deepen my understanding of various machine learning methodologies.
        </p>
        
        <div className="flex justify-start items-center gap-5 mt-2">
          {socials.map((social, index) => {
            const Icon = social.Icon;
            return (
              <Link href={social.link} key={index} aria-label={social.label} className="hover:scale-105 transition-all flex items-center gap-2">
                <Icon className="w-5 h-5" />
                <span className="hidden lg:inline-block text-gray-300">{social.text}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="relative pt-8 sm:pt-0 sm:block hidden h-0 sm:h-auto">
  {/* Rotated Square Container */}
  <div className="grid grid-cols-2 gap-[4px] w-72 h-72 rotate-[-30deg]">
    {/* Four Multi-color Gradient Squares */}
    <div className="blob bg-gradient-to-r from-[#f5e0dc] via-[#f2cdcd] to-[#cba6f7] rounded-2xl w-32 h-32 z-12"></div>
    <div className="blob bg-gradient-to-r from-[#f38ba8] via-[#eba0ac] to-[#fab387] rounded-full w-32 h-32 z-12"></div>
    <div className="blob bg-gradient-to-r from-[#a6e3a1] via-[#94e2d5] to-[#89dceb] rounded-2xl w-32 h-32 -ml-12 z-12"></div>
    <div className="blob bg-gradient-to-r from-[#8aadf4] via-[#babbf1] to-[#f4b8e4] rounded-full w-32 h-32 -ml-12 z-12"></div>
    <div className="glow absolute top-[50%] right-1/2 -z-10"></div>
  </div>

  {/* Centered "View Resume" Button */}
  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 hover:scale-105">
    {/* <MovingBorderBtn
      borderRadius="0.5rem"
      className="p-3 font-semibold"
    >
      <a href="/James_Fu_Resume_2024.pdf">📄 &nbsp;View Resume</a>
    </MovingBorderBtn> */}
  </div>

      </div>
    </div>
  );
}
