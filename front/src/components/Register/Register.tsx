'use client'

import React, { useState } from 'react';
import { IRegister } from "@/interfaces/Interfaces";
import { validateRegister } from '@/helpers/validateRegister';
import { IRegisterErrors } from '@/interfaces/Interfaces';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { register } from '@/helpers/auth.helper';
import Swal from 'sweetalert2';

const RegisterForm = () => {
  const router = useRouter();
  const initialState = {
    name: '',
    email: '',
    password: '',
    address: '',
    phone: ''
  }

  const [dataUser, setDataUser] = useState<IRegister>(initialState)
  const [errors, setErrors] = useState<IRegisterErrors>(initialState)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setDataUser({...dataUser, [name]: value})
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await register(dataUser)
      Swal.fire("Te registraste correctamente") 
      router.push("/login")
    } 

    catch (error: any) {
      throw new Error(error)
      
    }
    };

    useEffect(() => {
      const errors = validateRegister(dataUser)
      setErrors(errors)
     }, [dataUser])

    

     return (
      <div className="relative w-full h-[800px]">
        <video
          src="/assets/login2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
        >
          Your browser does not support the video tag.
        </video>
    
        <div className="absolute inset-0 flex items-center justify-center">
          <form onSubmit={handleSubmit} className="lg:w-[500px] p-8 bg-gray-900 bg-opacity-80 text-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Registrate acá</h2>
    
            <div className="mb-3">
              <label htmlFor="name" className="block mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={dataUser.name}
                onChange={handleChange}
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
                required
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
    
            <div className="mb-3">
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={dataUser.email}
                onChange={handleChange}
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
                required
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
    
            <div className="mb-3">
              <label htmlFor="password" className="block mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={dataUser.password}
                onChange={handleChange}
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
                required
              />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
    
            <div className="mb-3">
              <label htmlFor="address" className="block mb-1">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={dataUser.address}
                onChange={handleChange}
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
                required
              />
              {errors.address && <p className="text-red-500">{errors.address}</p>}
            </div>
    
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-1">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={dataUser.phone}
                onChange={handleChange}
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
                required
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </div>
    
            <button type="submit" disabled={!!errors.email} className="w-full p-2 bg-[#C4AC23] text-black rounded hover:bg-blue-700 transition-colors">
              Register
            </button>
          </form>
        </div>
      </div>
    );
    

};
export default RegisterForm;
