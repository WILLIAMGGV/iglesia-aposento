import React from 'react'
import slider1 from "../img/slider/slider01.jpg";

const Banner = () => {
  return (
    <>
      <div
        id="imagenfondo"
        style={{
          backgroundImage: `url(${slider1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "black",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(204, 204, 153, 0) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(204, 204, 153, 0) 100%)",
      }}
        class=" w-full h-[400px] sm:h-[400px] md:h-[400px] lg:h-[600px] xl:h-[600px] 2xl:h-[600px] flex flex-col"
      >
        <div
          id="titleslider"
          class="hidden sm:hidden md:hidden lg:block xl:block 2xl:block ml-[-50%] flex flex-col mt-[50px] animate__animated animate__fadeIn retraso"
        >
          <span class="text-white bg-[#003366] flex flex-col ml-4 p-4 text-xl md:text-4xl fuente-acumin bg-opacity-30 rounded-md">
            <span>OBAMACARE PARA TI Y TU FAMILIA</span>
            <p
              id="descripcionslider"
              class="text-sm quicksand-medio text-center justify-center animate__animated animate__backInUp retraso2"
            >
              ¡No esperes más! Obtén Cobertura de Salud Asequible Ahora con
              Obamacare
            </p>
          </span>
          <a href="obamacare.html">
            {" "}
            <div id="botonc" class="flex flex-row place-content-end">
              <span class="mt-[20px] bg-[#000] p-2 rounded-lg text-sm bg-opacity-70 text-white hover:font-bold cursor-pointer hover:text-gray-900 hover:bg-[#cc9933]">
                Mas Informaci&oacute;n
              </span>
            </div>
          </a>
        </div>

        <div
          id="titleslider2"
          class="block sm:block md:block lg:hidden xl:hidden 2xl:hidden flex flex-col place-content-end animate__animated animate__fadeIn retraso"
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <span class="text-white bg-[#003366] flex flex-col  p-4 text-xl text-xl fuente-acumin bg-opacity-30 rounded-md">
            <span>OBAMACARE PARA TI Y TU FAMILIA</span>
            <p
              id="descripcionslider2"
              class="text-sm quicksand-medio text-center justify-center animate__animated animate__backInUp retraso2"
            >
              ¡No esperes más! Obtén Cobertura de Salud Asequible Ahora con
              Obamacare
            </p>
          </span>
          <div id="botonc2" class="flex flex-row place-content-end">
            <span class="mt-[20px] bg-[#000] p-2 rounded-lg text-sm bg-opacity-70 text-white hover:font-bold cursor-pointer hover:text-gray-900 hover:bg-[#cc9933]">
              Mas Informaci&oacute;n
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
