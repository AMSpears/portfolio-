import React from 'react';
import bioImage from '../../images/bio-image-placeholder.png';

const HomeAbout = () => { 

  return (
    <div className="relative w-full px-[20px] py-[76px] md:px-[64px] md:py-[196px]">
      <div className="bg-about-background py-[32px] px-[20px] md:py-[48px] md:px-[64px] rounded-xl">
        <h2 className="text-black text-5xl md:text-8xl font-bold mb-[24px] md:mb-[48px] text-center md:text-left">Learn more about Angie</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <img src={bioImage} alt="Angie" className="mb-[24px] md:mb-0 md:order-1 rounded-lg w-full h-[400px] cover md:w-[262px] md:h-[327px]"/>
          <div className="md:order-0 md:w-1/2">
            <p className="text-[16px] md:text-[32px] font-light mb-[24px] md:mb-0 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <a href='/about' className="w-fit text-center block md:text-left text-[16px] md:text-[32px] font-bold bg-black text-white rounded-[72px] px-[16px] py-[8px] md:px-[64px] md:py-[24px] mt-[16px]">
              <span className="inline-block mr-[8px]">About me</span> 
              <svg className="inline-block w-[24px] h-[24px] md:w-[51px] md:h-[51px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 51" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.268 35.258C31.6664 34.6623 31.6624 33.6941 32.258 33.0925L38.2641 27.0303H7.84348C6.99879 27.0303 6.31348 26.345 6.31348 25.5003C6.31348 24.6556 6.99879 23.9703 7.84348 23.9703H38.2641L32.258 17.9081C31.6623 17.3065 31.6663 16.3382 32.268 15.7426C32.8676 15.1489 33.8359 15.1529 34.4315 15.7525L41.954 23.3469C43.1354 24.5402 43.1354 26.4607 41.954 27.6538L34.4315 35.2481C33.8358 35.8478 32.8676 35.8518 32.268 35.2581V35.258Z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default HomeAbout;