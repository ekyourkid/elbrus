import React from "react"

const CTABanner = () => {

    return (
        <main className="p-5 bg-center bg-no-repeat bg-cover rounded-2xl" style={{ backgroundImage: 'url(./images/event-1.jpg)' }}>
            <h1 className="px-3 text-white uppercase xs:text-xl xs:font-bold sm:text-2xl cursor-pointer">
                join <span className="text-red-600">.</span>
            </h1>

            {/* media screen for XS - MD */}
            <div className="lg:hidden text-white uppercase flex flex-col items-center xs:p-5 xs:space-y-3 xs:text-center">
                <h2 className="leading-none w-full xs:text-2xl sm:text-3xl xs:font-semibold">
                    TRICORA RECRUITMENT 2024
                </h2>
                <section className="flex w-full sm:w-1/2 justify-evenly ">
                    <button className="bg-[#EE5959] rounded-full p-1 w-full uppercase hover:bg-red-800">join tricora</button>
                </section>
            </div>

            {/* media screen for LG - 2XL */}
            <div className="hidden px-3 py-5 lg:flex justify-between items-center xs:hidden sm:hidden md:hidden">
                <div className=" w-1/2">
                    <h1 className="text-3xl w-72 font-bold text-white">
                    TRICORA RECRUITMENT 2024
                    </h1>
                </div>
                <div className="w-44 ">
                    <button className="bg-[#EE5959] p-2 w-full rounded-full uppercase font-bold text-white hover:bg-red-800"> join tricora</button>
                </div>
            </div>
        </main>
        )
    }
    
    export default CTABanner
    // <div className="flex justify-around items-center space-x-56 h-60 bg-center bg-no-repeat bg-cover rounded-2xl" style={{ backgroundImage: 'url(./images/event-1.jpg)' }} >
    //     <div className="flex flex-col justify-center space-y-5 m-10  w-80">
    //         <h1 className="text-[28px] font-semibold text-white leading-none">JOIN <span className="text-red-600">.</span></h1>
    //         <h1 className="text-[42px] font-semibold w-[500px] leading-none text-white">TRICORA RECRUITMENT  <tr></tr>2024</h1>
    //     </div>
    //     <button className="w-64 h-14 bg-[#EE5959] text-[22px] font-semibold text-white rounded-full">JOIN TRICORA</button>
    // </div>