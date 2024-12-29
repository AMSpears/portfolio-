import React from 'react';

const HomeIntro = ({introDivider}) => { 

  return (
    <div className="relative w-full py-[64px] px-[20px] md:py-[176px] md:px-[96px] md:text-[48px] flex flex-col items-center justify-center text-white text-center font-light text-[24px] md:text-5xl reveal">
      <img src={introDivider} alt="Intro divider icon" className="md:mb-[64px]"/>
      <p className="md:mb-[64px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <img src={introDivider} alt="Intro divider icon" className="md:mb-[64px]" />
    </div>
  )
}


export default HomeIntro;