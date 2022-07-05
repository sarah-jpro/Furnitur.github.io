import React from 'react';

// Import Swiper react Components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import data
import { newInStore } from '../data';

const NewItemsSlider = () => {
  return (
    <Swiper
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPreview: 2,
          spaceBetween: 18,
        },
        768: {
          slidesPreview: 3,
          spaceBetween: 20,
        },
      }}
      className='mySwiper'
    >
      {newInStore.products.map((product, index) => {
        return (
          <SwiperSlide className='max-w-[265px]' key={index}>
            <div className='relative'>
              <img src={product.image.type} alt='product' />
              <div className='absolute text-white bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-medium capitalize'>
                {product.name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default NewItemsSlider;
