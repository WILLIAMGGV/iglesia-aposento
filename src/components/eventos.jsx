import React from 'react'
import imgfondoraya from '../img/fondoraya.png'
import { Calendar, Clock, MapPin } from 'lucide-react';

const Eventos = () => {
    const events = [
        {
          id: 1,
          title: "Festival de Música en el Parque",
          date: "2024-03-25",
          time: "16:00",
          location: "Parque Central",
          description: "Únete a nosotros para una tarde llena de música en vivo, comida local y actividades para toda la familia. Presentando artistas locales e internacionales en múltiples escenarios.",
          image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4"
        },
        {
          id: 2,
          title: "Exposición de Arte Contemporáneo",
          date: "2024-03-28",
          time: "19:00",
          location: "Galería Moderna",
          description: "Una exposición única que presenta obras de artistas emergentes, explorando temas de sustentabilidad y tecnología a través del arte contemporáneo.",
          image: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e"
        },
        {
          id: 3,
          title: "Conferencia de Innovación",
          date: "2024-04-02",
          time: "10:00",
          location: "Centro de Convenciones",
          description: "Descubre las últimas tendencias en tecnología y innovación. Conferencias y talleres con expertos internacionales en IA, blockchain y desarrollo sostenible.",
          image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
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
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-xl m-4"
              >
                <div className="relative h-48 sm:h-64">
                  <img
                    src={`${event.image}?auto=format&fit=crop&w=1200&h=400`}
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
