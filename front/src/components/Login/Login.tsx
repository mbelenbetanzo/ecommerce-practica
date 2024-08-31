'use client'

import { login } from '@/helpers/auth.helper'
import { validateLogin } from '@/helpers/validateLogin'
import { ILogin, ILoginError } from '@/interfaces/Interfaces'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import Link from 'next/link'

const Login = () => {
  const router = useRouter()
   const initialState = {email: '', password: ''}

const [dataUser, setDataUser] = useState<ILogin>(initialState);
const [errors, setErrors] = useState<ILoginError>(initialState)

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   const {name, value} = event.target;
   setDataUser({...dataUser, [name]: value})
};

const handleSubmit = async (event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault()
    try {
      const response = await login(dataUser)
      const {token, user} = response
      localStorage.setItem("userSession", JSON.stringify({token, user}))
      Swal.fire("Te logueaste correctamente") 
      router.push("/")
    } catch (error:any) {
      throw Error(error)
    }
    

}

useEffect(() => {
 const errors = validateLogin(dataUser)
 setErrors(errors)
}, [dataUser])

  return (
    
      <div className="relative w-full h-[500px]  flex items-center justify-center">
        
        <video
          src="/assets/login2.mp4" 
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover  w-full h-[500px]"
        >
          Your browser does not support the video tag.
        </video>
    
        
        <form 
          onSubmit={handleSubmit} 
          className="relative my-auto max-w-lg lg:ml-5 p-8 lg:mt-[50px] lg:h-[450px] lg:mb-[60px] bg-black bg-opacity-70 text-white rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6">Inicia sesión en Komodo</h2>
          <div className='mb-4'>
            <label className='block mb-2' htmlFor="email">Nombre de usuario:</label>
            <input 
              className='w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500' 
              id='email-adress' 
              type="text" 
              value={dataUser.email} 
              name="email" 
              placeholder="Ingresa tu email✅" 
              onChange={handleChange} 
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
    
          <div className='mb-4'>
            <label className='block mb-2' htmlFor="password">Contraseña:</label>
            <input 
              className='w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500' 
              type="password" 
              value={dataUser.password} 
              name="password" 
              placeholder="Ingresa tu contraseña😎" 
              onChange={handleChange} 
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
          </div>
    
          <div className=''>
            <button 
              type="submit" 
              disabled={!!errors.email} 
              className='w-full p-2 bg-[#C4AC23] rounded hover:bg-blue-700 transition-colors'
            >
              Ingresar
            </button>
          </div>
          <h2 className='text-center mt-3 lg:mt-5  mb-2'>Todavia no te registraste? </h2>
          <Link href={'/register'} className='bg-[#C4AC23] text-black rounded-lg px-2 py-1 text-center ml-[60px] lg:ml-[80px] mt-11 lg:mt-8'>Registrate acá</Link>
        </form>
      </div>
      
    );
    
}

export default Login