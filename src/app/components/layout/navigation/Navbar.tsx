'use client'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import Button from '../../common/Button'
import Link from 'next/link'
import IconComponent from '../../common/Icons/IconList'
import DrawerComponent from './Drawer'
import { NAVIGATION_MENUS } from '../../utils/data'

const Navbar = () => {
    const [currentSection, setCurrentSection] = useState<string>('/')
    const [drawerVisibility, setDrawerVisibility] = useState<boolean>(false)
    const toogleDrawer = () => {
        setDrawerVisibility(!drawerVisibility)
    }

    const closeDrawer = useCallback(() => {
        setDrawerVisibility(false)
    }, [])

    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest('#drawer-navigation')) {
            setDrawerVisibility(false)
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <header className='fixed top-0 z-40 w-screen bg-white shadow-lg h-20 flex justify-between items-center p-5 md:px-12 cursor-pointer'>
            <DrawerComponent isOpen={drawerVisibility} close={closeDrawer} active={currentSection} setCurrentSection={setCurrentSection} />
            <Image src={'/assets/images/delima-logo.svg'} alt='delima' width={70} height={80} className='justify-self-start' />
            <ul className='hidden md:flex items-center space-x-10 justify-self-center'>
                {NAVIGATION_MENUS.map((item) =>
                    <li className={`font-semibold cursor-pointer hover:text-delima-primary ${currentSection === item.ref ? 'text-delima-primary' : 'text-delima-text-dark'}`} key={item.id}><Link href={item.ref} onClick={() => setCurrentSection(item.ref)}>{item.title}</Link></li>
                )}
            </ul>
            <section className='hidden justify-center space-x-5 items-center justify-self-end'>
                <Link href='/login'>
                    <Button
                        id='login-button'
                        variant='bordered'
                    >
                        Masuk
                    </Button>
                </Link>
                <Link href='/register'>
                    <Button
                        id='register-button'
                        variant='primary'
                    >
                        Registrasi
                    </Button>
                </Link>
            </section>
            <section className='flex md:hidden justify-center space-x-5 items-center justify-self-end'>
                <button onClick={() => toogleDrawer()} >
                    <IconComponent name={'burgerbar'} />
                </button>
            </section>
        </header >
    )
}

export default Navbar