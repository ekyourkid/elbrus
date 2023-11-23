import React from "react";
import Image from "next/image";

const EventBanner = () => {
    return (
        <main className="p-5 bg-center bg-no-repeat bg-cover " style={{ backgroundImage: 'url(./images/event-1.jpg)' }} >
            <h1 className="px-3 text-white uppercase xs:text-xl xs:font-bold sm:text-2xl cursor-pointer">
                event <span className="text-red-600">.</span>
            </h1>

            {/* media screen for XS - MD */}
            <div className="text-white uppercase flex flex-col items-center xs:p-5 xs:space-y-3 xs:text-center lg:hidden">
                <div className=" flex justify-center py-3 xs:w-72 sm:w-96 bg-white ">
                    <Image src={'/images/event-2.png'} alt="event photo" width={200} height={200} className="" />
                </div>
                <h2 className="leading-none w-full xs:text-xl xs:font-semibold sm:text-2xl lg:hidden">
                    tricora adventure festival 2023
                </h2>
                <h3 className="leading-none xs:pb-7 xs:text-md sm:text-lg lg:hidden">
                    EXPEDISI JAVA ANDESIT MARATHON 2023
                </h3>
                <section className="flex w-full justify-evenly lg:hidden">
                    <button className="bg-[#F92424] rounded-md p-1 w-32 hover:bg-red-800 cursor-pointer">Read More</button>
                    <button className="bg-[#464646] rounded-md p-1 w-32 hover:bg-red-500 cursor-pointer">JOIN EVENT</button>
                </section>
            </div>

                {/* media screen for LG - 2XL */}
            <div className="hidden px-3 lg:flex flex-row">
                <div className=" text-white uppercase basis-11/12 py-12 space-y-7">
                    <h1 className="text-3xl font-bold w-1/2">
                        tricora adventure festival 2023
                    </h1>
                    <h2 className="text-xl w-80">
                        EXPEDISI JAVA ANDESIT MARATHON 2023
                    </h2>
                    <section className=" w-80 flex justify-start space-x-7">
                        <button className="bg-[#F92424] rounded-sm p-1 w-32 hover:bg-red-800 cursor-pointer">Read More</button>
                        <button className="bg-[#464646] rounded-sm p-1 w-32 hover:bg-red-500 cursor-pointer">JOIN EVENT</button>
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

// <div div className = "flex justify-around space-x-56 h-96 bg-center bg-no-repeat bg-cover" style = {{ backgroundImage: 'url(./images/event-1.jpg)' }} >
//         <div className="flex flex-col justify-between m-10 pr-40">
//             <h1 className="text-[28px] font-semibold text-white">
//                 EVENT <span className="text-red-600">.</span>
//             </h1>
//             <h1 className="text-[42px] font-semibold w-[500px] leading-none text-white">
//                 TRICORA ADVENTURE FESTIVAL 2023
//             </h1>
//             <h1 className="text-[18px] font-semibold leading-none text-white">
//                 EXPEDISI JAVA ANDESIT MARATHON 2023
//             </h1>
//             <section className="flex justify-left space-x-5 ">
//                 <button className="w-40 h-10 bg-[#F92424] rounded-sm text-[17px] font-semibold text-white">
//                     Read More
//                 </button>
//                 <button className="w-40 h-10 bg-[#464646] rounded-sm text-[17px] font-semibold text-white">
//                     JOIN EVENT
//                 </button>
//             </section>

//         </div>
//         <div className="bg-white w-96 h-80 flex flex-col justify-center m-10">
//             <Image src={'/images/event-2.png'} alt="event photo" width={300} height={50} className="m-10" />
//         </div>
//     </div >