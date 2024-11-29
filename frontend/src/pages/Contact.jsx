import React from 'react'
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className='text-white pt-4'>
      <div className='text-center text-2xl '>
        <h2 className='text-3xl'>Contactanos</h2>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.heroImg} alt="" />
        <div className='flex flex-col justify-center sm:items-start gap-6 items-center'>
          <p>
            Tampico Tamaulipas <br />
            Tel: +52 833-534-48-13 <br />
            Email: carlos.a.soto.gamez@gmail.com
            </p>
          <button className='text-black bg-white px-8 py-4 text-sm hover:bg-primary hover:text-white hover:font-semibold transition-all duration-500' type='button'>Seguir Explorando</button>
        </div>
      </div>

    </div>
  )
}

export default Contact