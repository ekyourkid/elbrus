import React from "react";
import Image from "next/image";

const EventBanner = () => {
    return (
        <main className="p-8 lg:p-20 bg-center bg-no-repeat bg-cover mx-auto" style={{ backgroundImage: 'url(./images/event-1.jpg)' }} >
            <h1 className="text-white uppercase xs:text-3xl xs:font-bold sm:text-4xl cursor-pointer">
                event <span className="text-red-600">.</span>
            </h1>
            {/* media screen for XS - MD */}
            <div className="text-white uppercase flex flex-col items-center xs:p-5 xs:space-y-8 xs:text-center lg:hidden">
                <div className=" flex justify-center p-3  bg-white ">
                    <Image src={'/images/event-2.png'} alt="event photo" width={140} height={140} className="" />
                </div>
                <h2 className="leading-none w-full xs:text-3xl xs:font-semibold sm:text-2xl line-clamp-3 lg:hidden">
                    tricora adventure festival 2023
                </h2>
                <h3 className="leading-none  xs:text-md sm:text-lg line-clamp-6 lg:hidden">
                    EXPEDISI JAVA ANDESIT MARATHON 2023
                </h3>
                <section className="w-full flex justify-center text-lg space-x-3">
                    <button className="bg-[#F92424] rounded-sm p-4 px-10  hover:bg-red-800 cursor-pointer uppercase">Read More</button>
                    <button className="bg-[#464646] rounded-sm p-4 px-10 hover:bg-red-500 cursor-pointer uppercase">JOIN EVENT</button>
                </section>
            </div>
            {/* media screen for LG - 2XL */}
            <div className="hidden lg:flex flex-row">
                <div className=" text-white uppercase basis-11/12 py-12 space-y-7">
                    <h1 className="text-5xl font-bold w-1/2">
                        tricora adventure festival 2023
                    </h1>
                    <h2 className="text-xl w-full">
                        EXPEDISI JAVA ANDESIT MARATHON 2023
                    </h2>
                    <section className=" w-full flex justify-start space-x-7 text-lg">
                        <button className="bg-[#F92424] rounded-sm p-4 px-10  hover:bg-red-800 cursor-pointer">Read More</button>
                        <button className="bg-[#464646] rounded-sm p-4 px-10 hover:bg-red-500 cursor-pointer">JOIN EVENT</button>
                    </section>
                </div>
                <div className="basis-96 px-5 ">
                    <section className="bg-white p-2 flex justify-center">
                        <Image src={'/images/event-2.png'} alt="event photo" width={200} height={200} className="object-cover w-full" />
                    </section>
                </div>
            </div>
        </main>
    )
}

export default EventBanner