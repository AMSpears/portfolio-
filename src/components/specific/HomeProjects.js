import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import ProjectCard from '../common/ProjectCard';
import projectData from '../data/projectData.json';

const HomeProjects = ({scrollIcon, scrollDividerLine, arrow}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"], // Track from start to end of the target
  });

  // Map vertical scroll to horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(projectData.length - 1) * 95}vw`]);

  return (
    <div className="relative w-full py-[32px] md:px-[64px] md:py-[48px] flex flex-col reveal">
      <h2 className="ml-[20px] mb-[32px] md:mb-[48px] md:ml-[64px] text-primary text-[28px] md:text-5xl">Selected Projects</h2>
      <div ref={targetRef} className="relative h-[500vh] hidden md:block">
        {/* Sticky Scroll Container */}
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          {/* Horizontal Animation */}
          <div className="absolute z-50 top-0 hidden md:flex md:flex-col md:items-center md:space-y-[20px]">
            <img src={scrollIcon} alt="Scroll icon" className="md:mb-[20px]"/>
            <img src={scrollDividerLine} alt="Scroll icon" className=""/>
            <img src={arrow} alt="Scroll icon" className=""/>
          </div>
          <motion.div
            style={{ x }}
            className="flex space-x-[64px] md:ml-[64px]"
          >
            {projectData.map((card, index) => (
              <div
                key={index}
                className="w-[85vw] flex-shrink-0"
              >
                <ProjectCard {...card} />
              </div>
            ))}
         </motion.div>
        </div>
      </div>
      <div className='block md:hidden'>
        {projectData.map((card, index) => (
          <div key={index}> 
            <ProjectCard
              {...card}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProjects;