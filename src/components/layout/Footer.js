import React from 'react';


const Footer = () => {

  return (
    <footer className="footer bg-footer-gradient text-white py-[48px] px-[20px] md:px-[96px] reveal">
      <div className="mb-[48px] md:mb-[100px] flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-primary font-bold text-[44px] md:text-[100px] mb-[24px]">Get in Touch</h2>
          <a className="block mb-[48px] text-[24px] font-light" href="mailto:contact@angiespears.com">contact@angiespears.com</a>
        </div>
          <p className="md:w-1/4 mb-[48px] text-[24px] md:text-[24px] font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div> 
        <h3 className="text-primary text-[32px] mb-[24px] text-center md:text-left">Angie Spears</h3>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex space-x-4 justify-center  md:justify-between mb-[24px] text-[20px] font-light">
            {/* <a href="/about">About</a> */}
            <a href="/" target="_blank">Github</a>
            <a href="/" target='_blank'>Resume</a>
            <a href="mailto:contact@angiespears.com">Contact</a>
          </div>
          < div className="flex space-x-4 justify-center md:justify-between">
            <a href="/"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#FCFC8B"/>
              </svg>
            </a>
            <a href="/"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#FCFC8B"/>
              </svg>
            </a>
            <a href="/"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#FCFC8B"/>
              </svg>
            </a>
            <a href="/"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#FCFC8B"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer;