import { Tektur } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Logo from "@/assets/logo.jpg"
import AboutImage from "@/assets/about.jpg"
import FadeInFromBottom from '@/components/FadeInFromBottom';
import InfiniteCarousel from '@/components/InfiniteCarousel';

const tektur = Tektur({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const About = () => {
    return (
        <section
            id='about'
            className=' text-white bg-black lg:h-[100vh] pt-[100px] w-screen flex flex-col items-center justify-center px-5 lg:px-[20px]'
        >
            <div className={tektur.className}>
                <Link href={"/#home"} className=' flex items-center justify-center mb-5'>
                    <Image
                        src={Logo}
                        alt='$SLVR LOGO'
                        className=' h-[80px] w-[80px] rounded-full border border-[#ffffff1a]'
                    />
                    <h1 className={`mx-2 text-3xl`}>$SLVR</h1>
                </Link>
            </div>

            <FadeInFromBottom>
                <h1 className=' text-3xl lg:text-4xl font-extrabold font-sans mb-4 text-center'>SILVER SURFER IS HERE.</h1>
                <div className=' lg:w-[50%] text-center lg:text-xl text-md mx-auto mb-5'>
                    <p className={tektur.className}>
                        He's the cosmic sentinel of freedom, a lone rider who surfs the endless oceans of the universe on a silver board that cuts through light itself. 
                        His body shines like liquid metal, reflecting the stars as he moves faster than thought, carrying the weight of glaxies in his silence. The  Surfer isn't just powerful, he's poetry in motion, a messanger of both doom and hope, haunted by sacrifice yet guided by an unshakable moral compass.
                    </p>
                </div>
                <Link href={'https://dexscreener.com/solana/cms8lpbnl5aqwjxka8sozfndza96ivugdkxegst7sjja'}
                target='blank'
                    className=' mb-5 w-fit mx-auto p-2 border border-white rounded-lg flex items-center justify-center font-extrabold bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700'
                >
                    <span className='mx-2 swipe-card'>💳</span>
                    Buy Now
                </Link>
                <InfiniteCarousel/>
            </FadeInFromBottom>
            {/* <Image
                src={AboutImage}
                alt=''
                className=' w-[50%]'
            /> */}
        </section>
    )
}

export default About