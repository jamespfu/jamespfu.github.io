import React from 'react';

export default function Footer() {
  return (
    <div className="mt-20 my-8 text-center">
      <h6>
        Copyright © 2024 James Fu
        <br />
        palette inspired by{' '}
        <a 
          href="https://catppuccin.com/" 
          className="text-blue-200 no-underline hover:text-white hover:underline transition duration-200"
        >
          catppuccin =^..^=
        </a>
      </h6>
    </div>
  );
}