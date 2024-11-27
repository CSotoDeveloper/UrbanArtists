import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { assets, footerLogos } from '../assets/assets'

function Footer() {

  const navigate = useNavigate()

  return (
    <footer className='md:mx-10'>
      <div className='flex flex-col items-center sm:grid sm:grid-cols-4 gap-14 my-10 mt-40 text-sm'>
        <div className=' sm:flex'>
          <a href="/">
            <img className='sm:w-auto' src={assets.logo} alt="" />
          </a>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>Nosotros</p>
          <ul className='flex flex-col gap-2 text-white w-auto items-center sm:items-start'>
            <li><a href="/">Inicio</a></li>
            <li><a href="/about">Acerca de</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>
        <div className='items-center sm:items-start flex flex-col'>
          <p className='text-xl font-medium mb-5'>Siguenos!</p>
          <ul className='flex flex-col gap-2 text-white w-auto items-center sm:items-start'>
            <li>+52 833-534-4813</li>
            <li>carlos.a.soto.gamez@gmail.com</li>
          </ul>
        </div>
        <div>
          <p className=' text-xl font-medium mb-5'>Programador</p>
          <div className=' flex gap-3 items-center'>
            <a href="https://github.com/CSotoDeveloper" target='_blank' rel='noreferrer'>
              <img src={footerLogos.githubSvg} alt="" className='size-8' />
            </a>
            <a href="https://www.linkedin.com/in/carlos-soto-gamez/" target='_blank' rel='noreferrer'>
              <img src={footerLogos.linkedinSvg} alt="" className='size-8' />
            </a>
            <a href="https://csotoportfolio.netlify.app/" target='_blank' rel='noreferrer'>
              <img src={footerLogos.webpageSvg} alt="" className='size-8' />
            </a>
          </div>
        </div>
      </div>
      <div>
      </div>
      <hr />
      <p className='py-5 text-sm text-center'>Copyright 2024© CSotoDev</p>

    </footer>
  )
}

export default Footer