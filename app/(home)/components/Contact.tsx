import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Title from './Title';

export const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center gap-10 mx-10 lg:mx-36 my-20">
      <div className="text-center relative">
        <Title text="Get in touch" className="flex flex-col items-center justify-center" />
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-32">
        {/* Contact Left */}
        <div className="flex flex-col max-w-lg">
          <h1 className="text-2xl font-bold intro">
            Let&apos;s talk
          </h1>
          <p className="text-gray-300 text-md mt-4 leading-8">
            I&apos;m currently looking for full-time opportunities in Data Science, Analytics, Software Engineering, or any related field. I&apos;d be happy to further discuss my experiences with you, simply shoot me an email or fill out the form below.
          </p>

          <div className="flex flex-col text-md text-gray-300 mt-8 space-y-4">
            <div className="flex items-center gap-5">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
              <p>jamesfup@gmail.com</p>
            </div>
            <div className="flex items-center gap-5">
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
              <p>+1 (925)&nbsp;875-8886</p>
            </div>
            <div className="flex items-center gap-5">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4" />
              <p>CA, United States</p>
            </div>
          </div>
        </div>

        {/* Contact Right */}
        <form 
          className="flex flex-col items-start gap-6" 
          action="https://formspree.io/f/xeoqolog"
          method="POST"
        >
          <label htmlFor="name" className="text-white text-base font-medium">Your Name</label>
          <input 
            type="text" 
            name="name" 
            id="name"  // Added id attribute
            placeholder="Enter your name" 
            className="border border-gray-500 w-full lg:w-96 h-16 p-4 rounded-md bg-white/10 text-gray-300 text-lg"
          />

          <label htmlFor="email" className="text-white text-base font-medium">Your Email</label>
          <input 
            type="email" 
            name="email" 
            id="email"  // Added id attribute
            placeholder="Enter your email" 
            className="border border-gray-500 w-full lg:w-96 h-16 p-4 rounded-md bg-white/10 text-gray-300 text-lg"
          />

          <label htmlFor="message" className="text-white text-base font-medium">Write your message here</label>
          <textarea 
            name="message" 
            id="message"  // Added id attribute
            rows={6}
            placeholder="Enter your message" 
            className="border border-gray-500 w-full lg:w-96 p-4 rounded-md bg-white/10 text-gray-300 text-lg"
          />

          <button 
            type="submit" 
            className="inline-flex text-md items-center px-8 py-3 text-white font-semibold rounded-sm bg-gradient-to-r from-indigo-900 to-purple-800 hover:from-indigo-800 hover:to-purple-700 shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
