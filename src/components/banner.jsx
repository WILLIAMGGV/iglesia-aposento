import React from 'react'
import slider1 from "../img/slider/slider01.jpg";

const Banner = () => {
  return (
    <div
      id="imagenfondo"
      style={{
        backgroundImage: `url(${slider1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "black",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(204, 204, 153, 0) 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(204, 204, 153, 0) 100%)",
      }}
      className="w-full flex flex-col justify-center items-center px-4 sm:px-6"
    >

      {/* Texto para pantallas grandes */}
      <div
        id="titleslider"
        className="hidden lg:flex flex-col animate__animated animate__fadeIn retraso mt-10 max-w-xl"
      >
        <span className="text-white bg-[#003366] p-4 text-2xl lg:text-4xl fuente-acumin bg-opacity-30 rounded-md">
          EL APOSENTO ALTO
          <p
            id="descripcionslider"
            className="text-sm quicksand-medio text-center mt-2 animate__animated animate__backInUp retraso2"
          >
            Se pueden reunir los creyentes para orar juntos y buscar la voluntad de Dios
          </p>
        </span>

      
      </div>

      {/* Texto para móviles */}
      <div
        id="titleslider2"
        className="flex lg:hidden flex-col items-center animate__animated animate__fadeIn retraso mt-20"
      >
        <span className="text-white bg-[#003366] p-4 text-xl fuente-acumin bg-opacity-30 rounded-md text-center">
          EL APOSENTO ALTO
          <p
            id="descripcionslider2"
            className="text-sm quicksand-medio text-center mt-2 animate__animated animate__backInUp retraso2"
          >
            Se pueden reunir los creyentes para orar juntos y buscar la voluntad de Dios
          </p>
        </span>

    
      </div>
    </div>
  )
}

export default Banner

