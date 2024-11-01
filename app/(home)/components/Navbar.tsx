"use client";
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <nav className="flex items-center justify-between pt-4 pb-0 lg:pt-2 lg:pb-12 bg-transparent">
  {/* Logo */}
      <a href="#" className="flex items-center text-white text-2xl font-light">
        <img 
          src="/sig.png" 
          alt="Logo" 
          className="invert h-10"  // Adjust height as needed to align with navbar
        />
      </a>

      {/* Mobile Menu Icon */}
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-white focus:outline-none"
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
        } absolute top-[90px] right-[20px] bg-black bg-opacity-90 text-white rounded-lg shadow-lg lg:relative lg:top-0 lg:right-0 lg:flex lg:items-center lg:bg-transparent lg:shadow-none lg:rounded-none z-50 p-8 lg:p-0`}
      >
        <div className="lg:flex lg:justify-center lg:gap-12 text-gray-100 text-md font-normal nav-links">
          <a href="#about" className="block lg:inline-block hover:scale-110 transition-transform mb-4 lg:mb-0">
            About
          </a>
          <a href="#projects" className="block lg:inline-block hover:scale-110 transition-transform mb-4 lg:mb-0">
            Projects
          </a>
          <a href="#contact" className="block lg:inline-block hover:scale-110 transition-transform mb-4 lg:mb-0">
            Contact
          </a>
          <a href="/James_Fu_Resume_2024.pdf" className="block lg:inline-block hover:scale-110 transition-transform mb-4 lg:mb-0">
            Resume
          </a>
          {/* Mobile-only Resume link */}
          {/* <a href="/James_Fu_Resume_2024.pdf" className="block lg:hidden hover:scale-110 transition-transform mb-4 lg:mb-0">
            Resume
          </a> */}
        </div>
      </div>
    </nav>
  );
}
