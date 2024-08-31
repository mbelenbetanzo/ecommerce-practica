'use client'

import React from 'react';

const MercadoLibreButton = () => {
    return (
        <div className="flex items-center border h-7 border-black rounded-lg p-1 w-24 md:w-32 lg:justify-around lg:w-30px text-sm md:text-base lg:text-lg">
            <button className="px-2 py-1 text-black hover:text-black text-xs md:text-sm lg:text-base">-</button>
            <span className="px-2 py-1 text-center text-black text-xs md:text-sm lg:text-base">1</span>
            <button className="px-2 py-1 text-black w-auto hover:text-blue-700 text-xs md:text-sm lg:text-base">+</button>
       </div>
    );
};

export default MercadoLibreButton;