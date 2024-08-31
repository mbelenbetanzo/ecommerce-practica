"use client"

import { IUserSession } from '@/interfaces/Interfaces'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const ProfileComponent = () => {

  const router = useRouter()

  const [userSession, setUsserSession] = useState<IUserSession>()

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession")
      if (userData) {
        setUsserSession(JSON.parse(userData))
      } else {
        router.push("/login")
      }
    }
  }, [router])

  useEffect(() => {
    if (userSession && !userSession.token) {
      router.push("/login")
    }
  }, [userSession, router])


  return (
    <div className="flex lg:h-[600px] lg:bg-gray-100 flex-col lg:flex-row">
  <div className="lg:w-1/4 lg:p-6 lg:h-[520px] bg-white shadow-lg w-full p-4 h-[400px]">
    <div className="text-center">
      <video
        src="/assets/perfil2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-[150px] lg:w-[150px]  h-auto object-cover mx-auto rounded-full bg-gray-300"
      /> 
      <h2 className="lg:mt-4 lg:text-xl lg:font-bold text-lg font-semibold text-gray-700 mt-4">
        ¡HOLA, {userSession?.user.name.toUpperCase()}!
      </h2>
    </div>
    <nav className="lg:mt-10 mt-6">
      <ul className="space-y-2 lg:text-lg text-sm">
        <li>
          <a href="#" className="flex items-center text-[#C4AC23] font-semibold">
            <span>👤Perfil</span>
          </a>
        </li>
        <li>
          <Link href="/dashboard/orders" className="flex items-center text-gray-700">
            <span>📦Mis pedidos</span>
          </Link>
        </li>
        <li>
          <a href="#" className="flex items-center text-gray-700">
            <span>💳Tarjetas De Crédito</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center text-gray-700">
            <span>💓Mis Favoritos</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center text-[#C4AC23]">
            <span>❌Cerrar sesion</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  
  <div className="lg:w-3/4 lg:p-6 lg:mt-10 p-4 mt-2">
    <h3 className="lg:text-2xl lg:font-bold mb-4 text-xl font-semibold">
      Perfil
    </h3>
    <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="text-gray-600">Nombre</h4>
          <p className="text-gray-800">{userSession?.user.name}</p>
        </div>
        <div>
          <h4 className="text-gray-600">Teléfono</h4>
          <p className="text-gray-800">{userSession?.user.phone}</p>
        </div>
        <div>
          <h4 className="text-gray-600">Email</h4>
          <p className="text-gray-800">{userSession?.user.email}</p>
        </div>
        <div>
          <h4 className="text-gray-600">DNI</h4>
          <p className="text-gray-800">No especificado</p>
        </div>
        <div>
          <h4 className="text-gray-600">Mi dirección de envío</h4>
          <p className="text-gray-800">{userSession?.user.address}</p>
        </div>
        <div>
          <h4 className="text-gray-600">Fecha de nacimiento</h4>
          <p className="text-gray-800">No especificado</p>
        </div>
      </div>
      <div className="text-right">
        <button className="px-4 py-2 bg-[#C4AC23] text-white rounded-md">EDITAR</button>
      </div>
    </div>
  </div>
</div>
  )
  
}

export default ProfileComponent

/* useEffect(() => {
    if(typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession")
      setUsserSession(JSON.parse(userData!))
    }
  }, [])

useEffect(() => {
  userSession?.token === undefined && router.push("/login")
}, [userSession?.token])

<div className='h-[1000px] bg-[#131212]  '>
      <h1 className='text-white mb-20 text-center p-20 text-[35px]'  > {userSession?.user.name.toUpperCase()}, estas en tu cuenta personal✅</h1>
      
      <div className='flex flex-row justify-center'>

      <div className='bg-slate-100 w-[300px] flex flex-col mr-10 justify-center text-center h-[300px] p-10 rounded-[25px]'>
      <h2>Mis datos de contacto</h2>
      <p>Direccion de envio: {userSession?.user.address}</p>
      <p>Telefono: {userSession?.user.phone}</p>
      <p>Direccion de correo electronico: {userSession?.user.email}</p>
      </div>

      <div className='h-[300px] flex flex-col justify-between'>
      <div className='w-auto bg-white h-auto p-6 rounded-[25px] '>
      <p>Mis ordenes</p>
      </div>

      <div className='w-auto bg-white h-auto p-6 rounded-[25px] '>
      <p>Editar mis datos</p>
      </div>

      <div className='w-auto bg-white h-auto p-6 rounded-[25px]'>
        <button>Cerrar sesion</button>
      </div>
      </div>
      </div>
    </div>






*/