
import { IProducts } from "@/interfaces/Interfaces"

function ProductCard({name, price, image, id, stock, description,}: IProducts) {
    return(
<div className="flex justify-center lg:flex-wrap lg:justify-around lg:ml-2 lg:space-x-4">
  <article className="w-[60%] lg:w-[280px] lg:h-[379px]  mb-[40px] lg:mb-[70px] flex flex-col items-center h-[280px]  bg-[#f5f4f4] rounded-md">
    <img className="w-[80%] mx-auto rounded-md mt-2 lg:w-[250px]" src={image} alt={name} />
    <div className="text-center">
      <h3 className="mt-3"  >{name.toUpperCase()}</h3>
      <h4 className="mt-1" >Garantía de 1 año⚠️</h4>
      <h4 className="mt-1 mb-1" >${price}✅</h4>
      <button className="
  px-3 py-2 w-40 
  rounded-[8px] 
  border-0 
  bg-[#C4AC23] 
  tracking-wide 
  text-[12px] 
  transition-all 
  duration-300 
  ease-in-out 
  shadow-[0px_5px_0px_0px_rgb(236,128,56)] 
  text-white 
  cursor-pointer
  hover:shadow-[0px_5px_0px_0px_rgb(236,128,56)] 
  active:bg-[#C4AC23] 
  active:shadow-none 
  active:transform 
  active:translate-y-[4px]
  active:transition-[transform_shadow]
  active:duration-[200ms]
  sm:px-10 sm:py-4 sm:text-[15px] sm:shadow-[0px_10px_0px_0px_rgb(236,128,56)]
  sm:hover:shadow-[0px_7px_0px_0px_rgb(236,128,56)]
  sm:active:translate-y-[5px]
  
  lg:px-10 lg:py-1 lg:rounded-[10px] lg:text-[16px] lg:shadow-[0px_10px_0px_0px_rgb(236,128,56)] lg:h-[35px]
  lg:hover:shadow-[0px_7px_0px_0px_rgb(236,128,56)] 
  lg:active:translate-y-[5px]
">
  Detalle
</button>

    </div>
  </article>
</div>

       

      
  )
}

export default ProductCard

//para imagenes es mejor usar la etiqueta image e importarlo de next, esta optimizado

