import React, {useEffect, useState} from "react";



export default function HomeEventsSection() {


  const [eventos, setEventos] = useState([]);

  const obtenereventos = async () => {

    try {
        const response = await fetch(`${process.env.REACT_APP_API}/obtenereventos/`);
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


  useEffect(() => {
        obtenereventos()
      }, []);
  


  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      {/* Título superior */}
   

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Columna izquierda: Evento principal */}

        {eventos.length > 0 ? (<div className="relative w-full h-full min-h-[700px] rounded-xl overflow-hidden shadow-lg">
          <img
            src={`${obtenerfoto(eventos[0].Foto)}`}
            alt={eventos[0].Titulo}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-0 w-full p-6 bg-black/60 text-white">
            <h2 className="text-2xl md:text-3xl font-bold">{eventos[0].Titulo}</h2>
            <p className="mt-2 text-sm md:text-base">
              {eventos[0].Descripcion}
            </p>
          </div>
        </div>) : (<></>)}
        

         {eventos.length > 1 ? (<div className="relative w-full h-full min-h-[700px] rounded-xl overflow-hidden shadow-lg">
          <img
            src={`${obtenerfoto(eventos[1].Foto)}`}
            alt={eventos[1].Titulo}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-0 w-full p-6 bg-black/60 text-white">
            <h2 className="text-2xl md:text-3xl font-bold">{eventos[1].Titulo}</h2>
            <p className="mt-2 text-sm md:text-base">
              {eventos[1].Descripcion}
            </p>
          </div>
        </div>) : (<></>)}

        {/* Columna derecha: Cards de eventos
        <div className="flex flex-col gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="relative h-64 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <img
                src={event.image}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
              <div className="absolute bottom-0 p-5 text-white z-10">
                <p className="text-sm mb-1">{event.date}</p>
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-sm mt-1">{event.description}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
