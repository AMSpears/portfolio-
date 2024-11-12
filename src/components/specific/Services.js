import React from 'react';
import ServiceCard from '../common/ServiceCard';


const Services = () => {
  const serviceData = [
    {
      type: 'Web Development',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      backgroundColor: 'bg-light-purple'
    },
    {
      type: 'Web Design',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      backgroundColor: 'bg-light-green'
    },
    {
      type: 'Service',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      backgroundColor: 'bg-light-yellow'
    },
    {
      type: 'Service',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      backgroundColor: 'bg-light-blue'
    }
  ]
  return (
    <div className="text-white px-[48px] md:py-[176px]">
      <h2 className="text-primary text-[40px] md:mb-[23px]">Services</h2>
      <p className="font-extralight md:w-1/2">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      <div className='flex flex-col md:flex-row flex-wrap gap-[24px]'>
        {serviceData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  )

}

export default Services;