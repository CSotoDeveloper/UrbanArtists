import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';


function TopArtists() {

  const navigate = useNavigate()
  const {artists} = useContext(AppContext)

  return (
    <div id='art' className='flex flex-col items-center gap-4 my-16 md:mx-10 text-white'>
      <h2 className='text-4xl font-medium'>Top Artistas de la Semana</h2>
      <p className='sm:w-1/3 text-center text-lg'>Artistas con mas influencia del mes</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {artists.slice(0, 10).map(artist => (
          <div onClick={()=> {navigate(`/appointment/${artist._id}`);scrollTo(0,0)}} className='border border-primary bg-stone-950 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={artist._id}>
            <img className='bg-accent' src={artist.image} alt="" />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-center '>
                <p className='w-2 h-2 bg-green-500 rounded-full'> </p>
                <p className='text-green-500'>Disponible</p>
              </div>
              <p className=' text-lg font-medium'>{artist.name}</p>
              <p className='text-stone-200 text-sm'>{artist.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => { navigate("/artists"); scrollTo(0,0) }} className='bg-primary font-semibold text-white px-12 py-3 rounded-full mt-10' type='button'>Ver mas</button>
    </div>
  )
}

export default TopArtists