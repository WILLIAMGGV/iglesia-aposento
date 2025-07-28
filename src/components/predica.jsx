import React, { useState, useEffect } from 'react';
import { Calendar, User } from 'lucide-react';
import imgfondoraya from '../img/textura.jpg';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';


const Predica = () => {
  const [urlyoutube, setUrlyoutube] = useState('https://www.youtube.com/watch?v=tkawZEXXhlk');

  const [titulo, setTitulo] = useState('');
  const [fecha, setFecha] = useState('2025-10-10');
  const [predicador, setPredicador] = useState('');
  const [contenido, setContenido] = useState('');

  const [predica, setPredica] = useState([]);

const { id } = useParams();

const obtenerpredica = async (id) => {

  const data = {
      'id': id,
  };
  fetch(`${process.env.REACT_APP_API}/obtenerpredica`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
      .then(response => response.json())
      .then(result => {
          if (result) {
              setPredica(result);
          } else {
              console.log(result.message);
          }
      })
      .catch(error => {
          console.log(error);
      });

}

const cargapage = (page) => {
    window.location.href = page;
   window.scrollTo(0, 0);
  }

useEffect(() => {
  obtenerpredica(id)
}, []);

useEffect(() => {
  if(predica.length > 0){

    setUrlyoutube(predica[0].Link)
    setFecha(predica[0].Fecha)
    setTitulo(predica[0].Titulo)
    setPredicador(predica[0].Predicador)
    setContenido(predica[0].Contenido)

  }
}, [predica]);

  return (
    <div
      style={{ backgroundImage: `url(${imgfondoraya})` }}
      className="w-full relative p-4 sm:p-6 md:p-8 bg-cover bg-center"
    >
      <div className='block sm:hidden'><br /><br /><br /></div>
      <div className="min-h-screen">
        {/* Header */}
        <header className="shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6 cursor-pointer" onClick={() => {
        cargapage("/#/videos");
        }}>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-500 inline-block px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-gray-200 shadow-sm">
              Predicaciones
            </h1>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          {/* Video Section */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="w-full">
              <div className="bg-[#ccc] border-2 border-red-600 w-full">
                <ReactPlayer
                  url={urlyoutube}
                  loop={true}
                  width="100%"
                  height="auto"
                  style={{ aspectRatio: '16/9', maxHeight: '500px' }}
                  light={false}
                />
              </div>
            </div>

            {/* Video Info */}
            <div className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
               {titulo}
              </h2>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span><time dateTime={fecha}>
            {new Date(fecha).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time></span>
                </div>

                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>{predicador}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <article className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-justify">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{__html: contenido }}>
     
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};

export default Predica;
