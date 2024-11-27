import { LucideChevronDown } from 'lucide-react';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from "../assets/assets";

const CSShr = 'border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'

function Navbar() {

  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <a href="/">
        <img src={assets.logo} alt="" className='w-14 cursor-pointer' />
      </a>
      <ul className='hidden sm:flex items-start gap-5 font-medium uppercase text-neon'>
        <NavLink to='/'>
          <li className='py-1 hover:text-primary transition-all duration-200'>Inicio</li>
          <hr className={CSShr} />
        </NavLink>
        <NavLink to='/artists'>
          <li className='py-1 hover:text-primary transition-all duration-200'>Artistas</li>
          <hr className={CSShr} />
        </NavLink>
        <NavLink to='/events'>
          <li className='py-1 hover:text-primary transition-all duration-200'>Eventos</li>
          <hr className={CSShr} />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1 hover:text-primary transition-all duration-200'>Acerca de</li>
          <hr className={CSShr} />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1 hover:text-primary transition-all duration-200'>Contacto</li>
          <hr className={CSShr} />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
          token
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img src={assets.PP} alt="" className='w-8 rounded-full border ' />
              <LucideChevronDown className='w-2.5' />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48  rounded flex flex-col gap-4 p-4 bg-black'>
                  <p onClick={() => navigate("/my-profile")} className='hover:text-primary cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate("/my-appointments")} className='hover:text-primary cursor-pointer'>My Appointments</p>
                  <p onClick={() => setToken(false)} className='hover:text-primary cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block' type='button'>Create Account</button>

        }
      </div>
    </div>
  )
}

export default Navbar