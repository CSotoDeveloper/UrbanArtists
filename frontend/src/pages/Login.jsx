import React, { useState } from 'react'

function Login() {
  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <form className='min-h-[80vh] flex items-center '>
      <div className='flex flex-col gap-3 m-auto bg-stone-900 items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-white text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Crear Cuenta" : "Iniciar Sesion"}</p>
        {
          state === 'Sign Up' &&
          <div className='w-full'>
            <p>Nombre Completo</p>
            <input className='border text-black border-stone-5000 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value)} value={name} required />
          </div>
        }

        <div className='w-full'>
          <p>Correo</p>
          <input className='border text-black border-stone-500 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
        </div>
        <div className='w-full'>
          <p>Contraseña</p>
          <input className='border text-black border-stone-500 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
        </div>
        <button type='submit' className='bg-primary text-white font-medium w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Crear Cuenta" : "Iniciar Sesion"}</button>
        {state === 'Sign Up'
          ? <p>Ya tienes una cuenta? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Inicia Sesion</span></p>
          : <p>Crear una nueva cuenta? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>Haz click aqui</span></p>}
      </div>

    </form>
  )
}

export default Login