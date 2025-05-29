import React, { useState } from 'react'
import imgfondoraya from '../img/fondoraya.png'
import imgtransmision from "../img/envivo.gif"
import ReactPlayer from 'react-player'

const Transmision = () => {
  const [urlyoutube, setUrlyoutube] = useState('https://www.youtube.com/watch?v=tkawZEXXhlk')

  return (
    <>
      <div
        id="trasmitir"
        style={{ backgroundImage: `url(${imgfondoraya})` }}
        className="fondoraya w-full relative p-4 md:p-8 bg-cover bg-center"
      >
        <div
          className="text-md w-full h-auto text-white grid grid-cols-1 md:grid-cols-2 gap-4"
          style={{ gridTemplate: '40% 60%' }}
        >
          {/* Columna Izquierda - Texto */}
          <div className='flex flex-col mt-6 md:mt-10 items-center md:items-start text-center md:text-left'>
            <span className='text-[28px] md:text-[40px] bg-[#121212] w-full md:w-[80%] rounded-3xl text-center px-4 py-2'>
              Transmisión en Vivo
            </span>
            <span
              className='mt-6 text-[16px] md:text-[28px] w-full md:w-[90%] px-2 md:px-0'
              style={{
                color: '#003366',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                textAlign: 'justify',
              }}
            >
              Disfruta de prédicas cristianas en vivo las 24 horas con tus pastores. Estos mensajes traen esperanza, aumentan tu fe, y alimentan tu espíritu.
            </span>
          </div>

          {/* Columna Derecha - Video */}
          <div className="flex flex-col items-center md:items-end mr-0 md:mr-4">
            <div className='flex justify-center md:justify-end w-full mb-4'>
              <img src={imgtransmision} width="150px" className="md:w-[200px]" alt="Transmisión en vivo" />
            </div>
            <div className='bg-[#ccc] border-2 border-red-600 w-full rounded-xl overflow-hidden'>
              <ReactPlayer
                style={{ borderRadius: '12px' }}
                url={urlyoutube}
                loop={true}
                width="100%"
                height="360px" // Nueva altura para móvil
                light={false}
                className="md:h-[600px]" // Nueva altura para escritorio
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Transmision
