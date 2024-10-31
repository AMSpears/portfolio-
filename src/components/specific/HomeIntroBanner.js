import React, { useState } from 'react';

const HomeIntroBanner = ({ bioImage }) => {  

  /**
   * TODO: 
   * Adjust the text size and position for different screen sizes
   * Update Image with correct image
   * Adjust image size and position for different screen sizes
   * Adjust text font and size for different screen sizes
   */
  return (
    <div className="relative w-full h-screen md:py-[96px] flex items-center justify-center">
      <div 
        className="relative w-[452px] h-[632px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bioImage})` }}
      >
        <h1 className="absolute top-10 md:-left-60 text-4xl md:text-9xl font-bold text-white opacity-0 animate-slide-in-left">
          Angie
        </h1>

        <h1 className="absolute top-40 md:-right-60 text-4xl md:text-9xl font-bold text-white opacity-0 animate-slide-in-right">
          Spears
        </h1>

        <h2 className="absolute bottom-10 w-full text-center text-2xl md:text-3xl font-semibold text-white opacity-0 animate-fade-in-center">
          Software Engineer
        </h2>
      </div>
    </div>
    );
  
}
export default HomeIntroBanner;