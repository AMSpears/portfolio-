import React from "react";

const ProjectCard = ({ backgroundImage, backgroundColor, description, title, titleColor, textColor, technologies, videoUrl }) => {
  return (
    <div className={`md:h-[90vh] ${backgroundColor} shadow-md md:w-[85vw] md:max-w-[1500px] rounded-md py-[24px] px-[8px] md:p-[32px] mx-[20px] flex flex-col mb-[32px] md:mb-0 md:flex-row md:gap-32`}>
      <h3 className={`text-[32px] mb-[24px] ${titleColor} font-semibold uppercase md:hidden`}>{title}</h3>
      <div className="flex flex-col md:w-1/4 order-last md:order-first">
        <h3 className={`md:text-5xl mb-[24px] ${titleColor} font-semibold uppercase hidden md:block`}>{title}</h3>
        <p className={`text-lg ${textColor} font-light`}>{description}</p>
        <div className="flex flex-wrap mt-[20px]">
          {technologies.map((technology, index) => (
            <p key={index} className="mr-[10px] mb-[10px] text-sm text-black bg-white py-[8px] px-[24px] rounded-2xl">{technology}</p>
          ))}
        </div>
      </div>
      <div className={`${backgroundImage} bg-cover bg-center py-[24px] px-[8px] mb-[24px] md:mb-0 md:py-[100px] md:px-[50px] md:w-3/4 rounded-lg overflow-hidden flex items-center justify-center`}>
        <div className="relative w-full aspect-video flex items-center justify-center">
          <video className="w-full h-full object-contain rounded-md" controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
            <track kind="captions" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;