import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Footer from "./components/footer";
import logo from "./img/logo2.jpg";
import service1 from "./img/recursos.jpg";
import Home from "./pages/home";
import Predica from "./components/predica";
import Videos from "./components/videos";
import Books from "./components/books";
import Transmision from "./components/transmision";
import Contact from "./components/contact";
import Mision from "./components/mision";
import Menufixed from "./components/menufixed";
import Galeria from "./components/galeria";
import Vergalerias from "./components/vergalerias";

function App() {
  const funcion1 = () => {
    console.log("El mouse está sobre el div de servicios");
    document.getElementById("submenu").classList.remove("hidden");
    document.getElementById("titleservice").classList.add("font-bold");
  };

  const funcion2 = () => {
    console.log("El mouse ha salido del div de servicios");
    document.getElementById("submenu").classList.add("hidden");
    document.getElementById("titleservice").classList.remove("font-bold");
  };

  const cargapage = (page) => {
    window.location.href = page;
    window.location.reload();
  };

  return (
    <div className="bg-gray-50">
      <Menufixed idioma="es" />

      <div
        id="iniciomenu"
        class="hidden sm:hidden md:hidden lg:block xl:block 2xl:block"
      >
        <div class="flex flex-row place-content-between custom-gradient">
          <img class="p-6" src={logo} width="350px" height="200px" alt="" />
          <div class="flex flex-row place-content-center justify-center items-center quicksand-medio text-lg">
            <span class="p-4 hover:cursor-pointer hover:font-bold">
              <span class="underline2 texto-azul-oscuro">
                <a href="/">Inicio</a>
              </span>
            </span>

            <span class="p-4 hover:cursor-pointer hover:font-bold">
              <span class="underline2 texto-azul-oscuro">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    cargapage("/#/mision");
                  }}
                >
                  Misión y Visión
                </a>
              </span>
            </span>

            <span class="p-4 hover:cursor-pointer hover:font-bold">
              <span class="underline2 texto-azul-oscuro">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    cargapage("/#/biblia");
                  }}
                >
                  Biblia Online
                </a>
              </span>
            </span>
            <div
              id="menuservice"
              onMouseOut={funcion2}
              class="p-4 hover:cursor-pointer flex flex-col"
            >
              <span
                id="titleservice"
                onMouseOver={funcion1}
                class="underline2 texto-azul-oscuro"
              >
                <a href="#">Recursos</a>
              </span>
              <div
                id="submenu"
                onMouseOver={funcion1}
                class="hidden static flex z-50 flex-col place-content-between absolute bg-[#003366] mt-9 text-white w-[300px] h-[300px] rounded-lg border-2 border-white"
              >
                <div class="m-2 flex flex-col text-white fuente-acumin text-[14px]">
                  <span id="menu1" class="hover:font-bold">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        cargapage("/#/videos");
                      }}
                    >
                      PREDICAS
                    </a>
                  </span>
                  <span id="menu2" class="hover:font-bold">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        cargapage("/#/books");
                      }}
                    >
                      LIBROS
                    </a>
                  </span>
                </div>

                <div class="relative w-full h-[400px] rounded-r-lg">
                  <img
                    id="imgservice"
                    src={service1}
                    class="h-full rounded-r-lg"
                    alt=""
                  />
                  <div class="absolute fuente-acumin-cursiva w-[100%] h-[40px] bg-opacity-75 text-center mt-[-40px] bg-[#003366] rounded-lg">
                    <p id="titlesubmenu" class="text-sm p-2 leading-[14px]">
                      Contenido de Interes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <span class="p-4 hover:cursor-pointer hover:font-bold">
              <span class="underline2 texto-azul-oscuro">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    cargapage("/#/transmision");
                  }}
                >
                  Transmisión
                </a>
              </span>
            </span>
            <span class="p-4 hover:cursor-pointer hover:font-bold">
              <span class="underline2 texto-azul-oscuro">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    cargapage("/#/contacto");
                  }}
                >
                  Contacto
                </a>
              </span>
            </span>
            <div class="p-4">
              <div class="flex flex-row">
                <a
                  href="https://www.facebook.com/iglesia.elaposentoalto.1"
                  target="_blank"
                >
                  <div class="rounded-full bg-[#121212] p-3 m-1 hover:cursor-pointer hover:bg-[#cc9933] relative">
                    <div class="absolute inset-0 rounded-full border-2 border-black opacity-0 hover:opacity-100 transition-opacity"></div>
                    <svg
                      class="text-white hover:text-[#000000] relative z-10"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/iglesia.elaposentoalto.1"
                  target="_blank"
                >
                  <div class="rounded-full bg-[#121212] p-3 m-1 hover:cursor-pointer hover:bg-[#cc9933] relative">
                    <div class="absolute inset-0 rounded-full border-2 border-black opacity-0 hover:opacity-100 transition-opacity"></div>
                    <svg
                      class="text-white hover:text-[#000000] relative z-10"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </a>

                <a href="https://wa.me/584126515046" target="_blank">
                  <div class="rounded-full bg-[#121212] p-3 m-1 hover:cursor-pointer hover:bg-[#cc9933] relative">
                    <div class="absolute inset-0 rounded-full border-2 border-black opacity-0 hover:opacity-100 transition-opacity"></div>
                    <svg
                      class="text-white hover:text-[#000000] relative z-10"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill="currentColor"
                        d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predica/:id" element={<Predica />} />
          <Route path="/galeria/:id" element={<Galeria />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/books" element={<Books />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/transmision" element={<Transmision />} />
          <Route path="/mision" element={<Mision />} />
          <Route path="/vergalerias" element={<Vergalerias />} />
        </Routes>
      </HashRouter>

      <Footer />
    </div>
  );
}

export default App;
