import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

function RelatedArtists({speciality, artistId}) {

  const { artists } = useContext(AppContext)
  const [relArtists, setRelArtists] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (artists.length > 0 && speciality) {
      const artistsData = artists.filter((art) => art.speciality === speciality && art._id !== artistId)
      setRelArtists(artistsData)
    }
  }, [artists, speciality, artistId])

  return (
    <div id='art' className='flex flex-col items-center gap-4 my-16 md:mx-10 '>
    <h2 className='text-4xl font-medium'>Artistas Relacionados</h2>
    <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 '>
      {relArtists.slice(0, 5).map(artist => (
        <div onClick={()=> {navigate(`/appointment/${artist._id}`);scrollTo(0,0)}} className='bg-stone-950 border border-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={artist._id}>
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
  </div>
  )
}

export default RelatedArtists