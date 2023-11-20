import React from "react";
import Image from "next/image";

const JumboArticle = () => {
    return (
        <div className="flex justify-center space-x-10  bg-[#F5F4F4]">
            <div className=" w-2/3 flex flex-col justify-start space-y-10 ">
                <h1 className="text-3xl font-semibold w-52">ACTIVITY REPORT <span className="text-red-600">.</span></h1>
                <h2 className="font-semibold text-[60px] leading-none w-2/3">EXPEDISI JAVA ANDESIT MARATHON 2023</h2>
                <p className="text-[22px]">Setelah menyelesaikan perintisan jalur multi pitch ditebing lawe Banjarnegara, Jawa Tengah, Tim java andesit marathon bergeser ke tebing sepikul Jawa Timur. berangkat menggunakan mobil carteran dari teman Mapala Palmasti banjarnegara (Rhino), Sampai ditebing sepikul sekitar pukul 05.00 pagi. eky dan abi langsung mengurus perizinan dari kantor desa, kepolisian, puskesmas, dan (tni), sedangkan mas hafri stay di kaki tebing untuk menyiapkan camp darat. Pada etape ini Alvin Reggy Pratama(egi) bisa menemani kegiatan pemanjatan karna etape sebelumnya ia tidak bisa menemani karna ada urusan kerja.</p>
                <button className="w-44 h-10 bg-[#F92424] text-white font-semibold rounded-md">Read More</button>
            </div>
            <div>
                <Image src={'/images/article-1.jpeg'} alt="climbing" width={621} height={621} className="h-[621px] w-[621px] object-cover shadow-md shadow-black" />
            </div>
        </div >
    )
}
export default JumboArticle