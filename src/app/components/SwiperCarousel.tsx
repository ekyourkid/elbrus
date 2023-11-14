'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



interface IPropsSwiper {
    slidePerView?: number
    updateIndex: (index: number) => void
    setCurrentData: (data: any) => void
    data: any[]
}

const SwiperCarousel: React.FC<IPropsSwiper> = ({ updateIndex, setCurrentData ,data}) => {
    return (
        <Swiper
            loop
            modules={[Pagination]}
            slidesPerView={4}
            initialSlide={1}
            onSliderMove={((slide) => {
                updateIndex(slide.realIndex)
                setCurrentData(data[slide.realIndex])
            })}
            tabIndex={5}
        >
            {
                data.map((item) =>
                    <SwiperSlide key={item.id}>
                        <div
                            className='w-48 h-72 cursor-pointer rounded-sm p-3 bg-white flex flex-col justify-end leading-2 shadow shadow-b-xl'
                            style={{ backgroundImage: `url(${item.imageSrc})`, objectFit:'cover', backgroundRepeat:'no-repeat'}}
                        >
                            <p className='uppercase text-white text-xs'>{ item.label}</p>
                            <h1 className='font-bold uppercase text-white'>{item.title}</h1>
                        </div>
                    </SwiperSlide>
                )
            }
        </Swiper >
    )
}

export default SwiperCarousel