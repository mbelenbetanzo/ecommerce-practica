import React from 'react'
import MercadoLibreButton from './Button'

const Carri = () => {
  return (
    <section className='flex flex-col items-center justify-between w-[90%] mx-auto bg-[#d8c246] h-auto rounded-lg p-4 lg:flex-row lg:h-[70px] lg:space-y-0 lg:space-x-4'>
    <img src="{}" alt="{}" className="w-16 h-16" />
    <h2 className="text-center lg:text-left text-black">Título</h2>
    <MercadoLibreButton />
    <h2 className="text-center lg:text-left text-black"></h2>
    <button className="text-black hover:text-red-700">Eliminar</button>
</section>
  )
}

export default Carri
