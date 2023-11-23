import React from "react";
import Image from "next/image";

const ArticleList = () => {

    return (
        <main>
            {/* media screen for XS-MD */}
            <div className=" p-5 bg-[#F5F4F4] flex flex-col space-y-2">
                <h1 className=" text-black uppercase xs:text-xl xs:font-bold sm:text-2xl cursor-pointer">
                    read the path <span className="text-red-600">.</span>
                </h1>
                <div className="space-y-2 lg:hidden">
                    <section className="bg-white w-full ">
                        <Image src={'/images/manjat.png'} alt="article list photo" width={200} height={200} className="object-cover w-full cursor-pointer" />
                        <div className="p-3 space-y-0">
                            <h1 className="uppercase leading-none cursor-pointer xs:text-md xs:font-bold sm:text-lg md:text-2xl">
                                10 Tips Mendaki Gunung, Biar Pengalaman Aman dan Seru!
                            </h1>
                            <h2 className="text-gray-500 xs:text-sm sm:text-base md:text-lg">
                                Oct. 9, 2022 by  tvt
                            </h2>
                            <p className="text-slate-600 pt-3 xs:text-sm sm:text-base">
                                Setelah menyelesaikan perintisan jalur multi pitch ditebing lawe Banjarnegara, Jawa Tengah, Tim java andesit marathon bergeser ke tebing sepikul Jawa Timur. berangkat menggunakan mobil carteran dari teman Mapala Palmasti banjarnegara (Rhino), Sampai ditebing sepikul sekitar pukul 05.00 pagi.
                            </p>
                        </div>
                    </section>
                    <section className="bg-white">
                        {[1, 2, 3, 4, 5].map((item, index) =>
                            <article key={index} className="flex justify-between items-center p-4 space-y-3 space-x-3">
                                <div className="bg-red-400 w-auto">
                                    <Image src={'/images/manjat.png'} alt="photo list article" width={200} height={200} className="cursor-pointer" />
                                </div>
                                <div className="xs:space-y-1 sm:space-y-5">
                                    <h1 className="leading-none uppercase cursor-pointer font-semibold xs:text-base sm:text-lg">
                                        10 Tips Mendaki Gunung, Biar Pengalaman Aman dan Seru!
                                    </h1>
                                    <h2 className="text-slate-600 xs:text-sm sm:text-base">
                                        Oct. 9, 2022 by tvt
                                    </h2>
                                    <hr className="" />
                                </div>
                            </article>
                        )}
                    </section>
                </div>
            </div>


            {/* media screen for LG-2XL */}
            <div className="hidden bg-[#F5F4F4] lg:flex flex-row pb-7">
                <article className=" basis-5/6 pl-10">
                    <section className="bg-white w-full space-y-0 ">
                        <Image src={'/images/manjat.png'} alt="article list photo" width={200} height={300} className="object-cover h-96 w-full cursor-pointer" />
                        <h1 className="text-2xl pt-5 px-5 leading-none font-bold cursor-pointer">
                            10 Tips Mendaki Gunung, Biar Pengalaman Aman dan Seru!
                        </h1>
                        <h2 className="px-5 text-gray-500">
                            Oct. 9, 2022 by  tvt
                        </h2>
                        <p className="p-5 text-slate-600">
                            Setelah menyelesaikan perintisan jalur multi pitch ditebing lawe Banjarnegara, Jawa Tengah, Tim java andesit marathon bergeser ke tebing sepikul Jawa Timur. berangkat menggunakan mobil carteran dari teman Mapala Palmasti banjarnegara (Rhino), Sampai ditebing sepikul sekitar pukul 05.00 pagi.
                        </p>
                    </section>
                </article>
                <article className="bg-[#F5F4F4] basis-1/2 px-10 ">
                    {[1, 2, 3, 4, 5].map((item,index) =>
                    <section key={index} className="bg-white p-5 space-y-3">
                        <h1 className="text-lg rounded-none font-semibold cursor-pointer">
                            10 Tips Mendaki Gunung, Biar Pengalaman Aman dan Seru!
                        </h1>
                        <h2 className="text-base text-gray-500">
                           Oct. 9, 2022 by  tvt 
                        </h2>
                        <hr />
                    </section>
                    )}
                </article>
            </div>
        </main>
    )
}

export default ArticleList