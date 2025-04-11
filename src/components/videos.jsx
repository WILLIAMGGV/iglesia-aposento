import React from 'react';
import { Calendar } from 'lucide-react';
import imgfondoraya from '../img/textura.jpg';

// Sample video data
const videos = [
  {
    id: 1,
    title: "Cómo hacer una paella valenciana",
    date: "2024-03-15",
    thumbnail: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 2,
    title: "Tutorial de React para principiantes",
    date: "2024-03-14",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 3,
    title: "Viaje por la Costa Brava",
    date: "2024-03-13",
    thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 4,
    title: "Recetas de cocina mediterránea",
    date: "2024-03-12",
    thumbnail: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 5,
    title: "Guía de Barcelona",
    date: "2024-03-11",
    thumbnail: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 6,
    title: "Curso de fotografía digital",
    date: "2024-03-10",
    thumbnail: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=500",
  }
];

function VideoCard({ title, date, thumbnail }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
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