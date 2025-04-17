import React from 'react'
import imgfondoraya from '../img/fondoraya.png'
import { Calendar, Clock, MapPin } from 'lucide-react';

const Eventos = () => {
    const events = [
        {
          id: 1,
          title: "Pastor Elio Mora",
          date: "2020-06-10",
          time: "16:00",
          location: "Nuestra Sede",
          description: "Hoy Celebramos a nuestro Padre Celestial su Cumpleaños, que los años que restan sobre esta tierra, siga siendo ejemplo de mucha Fé, de Constancia, de Amor por los otros y por el reino de Dios",
          image: "https://firebasestorage.googleapis.com/v0/b/cabi-wash-web.appspot.com/o/aposento%2Fpastor.jpg?alt=media&token=57260d59-24b9-4ca6-ab3c-da477b68abb1"
        },
        {
          id: 2,
          title: "Clamor por las Damas",
          date: "2019-11-07",
          time: "19:00",
          location: "Aposento Alto",
          description: "Esto fue parte de nuestro Clamor de Mujeres en nuestra casa El Aposento Alto",
          image: "https://firebasestorage.googleapis.com/v0/b/cabi-wash-web.appspot.com/o/aposento%2Fclamor.jpg?alt=media&token=d12d9e75-934e-4d0d-aafc-e9fb0090aa77"
        },
        {
          id: 3,
          title: "Mentalidad de Reino",
          date: "2017-06-21",
          time: "10:00",
          location: "Calles de San Francisco",
          description: "Aposento Alto salió a las calles de la mano de Jesús a bendecir nuestro sector y proclamar libertad en tiempos de crisis. Hijos entendidos haciendo cosas diferentes.",
          image: "https://firebasestorage.googleapis.com/v0/b/cabi-wash-web.appspot.com/o/aposento%2Fmentalidad.jpg?alt=media&token=6651e718-6328-44fb-8f71-347aeafc343f"
        }
      ];
    
      return (
        <div
   
      style={{backgroundImage: `url(${imgfondoraya})`,
    }}
      class="fondoraya w-full relative p-8"
    >
        <div className=" py-12 px-4 sm:px-6 lg:px-8">
          <div className=" flex flex-col sm:flex sm:flex-row place-content-center justify-center items-center">
            {events.map((event) => (
              <div 
                key={event.id}
                className="bg-white w-full rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-xl m-4"
              >
                <div className="relative h-48 sm:h-64">
                  <img
                    src={`${event.image}`}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {event.title}
                    </h2>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-white/90">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(event.date).toLocaleDateString('es-ES', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center text-white/90">
                        <Clock className="w-4 h-4 mr-1" />
                        {event.time}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {event.location}
                  </div>
                  <p className="text-gray-600 leading-relaxed line-clamp">
                    {event.description}
                  </p>
                  <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#ffa302] hover:bg-[#121212] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffa302] transition-colors duration-200">
                    Ver más detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
  );
}

export default Eventos
