import React from "react";

const ProjectCard = ({ title, description, videoUrl, outerBackgroundColor, innerBackgroundColor, technologies }) => {
  return (
    <div className={`h-lvh ${outerBackgroundColor} shadow-md rounded-md p-[32px] mx-[20px] flex md:gap-32`}>
      <div className="flex flex-col w-1/4">
        <h3 className="md:text-5xl mb-[24px] font-semibold text-secondary uppercase">{title}</h3>
        <p className="text-lg text-secondary text-lg font-light">{description}</p>
        <div className="flex flex-wrap mt-[20px]">
          {technologies.map((technology, index) => (
            <p key={index} className="mr-[10px] mb-[10px] text-sm text-black bg-white py-[8px] px-[24px] rounded-2xl">{technology}</p>
          ))}
        </div>
      </div>
      <div className={`${innerBackgroundColor} md:py-[100px] md:px-[50px] md:w-3/4 rounded-lg`}>
        <div className="w-full aspect-video">
          <video className={`w-full h-full object-cover ${innerBackgroundColor} rounded-md`} controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;