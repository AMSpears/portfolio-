import React from 'react'


const ExperienceSection = () => { 
  const experienceData = [
    {
      title: 'Job 1',
      company: 'Company 1',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
      title: 'Job 2',
      company: 'Company 2',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
      title: 'Job 3',
      company: 'Company 3',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    }
  ]

  return (
    <div className="w-full flex flex-col md:flex-row py-[164px] px-[20px] md:py-[152px] md:px-[48px] reveal">
      <h2 className="text-primary text-[48px] md:w-[40%]">Experience</h2>
      <div className='md:w-[60%]'>
        {experienceData.map((experience, index) => (
          <div key={index} className="flex flex-col md:flex-row md:w-full py-[24px] mb-[32px] md:py-[48px] md:mb-[24px] border-b border-white/[.32]">
            <div className="text-[24px] md:mr-[37px] md:w-[20%] mb-[24px] md:mb-0">
              <h3 className="text-primary font-bold mb-[8px]">{experience.title}</h3>
              <h4 className="text-white font-light mb-[8px]"> {experience.company}</h4>
            </div>
            <p className="text-white text-[16px] md:w-[80%] font-extralight">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
 }

export default ExperienceSection