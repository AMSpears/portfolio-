import React, {useEffect} from 'react';
import ProjectCard from '../common/ProjectCard';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const HomeProjects = () => {  

const projects = [
  {
    title: "CUUP",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna nisi, consectetur sagittis lobortis ut, tempus quis orci. Vivamus placerat ligula eget est semper tincidunt. Pellentesque eget ullamcorper leo, quis dictum justo. Integer tempus lobortis nibh id euismod.",
    videoUrl: "https://res.cloudinary.com/dh9cghj6y/video/upload/v1633110808/Portfolio%20Website/Projects/CUUP.mp4",
    outerBackgroundColor: "bg-blue-400",
    innerBackgroundColor: "bg-gray-300",
    technologies: ["React", "Shopify", "GraphQL", "SCSS"]
  },
  {
    title: "CUUP 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna nisi, consectetur sagittis lobortis ut, tempus quis orci. Vivamus placerat ligula eget est semper tincidunt. Pellentesque eget ullamcorper leo, quis dictum justo. Integer tempus lobortis nibh id euismod.",
    videoUrl: "https://res.cloudinary.com/dh9cghj6y/video/upload/v1633110808/Portfolio%20Website/Projects/CUUP.mp4",
    outerBackgroundColor: "bg-blue-400",
    innerBackgroundColor: "bg-gray-300",
    technologies: ["React", "Shopify", "GraphQL", "SCSS"]
  },
]

  return (
    <div className="relative w-full py-[48px] flex flex-col">
     <h2 className="ml-[20px] mb-[48px] md:ml-[64px] text-primary text-lg md:text-5xl">Selected Projects</h2>
     <Swiper 
      slidesPerView={1.2}
      spaceBetween={32}
      className="mySwiper">        
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              videoUrl={project.videoUrl}
              outerBackgroundColor={project.outerBackgroundColor}
              innerBackgroundColor={project.innerBackgroundColor}
              technologies={project.technologies}
            />
          </SwiperSlide>
        ))}
     </Swiper>
    </div>
    );
  
}
export default HomeProjects;