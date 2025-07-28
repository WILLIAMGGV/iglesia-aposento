import React, { useState, useEffect } from 'react';
import { Calendar, User } from 'lucide-react';
import imgfondoraya from '../img/textura.jpg';
import ReactPlayer from 'react-player';
import mision from "../img/mision.jpg"
import vision from "../img/vision.jpg"


const Mision = () => {

    const [contenido1, setContenido1] = useState(`<img src=${vision}><br />Somos una estructura eclesiástica enfocada en dirigir todos los recursos para alcanzar el mayor número de países en el mundo con el evangelio de Jesucristo. Una iglesia dirigida por el Espíritu Santo, sosteniendo el avance del evangelio en todos los continentes, con presencia en 100 países y un millón de constituyentes en 10,000 iglesias.`);
    const [contenido, setContenido] = useState(`<img src=${mision}><br /><strong>Creemos en:</strong> <br />“Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo; enseñándoles que guarden todas las cosas que os he mandado; y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo. Amén.”<br /> <strong>-Mateo 28:18-20</strong><br /><br />Promueve y fortalece la unidad de los creyentes y mantiene la coordinación de las estructuras administrativas de la Iglesia de Dios Pentecostal, Movimiento Internacional.<br /><br />Vigila por que se mantenga viva la experiencia del bautismo en el Espíritu Santo en los creyentes y la manifestación de los dones y ministerios del Espíritu Santo en la Iglesia, y estimular la búsqueda de esta gloriosa unción y sus dones.`);
 




const cargapage = (page) => {
    window.location.href = page;
   window.scrollTo(0, 0);
  }


  return (
    <div
      style={{ backgroundImage: `url(${imgfondoraya})` }}
      className="w-full relative p-4 sm:p-6 md:p-8 bg-cover bg-center"
    >
      <div className='block sm:hidden'><br /><br /><br /></div>
      <div className="min-h-screen">
        {/* Header */}
        <header className="shadow-sm">
        
           
        </header>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          {/* Video Section */}
         <div className="max-w-5xl mx-auto px-4 py-6 cursor-pointer">
         <h1 className="text-2xl sm:text-3xl font-bold text-gray-500 inline-block px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-gray-200 shadow-sm">
              Misión
            </h1>
          </div>

          {/* Blog Content */}
          <article className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-justify">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{__html: contenido }}>

            </div>
          </article>


         <div className="max-w-5xl mx-auto px-4 py-6 cursor-pointer">
         <h1 className="text-2xl sm:text-3xl font-bold text-gray-500 inline-block px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-gray-200 shadow-sm">
              Visión
            </h1>
          </div>


           <article className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-justify">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{__html: contenido1 }}>
        
            </div>
          </article>


        </main>
      </div>
    </div>
  );
};

export default Mision;
