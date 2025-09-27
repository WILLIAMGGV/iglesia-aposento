import React, { useState, useEffect } from 'react';
import { Calendar, User } from 'lucide-react';
import imgfondoraya from '../img/textura.jpg';
import ReactPlayer from 'react-player';
import mision from "../img/mision.jpg"
import vision from "../img/vision.jpg"


const Mision = () => {

    const [contenido1, setContenido1] = useState(`<div><img src=${vision} width="100%"></div><br />Nuestra visión está ligada al propósito que Dios nos ha dado. Es una dirección hacia donde nos dirigimos, el lugar donde Dios ya de antemano nos ha trazado. Es la capacidad de ver más allá en tiempo y espacio y por encima de todo lo demás, significa visualizar, viendo a través de los ojos de Dios, para alcanzar lo que Él quiere lograr a través de nosotros. Extender el reino de Dios en todo el mundo y en todas las naciones para Jesucristo, a través del mensaje del evangelio, según Lucas 10:1-16.`);
    const [contenido, setContenido] = useState(`<img src=${mision}  width="100%"><br />La misión en la Biblia, se refiere al propósito o tarea encomendada por Dios, ya sea a individuos, grupos o iglesia en general. Esta misión implica llevar a cabo la voluntad de Dios en el mundo, extendiendo su amor y mensaje a todas las naciones y trabajando para la transformación del mundo según su propósito. La misión fundamental de nuestra Organización, es la difusión del mensaje de Jesucristo, la construcción del reino de Dios en la tierra y transformación de la sociedad hacia la justicia y el amor. Enseñar y compartir las enseñanzas de Jesús incluyendo su mensaje de salvación y la importancia del amor de Dios hacia el prójimo, esto se manifiesta a través de la predicación de un mensaje Cristocéntrico, dándolo a conocer a Él como nuestro Señor y Salvador del mundo. Basado en el llamado de la misión de los 70, según Lucas 10:1-16.`);
 




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
