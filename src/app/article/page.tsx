import React from "react";
import Image from "next/image";

const ArticleDetailPage = () => {
    return (
        <main className="p-10 space-y-14">
            <div className="flex flex-row">
                <div className="bg-[#F92424] my-2 basis-24 h-20 flex justify-center items-center rounded-md mx-3 text-[42px] text-white font-semibold ">
                    01
                </div>
                <div className=" basis-2/4 ">
                    <h1 className="w-full font-semibold text-[60px] leading-none">EXPEDISI JAVA <tr></tr> ANDESIT MARATHON <tr></tr> 2023</h1>
                    <section className="w-full py-10 text-[22px] space-y-10">
                        <p>
                            Setelah menyelesaikan perintisan jalur multi pitch ditebing lawe Banjarnegara, Jawa Tengah, Tim java andesit marathon bergeser ke tebing sepikul Jawa Timur. berangkat menggunakan mobil carteran dari teman Mapala Palmasti banjarnegara (Rhino). Setelah menyelesaikan perintisan jalur multi pitch ditebing lawe Banjarnegara, Jawa Tengah, Tim java andesit marathon bergeser ke tebing sepikul Jawa Timur. berangkat menggunakan mobil carteran dari teman Mapala Palmasti banjarnegara (Rhino).
                        </p>
                        <p>
                            Setelah menyelesaikan perintisan jalur multi pitch ditebing lawe Banjarnegara, Jawa Tengah, Tim java andesit marathon bergeser ke tebing sepikul Jawa Timur. berangkat menggunakan mobil carteran dari teman Mapala Palmasti banjarnegara (Rhino).
                        </p>
                    </section>

                </div>
                <div className=" basis-2/4 w-full flex justify-center">
                    <Image src={'/images/article-1.jpeg'} alt="climbing" width={621} height={621} className="h-[621px] w-[621px] object-cover shadow-md shadow-black" />
                </div>
            </div>
            <div className="bg-red-500 flex flex-row">
                <div className="bg-green-500 basis-24">1</div>
                <div className="bg-slate-700 basis-full">2</div>
            </div>

        </main>
    )
}

export default ArticleDetailPage