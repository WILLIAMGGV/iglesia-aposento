import React, { useState, useEffect } from 'react';
import { Calendar, User } from 'lucide-react';
import imgfondoraya from '../img/textura.jpg';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';


const Galeria = () => {
 

  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fotos, setFotos] = useState([]);


  const [predica, setPredica] = useState([]);

const { id } = useParams();

const obtenerpredica = async (id) => {

  const data = {
      'id': id,
  };
  fetch(`${process.env.REACT_APP_API}/obtenergaleriaevento`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
      .then(response => response.json())
      .then(result => {
          if (result) {
              setPredica(result);
          } else {
              console.log(result.message);
          }
      })
      .catch(error => {
          console.log(error);
      });

}

const cargapage = (page) => {
    window.location.href = page;
   window.scrollTo(0, 0);
  }

useEffect(() => {
  obtenerpredica(id)
}, []);

useEffect(() => {
  if(predica.length > 0){

  
    setTitulo(predica[0].Titulo)
    setFotos(JSON.parse(predica[0].Fotos))
    setDescripcion(predica[0].Descripcion)

  }
}, [predica]);

  return (
    <div
      style={{ backgroundImage: `url(${imgfondoraya})` }}
      className="w-full relative p-4 sm:p-6 md:p-8 bg-cover bg-center"
    >
      <div className='block sm:hidden'><br /><br /><br /></div>
      <div className="min-h-screen">
        {/* Header */}
        <header className="shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6 cursor-pointer" onClick={() => {
        cargapage("/#/vergalerias");
        }}>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-500 inline-block px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-gray-200 shadow-sm">
              Ver todos los Eventos
            </h1>
            
          </div>
          <div className="max-w-5xl mx-auto px-4 py-6 cursor-pointer">
          <div className="text-2xl sm:text-3xl font-bold text-gray-500 inline-block px-4 sm:px-6 py-2 shadow-sm"><h2>{titulo}</h2></div><br />
          <div className="text-xl sm:text-lg font-bold text-gray-500 inline-block px-4 sm:px-6 py-2 shadow-sm">{descripcion}</div>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {fotos.map((val, key) => {
            return (<img src={`${process.env.REACT_APP_API}/${val.ruta}`} className=' w-full h-[300px] rounded-2xl border-2' alt="" />);
            })}
          
     
        </div>
        </main>
      </div>
    </div>
  );
};

export default Galeria;
