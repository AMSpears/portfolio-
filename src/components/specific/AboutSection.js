import React from 'react';


const AboutSection = ({bioImage}) => {  
  return (
    <div className="py-[64px]">
      <h1 className='text-primary text-[48px] md:text-[96px] ml-[48px] mb-[48px]'> About Me </h1>
      <div className="flex flex-col items-center md:flex-row px-[40px] md:px-[96px]">
        <p className="md:w-1/3 text-white text-[18px] md:text-[24px] font-bold mb-[8px] md:mb-0 order-1 md:order-0">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
        <img className="w-[80%] md:w-1/3 md:h-[40%] mr-[48px] ml-[48px] mb-[24px] md:mb-0 order-0  md:order-1" src={bioImage} alt="bio image" />
        <p className="md:w-1/3 text-white text-[20px] md:text-[16px] font-extralight order-3">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      </div>
    </div>
  )
}


export default AboutSection;