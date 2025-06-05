import React from "react";

const events = [
  {
    id: 1,
    title: "Conferencia de Innovación 2025",
    description: "Explora las últimas tendencias tecnológicas con líderes de la industria.",
    date: "15 de julio, 2025",
    image: "https://res.cloudinary.com/dpkvjgcm8/image/upload/v1749130838/flyer_vvrknb.jpg",
  },
  {
    id: 2,
    title: "Taller de Productividad",
    description: "Aprende técnicas para mejorar tu desempeño profesional.",
    date: "22 de julio, 2025",
    image: "https://res.cloudinary.com/dpkvjgcm8/image/upload/v1749130838/evento1_vocfvm.jpg",
  },
  {
    id: 3,
    title: "Networking Empresarial",
    description: "Conecta con emprendedores y empresarios de todo el país.",
    date: "5 de agosto, 2025",
    image: "https://res.cloudinary.com/dpkvjgcm8/image/upload/v1749130838/evento2_h9zc4m.jpg",
  },
];

export default function HomeEventsSection() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      {/* Título superior */}
   

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Columna izquierda: Evento principal */}
        <div className="relative w-full h-full min-h-[600px] rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://res.cloudinary.com/dpkvjgcm8/image/upload/v1749130838/flyer_vvrknb.jpg"
            alt="Flyer Principal"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-0 w-full p-6 bg-black/60 text-white">
            <h2 className="text-2xl md:text-3xl font-bold">Evento Principal: Cumbre Global 2025</h2>
            <p className="mt-2 text-sm md:text-base">
              Acompáñanos en la conferencia más importante del año sobre negocios y tecnología.
            </p>
          </div>
        </div>

        {/* Columna derecha: Cards de eventos */}
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
        </div>
      </div>
    </section>
  );
}
