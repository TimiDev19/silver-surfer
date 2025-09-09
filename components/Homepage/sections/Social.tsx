import Link from 'next/link'
import React from 'react'
import elon from "@/assets/elon.jpg"
import Image from 'next/image'
import tw1 from "@/assets/tweet1.jpg"
import tik1 from "@/assets/tik1.jpg"
import tik2 from "@/assets/tik2.jpg"
import tw2 from "@/assets/tweet2.jpg"
import tw3 from "@/assets/tweet3.jpg"
import tw4 from "@/assets/tweet4.jpg"

const Social = () => {
    return (
        <div id='social' className=' flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-[100vh] w-[100vw] bg-black px-[2%]'>
            <div className=' w-[95%] lg:w-[30%] flex-col items-center justify-center'>
                <Link href={"https://x.com/RoundtableSpace/status/1964535345573171583"} target='blank' className=' mb-[10px] block'>
                    <Image
                        src={tw1}
                        alt=''
                        className=' rounded-md hover:border-2 hover:border-green-500 duration-500'
                    />
                </Link>

                <Link href={"https://www.tiktok.com/@lacy?lang=en"} target='blank' className=' mb-[10px] block'>
                    <Image
                        src={tik1}
                        alt=''
                        className=' rounded-md hover:border-2 hover:border-green-500 duration-500'
                    />
                </Link>

                <Link href={"https://x.com/Truthpolex/status/1962326086907281750"} target='blank' className=' mb-[10px] block'>
                    <Image
                        src={tw3}
                        alt=''
                        className=' rounded-md hover:border-2 hover:border-green-500 duration-500'
                    />
                </Link>
            </div>
            <div className=' w-[95%] lg:w-[30%] flex-col items-center justify-center'>
                <Link href={"https://x.com/elonmusk/status/1954788124799721672"} target='blank' className=' mb-[10px] block'>
                    <Image
                        src={elon}
                        alt=''
                        className=' rounded-md hover:border-2 hover:border-green-500 duration-500'
                    />
                </Link>
            </div>
            <div className=' w-[95%] lg:w-[30%] flex-col items-center justify-center'>
                <Link href={"https://www.tiktok.com/@marlon3lg?lang=en"} target='blank' className=' mb-[10px] block'>
                    <Image
                        src={tw2}
                        alt=''
                        className=' rounded-md hover:border-2 hover:border-green-500 duration-500'
                    />
                </Link>

                <Link href={"https://x.com/RoundtableSpace/status/1964535345573171583"} target='blank' className=' mb-[10px] block'>
                    <Image
                        src={tik2}
                        alt=''
                        className=' rounded-md hover:border-2 hover:border-green-500 duration-500'
                    />
                </Link>

                <Link href={"https://x.com/Steelmudfantasy/status/1811696621257916500"} target='blank' className=' mb-[10px] block'>
                    <Image
                        src={tw4}
                        alt=''
                        className=' rounded-md hover:border-2 hover:border-green-500 duration-500'
                    />
                </Link>
            </div>
        </div>
    )
}

export default Social