import React from 'react';
import { Download, BookOpen } from 'lucide-react';

// Sample book data
const books = [
  {
    id: 1,
    title: "Crecimiento de una Iglesia",
    author: "David K. Bernand",
    thumbnail: "https://royalinsurancellc.com/bingo/libro1.jpg",
    downloadUrl: "https://ipuv-cloud.b-cdn.net/ipuv.org/Biblioteca%20Pentecostal/Crecimiento_de_una_Iglesia.pdf"
  },
  {
    id: 2,
    title: "Los Dones Espirituales",
    author: "David K. Bernand",
    thumbnail: "https://royalinsurancellc.com/bingo/libro2.jpg",
    downloadUrl: "https://ipuv-cloud.b-cdn.net/ipuv.org/Biblioteca%20Pentecostal/los-dones-espirituales.pdf"
  },
  {
    id: 3,
    title: "El Despertar de la Gracia",
    author: "Charles R. Swindoll",
    thumbnail: "https://royalinsurancellc.com/bingo/libro3.jpg",
    downloadUrl: "https://ipuv-cloud.b-cdn.net/ipuv.org/Biblioteca%20Pentecostal/Gracia_sobre_Gracia.pdf"
  },
  {
    id: 4,
    title: "En Busca de la Santidad",
    author: "David K. Bernand",
    thumbnail: "https://royalinsurancellc.com/bingo/libro4.jpg",
    downloadUrl: "https://ipuv-cloud.b-cdn.net/ipuv.org/Biblioteca%20Pentecostal/En%20busca%20de%20la%20santidad.pdf"
  },

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