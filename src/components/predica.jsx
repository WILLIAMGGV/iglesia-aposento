import React, { useState } from 'react';
import { Calendar, User } from 'lucide-react';
import imgfondoraya from '../img/textura.jpg';
import ReactPlayer from 'react-player';

const Predica = () => {
  const [urlyoutube, setUrlyoutube] = useState('https://www.youtube.com/watch?v=tkawZEXXhlk');

  return (
    <div
      style={{ backgroundImage: `url(${imgfondoraya})` }}
      className="w-full relative p-4 sm:p-6 md:p-8 bg-cover bg-center"
    >
      <div className="min-h-screen">
        {/* Header */}
        <header className="shadow-sm">
          <div className="max-w-5xl mx-auto px-4 py-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-white inline-block px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-gray-200 shadow-sm">
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
                El Poder de la Fe en Tiempos Difíciles
              </h2>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>13 de Abril, 2025</span>
                </div>

                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>Pastor Dante Gebel</span>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <article className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-justify">
            <div className="prose max-w-none">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Reflexiones sobre el Mensaje</h3>

              <p className="mb-4">
                En tiempos de incertidumbre y desafíos, la fe se convierte en nuestro pilar más
                importante. Durante esta predicación, exploramos cómo podemos fortalecer nuestra fe
                y mantener la esperanza viva en medio de las circunstancias más difíciles.
              </p>

              <h4 className="text-base sm:text-lg font-semibold mb-3">Puntos Principales</h4>

              <ul className="list-disc pl-5 mb-4">
                <li className="mb-2">La importancia de mantener una fe inquebrantable</li>
                <li className="mb-2">Cómo superar los obstáculos a través de la oración</li>
                <li className="mb-2">El poder de la comunidad en el crecimiento espiritual</li>
                <li>Aplicaciones prácticas para vivir una vida de fe</li>
              </ul>

              <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6 text-gray-700">
                "La fe no hace que las cosas sean fáciles, pero hace que sean posibles."
              </blockquote>

              <p>
                Te invitamos a reflexionar sobre este mensaje y compartir tus pensamientos con
                nuestra comunidad. Recuerda que cada prueba es una oportunidad para fortalecer
                nuestra fe y acercarnos más a Dios.
              </p>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};

export default Predica;
