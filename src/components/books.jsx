import React from 'react';
import { Download, BookOpen } from 'lucide-react';

// Sample book data
const books = [
  {
    id: 1,
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    thumbnail: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=500",
    downloadUrl: "#"
  },
  {
    id: 2,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    thumbnail: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=500",
    downloadUrl: "#"
  },
  {
    id: 3,
    title: "La Casa de los Espíritus",
    author: "Isabel Allende",
    thumbnail: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=500",
    downloadUrl: "#"
  },
  {
    id: 4,
    title: "Rayuela",
    author: "Julio Cortázar",
    thumbnail: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=500",
    downloadUrl: "#"
  },
  {
    id: 5,
    title: "La Sombra del Viento",
    author: "Carlos Ruiz Zafón",
    thumbnail: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=500",
    downloadUrl: "#"
  },
  {
    id: 6,
    title: "Pedro Páramo",
    author: "Juan Rulfo",
    thumbnail: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&q=80&w=500",
    downloadUrl: "#"
  }
];



function BookCard({ title, author, thumbnail, downloadUrl }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl">
      <div className="relative aspect-[3/4]">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"/>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center text-gray-600 mb-4">
          <BookOpen className="w-4 h-4 mr-2" />
          <span className="text-sm">{author}</span>
        </div>
        <a
          href={downloadUrl}
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors gap-2"
        >
          <Download className="w-4 h-4" />
          <span>Descargar Libro</span>
        </a>
      </div>
    </div>
  );
}

function Books() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Biblioteca Digital
          </h1>
          <p className="text-gray-600">
            Explora nuestra colección de libros clásicos
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              thumbnail={book.thumbnail}
              downloadUrl={book.downloadUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Books;