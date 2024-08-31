import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-{100%} h-auto overflow-hidden">
       <video
        src="/assets/2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-{100%} h-auto object-cover"
      />
    
      <Link href="/">
        <p className="px-4 py-2 text-white bg-black hover:bg-[#131212]">
          Volver a home🏠
        </p>
      </Link>
    </div>
  );
}