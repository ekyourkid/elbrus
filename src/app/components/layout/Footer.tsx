import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-delima-primary border-t border-gray-200 text-white">
            <div className="mx-auto w-full max-w-screen-xl p-5 md:px-20 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="md:w-4/6 mb-4 md:mb-0 flex flex-col items-start justify-around">
                        <Image className='my-5' src={'/assets/images/delima-text-white.svg'} alt='delima' width={60} height={60} />
                        <p className="text-xs">
                            Jl. Jend. Sudirman Kav 44-46 <br />
                            Kota Jakarta Pusat,<br />
                            DKI Jakarta 10210<br />

                        </p>
                        <p className="text-xs mt-2">
                            1500017 <br />
                            callbri@bri.co.id
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        <div>
                            <h2 className="mb-4 text-md font-semibold">Legal</h2>
                            <ul >
                                <li>
                                    <p>Kebijakan Privasi</p>
                                </li>
                                <li>
                                    <p>Syarat dan Ketentuan Umum</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-md font-semibold">Pusat Bantuan</h2>
                            <ul >
                                <li>
                                    <p>FAQ</p>
                                </li>
                                <li>
                                    <p>Bantuan</p>
                                </li>
                                <li>
                                    <p>Hubungi Kami</p>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-md font-semibold">Tentang Delima</h2>
                            <ul >
                                <li>
                                    <p>Profil Delima</p>
                                </li>
                            </ul>
                        </div>
                        <div className='justify-end'>
                            <Image src={'/assets/images/bri-white.svg'} alt='Bank Rakyat Indonesia (BRI)' width={60} height={60} />
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-2 border-gray-200 sm:mx-auto" />
            <span className="block text-sm  text-white text-center p-2"> © 2023 PT.Bank Rakyat Indonesia (Persero) Tbk. | All Rights Reserved.</span>
        </footer>

    )
}

export default Footer