import React from 'react';


const ServiceCard = ({type, description, backgroundColor}) => {
  return (
    <div className={`${backgroundColor} p-[32px]`}>
      {/* <img src={serviceIcon} alt="service icon" className="mb-[24px]" /> */}
      <h3 className="text-[24px] font-bold mb-[24px]">{type}</h3>
      <p className="font-light">{description}</p>
    </div>
  )
    
}

export default ServiceCard;