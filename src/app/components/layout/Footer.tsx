import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className="flex flex-row w-full h-32">
            <div className="basis-1/4 flex flex-col justify-start items-center space-y-1">
                <h1 className="pr-44 text-[20px]">Contact</h1>
                <h1 className="m-5 pl-20 text-[20px]">Stunning Black and White Street Map Wallpaper. Brilliant detail and premium quality.</h1>
            </div>
            <div className="basis-1/4 flex flex-col justify-center items-start">
                <h1 className="text-[20px]">+62 013423573453</h1>
                <h1 className="text-[20px]">tricora@admin.com</h1>
            </div>
            <div className="basis-1/2 flex justify-end items-center  space-x-5 pr-10">
                <Image src={'/images/fb.png'} alt="fb logo" width={20} height={50} />
                <Image src={'/images/ig.png'} alt="fb logo" width={20} height={50} />
                <Image src={'/images/twt.png'} alt="fb logo" width={20} height={50} />
                <Image src={'/images/yt.png'} alt="fb logo" width={20} height={50} />
            </div>
        </div>
    )
}

export default Footer