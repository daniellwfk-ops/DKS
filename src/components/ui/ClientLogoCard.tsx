/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

interface Props {
    name: string;
    image?: string;
    colorful?: boolean;
}

export default function ClientLogoCard({ name, image, colorful }: Props) {
    const [imgFailed, setImgFailed] = useState(false);

    return (
        <div className={`flex-shrink-0 w-[100px] h-[100px] rounded-full border border-[#333333] flex items-center justify-center transition-all duration-300 overflow-hidden ${colorful ? "opacity-90 hover:opacity-100" : "bg-white/[0.03] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:bg-white/[0.08]"}`}>
            {image && !imgFailed ? (
                <img
                    src={image}
                    alt={name}
                    width={100}
                    height={100}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                    onError={() => setImgFailed(true)}
                />
            ) : (
                <span className="text-[#CFCFCF] font-bold text-[9px] md:text-[10px] text-center px-3 leading-tight whitespace-normal uppercase tracking-wide">
                    {name}
                </span>
            )}
        </div>
    );
}
