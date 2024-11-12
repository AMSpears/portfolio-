import React from 'react';
import bioImage from '../../images/bio-image-placeholder.png';

const HomeAbout = () => { 

  return (
    <div className="relative w-full">
      <div className="bg-light-blue py-[32px] px-[20px] md:py-[48px] md:px-[64px] rounded-xl">
        <h2 className="text-black text-5xl md:text-8xl font-bold mb-[24px] md:mb-[48px] text-center md:text-left">Learn more about Angie</h2>
        <div className="flex flex-col md:flex-row">
          <img src={bioImage} alt="Angie" className="mb-[24px] md:mb-0 md:order-1 rounded-lg w-full h-[400px] cover md:w-[262px] md:h-[327px]"/>
          <div className="md:order-0 md:w-1/2">
            <p className="text-[16px] md:text-[32px] font-light mb-[24px] md:mb-0 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <a href='/about' className="text-center md:text-left text-[16px] md:text-[32px] font-bold bg-black text-white rounded-[72px] px-[16px] py-[8px] md:px-[64px] md:py-[24px] mt-[16px]">About me</a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default HomeAbout;