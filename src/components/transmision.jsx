import React, {useState} from 'react'
import imgfondoraya from '../img/fondoraya.png'
import imgtransmision from "../img/envivo.gif"
import ReactPlayer from 'react-player'

const Transmision = () => {
  const [urlyoutube, setUrlyoutube] = useState('https://www.youtube.com/watch?v=zKTSw07mGRQ')
  return (
    <>
      <div
      id="trasmitir"
      style={{backgroundImage: `url(${imgfondoraya})`,
    }}
      class="fondoraya w-full relative p-8"
    >
 
      <div class="text-md w-full h-auto text-white grid grid-cols-2 gap-1" style={{gridTemplate: '40% 60%'}}
      >
        <div className='flex flex-col mt-10'>
        <span className='text-[40px] bg-[#121212] w-[80%] rounded-3xl text-center'>Transmisión en Vivo</span>
        <span 
    className='mt-8 text-[28px] w-[90%]'
    style={{
        color: '#003366', // Color azul oscuro
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Sombra del texto
        textAlign: 'justify',
    }}
>
    Disfruta de prédicas cristianas en vivo las 24 horas con tus pastores. Estos mensajes traen esperanza, aumentan tu fe, y alimentan tu espíritu.
</span>
        </div>
        

        <div class="flex flex-col mr-4">
          <div className='flex flex-row place-content-end justify-end items-end'><img src={imgtransmision} width="200px" alt="" /></div>
          <div>
            <div className='bg-[#ccc] border-2 border-red-600 w-full'>
            <ReactPlayer style={{borderRadius: '12px'}} url={urlyoutube} loop={true} width="100%" height="400px" light={false} />
            </div>
          </div>
        </div>
 
    
     </div>
    </div>
    </>
  )
}

export default Transmision
