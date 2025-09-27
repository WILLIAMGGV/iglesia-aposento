import React, { useState, useEffect } from 'react';
import imgfondoraya from '../img/textura.jpg';
import version1 from "../img/version1.png"
import bibliaonline from "../img/bibliaonline.jpg"

const Biblia = () => {

    const [libros, setLibros] = useState([])
    const [capitulo, setCapitulo] = useState(1)
    const [totalcap, setTotalcap] = useState(1)
    const [versiones, setVersiones] = useState([])
    const [version, setVersion] = useState("rv1960")
    const [libro, setLibro] = useState("GN")
    const [capitulos, setCapitulos] = useState([1])
    const [versiculos, setVersiculos] = useState([])
    const [libroname, setLibroname] = useState("Genesis")
    const [versionname, setVersionname] = useState("Reina Valera 1960")
     


const cargapage = (page) => {
    window.location.href = page;
   window.scrollTo(0, 0);
  }


  const obtenerversiones = async () => {
    try {
        const response = await fetch(`https://bible-api.deno.dev/api/versions`);
        if (!response.ok) {
            throw new Error('Error en la red');
        }
        const data = await response.json();
        if(data){
            setVersiones(data);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  }

const obtenerlibros = async () => {
    try {
        const response = await fetch(`https://bible-api.deno.dev/api/books`);
        if (!response.ok) {
            throw new Error('Error en la red');
        }
        const data = await response.json();
        if(data){
            setLibros(data);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const obtenercapitulos = (book) => {

    for (let i = 0; i < libros.length; i++) {

        if(libros[i].abrev == book){
            setTotalcap(libros[i].chapters)
            setLibroname(libros[i].names[0])
        }
    
    }

}

const obtenerversiculos = async () => {
    try {
        const response = await fetch(`https://bible-api.deno.dev/api/read/${version}/${libro}/${capitulo}`);
        if (!response.ok) {
            throw new Error('Error en la red');
        }
        const data = await response.json();
        if(data){
            console.log(data.vers)
            if(data.vers){
                setVersiculos(data.vers)
            }else{
                setVersiculos([])
            }
            
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

  useEffect(() => {
    obtenerversiones()
    obtenerlibros()
  }, []);

  useEffect(() => {
    console.log(versiones)
  }, [versiones]);

  useEffect(() => {
    console.log(version)
    for (let i = 0; i < versiones.length; i++) {
    if(versiones[i].version == version){
        setVersionname(versiones[i].name)
    }
    }
    obtenerversiculos()
  }, [version]);

  useEffect(() => {
    console.log(libro)
    setCapitulo(1)
    obtenercapitulos(libro)
    obtenerversiculos()
  }, [libro]);

  useEffect(() => {
    obtenerversiculos()
  }, [capitulo]);

  useEffect(() => {

    let array = []
    for (let i = 0; i < totalcap; i++) {
        array.push(i+1)
    }
    console.log(array)
    setCapitulos(array)
    console.log(totalcap)
  }, [totalcap]);

  useEffect(() => {
    obtenercapitulos(libro)
  }, [libros]);

  useEffect(() => {
    console.log(versiculos)
  }, [versiculos]);


  return (
    <div
      style={{ backgroundImage: `url(${imgfondoraya})` }}
      className="w-full relative p-4 sm:p-6 md:p-8 bg-cover bg-center"
    >
      <div className='block sm:hidden'><br /><br /><br /></div>
      <div className="min-h-screen">
        {/* Header */}
        <header className="shadow-sm">
        
           
        </header>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          {/* Video Section */}
         <div className="max-w-5xl mx-auto px-4 py-6 cursor-pointer">
         <h1 className="text-2xl sm:text-3xl font-bold text-gray-500 inline-block px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-gray-200 shadow-sm">
             La Biblia Online
            </h1>
          </div>

          {/* Blog Content */}
          
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-auto">
      {/* Columna izquierda */}
      <div className="flex flex-col bg-gray-200  rounded-2xl shadow">
        
        <img src={bibliaonline} width="100%" className=' rounded-t-2xl' />

        {/* Versión de la Biblia */}
        <div className='space-y-4 p-6'>
        <div>
          <label className="block mb-1 font-medium">Versión de la Biblia</label>
          <select className="w-full p-2 border rounded-lg" onChange={(e) => setVersion(e.target.value)}>
            {versiones.map((val, key) => {
            return (<>
            {val.version == version ? (<option selected value={`${val.version}`}>{val.name}</option>) : (<option value={`${val.version}`}>{val.name}</option>)}
            </>);
            })}
            
            
          </select>
        </div>

        {/* Libro */}
        <div>
          <label className="block mb-1 font-medium">Seleccione libro</label>
          <select className="w-full p-2 border rounded-lg" onChange={(e) => setLibro(e.target.value)}>
            {libros.map((val, key) => {
            return (<>
            {val.abrev == libro ? (<option selected value={`${val.abrev}`}>{val.names[0]}</option>) : (<option value={`${val.abrev}`}>{val.names[0]}</option>)}
            </>);
            })}
            
          </select>
        </div>

        {/* Capítulo */}
        <div>
          <label className="block mb-1 font-medium">Capítulo</label>
          <select className="w-full p-2 border rounded-lg" onChange={(e) => setCapitulo(e.target.value)}>
            
            {capitulos.map((val, key) => {
            return (<>
            {capitulo == val ? (<option selected value={val}>{val}</option>) : (<option value={val}>{val}</option>)}
            
            </>);
            })}
        
          </select>
        </div>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="flex flex-col place-content-start justify-start items-center bg-gray-100 rounded-2xl shadow">
        <div className='bg-gray-500 h-[100px] w-[100%] rounded-t-2xl flex flex-row place-content-between custom-gradient'>
        <div className='m-4 flex flex-col' ><span className='text-white font-bold text-md md:text-xl'>{versionname}</span>
        <span className='text-gray-300 text-xs md:text-lg'><span className='font-bold'>{libroname}</span> -- Cap: #{capitulo}</span>
        </div>
        <img src={version1} className='rounded-tr-2xl' alt="" height="100%" width="100px" />
        </div>
        <p align="justify" className='flex flex-col w-full md:text-[14px] text-[14px] place-content-start items-start m-1'>

            {versiculos.map((val, key) => {
            return (<>
            {val.study ? (<div className='w-full flex flex-row place-content-center text-center font-bold text-[16px]'>{val.study}</div>) : (<></>)}
            <span className='m-2 ml-2 mr-2'><span className='font-bold'>{val.number}.</span> {val.verse}</span></>);
            })}
            
            

        </p>
      </div>
    </div>
     


       

        </main>
      </div>
    </div>
  );
};

export default Biblia;
