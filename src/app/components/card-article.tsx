import React from "react";
import Image from "next/image";


const CardArticle = () => {
    return (
        <main className="bg-[#F5F4F4] p-5 grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full justify-items-center gap-5">
            {[1, 2, 3, 4].map((item, index) =>
                <article key={index} className="bg-white p-3 h-full">
                    <Image src={'/images/article-1.jpeg'} alt="card-photo" width={200} height={300} className="h-72 w-full object-cover" />
                    <h1 className=" w-full leading-none mt-3 text-md font-semibold">
                        EXPEDISI JAVA ANDESIT MARATHON 2023
                    </h1>
                </article>
            )}

        </main>
    )
}

export default CardArticle
// <div className="flex justify-between my-32">
//     <section className="flex flex-col w-[300px]">
//         <Image src={'/images/article-1.jpeg'} alt="arcticle photo" width={300} height={150} className="shadow-md shadow-black" />
//         <h1 className="py-3 font-semibold text-2xl">EXPEDISI JAVA ANDESIT MARATHON 2023</h1>
//     </section>
//     <section className="flex flex-col w-[300px]">
//         <Image src={'/images/article-1.jpeg'} alt="arcticle photo" width={300} height={150} className="shadow-md shadow-black" />
//         <h1 className="py-3 font-semibold text-2xl">EXPEDISI JAVA ANDESIT MARATHON 2023</h1>
//     </section>
//     <section className="flex flex-col w-[300px]">
//         <Image src={'/images/article-1.jpeg'} alt="arcticle photo" width={300} height={150} className="shadow-md shadow-black" />
//         <h1 className="py-3 font-semibold text-2xl">EXPEDISI JAVA ANDESIT MARATHON 2023</h1>
//     </section>
//     <section className="flex flex-col w-[300px]">
//         <Image src={'/images/article-1.jpeg'} alt="arcticle photo" width={300} height={150} className="shadow-md shadow-black" />
//         <h1 className="py-3 font-semibold text-2xl">EXPEDISI JAVA ANDESIT MARATHON 2023</h1>
//     </section>
// </div>