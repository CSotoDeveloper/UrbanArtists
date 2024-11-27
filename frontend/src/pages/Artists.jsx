import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { artData } from "../assets/assets";
import { AppContext } from '../context/AppContext';

function Artists() {
  const { speciality } = useParams()
  const { artists } = useContext(AppContext)
  const [filterArtist, setFilterArtist] = useState([])
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
    <div>
      <p>Browse the specialysts</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-secondary'>
          {artData.map((artist, index) => (
            <p onClick={() => speciality === `${artist.art}` ? navigate('/artists') : navigate(`/artists/${artist.art}`)}
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === `${artist.art}` ? "bg-primary font-semibold" : ""}`}
              key={artist.image}>
              {artist.art}
            </p>
          ))}
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterArtist.map(artist => (
              <div onClick={() => navigate(`/appointment/${artist._id}`)} className='border border-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={artist._id}>
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