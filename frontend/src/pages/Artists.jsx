import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { artData } from "../assets/assets";
import { AppContext } from '../context/AppContext';

function Artists() {
  const { speciality } = useParams()
  const { artists } = useContext(AppContext)
  const [filterArtist, setFilterArtist] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate()

  const applyFilter = () => {
    if (speciality) {
      setFilterArtist(artists.filter(artist => artist.speciality === speciality))
    } else {
      setFilterArtist(artists)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [artists, speciality])


  return (
    <div className='text-white'>
      <h2 className='font-medium text-center sm:text-start text-3xl'>Elige tu arte</h2>
      <div className='flex flex-col sm:flex-row sm:items-start gap-5 mt-5 items-center'>
        <button
          className={`py-1 px-3 border rounded   transition-all sm:hidden  text-base ${showFilter ? 'bg-primary text-white font-semibold' : 'bg-white text-black'}`}
          type='button'
          onClick={() => setShowFilter(prev => !prev)}>
            Filtrar por Arte</button>
        <div className={`px-4 sm:px-0 grid-cols-3 gap-2 sm:flex flex-col sm:gap-4 text-sm ${showFilter ? 'grid ' : 'hidden'}`}>
          {artData.map((artist, index) => (
            <p
              onClick={() => speciality === `${artist.art}` ? navigate('/artists') : navigate(`/artists/${artist.art}`)}
              className={` p-3 text-center sm:text-start py-1.5 sm:w-32 border border-gray-300 rounded cursor-pointer sm:hover:bg-primary hover:scale-105 transition-all duration-200 ${speciality === `${artist.art}` ? "bg-primary font-semibold" : ""}`}
              key={artist.image}>
              {artist.art}
            </p>
          ))}
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterArtist.map(artist => (
              <div onClick={() => navigate(`/appointment/${artist._id}`)}
                className='border border-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
                key={artist._id}>
                <img className='bg-accent' src={artist.image} alt="" />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center '>
                    <p className='w-2 h-2 bg-green-500 rounded-full'> </p>
                    <p className='text-green-500'>Disponible</p>
                  </div>
                  <p className=' text-lg font-medium'>{artist.name}</p>
                  <p className='text-stone-200 text-sm'>{artist.speciality}</p>
                </div>
              </div>))
          }
        </div>

      </div>
    </div>
  )
}

export default Artists