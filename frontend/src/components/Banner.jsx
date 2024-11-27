import React from 'react'
import { useNavigate } from 'react-router-dom';
import { assets } from "../assets/assets";

function Banner() {
  const navigate = useNavigate()

  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 '>
      <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
        <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white '>
          <p>Ponte en Contacto</p>
          <p className='mt-4'>Practica con mas de 100 artistas</p>
        </div>
        <button onClick={() => { navigate('/login'); scrollTo(0, 0) }} type='button'
          className='font-bold bg-white text-sm text-black px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Crear cuenta</button>
      </div>
      <div className=' md:block md:w-1/2 lg:w-[370px] relative'>
        <img src={assets.moraHero} alt="Urban Generic Artist"
          className='w-full absolute bottom-0 right-0 max-w-md' />
      </div>
    </div>
  )
}

export default Banner