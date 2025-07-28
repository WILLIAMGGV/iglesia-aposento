import React, {useState, useEffect} from 'react';
import { Download, BookOpen } from 'lucide-react';

// Sample book data



function BookCard({ title, author, thumbnail, downloadUrl }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
      <div className="relative aspect-[9/12] sm:aspect-[3/4]">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center text-gray-600 mb-4">
          <BookOpen className="w-4 h-4 mr-2" />
          <span className="text-sm">{author}</span>
        </div>
        <a
          href={downloadUrl}
          download
          className="inline-flex items-center justify-center w-full px-4 py-2 sm:px-4 sm:py-2 text-sm sm:text-base bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors gap-2"
        >
          <Download className="w-4 h-4" />
          <span>Descargar</span>
        </a>
      </div>
    </div>
  );
}

function Books() {

const [books, setBooks] = React.useState([]);

const obtenerbooks = async () => {

try {
    const response = await fetch(`${process.env.REACT_APP_API}/obtenerbooks/`);
    if (!response.ok) {
        throw new Error('Error en la red');
    }
    const data = await response.json();
    if(data){
        setBooks(data);
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
  obtenerbooks()
}, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className='block sm:hidden'><br /><br /><br /></div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Biblioteca Digital
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Explora nuestra colección de libros clásicos
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {books.map((book) => (
            <BookCard
              key={book.ID}
              title={book.Titulo}
              author={book.Autor}
              thumbnail={obtenerfoto(book.Images)}
              downloadUrl={obtenerfoto(book.Fotos)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Books;


