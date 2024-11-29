import React, { useContext } from 'react'
import { AppContext } from "../context/AppContext";

function MyAppointments() {
  const { artists } = useContext(AppContext)
  return (
    <div className='text-white'>
      <h2 className='pb-6 pt-4 font-medium border-b text-3xl text-center'>Mis Clases</h2>
      <div className='grid grid-cols-2 gap-6  items-center pt-6 '>
        {artists.slice(0, 10).map((item) => (
          <div className='bg-stone-950 grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border sm:min-h-48' key={item._id}>
            <div >
              <img className='w-32 bg-primary' src={item.image} alt={`artist: ${item.name}`} />
            </div>
            <div className='flex-1 text-sm'>
              <h2 className='text-lg'>{item.name}</h2>
              <p>{item.speciality}</p>
              <p className='font-medium mt-1'>Direccion:</p>
              <p className='text-xs'>{item.address.line1}</p>
              <p className='text-xs'>{item.address.line2}</p>
              <p className='font-medium mt-1 text-sm'>Fecha & Hora:</p>
              <p className='text-xs '>25, Jul, 2024 | 9:49 AM</p>
            </div>
            <div>
              <div className='flex flex-col gap-2 justify-end'>
                <button type='button' className='hover:bg-primary hover:text-white transition-all bg-white text-black duration-300 text-center sm:min-w-48 py-2 mr-2 border rounded'>Realizar Pago</button>
                <button type='button' className='hover:bg-accent hover:text-white transition-all bg-white text-black duration-300 text-center sm:min-w-48 py-2 mr-2 border rounded'>Cancelar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments