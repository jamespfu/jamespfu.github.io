"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between pt-6 pb-6 lg:pt-8 lg:pb-12 bg-transparent max-w-6xl mx-auto px-6 lg:px-12 w-full">
      {/* Logo */}
      <a href="#" className="flex items-center text-white text-2xl hover:opacity-80 transition-opacity">
        <img 
          src="/sig.png" 
          alt="Logo" 
          className="invert h-10" 
        />
      </a>

      {/* Mobile Menu Icon */}
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="flex items-center p-2 rounded-lg text-white bg-white/5 border border-gray-800 focus:outline-none"
        >
          <svg
            className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>

      {/* Menu Links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-[85px] left-6 right-6 backdrop-blur-md bg-[#0b0d14]/95 border border-gray-800 text-white rounded-xl shadow-2xl lg:relative lg:top-0 lg:left-0 lg:right-0 lg:flex lg:items-center lg:bg-transparent lg:border-none lg:shadow-none lg:rounded-none z-50 p-6 lg:p-0`}
      >
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center lg:gap-12 text-white text-md font-medium nav-links">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block lg:inline-block tracking-normal text-gray-300 hover:text-white hover:scale-105 transition-all py-2 lg:py-0"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block lg:inline-block tracking-normal text-gray-300 hover:text-white hover:scale-105 transition-all py-2 lg:py-0"
          >
            Work
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block lg:inline-block tracking-normal text-gray-300 hover:text-white hover:scale-105 transition-all py-2 lg:py-0"
          >
            Contact
          </a>
          <a
            href="/JamesFu_Resume.pdf"
            onClick={() => setIsOpen(false)}
            className="block lg:inline-block tracking-normal text-gray-300 hover:text-white hover:scale-105 transition-all py-2 lg:py-0"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}