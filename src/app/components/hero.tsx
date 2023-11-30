'use client'

import React, { useEffect, useState } from 'react'
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
  { id: 5, title: 'K2 Expedition', label: 'Mini Session', imageSrc: '/images/bg-6.jpg', bgSrc: 'images/bg-6.jpg' },
]

const TextSection: React.FC<{ data: any }> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='w-full md:w-3/5 h-full flex flex-col space-y-5 m-0 md:ml-20'>
        <section className='flex justify-start items-center space-x-2'>
          <p className='grit bg-[#F92424] w-10 h-10 flex justify-center items-center font-bold text-2xl text-white'>0{data.id + 1}</p>
          <h1 className='font-base text-white uppercase'>{data?.label}</h1>
        </section>
        <h2 className='grit text-5xl md:text-[80px] font-bold text-white leading-[95%] uppercase'>{data?.title}</h2>
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
  const [playVideo, setPlayVideo] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => setPlayVideo(true), 5000);
  }, [currentData])

  return (
    <div className='relative h-screen overflow-hidden'>
      {playVideo &&
        <video
          id="background-video"
          className='banner transition-opacity duration-1000 ease-in opacity-100 lg:hidden'
          loop
          autoPlay
          muted
          style={{
            position: "relative",
            backgroundSize:'cover',
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            zIndex:10
          }}
        >
          <source src={`/video-${+currentData.id + 1}.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      }
      <div
        className={`absolute top-0 left-0 w-screen h-screen banner bg-cover flex flex-col justify-end items-end`}
        style={ { backgroundImage: `url(${currentData.bgSrc})`, backgroundColor: 'rgba(11, 11, 11, 0.3)', backgroundRepeat: 'no-repeat', backgroundBlendMode: 'multiply' }}
      >
        {/* MOBILE */}
        <div className='z-20 lg:hidden h-auto p-10 px-8 w-full flex justify-end items-end space-y-10 flex-col md:flex-row md:justify-start  bg-black bg-opacity-5 bg-blur bg-gradient-to-t from-gray-900'>
          <SwiperCarousel setCurrentData={setCurrentData} data={LIST} slidePerView={1} cardVariant='label' setPlayVideo={setPlayVideo} />
        </div>
        {/* DESKTOP */}
        <div className='z-30 hidden lg:flex h-full w-full flex-col md:flex-row justify-end md:justify-start items-end md:pb-20 bg-black bg-opacity-5 bg-blur bg-gradient-to-t from-gray-900'>
          <TextSection data={currentData} />
          <div className='w-full md:w-2/3 h-auto md:-mr-32 bg-transparent mt-5'>
            <SwiperCarousel setCurrentData={setCurrentData} data={LIST} slidePerView={5} setPlayVideo={setPlayVideo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSlider