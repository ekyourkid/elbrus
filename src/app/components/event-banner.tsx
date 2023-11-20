import React from "react";
import Image from "next/image";

const EventBanner = () => {
    return (
        <div className="flex justify-around space-x-56 h-96 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(./images/event-1.jpg)' }} >
            <div className="flex flex-col justify-between m-10 pr-40">
                <h1 className="text-[28px] font-semibold text-white">EVENT <span className="text-red-600">.</span></h1>
                <h1 className="text-[42px] font-semibold w-[500px] leading-none text-white">TRICORA <tr></tr>ADVENTURE FESTIVAL 2023</h1>
                <h1 className="text-[18px] font-semibold leading-none text-white">EXPEDISI JAVA ANDESIT <tr></tr> MARATHON 2023</h1>
                <section className="flex justify-left space-x-5 ">
                    <button className="w-40 h-10 bg-[#F92424] rounded-sm text-[17px] font-semibold text-white">Read More</button>
                    <button className="w-40 h-10 bg-[#464646] rounded-sm text-[17px] font-semibold text-white">JOIN EVENT</button>
                </section>

            </div>
            <div className="bg-white w-96 h-80 flex flex-col justify-center m-10">
                <Image src={'/images/event-2.png'} alt="event photo" width={300} height={50} className="m-10" />
            </div>
        </div>
    )
}

export default EventBanner