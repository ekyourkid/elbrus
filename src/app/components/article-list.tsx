import React from "react";
import Image from "next/image";

const ArticleList = () => {

    return (
        <div>
            <div className="p-5 lg:px-20 pb-10 bg-gray-200">
                <h1 className="text-black uppercase text-2xl xs:font-bold sm:text-3xl md:text-3xl cursor-pointer my-8">
                    read the path <span className="text-red-600">.</span>
                </h1>
                <div className="flex flex-col lg:flex-row justify-between items-start space-y-3 lg:space-y-0 lg:space-x-10 overflow-hidden">
                    <section className="bg-white w-full lg:w-4/6 h-min p-5">
                        <Image src={'/images/manjat.png'} alt="article list photo" width={200} height={200} className="object-cover w-full h-[414px] cursor-pointer" />
                        <div className="py-5 space-y-0">
                            <h1 className="uppercase leading-none cursor-pointer xs:text-2xl xs:font-bold sm:text-3xl md:text-2xl">
                                10 Tips Mendaki Gunung, Biar Pengalaman Aman dan Seru!
                            </h1>
                            <h2 className="text-gray-500 xs:text-md sm:text-base md:text-lg">
                                Oct. 9, 2022 by  tvt
                            </h2>
                            <p className="text-slate-600 pt-3 xs:text-md sm:text-base">
                                Setelah menyelesaikan perintisan jalur multi pitch ditebing lawe Banjarnegara, Jawa Tengah, Tim java andesit marathon bergeser ke tebing sepikul Jawa Timur. berangkat menggunakan mobil carteran dari teman Mapala Palmasti banjarnegara (Rhino), Sampai ditebing sepikul sekitar pukul 05.00 pagi.
                            </p>
                        </div>
                    </section>
                    <section className="grid grid-cols-1 gap-y-5 bg-white p-5">
                        {[1, 2, 3, 4].map((item, index) =>
                            <article key={index} className="flex justify-between items-start space-x-4">
                                <div className="bg-red-400 w-auto">
                                    <Image src={'/images/manjat.png'} alt="photo list article" width={150} height={150} className="cursor-pointer" />
                                </div>
                                <div className="w-full" >
                                    <h1 className="leading-none uppercase cursor-pointer font-semibold xs:text-base sm:text-lg line-clamp-3">
                                        10 Tips Mendaki Gunung, Biar Pengalaman Aman dan Seru!
                                    </h1>
                                    <h2 className="text-slate-600 xs:text-sm sm:text-base">
                                        Oct. 9, 2022 by tvt
                                    </h2>
                                </div>
                            </article>
                        )}
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ArticleList