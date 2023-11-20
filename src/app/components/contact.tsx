import React from "react"
import Image from "next/image"

const Contact = () => {

    return (
        <div className="flex justify-around items-end h-screen bg-bottom bg-no-repeat bg-cover " style={{ backgroundImage: 'url(./images/maps-1.jpeg)' }}>
            <div className=" pt-96 pb-10 text-[90px] font-bold">Contact Us</div>
            <div className="bg-white pb-96 w-5/12 h-5/6 m-10 rounded-lg shadow-md shadow-black -space-y-10">
                <h1 className="m-12 text-[40px] font-medium"> Feedback From</h1>
                <section className=" m-14 flex flex-col space-y-20">
                    <h1 className="text-[30px]">Name</h1>
                    <h1 className="text-[30px]">E-mail</h1>
                    <h1 className="text-[30px]">Phone</h1>
                    <h1 className="text-[30px]">Message</h1>
                </section>
                <div className="flex justify-center">
                    <button className="w-10/12 h-14 mt-32 bg-[#423737] text-white font-semibold text-[22px]">SEND MESSAGE</button>
                </div>
            </div>
        </div>
    )
}

export default Contact