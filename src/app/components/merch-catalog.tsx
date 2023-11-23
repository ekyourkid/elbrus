import React from "react"
import Image from "next/image"

const MerchCatalog = () => {

    return (
        <main className="bg-[#F5F4F4]">
            <div className="p-5">
                <h1 className="uppercase text-xl lg:text-2xl font-bold cursor-pointer">
                    merch <span className="text-red-600">.</span>
                </h1>
            </div>
        <div className=" p-5 grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full justify-items-center gap-5">
            {[1, 2, 3, 4].map((item, index) =>
                <article key={index} className="bg-white p-3 h-full">
                    <Image src={'/images/article-1.jpeg'} alt="card-photo" width={200} height={300} className="h-72 w-full object-cover cursor-pointer" />
                    <h1 className=" w-full leading-none mt-3 text-md font-semibold cursor-pointer">
                        EXPEDISI JAVA ANDESIT MARATHON 2023
                    </h1>
                </article>
            )}
            </div>
        </main>

        // <div className="flex flex-col space-y-8">
        //     <h1 className="text-[28px] font-semibold">MERCH <span className="text-red-600">.</span></h1>
        //     <div className="flex justify-between my-32">
        //         <section className="flex flex-col w-[300px]">
        //             <Image src={'/images/merch-1.png'} alt="arcticle photo" width={300} height={150} className="shadow-md shadow-black" />
        //             <h1 className="py-3 font-semibold text-2xl">The North Face White Series</h1>
        //         </section>
        //         <section className="flex flex-col w-[300px]">
        //             <Image src={'/images/merch-1.png'} alt="arcticle photo" width={300} height={150} className="shadow-md shadow-black" />
        //             <h1 className="py-3 font-semibold text-2xl">The North Face White Series</h1>
        //         </section>
        //         <section className="flex flex-col w-[300px]">
        //             <Image src={'/images/merch-1.png'} alt="arcticle photo" width={300} height={150} className="shadow-md shadow-black" />
        //             <h1 className="py-3 font-semibold text-2xl">The North Face White Series</h1>
        //         </section>
        //         <section className="flex flex-col w-[300px]">
        //             <Image src={'/images/merch-1.png'} alt="arcticle photo" width={300} height={150} className="shadow-md shadow-black" />
        //             <h1 className="py-3 font-semibold text-2xl">The North Face White Series</h1>
        //         </section>
        //     </div>
        // </div>
    )
}

export default MerchCatalog