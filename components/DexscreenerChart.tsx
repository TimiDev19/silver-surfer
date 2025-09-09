// components/DexscreenerChart.tsx
"use client";

import React from "react";

type DexscreenerChartProps = {
    pairUrl: string;
    height?: string;
    width?: string;
};

export default function DexscreenerChart({
    pairUrl,
    height = "600",
    width = "100%",
}: DexscreenerChartProps) {
    return (
        <>
            <iframe
                src={`${pairUrl}?embed=1&theme=dark`}
                height={height}
                width={width}
                style={{ border: "0", borderRadius: "12px" }}
                allowFullScreen
            />
            <div className=" text-white/75 text-center text-sm">
                <h1 className=" font-bold">Community-driven token launched on pump.fun</h1>
                <p className=" text-center">Not affiliated with Marvel/Disney. Independent commpunity project</p>
            </div>
        </>
    );
}
