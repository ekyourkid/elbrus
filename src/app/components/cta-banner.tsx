import React from "react"
import Image from "next/image"

const CTABanner = () => {

    return (
        <div className="flex justify-around items-center space-x-56 h-60 bg-center bg-no-repeat bg-cover rounded-2xl" style={{ backgroundImage: 'url(./images/event-1.jpg)' }} >
            <div className="flex flex-col justify-center space-y-5 m-10  w-80">
                <h1 className="text-[28px] font-semibold text-white leading-none">JOIN <span className="text-red-600">.</span></h1>
                <h1 className="text-[42px] font-semibold w-[500px] leading-none text-white">TRICORA RECRUITMENT  <tr></tr>2024</h1>
            </div>
            <button className="w-64 h-14 bg-[#EE5959] text-[22px] font-semibold text-white rounded-full">JOIN TRICORA</button>
        </div>

    )
}

export default CTABanner