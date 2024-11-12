import React from 'react';
import ProjectCard from '../common/ProjectCard';
import { Swiper, SwiperSlide } from "swiper/react";
import projectData from '../data/projectData.json'; 

import "swiper/css";

const HomeProjects = () => {  
  return (
    <div className="relative w-full py-[32px] md:px-[64px] md:py-[48px] flex flex-col">
     <h2 className="ml-[20px] mb-[32px] md:mb-[48px] md:ml-[64px] text-primary text-[28px] md:text-5xl">Selected Projects</h2>
     <div className="hidden md:block">
      <Swiper 
        slidesPerView={1.2}
        spaceBetween={32}
        className="mySwiper">        
          {projectData.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard
                {...project}
              />
            </SwiperSlide>
          ))}
      </Swiper>
     </div>
     <div className='block md:hidden'>
      {projectData.map((project, index) => (
        <div key={index}> 
          <ProjectCard
            {...project}
          />
        </div>
      ))}
     </div>
    </div>
    );
  
}
export default HomeProjects;