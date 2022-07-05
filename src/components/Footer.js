import React from 'react';

// ImportLogo
import Logo from '../assets/img/logo.svg';

// Import Data
import { footer } from '../data';

const Footer = () => {
  return <footer className='section bg-primary text-white'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14'>
        <a className='mb-6 lg:mb-0 transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300  ' href='#'>
          <img src={Logo} alt='logo'/>
        </a>
        {/* Social */}
        <div className='flex gap-x-4'>
          {footer.social.map((item, index) => {
            return (
              <div 
                className='w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition' 
                key={index}
                >
                <a href='#'>{item.icon}</a>
              </div>
            );
          })}
        </div>
      </div>
      {/* Copyright text */}
      <p className='text-center'> &copy; FurniShop 2022 - All rights reserved.</p>
    </div>
  </footer>;
};

export default Footer;
