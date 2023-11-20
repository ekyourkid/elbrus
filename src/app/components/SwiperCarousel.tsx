'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



interface IPropsSwiper {
    slidePerView?: number
    setCurrentData: (data: any) => void
    data: any[]
}

const SwiperCarousel: React.FC<IPropsSwiper> = ({ setCurrentData, data }) => {
    return (
        <Swiper
            loop
            modules={[Pagination]}
            slidesPerView={5}
            initialSlide={1}
            tabIndex={1}
            onSlideNextTransitionEnd={((slide) => {
                setCurrentData(data[slide.realIndex])
            })}
            slideActiveClass='banner-active'
        >
            {
                data.map((item) =>
                    <SwiperSlide key={item.id}>
                        <div
                            className='w-40 h-60 cursor-pointer rounded-lg p-3 bg-white flex flex-col justify-end leading-2 shadow shadow-b-xl '
                            style={{ backgroundImage: `url(${item.imageSrc})`, objectFit: 'cover', backgroundRepeat: 'no-repeat' }}
                        >
                            <p className='uppercase text-white text-xs'>{item.label}</p>
                            <h1 className='font-bold uppercase text-white'>{item.title}</h1>
                        </div>
                    </SwiperSlide>
                )
            }
        </Swiper >
    )
}

export default SwiperCarousel