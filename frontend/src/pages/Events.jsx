import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { AppContext } from '../context/AppContext'


function Events() {

  const { artData } = useContext(AppContext)
  const navigate = useNavigate()

  const hardCodedEvents = [
    {
      event_id: 0,
      eventName: 'Indie 2024',
      date: '10/12/2024',
      description: 'El ultimo evento del a;o',
      image: artData[0].image
    },
    {
      event_id: 1,
      eventName: 'MetalSport Caifanes',
      date: '10/11/2024',
      description: 'Banda caifanes en el metalsport yeah hellBanda caifanes en el metalsport yeah hellBanda caifanes en el metalsport yeah hellBanda caifanes en el metalsport yeah hellBanda caifanes en el metalsport yeah hell ',
      image: artData[1].image

    },
    {
      event_id: 2,
      eventName: 'Curso Gratuito de Dise;o Grafico',
      date: '30/12/2024',
      description: 'Se impartira un curso gratuito por parte de la escuela tecnm ',
      image: artData[2].image

    },
    {
      event_id: 3,
      eventName: 'Grafiteando por la ciudad',
      date: '12/10/2024',
      description: 'Locura Extrema! ',
      image: artData[3].image

    },
  ]

  return (
    <div>
      <div className='text-white pt-4'>
        <div>
          <h2 className='text-3xl text-center'>Eventos <span className='text-primary'>Proximos</span></h2>
        </div>
        <div className='my-10 grid grid-cols-2 sm:grid-cols-4 gap-4'>
          {hardCodedEvents.map(element => (
            <div
              className='bg-stone-950 flex flex-col items-center border rounded-lg pt-4 sm:min-h-[350px]'
              key={element.event_id}>
              <img className='w-32 mb-2' src={element.image} alt={`An example of ${element.eventName}`} />
              <h3 className='flex flex-col justify-center text-2xl  text-center mb-2 h-[60px] mx-3 text-primary'>{element.eventName}</h3>
              <p className='text-center '>{element.date}</p>
              <p className='hidden sm:block p-2  text-center max-h-[80px] min-h-[80px] overflow-x-auto'>{element.description}</p>
              <button
                onClick={() => navigate(`/events/${element.event_id}`)}
                type='button'
                className=' p-2 px-4 m-2 bg-primary font-semibold hover:scale-105 transition-all duration-300 rounded-lg'
              >
                Asistir
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Events