import React from 'react'
import { Link } from "react-router-dom";
import { artData } from "../assets/assets";

function ArtMenu() {
  return (
    <div id='#art' className='flex flex-col items-center gap-4 pt-16 pb-6'>
      <h2 className='text-4xl font-semibold text-white'>Encuentra tu Arte</h2>
      <p className='sm:w-1/3 text-center text-lg'>Adentrate en la cultura urbana</p>
      <div className='grid grid-cols-3 sm:flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {artData.map((item,index) => (
          <Link onClick={()=>scrollTo(0,0)} 
          className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 '
            key={index}
            to={`/artists/${item.art}`}>
            <img src={item.image} alt={`Visual representation of: ${item.art}`} className='w-16 sm:size-32 mb-2 bg-inherit border border-accent rounded-full hover:bg-accent ' />
            <p className='text-lg'>{item.art}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ArtMenu