import React, {useState, useEffect} from 'react'
import imgfondoraya from '../img/fondoraya.png'
import { Calendar, Clock, MapPin } from 'lucide-react';

const Eventos2 = () => {
   
  const [eventos, setEventos] = useState([]);

  const obtenereventos = async () => {

    try {
        const response = await fetch(`${process.env.REACT_APP_API}/obtenergaleria/`);
        if (!response.ok) {
            throw new Error('Error en la red');
        }
        const data = await response.json();
        if(data){
            setEventos(data);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }

  }


  const obtenerfoto = (foto) => {

    let json = JSON.parse(foto);

    console.log(json)

    if(json.length > 0){

      return `${process.env.REACT_APP_API}/${json[0].ruta}`;

    }

  }

  const cargapage = (page) => {
    window.location.href = page;
   window.scrollTo(0, 0);
  }



  useEffect(() => {
        obtenereventos()
      }, []);
    
      return (<>
        <div
              style={{ backgroundImage: `url(${imgfondoraya})` }}
              className="w-full relative p-4 sm:p-6 md:p-8 bg-cover bg-center"
            >
              <div className='block sm:hidden'><br /><br /><br /></div>

              <div className="mx-8 px-2 py-6 cursor-pointer">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-500 inline-block px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-gray-200 shadow-sm">
              Galeria de Imagenes
            </h1>
            
          </div>
        <div
   
      
      class=" w-full relative p-8"
    >
        <div className=" py-12 px-4 sm:px-6 lg:px-8">
          <div className=" flex flex-col sm:flex sm:flex-row place-content-center justify-center items-center">
            {eventos.map((event) => (
              <div 
                key={event.ID}
                className="bg-white w-full rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-xl m-4"
              >
                <div className="relative h-48 sm:h-64">
                  <img
                    src={`${obtenerfoto(event.Fotos)}`}
                    alt={event.Titulo}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {event.Titulo}
                    </h2>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-white/90">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(event.Fecha).toLocaleDateString('es-ES', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </div>
                     
                    </div>
                  </div>
                </div>
                
                <div className="p-6 h-[180px] flex flex-col place-content-between">
                  
                  <p className="text-gray-600 leading-relaxed line-clamp">
                    {event.Descripcion}
                  </p>
                  <button onClick={() => {
                  cargapage("/#/galeria/"+event.ID);
                  }} className="mt-4 w-[180px] place-content-center inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#ffa302] hover:bg-[#121212] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffa302] transition-colors duration-200">
                    Ver más detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        </div>
        </>
  );
}

export default Eventos2
