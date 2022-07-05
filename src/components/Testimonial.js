import React from 'react';

// Import Components
import TestimonialSlider from './TestimonialSlider';

// Import Data
import { testimonial } from '../data';

const Testimonial = () => {
  // Destructure Testimonial
  const { image, title } = testimonial;
  return (
  <section className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row lg:gap-x-10 gap-y-2'>
        <div className='lg:max-w-[50%]'>
          {/* Title */}
          <h2 className='title mb-9'>{title}</h2>
          {/* Slider */}
          <TestimonialSlider />
        </div>
        {/* Images */}
        <div className='order-1'>
          <img src={image.type} alt=''/>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Testimonial;
