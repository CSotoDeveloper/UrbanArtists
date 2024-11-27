import { InfoIcon, Verified, VerifiedIcon } from "lucide-react";
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RelatedArtists from "../components/RelatedArtists";
import { AppContext } from '../context/AppContext'

function Appointment() {

  const { artistId } = useParams()
  const { artists, currencySymbol } = useContext(AppContext)
  const daysOfWeek = ['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM'];

  const [artistInfo, setArtistInfo] = useState(null)
  const [artistSlot, setArtistSlot] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchArtistInfo = async () => {
    const artistInfo = artists.find(art => art._id === artistId)
    setArtistInfo(artistInfo)
  }

  const getAvailableSlots = async () => {
    setArtistSlot([]); // Limpia el estado inicial

    let today = new Date();

    // Generar slots para 7 días
    let allSlots = [];

    for (let i = 0; i < 7; i++) {
      // Crear la fecha inicial para el día actual en el loop
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // Definir hora de finalización (21:00)
      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      // Configurar hora inicial
      if (i === 0) { // Día actual
        if (currentDate.getHours() < 10) {
          currentDate.setHours(10, 0, 0, 0);
        } else {
          currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
          currentDate.setHours(currentDate.getHours() + 1);
        }
      } else { // Días futuros
        currentDate.setHours(10, 0, 0, 0);
      }

      let timeSlots = [];

      // Generar slots de 30 minutos hasta las 21:00
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      allSlots.push(timeSlots); // Agregar slots del día actual a la lista principal
    }

    setArtistSlot(allSlots); // Actualizar el estado con todos los slots
  };


  useEffect(() => {
    fetchArtistInfo()
  }, [artists, artistId])

  useEffect(() => {
    getAvailableSlots()
  }, [artistInfo])

  // useEffect(() => {
  //   console.log(artistSlot);

  // }, [artistSlot])


  return artistInfo && (
    <div>
      {/* Details */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img src={artistInfo.image} alt="" className="bg-primary w-full sm:max-w-72 rounded-lg" />
        </div>

        <div className="flex-1 border border-primary bg-stone-900 rounded-lg p-8 py-7 mx-2 sm:mx-0  sm:mt-0.5">
          {/* doc info */}
          <p className="flex items-center gap-2 text-3xl font-medium ">
            {artistInfo.name}
            <VerifiedIcon className="text-primary w-5" />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-black">
            <p>{artistInfo.degree} - {artistInfo.speciality}</p>
            <button type="button" className="py-0.5 px-2  text-sm rounded-full bg-primary text-white font-semibold">{artistInfo.experience}</button>
          </div>
          {/* about */}
          <div >
            <p className="flex items-center gap-1 text-sm font-medium text-primary mt-3">Quien Soy <InfoIcon /></p>
            <p className="text-sm max-w-[700px] mt-1">{artistInfo.about}</p>
          </div>
          <p className="font-medium mt-4 text-primary">
            Costo: <span>{currencySymbol}{artistInfo.fees}</span>
          </p>
        </div>
      </div>
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium">
        <p>Disponible</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4 ">
          {
            artistSlot.length && artistSlot.map((item, index) => (
              <div onClick={() => setSlotIndex(index)} key={index}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer border hover:border-primary ${slotIndex === index ? 'bg-primary border-primary text-white' : 'bg-white'}`}>
                <p className={`${slotIndex === index ? 'text-white' : 'text-black'}`}>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p className={`font-light ${slotIndex === index ? 'text-white' : 'text-black'}`}>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>
        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          {artistSlot.length && artistSlot[slotIndex].map((item, index) => (
            <p
              onClick={() => setSlotTime(item.time)}
              className={`border text-sm  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer hover:border-primary ${item.time === slotTime ? 'bg-primary text-white border-primary' : 'bg-white text-black font-light'}`}
              key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        <button className="bg-primary text-white text-sm font-bold px-14 py-3 rounded-full my-6">Crear Cita</button>
      </div>
      <RelatedArtists artistId={artistId} speciality={artistInfo.speciality} />
    </div>
  )

}

export default Appointment