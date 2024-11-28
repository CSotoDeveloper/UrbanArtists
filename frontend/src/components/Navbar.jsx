import { Cross, CrossIcon, Crosshair, LucideChevronDown, LucideCrosshair, LucidePanelRightClose, MenuIcon, SidebarClose, X,  } from 'lucide-react';
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
              <LucideChevronDown className='w-4 text-white' />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48  rounded flex flex-col gap-4 p-4 bg-stone-950 text-white'>
                  <p onClick={() => navigate("/my-profile")} className='hover:text-primary cursor-pointer'>Mi Perfil</p>
                  <p onClick={() => navigate("/my-appointments")} className='hover:text-primary cursor-pointer'>Mis Clases</p>
                  <p onClick={() => setToken(false)} className='hover:text-primary cursor-pointer'>Desconectarse</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full hover:scale-105 duration-200 transition-all hidden md:block' type='button'>Crear Cuenta</button>

        }
        <MenuIcon onClick={() => setShowMenu(true)} className='text-white md:hidden w-6'/>
          {/* MOBILE */}
          <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-stone-950 transition-all`}>
            <div className='flex items-center justify-between px-5 py-6'>
              <img className='w-12' src={assets.logo} alt="" />
              <X onClick={()=>setShowMenu(false)} className='text-white w-7 '/>
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
              <NavLink onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>Inicio</p></NavLink>
              <NavLink onClick={()=>setShowMenu(false)} to='/artists'><p className='px-4 py-2 rounded inline-block'>Artistas</p></NavLink>
              <NavLink onClick={()=>setShowMenu(false)} to='/events'><p className='px-4 py-2 rounded inline-block'>Eventos</p></NavLink>
              <NavLink onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>Acerca de</p></NavLink>
              <NavLink onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>Contacto</p></NavLink>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Navbar