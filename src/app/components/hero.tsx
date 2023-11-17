'use client'

import React, { useState } from 'react'
import SwiperCarousel from './SwiperCarousel'
import { motion } from "framer-motion"

type Display = {
  id: string | number
  title: string
  label: string
  description?: string
  imageSrc: string
  bgSrc: string
}

const LIST = [
  { id: 0, title: 'ISLAND PEAKS', label: 'Expedisi', imageSrc: '/images/slide-1.png', bgSrc: 'images/bg-1.png' },
  { id: 1, title: 'Goa Cikarae', label: 'Mini Session', imageSrc: '/images/slide-2.png', bgSrc: 'images/bg-2.jpg' },
  { id: 2, title: 'Gunung Gede', label: 'Mini Session', imageSrc: '/images/slide-3.png', bgSrc: 'images/bg-3.jpg' },
  { id: 3, title: 'Gunung Raung', label: 'Wandering Session', imageSrc: '/images/slide-4.png', bgSrc: 'images/bg-4.jpg' },
  { id: 4, title: 'Bavery Hills', label: 'Mini Session', imageSrc: '/images/slide-2.png', bgSrc: 'images/bg-5.jpg' },
  { id: 4, title: 'K2 Expedition', label: 'Mini Session', imageSrc: '/images/bg-6.jpg', bgSrc: 'images/bg-6.jpg' },
]

const TextSection: React.FC<{ data: any }> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='w-3/5 h-80 flex flex-col space-y-5 ml-20'>
        <section className='flex justify-start items-center space-x-2'>
          <p className='grit bg-[#F92424] w-10 h-10 flex justify-center items-center font-bold text-2xl text-white'>0{data.id + 1}</p>
          <h1 className='font-base text-white uppercase'>{data?.label}</h1>
        </section>
        <h2 className='grit text-[80px] font-bold text-white leading-[95%] uppercase'>{data?.title}</h2>
        <p className='text-white font-light text-sm'>{data?.description} Setelah menyelesaikan perintisan jalur multi pitch ditebing lawe Banjarnegara, Jawa Tengah, Tim java andesit marathon bergeser ke tebing sepikul Jawa Timur</p>
        <a href="http://www.nature.org/new-wild/keep-hope-alive/" className="btn grit">
          Read More
        </a>
      </div>
    </motion.div>
  )
}

const HeroSlider = () => {
  const [currentData, setCurrentData] = useState<Display>(LIST[0])

  return (
    <div
      className={` banner relative flex items-end justify-center w-screen h-screen bg-cover`}
      style={{ backgroundImage: `url(${currentData.bgSrc})`, backgroundColor: 'rgba(11, 11, 11, 0.3)', backgroundRepeat: 'no-repeat', backgroundBlendMode: 'multiply' }}
    >
      <div className='w-screen h-2/3 flex items-center bg-black bg-opacity-5 bg-blur bg-gradient-to-t from-gray-900'>
        {/* TEXT SECTION */}
        <TextSection data={currentData} />
        {/* SLIDER SECTION */}
        <div className='w-2/3 h-auto -mr-32 bg-transparent'>
          <SwiperCarousel setCurrentData={setCurrentData} data={LIST} />
        </div>
      </div>
    </div>
  )
}

export default HeroSlider