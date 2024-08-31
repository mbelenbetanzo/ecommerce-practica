'use client'

import { IUserSession } from '@/interfaces/Interfaces'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Navbar = () => {
  const [userSession, setUsserSession] = useState<IUserSession>()

useEffect(() => {
  if(typeof window !== "undefined" && window.localStorage) {
    const userData = localStorage.getItem("userSession")
    setUsserSession(JSON.parse(userData!))
  }
}, [])

return (
  <div className='bg-black flex justify-between items-center p-4 h-[60px] shadow-lg lg:h-[70px]'>

    <Link href={"/"} className=''>
      <img className=' w-[40px] lg:w-[60px]' src='/assets/KOMODO (1580 x 450 px) (80 x 80 px) (2).svg' alt="logo pequeño" />
    </Link>

    <nav className='flex justify-center items-center lg:space-x-20 ml-12'>
      <Link href="/" className='hidden lg:block lg:text-[18px] lg:text-[#C4AC23]'>HOME</Link>
      <img src='/assets/apple1.png' className='hidden lg:block lg:w-[35px] lg:h-[35px] lg:text-[18px] lg:text-[#C4AC23]' alt="apple logo"/>
      <Link href="/contactanos" className='hidden lg:block lg:text-[18px] lg:text-[#C4AC23]'>CONTACTO</Link>
    </nav>

    

    {
      (userSession && userSession.token!) ? (
        <div className=' flex flex-row items-center space-x-4'>
          <div className='content-center'>
            <Link href="/dashboard" className='text-[#C4AC23] text-sm flex flex-row items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 448 512">
                <path fill="#FFD43B" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
              </svg>
            </Link>
          </div>

          <Link href="/carrito" className='text-[#C4AC23] text-sm text-center'>
            <svg xmlns="http://www.w3.org/2000/svg" height="27" width="27" viewBox="0 0 576 512">
              <path fill="#FFD43B" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
            </svg> 
          </Link>
        </div>
      ) : (
        <Link href="/login" className='text-white bg-[#C4AC23] p-2 rounded-xl'>
          <p>SIGN IN</p>
        </Link>
      )
    }
  </div>
);

}

export default Navbar