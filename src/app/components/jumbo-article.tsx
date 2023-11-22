import React from "react";
import Image from "next/image";

const JumboArticle = () => {
    return (
        <main className="bg-[#F5F4F4] flex flex-col-reverse md:flex-col-reverse lg:flex-row xl: justify-around p-5 md:p-10">
            <div className="basis-1/2 flex flex-col justify-start xs:space-y-5 lg:space-y-1">
                <h1 className="text-xl md:text-2xl w-40 xs:hidden sm:hidden md:hidden lg:block">ACTIVITY REPORT <span className="text-red-600">.</span></h1>
                <h2 className="w-full font-semibold text-xl sm:text-2xl md:text-3xl xl:text-4xl leading-none">EXPEDISI JAVA ANDESIT MARATHON 2023</h2>
                <p className="w-ful text-md text-slate-600">Setelah menyelesaikan perintisan jalur multi pitch ditebing lawe Banjarnegara, Jawa Tengah, Tim java andesit marathon bergeser ke tebing sepikul Jawa Timur. berangkat menggunakan mobil carteran dari teman Mapala Palmasti banjarnegara (Rhino), Sampai ditebing sepikul sekitar pukul 05.00 pagi. eky dan abi langsung mengurus perizinan dari kantor desa, kepolisian, puskesmas, dan (tni), sedangkan mas hafri stay di kaki tebing untuk menyiapkan camp darat. Pada etape ini Alvin Reggy Pratama(egi) bisa menemani kegiatan pemanjatan karna etape sebelumnya ia tidak bisa menemani karna ada urusan kerja.</p>
                <button className="w-44 h-10 bg-[#F92424] text-white font-semibold rounded-md">Read More</button>
            </div>
            <div className="">
                <h1 className="text-xl md:text-2xl w-40 mb-5 font-bold lg:hidden">ACTIVITY REPORT <span className="text-red-600">.</span></h1>
                <Image src={'/images/manjat.png'} alt="climbing" width={621} height={621} className="object-contain w-full " />
            </div>
        </main>
    )
}
export default JumboArticle