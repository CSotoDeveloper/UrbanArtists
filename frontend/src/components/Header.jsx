import { MoveRight } from 'lucide-react';
import React from 'react'
import { assets } from "../assets/assets";

function Header() {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white'>Expresa Tu Arte,<br /> Vive la Cultura Urbana</h1>
        <p className='text-lg  flex flex-col md:flex-row items-center gap-3 text-white font-light '>
          Donde los diseñadores redefinen la estética visual, <br />
          las bandas indie y punk dan voz a las calles, <br />
          los traperos rompen las reglas con sus letras, <br />
          y los tatuadores plasman historias en la piel. <br />
        </p>
        <a href="#art" className=' font-bold flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
          Conecta con Artistas <MoveRight />
        </a>
      </div>

      <div className='md:w-1/2 relative'>
        <img src={assets.heroImg} alt="" className='w-full md:absolute bottom-0 h-auto rounded-lg' />
      </div>
    </div>
  )
}

export default Header
