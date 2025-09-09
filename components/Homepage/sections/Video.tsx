import React from 'react'
import { Tektur } from 'next/font/google';
import Link from 'next/link';
import dex from '@/assets/dex-screener-seeklogo.png'
import telegram from "@/assets/telegram.png"
import x from "@/assets/x.webp"
import Image from 'next/image';
import FadeInFromBottom from '@/components/FadeInFromBottom';
import FadeInFromRight from '@/components/FadeInFromRight';
import FadeIn from '@/components/FadeIn';
import YouTubeEmbed from '@/components/YouTubeEmbed';

const tektur = Tektur({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const Video = () => {
    return (
        <div id='video' className=' min-h-[100vh] w-[100vw] bg-black flex flex-col items-center justify-center'>
            <h1 className="text-2xl font-bold mb-4">In-depth Explanation</h1>
            <div className=' w-[90%]'>
                <YouTubeEmbed videoId="uSiyxvlv_-g" />
            </div>
        </div>
    )
}

export default Video