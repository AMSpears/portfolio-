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
    <div className="bg-banner-gradient relative w-full py-[80px] md:py-[96px] flex items-center justify-center flex-col">
      <div 
        className="relative w-[190px] h-[238px] md:w-[452px] md:h-[632px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bioImage})` }}
      >
        <h1 className="absolute top-10 -left-20 md:-left-40 text-6xl md:text-9xl font-bold text-primary opacity-0 animate-slide-in-left">
          Angie
        </h1>

        <h1 className="absolute top-40 -right-20 md:-right-40 text-6xl md:text-9xl font-bold text-primary opacity-0 animate-slide-in-right">
          Spears
        </h1>
      </div>

      <h2 className="md:absolute md:bottom-40 w-full mt-[14px] md:mt-0 text-center text-4xl md:text-6xl font-semibold text-primary uppercase opacity-0 animate-fade-in-center">
        Frontend Developer
      </h2>
    </div>
    );
  
}
export default HomeIntroBanner;