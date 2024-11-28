import React from 'react'
import { assets } from "../assets/assets";

function About() {
  return (
    <div className='text-white'>
      <div className='text-center text-3xl pt-10 '>
        <h2 >Quienes <span className='text-primary font-medium'>Somos</span></h2>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] object-contain' src={assets.heroImg} alt="a photho of the developer team" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-lg'>
          <p>Somos un equipo apasionado por el arte local, dedicado a apoyar a los artistas de diversas disciplinas como el diseño gráfico, la música y el arte corporal. Nuestra misión es ofrecer un espacio donde cada creador pueda compartir su trabajo y conectar con su comunidad.</p>
          <p>Creemos en la importancia de la expresión artística como una forma de enriquecer nuestras vidas y transformar nuestra cultura. Por eso, trabajamos para visibilizar el talento de artistas emergentes, dándoles una plataforma donde puedan exponer sus obras y participar en eventos locales.</p>
          <h3 className='text-primary font-medium text-center sm:text-start text-3xl'>Nuestra Visión</h3>
          <p>Nuestra visión es ser el puente que conecta a los artistas con el público, promoviendo el intercambio cultural y el crecimiento mutuo. Queremos crear una red de apoyo para los artistas locales, impulsando su desarrollo profesional y ofreciendo una variedad de eventos que celebren su talento.</p>
        </div>
      </div>

      <div className='text-xl my-4 text-center'>
        <h3 className='text-3xl' >Porqué ser parte de nuestra <span className='text-primary font-medium'>Comunidad</span></h3>
      </div>
      <div className='flex flex-col md:grid md:grid-cols-3 pt-4'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] bg-stone-950 hover:bg-primary  transition-all duration-300'>
          <b className='text-white text-3xl'>Creatividad</b>
          <p>
            Artistas y aprendices compartiendo sus ideas, inspirando y colaborando en proyectos innovadores.          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] bg-stone-950 hover:bg-primary  transition-all duration-300'>
          <b className='text-white text-3xl'>Personalidad</b>
          <p>
            Cada miembro aporta su estilo único, creando un ambiente auténtico donde el talento se destaca y se celebra.          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] bg-stone-950 hover:bg-primary transition-all duration-300'>
          <b className='text-white text-3xl'>Comunidad</b>
          <p>
            Formar parte de nuestra comunidad es sumarse a un espacio de apoyo, donde los artistas y estudiantes crecen juntos.
          </p>
        </div>
      </div>
    </div>

  )
}

export default About
