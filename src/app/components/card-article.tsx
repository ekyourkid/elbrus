import React from "react";
import Image from "next/image";

interface IPropsCardArticle {
    item: any
}
const CardArticle: React.FC<IPropsCardArticle> = ({ item }) => {
    return (
        <article key={item} className="bg-white w-full md:w-11/12 h-auto  aspect-square" >
            <Image src={''} alt="card-photo" width={300} height={300} className="w-full object-cover cursor-pointer bg-gray-300 aspect-square" />
            <h1 className="w-full leading-none text-md font-semibold cursor-pointer uppercase line-clamp-3 mt-2 p-2">
                EXPEDISI JAVA ANDESIT MARATHON 2023
            </h1>
        </article>
    )
}

export default CardArticle