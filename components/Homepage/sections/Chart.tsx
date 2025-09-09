import DexscreenerChart from '@/components/DexscreenerChart'
import React from 'react'

const Chart = () => {
    return (
        <div id='chart' className=' min-h-[100vh] w-[100vw] bg-black flex flex-col items-center justify-center'>
            <h1 className="text-2xl font-bold mb-4">Live Memecoin Chart</h1>
            <div className=' w-[90%]'>
                <DexscreenerChart pairUrl="https://dexscreener.com/solana/218GvpbMt91iGnwxiAfhwP2dc9giBaKi25JLoUADpump" />
            </div>
        </div>
    )
}

export default Chart