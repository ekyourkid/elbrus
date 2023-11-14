'use client'
import React, { useEffect } from 'react'

interface IModalProps {
    title: string
    isOpen: boolean
    close: () => void
    children: React.ReactNode
    size?: 'sm' | 'md' | 'lg' | 'full'
    className?: string
}
const Modal: React.FC<IModalProps> = ({ title, isOpen, close, children, size = 'md', className }) => {
    useEffect(() => {
        document.body.style.overflow = 'unset';
        document.body.style.overflow = 'hidden';
    }, [])

    console.log(size)

    const sizes = {
        sm: 'w-1/3',
        md: 'w-2/5',
        lg: 'w-1/2',
        full: 'w-screen'
    }

    return (
        <div className={`${!isOpen && 'hidden'} fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-60 z-50 flex items-center overflow-hidden`}>
            <main id="content" role="main" className={`${sizes[size]} ${className} mx-auto p-6`}>
                <div className="bg-white rounded shadow-lg p-4 pt-3">
                    <div className='relative flex w-full justify-end'>
                        <svg onClick={() => close()} className='cursor-pointer' width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.75 5.25L5.25 18.75" stroke="#3E3E3E" strokeLinecap="round" stroke-linejoin="round" />
                            <path d="M18.75 18.75L5.25 5.25" stroke="#3E3E3E" strokeLinecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className="p-2">
                        <div className="text-center -mt-5 mb-5">
                            <h1 className="block text-lg font-bold text-gray-800">{title}</h1>
                        </div>
                        <div className="mt-5">
                            {children}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Modal