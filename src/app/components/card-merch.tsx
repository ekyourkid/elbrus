import React from "react";
import Image from "next/image";
import Link from "next/link";

type Merch = {
    id: number;
    title: string;
    desription?: string;
    price: number | string;
    image: string;
};

interface IPropsCardMerch {
    item: Merch;
}
const CardMerch: React.FC<IPropsCardMerch> = ({ item }) => {
    return (
        <article
            key={item.id}
            className="p-5 bg-white w-full md:w-11/12 lg:h-autp aspect-square"
        >
            <Image
                src={item.image}
                alt="card-photo"
                width={200}
                height={200}
                className="w-full object-cover cursor-pointeraspect-square"
            />
            <section className="text-center">
                <Link href={"/merch"}>
                    <h1 className="w-full leading-none text-lg font-semibold cursor-pointer uppercase line-clamp-3 ">
                        {item.title}
                    </h1>
                </Link>
                <h2 className="w-full leading-none text-md font-semibold cursor-pointer uppercase line-clamp-3 ">
                    Rp {item.price}
                </h2>
            </section>
        </article>
    );
};

export default CardMerch;
