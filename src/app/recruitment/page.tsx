'use client'

import Lottie from "lottie-react";
import MountainAnimation from '../../../public/animation/mountain-lottie.json'

const Recruitment = () => {
    return (
        <main className="relative w-screen min-h-screen overflow-hidden">
            <div
                style={{ backgroundImage: `url('/images/header-bg.svg')`, objectFit: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }}
                className="w-full h-80 z-0 fixed flex justify-center items-center overflow-hidden "
            >
                <Lottie
                    animationData={MountainAnimation}
                    className="md:mb-32"
                    loop={true}
                />
            </div>
            <div className="bg-white w-full absolute top-1/3  md:top-2/4 min-h-screen  z-10 p-5 md:p-40 md:py-10 overflow-hidden">
                <h2 className="font-semibold">Recruitment Form</h2>
                <form className="w-full h-full p-2 my-3 border rounded">
                    {/* DISINI DIKASIH INPUT NGE */}
                </form>
            </div>
        </main>
    )
}


export default Recruitment