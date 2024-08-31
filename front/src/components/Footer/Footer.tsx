
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black flex justify-between items-center h-[40px]   lg:h-[80px] p-8">

    <div className="flex items-center space-x-4">
      <img className="w-[30px]  lg:w-[45px] lg:h-[45px] lg:ml-4" src="/assets/logoredes1.svg" alt="instagram" />
      <img className="w-[30px]  lg:w-[45px] lg:h-[45px]" src="/assets/logoredes2.svg" alt="facebook" />
      <img className="w-[30px]  lg:w-[45px] lg:h-[45px]" src="/assets/logoredes3.svg" alt="twitter" />
    </div>
  
    <div className="flex lg:justify-center lg:items-center lg:ml-28">
      <img className=" h-[40px] lg:h-[80px]" src="/assets/KOMODO (1580 x 450 px) (80 x 80 px) (2).svg" alt="logo" />
    </div>
  
    <div className="hidden lg:flex lg:flex-col lg:items-end lg:mr-2">
  <h6 className="lg:text-[#C4AC23] lg:text-sm">
    📍Zona playa, Necochea
  </h6>
  <h6 className="lg:text-[#C4AC23] lg:text-sm">
    ✨2024 - Todos los derechos reservados
  </h6>
</div>
  </div>
  
  )
}

export default Footer
