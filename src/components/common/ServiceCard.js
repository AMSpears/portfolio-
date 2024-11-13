import React from 'react';


const ServiceCard = ({ description, backgroundColor, serviceIcon, type}) => {
  return (
    <div className={`${backgroundColor} py-[24px] px-[16px] md:p-[32px] text-black`}>
      <img src={serviceIcon} alt="service icon" className="mb-[24px] w-[56px] h-[55px] md:w-[90px] md:h-[89px]" />
      <h3 className="text-[24px] font-bold mb-[24px]">{type}</h3>
      <p className="text-[12px] md:text-[16px] font-extralight">{description}</p>
    </div>
  ) 
}

export default ServiceCard;