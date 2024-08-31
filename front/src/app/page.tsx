import ProductsComponent from "@/components/Cards";

import Video from "@/components/Video/Video";
import Link from "next/link";



export default function Home() {
  return (
    <div className="bg-[#131212] w-[100%]">
    <Video/>

    <section className="flex mt-7 lg:space-x-4 lg:p-4 lg:mt-20 justify-around">

      <div className="flex flex-col justify-center">
        <span className="text-white text-[10px] text-center mb-3 lg:text-white lg:text-xl lg:text-center lg:mb-7" >IPHONE</span>
      <img src="/assets/rectangle 5.png" className=" w-[70px] h-[70px]  lg:w-[250px] lg:h-[250px] lg:border- border-black rounded-[100%] transition-transform duration-300 hover:scale-105 " alt="foto apple" />
      </div>

      <div className="flex flex-col justify-center">
      <span className="text-white text-[10px] text-center mb-3 lg:text-white lg:text-xl lg:text-center lg:mb-7">IPAD</span>
      <img src="/assets/rectangle 8.png" className="w-[70px] h-[70px]  lg:w-[250px] lg:h-[250px] lg:border- border-black rounded-[100%] transition-transform duration-300 hover:scale-105  " alt="foto apple" />
      </div>

      <div className="flex flex-col justify-center">
      <span className="text-white text-[10px] text-center mb-3 lg:text-white lg:text-xl lg:text-center lg:mb-7">MACBOOK</span>
      <img src="/assets/rectangle 9.png"className="w-[70px] h-[70px]  lg:w-[250px] lg:h-[250px] lg:border- border-black rounded-[100%] transition-transform duration-300 hover:scale-105 " alt="foto apple"  />
      </div>

      <div className="flex flex-col justify-center">
      <span className="text-white text-[10px] text-center mb-3 lg:text-white lg:text-xl lg:text-center lg:mb-7">ACCESORIES</span>
      <img src="/assets/rectangle 10.png" className="w-[70px] h-[70px]  lg:w-[250px] lg:h-[250px] lg:border- border-black rounded-[100%] transition-transform duration-300 hover:scale-105 " alt="foto apple" />
      </div>

    </section>

    <section className="lg:flex justify-center lg:mt-9">
      <img src="/assets/macbookhome.png" className="p-3 rounded mt-2 h-[150px] lg:p-8 lg:h-auto lg:w-[100%] "  alt="" />
    </section>

    <h2 className="text-[#c4ac23] mt-3 mb-4 lg:mt-5 lg:text-[40px] lg:text-[#C4AC23] text-center lg:mb-20 "  >Nuestros productos EN STOCK🔥</h2>
      
    <div className="flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-around lg:ml-2 lg:space-x-4">
  <ProductsComponent />
</div>


    <img src="/assets/cartelhome.png" className="hidden lg:block  lg:ml-[45px] pb-[50px] rounded lg:mt-[50px]  lg:w-[1250px] lg:h-[400px]" alt="" />
  
    </div>
  

  );
}
//renderice los productos, este es mi pagina principal, mi home