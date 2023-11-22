import React from "react";
import Image from "next/image";


const CardArticle = () => {
    return (
        <main className="flex flex-row justify-around ">
            <div className="bg-red-400 basis-80">
                <Image src={'/images/article-1.jpeg'} alt="" width={250} height={100} className="object-cover" />
            </div>
            <div className="bg-red-400 basis-80">1</div>
            <div className="bg-red-400 basis-80">1</div>
            <div className="bg-red-400 basis-80">1</div>
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