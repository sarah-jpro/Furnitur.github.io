import React from 'react';

// Import Swiper React Components
import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import Required Modules
import { Autoplay, Navigation } from 'swiper';

// Import Data
import { testimonial } from '../data';


const TestimonialSlider = () => {
  return (
  <Swiper className='testimonialSlider'
    modules={[Navigation, Autoplay]}
    navigation={true}
    autoplay={true}
    >

    {testimonial.persons.map((person, index) => {
      // Destructure Person
      const { avatar, name, occupation, message } = person;

      return (
         <SwiperSlide key={index}>
          <div className='flex flex-col min-h-[250px]'>
            <div className='flex item-center gap-x-5 mb-9'>
              {/* Avatar */}
              <img src={avatar.type} alt='' />
              <div>
                <div className='text-xl font-semibold'>{name}</div>
                <div className='text-gray-500'>{occupation}</div>
              </div>
            </div>
            {/* Text */}
            <div className='text-xl max-w-[570px]'>{message}</div>
          </div>
         </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
