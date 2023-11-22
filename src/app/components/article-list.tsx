import React from "react";
import Image from "next/image";

const ArticleList = () => {

    return (
        <div className="bg-[#F5F4F4] px-20 p-10 flex justify-between space-x-20">
            <div className=" w-7/12">
                <h1 className="text-2xl font-semibold pb-5">READ THE PATH <span className="text-red-600">.</span></h1>
                <Image src={'/images/path-1.jpeg'} alt="path" width={200} height={414} className="w-full h-96 object-cover shadow-sm shadow-black" />
                <section className="  w-11/12 max-h-32 -space-y-5">
                    <h1 className="text-[44px] font-semibold m-6 leading-none uppercase">10 Tips Mendaki Gunung, Biar Pengalaman Aman dan Seru!</h1>
                    <h2 className="text-[22px] m-6 text-gray-400">Oct. 9, 2022 by  tvt</h2>
                </section>
                <p className="text-[22px] m-6 w-full">Setelah menyelesaikan perintisan jalur multi pitch ditebing lawe Banjarnegara, Jawa Tengah, Tim java andesit marathon bergeser ke tebing sepikul Jawa Timur. berangkat menggunakan mobil carteran dari teman Mapala Palmasti banjarnegara (Rhino), Sampai ditebing sepikul sekitar pukul 05.00 pagi. </p>
            </div>
            <div className="flex flex-col -space-y-24 w-2/5">
                <div className="py-16 space-y-1">
                    <h1 className="text-[24px] font-semibold leading-none uppercase">10 Tips Mendaki Gunung, Biar Pengalaman Aman dan Seru!</h1>
                    <h2 className="text-[22px] text-gray-400">Oct. 9, 2022 by  tvt</h2>
                    <hr className="h-[1px] w-full bg-gray-600" />
                </div>
                <div className="py-16 space-y-1">
                    <h1 className="text-[24px] font-semibold leading-none uppercase ">10 Tips Mendaki Gunung, Biar Pengalaman Aman dan Seru!</h1>
                    <h2 className="text-[22px] text-gray-400">Oct. 9, 2022 by  tvt</h2>
                    <hr className="h-[1px] w-full bg-gray-600" />
                </div>
                <div className="py-16 space-y-1">
                    <h1 className="text-[24px] font-semibold leading-none uppercase">10 Tips Mendaki Gunung, Biar Pengalaman Aman dan Seru!</h1>
                    <h2 className="text-[22px] text-gray-400">Oct. 9, 2022 by  tvt</h2>
                    <hr className="h-[1px] w-full bg-gray-600" />
                </div>
                <div className="py-16 space-y-1">
                    <h1 className="text-[24px] font-semibold leading-none uppercase">10 Tips Mendaki Gunung, Biar Pengalaman Aman dan Seru!</h1>
                    <h2 className="text-[22px] text-gray-400">Oct. 9, 2022 by  tvt</h2>
                    <hr className="h-[1px] w-full bg-gray-600" />
                </div>
            </div>
        </div>
    )
}

export default ArticleList
