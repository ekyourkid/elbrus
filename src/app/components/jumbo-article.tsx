import React from "react";
import Image from "next/image";

const JumboArticle = () => {
    return (
        <div className="flex px-20 py-10 justify-between items-center space-x-20 bg-[#F5F4F4]">
            <div className="w-1/2 flex flex-col justify-start space-y-10">
                <h1 className="text-2xl font-semibold w-52">ACTIVITY REPORT <span className="text-red-600">.</span></h1>
                <h2 className="font-semibold text-4xl leading-none w-full">EXPEDISI JAVA ANDESIT MARATHON 2023</h2>
                <p className="w-full text-md text-gray-400">Setelah menyelesaikan perintisan jalur multi pitch ditebing lawe Banjarnegara, Jawa Tengah, Tim java andesit marathon bergeser ke tebing sepikul Jawa Timur. berangkat menggunakan mobil carteran dari teman Mapala Palmasti banjarnegara (Rhino), Sampai ditebing sepikul sekitar pukul 05.00 pagi. eky dan abi langsung mengurus perizinan dari kantor desa, kepolisian, puskesmas, dan (tni), sedangkan mas hafri stay di kaki tebing untuk menyiapkan camp darat. Pada etape ini Alvin Reggy Pratama(egi) bisa menemani kegiatan pemanjatan karna etape sebelumnya ia tidak bisa menemani karna ada urusan kerja.</p>
                <button className="w-44 h-10 bg-[#F92424] text-white font-semibold rounded-md">Read More</button>
            </div>
            <div>
                <Image src={'/images/manjat.png'} alt="climbing" width={621} height={621} className=" max-w-60  aspect-square object-cover shadow-md" />
            </div>
        </div >
    )
}
export default JumboArticle