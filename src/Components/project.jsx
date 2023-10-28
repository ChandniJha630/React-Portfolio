import React from 'react';
import ProjectBG from '../assets/Project.mp4';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { EffectCoverflow, Pagination, Navigation } from 'swiper';

function Project() {
  return (
    <div>
      <video src={ProjectBG} autoPlay loop muted className='bg-video' />
     <div className="flex justify-around  absolute bottom-5 content-end">
        <div className="w-1/4 py-10 px-10 bg-card ">
            <h1>Gait Abnormality Detection</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum neque aperiam sequi, eaque itaque, inventore sint in, quae quaerat voluptate quisquam tempo</p>
        </div>
        <div className=" w-1/4 py-10 px-10 bg-card ">
            <h1>Gait Abnormality Detection</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum neque aperiam sequi, eaque itaque, inventore sint in, quae quaerat voluptate quisquam tempo</p>
        </div>
        <div className=" w-1/4 py-10 px-10 bg-card ">
            <h1>Gait Abnormality Detection</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum neque aperiam sequi, eaque itaque, inventore sint in, quae quaerat voluptate quisquam tempo</p>
        </div>
     </div>
      {/* <div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className='swiper_container'
        >
          <SwiperSlide>
            <div className='bg-black h-16 w-16'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-black h-16 w-16'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-black h-16 w-16'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-black h-16 w-16'></div>
          </SwiperSlide>
        </Swiper>
        <div className='slider-controller'>
          <div className='swiper-button-prev slider-arrow'>Prev</div>
          <div className='swiper-button-next slider-arrow'>Next</div>
          <div className='swiper-pagination'></div>
        </div>
      </div> */}
    </div>
  );
}

export default Project;
