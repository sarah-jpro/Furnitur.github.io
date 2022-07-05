import React from 'react';

// Import Data
import {hero} from'../data';

// Import Components
import Stats from '../components/Stats';

const Hero = () => {
  // Destructure hero
  const {title, subtitle, buttonText} = hero;
  return(
    <section className='h-[850px] w-full bg-hero bg-right bg-cover bg-no-repeat text-white pt-[68px] pb-[800px] relative mb-12 lg:bg-center lg:mb-28'>
      <div className='container mx-auto text-center'>
        {/* Title */}
        <h1 className='text-2xl mx-auto font-semibold mb-[30px] lg:text-[64px] lg:leading-relaxed lg:max-w-[888px]'>{title}</h1>
        {/* Subtitle */}
        <h2 className='mb-[30px] max-w-[627px] mx-auto lg:mb-[65px] lg:text-xl'>{subtitle}
        </h2>
        {/* Button cta */}
        <button className='bg-[rgba(255,255,255,0.4)] text-teal-600 hover:bg-[rgba(255,255,255,0.5)] px-[35px] py-[9px] mb-[160px] text-xl rounded-md backdrop-blur-md transition lg:px-[80px] lg:py-[16px] lg:mb-[194px]'>{buttonText}</button>
        {/* Stats */}
        <div>
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Hero;
