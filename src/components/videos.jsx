import React from 'react';
import { Calendar } from 'lucide-react';
import imgfondoraya from '../img/textura.jpg';

// Sample video data
const videos = [
  {
    id: 1,
    title: "Que pase lo que tenga que pasar",
    date: "2025-04-13",
    thumbnail: "https://img.youtube.com/vi/tkawZEXXhlk/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "De Fé y Milagros",
    date: "2024-03-14",
    thumbnail: "https://img.youtube.com/vi/1S2HaeF8EtQ/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Demolición",
    date: "2024-03-13",
    thumbnail: "https://img.youtube.com/vi/lpfCDwxY66E/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "Intimos Desconocidos",
    date: "2024-03-12",
    thumbnail: "https://img.youtube.com/vi/J9yArGd5kAk/maxresdefault.jpg",
  },
  {
    id: 5,
    title: "Punto Ciego",
    date: "2024-03-11",
    thumbnail: "https://img.youtube.com/vi/HC6UvU2fS20/maxresdefault.jpg",
  },
  {
    id: 6,
    title: "La Ley del Gallinero",
    date: "2024-03-10",
    thumbnail: "https://img.youtube.com/vi/Ln5MT8LPzBk/maxresdefault.jpg",
  }
];

function VideoCard({ title, date, thumbnail }) {
  return (
    <a href="/#/predica">
    <div className="bg-white rounded-lg cursor-pointer overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative aspect-video">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <time dateTime={date}>
            {new Date(date).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
      </div>
    </div>
    </a>
  );
}

function Videos() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4" style={{backgroundImage: `url(${imgfondoraya})`,
}}>
      <div className="max-w-7xl mx-auto">
      <header className="shadow-sm">
   
          <h1 className="text-3xl font-bold text-gray-900 inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-gray-200 shadow-sm" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' }}>Predicaciones</h1>
    
      </header>
      <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              date={video.date}
              thumbnail={video.thumbnail}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Videos;