'use client'

import React, { useState } from 'react'
import SwiperCarousel from './SwiperCarousel'

type Display = {
  id: string | number
  title: string
  label: string
  description?: string
  imageSrc: string
  bgSrc: string
}

const LIST = [
    { id: 0, title: 'Tebing Parang', label:'Expedisi', imageSrc: '/images/slide-1.png', bgSrc:'images/bg-1.png' },
    { id: 1, title: 'Goa Cikarae', label:'Mini Session', imageSrc: '/images/slide-2.png',bgSrc:'images/bg-1.png' },
    { id: 2, title: 'Gunung Gede', label:'Mini Session', imageSrc: '/images/slide-3.png',bgSrc:'images/bg-1.png' },
    { id: 3, title: 'Gunung Raung', label:'Wandering Session', imageSrc: '/images/slide-4.png',bgSrc:'images/bg-1.png' },
    { id: 4, title: 'Tebing Jeger', label:'Mini Session', imageSrc: '/images/slide-5.png' ,bgSrc:'images/bg-1.png'},

]

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [currentData, setCurrentData] = useState<Display>(LIST[0])
  
  const updateIndex = React.useCallback((index:number) => {
    setCurrentIndex(index)
  }, [])


  
  return (
    <div
      className={`relative flex items-end py-20 justify-between w-screen h-screen`}
      style={{ backgroundImage: `url(${currentData.bgSrc})`,  backgroundRepeat:'no-repeat' }}
    >
    {/* TEXT SECTION */}
      <div className='w-1/3 h-80 flex flex-col space-y-5 ml-20'>
        <section className='flex justify-start items-center space-x-2'>
          <p className='bg-[#F92424] w-10 h-10 flex justify-center items-center font-bold text-2xl text-white'>0{currentIndex + 1}</p>
          <h1 className='font-base text-white uppercase'>{currentData?.label}</h1>
        </section>
        <h2 className='text-[80px] font-bold text-white leading-[95%] uppercase'>{currentData?.title}</h2>
        <p className='text-white font-light text-sm'>{currentData?.description} Setelah menyelesaikan perintisan jalur multi pitch ditebing lawe Banjarnegara, Jawa Tengah, Tim java andesit marathon bergeser ke tebing sepikul Jawa Timur</p>
      </div>
      {/* SLIDER SECTION */}
      <div className='w-2/3 h-80 -mr-32'>
        <SwiperCarousel updateIndex={updateIndex} setCurrentData={setCurrentData} data={LIST}  />
      </div>
    </div>
  )
}

export default HeroSlider