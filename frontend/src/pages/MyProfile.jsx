import React, { useState } from 'react'
import { artists } from "../assets/assets";

function MyProfile() {

  const [userData, setUserData] = useState({
    userName: "Carlos Antonio Soto Gamez",
    alias: "Coka",
    image: artists[1].image,
    about: 'Soy una perrita a la que le hicieron la lobotomia (me castraron) y desde entonces salgo a las calles a realizar grafitis (hago pipi y popo en la calle) para desquitarme con la sociedad',
    email: 'carlos.a.soto.gamez@gmail.com',
    phone: '833 534 4813',
    addres: 'Tampico',
    gender: "Hombre",
    dob: '03-10-1999'
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='flex justify-center pt-4 '>
      <div className='text-white flex flex-col gap-2 bg-stone-950 text-sm justify-center border rounded-lg '>
        <div className='items-center flex flex-col'>
          <h2 className='text-3xl my-2'>Mi Perfil</h2>
          {
            isEdit
              ? <input className='text-black bg-white max-w-lg text-2xl font-medium ' type='text' value={userData.userName} onChange={e => setUserData(prev => ({ ...prev, userName: e.target.value }))} />
              : <h3 className='text-2xl '>{userData.userName}</h3>
          }
        </div>
        <div className=' sm:grid grid-cols-3'>
          {/* LEFT GRID */}
          <div className='mx-4 sm:ml-10 mt-2'>
            <p className='mt-3 text-primary text-lg text-center'>Acerca de mi</p>
            <p>{userData.about}</p>
          </div>
          {/* CENTER GRID */}
          <div className='items-center align-top flex flex-col p-4'>
            <img className='w-36 h-36 object-cover border border-primary  rounded-full mb-4' src={userData.image} alt={`is a photho profile of my compannion: ${userData.name}`} />
            {
              isEdit
                ? <button type='button' className='border border-primary w-28 bg-white text-black hover:text-white hover:bg-primary font-medium px-8 py-2 rounded-full' onClick={() => setIsEdit(false)}>Guardar</button>
                : <button type='button' className='border border-primary w-28 bg-white text-black hover:text-white hover:bg-primary font-medium px-8 py-2 rounded-full' onClick={() => setIsEdit(true)}>Editar</button>
            }
          </div>
          {/* RIGHT GRID */}
          <div className='mx-4 sm:mx-0'>
            <p className='mt-3 text-primary text-lg text-center'>Contacto</p>
            <div className='flex gap-y-2.5 mt-3 text-white'>
              <div className='font-medium gap-2 flex flex-col  w-28'>
                <p>Email: </p>
                <p>Numero:</p>
                <p>Ubicación:</p>
                <p>Genero:</p>
                <p>Cumpleaños:</p>
              </div>
              <div className='font-medium gap-2 flex flex-col mb-4'>
                <p>{userData.email}</p>
                {
                  isEdit
                    ? <>
                    <input className='max-w-24 bg-white text-black' type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
                    <input className='max-w-24 bg-white text-black' value={userData.addres} onChange={(e) => setUserData(prev => ({ ...prev, addres:  e.target.value  }))} type="text" />
                    <select className='max-w-24 bg-white text-black' value={userData.gender} onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}>
                      <option value="Hombre">Hombre</option>
                      <option value="Mujer">Mujer</option>
                      <option value="No-Binario">No Binario</option>
                      <option value="Prefiero no decir">Privado</option></select>
                      <input className='max-w-28 text-black bg-white' value={userData.dob} onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} type="date" />
                    </> 
                    : 
                    <>
                    <p>{userData.phone}</p>
                    <p>{userData.addres} </p>
                    <p>{userData.gender}</p>
                    <p>{userData.dob}</p>
                    </>
                }
               
      
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MyProfile