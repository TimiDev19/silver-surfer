"use client";
import React, { useState } from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import Logo from "@/assets/logo.jpg"
import Link from 'next/link';
import { Tektur } from 'next/font/google';
import FadeIn from './FadeIn';
import Sidebar from './Sidebar';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import x from "@/assets/x.webp"
import dex from '@/assets/dex-screener-seeklogo.png'
import telegram from "@/assets/telegram.png"

const tektur = Tektur({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div
            className=' text-white fixed z-50 h-[90px] bg-transparent w-screen bottom-shadow'
        >
            <div className=' hidden lg:block'>
                <FadeIn>
                    <div
                        className=' w-full h-full flex items-center justify-between px-5'
                    >
                        <div className=' w-[30%] flex items-center justify-start'>
                            <div className={tektur.className}>
                                <Link href={"/#home"} className=' flex items-center justify-center'>
                                    <Image
                                        src={Logo}
                                        alt='$SKINNY LOGO'
                                        className=' h-[70px] w-[70px] rounded-full border border-[#ffffff1a]'
                                    />
                                    {/* <h1 className={`mx-2 text-3xl`}>SILVER SURFER</h1> */}
                                </Link>
                            </div>
                        </div>

                        <div className=' w-fit flex items-center justify-center'>
                            <div className={tektur.className}>
                                <div className={'flex items-center justify-center'}>
                                    <nav className="space-x-4">
                                        <Link
                                            href="/#home"
                                            className="relative group"
                                        >
                                            Home
                                            <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </Link>
                                        <Link
                                            href="/#about"
                                            className="relative group"
                                        >
                                            About
                                            <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </Link>
                                        <Link
                                            href="/#chart"
                                            className="relative group"
                                        >
                                            Chart
                                            <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </Link>
                                        <Link
                                            href="/#video"
                                            className="relative group"
                                        >
                                            Video
                                            <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </Link>
                                        <Link
                                            href="/#social"
                                            className="relative group"
                                        >
                                            Social
                                            <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </Link>
                                        {/* <Link
                                            href="#"
                                            className="relative group"
                                        >
                                            Roadmap
                                            <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </Link> */}
                                    </nav>

                                </div>
                            </div>
                        </div>

                        {/*  */}
                    </div>
                </FadeIn>
            </div>

            <div className='block lg:hidden'>
                <FadeIn>
                    <div
                        className=' w-full h-[90px] flex items-center justify-between px-2'
                    >
                        <div className=' h-full flex items-center justify-center'>
                            <div className={tektur.className}>
                                <Link href={"/#home"} className=' h-full flex items-center justify-center'>
                                    <Image
                                        src={Logo}
                                        alt='$SLVR LOGO'
                                        className=' h-[50px] w-[50px] rounded-full border border-[#ffffff1a]'
                                    />
                                    {/* <h1 className={`mx-2 text-3xl`}>SKINNY</h1> */}
                                </Link>
                            </div>
                        </div>


                        {/* elegram */}
                       

                        <button
                            onClick={toggleSidebar}
                            style={{ margin: '0px', padding: '10px', cursor: 'pointer' }}
                        >
                            {isOpen ? <CloseOutlinedIcon className='text-4xl text-white cursor-pointer' /> : <MenuOutlinedIcon className=' height-[400px] text-4xl text-white cursor-pointer' />}
                        </button>

                        {/* Sidebar motion component */}
                        <motion.div
                            initial={{ width: 0 }} // Initial width of sidebar when closed
                            animate={{ width: isOpen ? "100vw" : 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                duration: 0.5,
                            }} // Smooth transition
                            style={{
                                height: "100vh",
                                backgroundColor: "",
                                color: "black",
                                overflow: "hidden",
                                position: "fixed",
                                top: 0,
                                left: 0,
                            }}
                            className=' shadow-md shadow-black bg-black navbar-bg text-white'
                        >
                            {/* Sidebar content */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isOpen ? 1 : 0 }}
                                transition={{ delay: 0.2 }}
                                style={{ padding: "20px" }}
                            >
                                <div className={tektur.className}>
                                    <div className=' flex w-full items-center justify-between mb-8'>
                                        <h3 className=' text-xl text-white font-bold'>$SLVR</h3>
                                        <button
                                            onClick={toggleSidebar}
                                            style={{ margin: '0px', padding: '10px', cursor: 'pointer' }}
                                        >
                                            {isOpen ? <CloseOutlinedIcon className='text-3xl text-white' /> : " "}
                                        </button>
                                    </div>
                                </div>
                                <div className={tektur.className}>
                                    <ul style={{ listStyle: "none", padding: 0 }}>
                                        <Link
                                            href="/#home"
                                            className="relative group text-white block w-fit mb-4 text-3xl"
                                            onClick={toggleSidebar}
                                        >
                                            Home
                                            <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </Link>
                                        <Link
                                            href="/#about"
                                            className="relative group text-white block w-fit mb-4 text-3xl"
                                            onClick={toggleSidebar}
                                        >
                                            About
                                            <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </Link>
                                        <Link
                                            href="/#chart"
                                            className="relative group text-white block w-fit mb-4 text-3xl"
                                            onClick={toggleSidebar}
                                        >
                                            Chart
                                            <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </Link>
                                        <Link
                                            href="/#video"
                                            className="relative group text-white block w-fit mb-4 text-3xl"
                                            onClick={toggleSidebar}
                                        >
                                            Video
                                            <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </Link>
                                        <Link
                                            href="/#social"
                                            className="relative group text-white block w-fit mb-4 text-3xl"
                                            onClick={toggleSidebar}
                                        >
                                            Social
                                            <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </Link>
                                        {/* <Link
                                            href="#"
                                            className="relative group text-white block w-fit mb-4 text-3xl"
                                            onClick={toggleSidebar}
                                        >
                                            Roadmap
                                            <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                        </Link> */}
                                        <div className=" w-full flex items-center justify-between mt-6">
                                            <Link href="https://dexscreener.com/solana/cms8lpbnl5aqwjxka8sozfndza96ivugdkxegst7sjja"
                                                target='blank'
                                                className=' flex items-center justify-center h-[80px] w-[80px] rounded-full border-white border mx-2 bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700 hover:border-transparent'
                                            >
                                                <Image
                                                    src={dex}
                                                    alt=''
                                                    className=' h-[70px] w-[70px] rounded-full'
                                                />
                                            </Link>
                                            <Link href="https://t.me/slvrsurfersol"
                                                target='blank'
                                                className=' flex items-center justify-center h-[80px] w-[80px] rounded-full border-white border mx-2 bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700 hover:border-transparent'
                                            >
                                                <Image
                                                    src={telegram}
                                                    alt=''
                                                    className=' h-[70px] w-[70px] rounded-full'
                                                />
                                            </Link>
                                            <Link href="https://x.com/i/communities/1961562600598355987"
                                                target='blank'
                                                className=' flex items-center justify-center h-[80px] w-[80px] rounded-full border-white border mx-2 bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700 hover:border-transparent'
                                            >
                                                <Image
                                                    src={x}
                                                    alt=''
                                                    className=' h-[70px] w-[70px] rounded-full'
                                                />
                                            </Link>
                                        </div>
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </FadeIn >
            </div>
        </div >
    )
}

export default Navbar