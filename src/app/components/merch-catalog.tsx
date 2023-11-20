import React from "react"
import Image from "next/image"

const MerchCatalog = () => {

    return (
        <div className="flex flex-col space-y-8">
            <h1 className="text-[28px] font-semibold">MERCH <span className="text-red-600">.</span></h1>
            <div className="flex justify-between my-32">
                <section className="flex flex-col w-[300px]">
                    <Image src={'/images/merch-1.png'} alt="arcticle photo" width={300} height={150} className="shadow-md shadow-black" />
                    <h1 className="py-3 font-semibold text-2xl">The North Face White Series</h1>
                </section>
                <section className="flex flex-col w-[300px]">
                    <Image src={'/images/merch-1.png'} alt="arcticle photo" width={300} height={150} className="shadow-md shadow-black" />
                    <h1 className="py-3 font-semibold text-2xl">The North Face White Series</h1>
                </section>
                <section className="flex flex-col w-[300px]">
                    <Image src={'/images/merch-1.png'} alt="arcticle photo" width={300} height={150} className="shadow-md shadow-black" />
                    <h1 className="py-3 font-semibold text-2xl">The North Face White Series</h1>
                </section>
                <section className="flex flex-col w-[300px]">
                    <Image src={'/images/merch-1.png'} alt="arcticle photo" width={300} height={150} className="shadow-md shadow-black" />
                    <h1 className="py-3 font-semibold text-2xl">The North Face White Series</h1>
                </section>
            </div>
        </div>
    )
}

export default MerchCatalog