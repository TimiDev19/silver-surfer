"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import heroImg from "@/assets/snoop.png"
import { Tektur } from 'next/font/google';
import Link from 'next/link';
import dex from '@/assets/dex-screener-seeklogo.png'
import telegram from "@/assets/telegram.png"
import x from "@/assets/x.webp"
import { CopyAll } from '@mui/icons-material';
import FadeIn from '@/components/FadeIn';
import FadeInFromBottom from '@/components/FadeInFromBottom';
import FadeInFromRight from '@/components/FadeInFromRight';

const tektur = Tektur({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const Hero = () => {
    const [copied, setCopied] = useState(false);

    const textToCopy = `218GvpbMt91iGnwxiAfhwP2dc9giBaKi25JLoUADpump`;

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
            })
            .catch(err => {
                console.error("Failed to copy text: ", err);
            });
    };
    return (
        <div id='home' className='text-white animation-bg lg:h-[100vh] pt-[90px] w-screen flex flex-col items-center justify-start px-[20px]'>
            <div className=' h-[75%] w-full flex flex-col lg:flex-row items-end justify-between'>
                <div className=' lg:w-[50%] pb-[10px]'>
                    <FadeInFromBottom>
                        <div className={tektur.className}>
                            <div className=' font-extrabold uppercase font-sans'>
                                <h1 className=' text-4xl lg:text-5xl mb-3 text-white'>It's Silver Surfer Season</h1>
                                <div className=' p-2 rounded-lg bg-white text-black w-fit text-3xl lg:text-4xl mb-4'>
                                    <h1 className={tektur.className}>loneliest man in the universe!</h1>
                                </div>
                                <div className=' flex items-center justify-start'>
                                    <Link href="https://dexscreener.com/solana/cms8lpbnl5aqwjxka8sozfndza96ivugdkxegst7sjja"
                                        target='blank'
                                        className=' flex items-center justify-center h-[60px] lg:h-[80px] w-[60px] lg:w-[80px] rounded-full border-white border mx-2 bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700 hover:border-transparent'
                                    >
                                        <Image
                                            src={dex}
                                            alt=''
                                            className=' h-[50px] lg:h-[70px] w-[50px] lg:w-[70px] rounded-full'
                                        />
                                    </Link>
                                    <Link href="https://t.me/slvrsurfersol"
                                        target='blank'
                                        className=' flex items-center justify-center h-[60px] lg:h-[80px] w-[60px] lg:w-[80px] rounded-full border-white border mx-2 bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700 hover:border-transparent'
                                    >
                                        <Image
                                            src={telegram}
                                            alt=''
                                            className=' h-[50px] lg:h-[70px] w-[50px] lg:w-[70px] rounded-full'
                                        />
                                    </Link>
                                    <Link href="https://x.com/i/communities/1961562600598355987"
                                        target='blank'
                                        className=' flex items-center justify-center h-[60px] lg:h-[80px] w-[60px] lg:w-[80px] rounded-full border-white border mx-2 bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700 hover:border-transparent'
                                    >
                                        <Image
                                            src={x}
                                            alt=''
                                            className=' h-[50px] lg:h-[70px] w-[50px] lg:w-[70px] rounded-full'
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </FadeInFromBottom>
                </div>

                <div className=' lg:w-[40%]'>
                    <FadeIn>
                        <Image
                            src={heroImg}
                            alt=''
                            className=' w-full rounded-3xl'
                        />
                    </FadeIn>
                </div>
            </div>
            <FadeInFromRight>
                <div className=' flex items-center justify-end w-full'>
                    <div className=' bg-white lg:h-[100px] w-[97%] mx-auto lg:mx-0 lg:w-[75%] flex flex-col lg:flex-row items-center justify-between text-black p-4'>
                        <div className={tektur.className}>
                            <div onClick={handleCopy} className=' max-w-[90vw] lg:max-w-[30vw] flex flex-col items-center justify-center bg-transparent text-black py-1 w-[95%] lg:w-fit mx-auto lg:mx-0 px-4 rounded-md'>
                                <h1 className=" w-full truncate mr-4 cursor-pointer font-extrabold text-black break-words break-all overflow-wrap text-md md:text-xl text-center lg:text-3xl max-w-full">
                                    {textToCopy}
                                </h1>
                                <h1 className=' cursor-pointer'>{copied ? (<span className="text-black">Text copied to clipboard!</span>) : (<span><CopyAll /> Click to copy CA</span>)}</h1>
                                {/* {copied && <} */}
                            </div>
                        </div>

                        <div className=' lg:w-[45%] text-sm'>
                            <div className={tektur.className}>
                                Many ventures drift through the void only to consume your light and leave you adrift in darkness…but $SLVR rides a different current.
                                We are the heralds of change, gliding through the cosmic tide to restore balance and reclaim what is rightfully ours.
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInFromRight>
        </div>

    )
}

export default Hero