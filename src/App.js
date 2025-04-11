import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Footer from "./components/footer";
import logo from "./img/logo2.jpg";
import service1 from "./img/service1.jpg";
import Home from "./pages/home";
import Predica from "./components/predica";
import Videos from "./components/videos";
import Books from "./components/books";

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

  return (
    <div className="bg-gray-50">
      <header class="header block sm:block md:block lg:hidden xl:hidden 2xl:hidden">
        <nav class="nav container2">
          <div class="nav__data">
            <a href="#" class="nav__logo">
              <img src="img/logo.png" width="120px" alt="" />
            </a>

            <div class="nav__toggle" id="nav-toggle">
              <i class="ri-menu-line nav__burger"></i>
              <i class="ri-close-line nav__close"></i>
            </div>
          </div>

          <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
              <li>
                <a href="#" class="nav__link">
                  Inicio
                </a>
              </li>

              <li class="dropdown__item">
                <div class="nav__link">
                  <a href="#serviciosmenu">Nuestros Servicios</a>
                  <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul class="dropdown__menu">
                  <li>
                    <a href="obamacare.html" class="dropdown__link">
                      <i class="ri-checkbox-circle-fill"></i> OBAMACARE
                    </a>
                  </li>

                  <li>
                    <a href="medicare.html" class="dropdown__link">
                      <i class="ri-checkbox-circle-fill"></i> MEDICARE
                    </a>
                  </li>

                  <li>
                    <a href="dentalvision.html" class="dropdown__link">
                      <i class="ri-checkbox-circle-fill"></i> PLANES DE SEGURO
                      DENTAL Y VISIÓN
                    </a>
                  </li>

                  <li>
                    <a href="life.html" class="dropdown__link">
                      <i class="ri-checkbox-circle-fill"></i> PÓLIZAS DE VIDA
                    </a>
                  </li>

                  <li>
                    <a href="accidental.html" class="dropdown__link">
                      <i class="ri-checkbox-circle-fill"></i> PÓLIZAS
                      ACCIDENTALES
                    </a>
                  </li>

                  <li>
                    <a href="indocument.html" class="dropdown__link">
                      <i class="ri-checkbox-circle-fill"></i> PLANES DE
                      DESCUENTO PARA INDOCUMENTADOS
                    </a>
                  </li>

                  <li>
                    <a href="auto.html" class="dropdown__link">
                      <i class="ri-checkbox-circle-fill"></i> PÓLIZAS DE AUTO
                    </a>
                  </li>

                  <li>
                    <a href="home.html" class="dropdown__link">
                      <i class="ri-checkbox-circle-fill"></i> PÓLIZAS DE HOME
                    </a>
                  </li>

                  <li class="dropdown__subitem">
                    <div class="dropdown__link">
                      <i class="ri-bar-chart-line"></i> Reports
                      <i class="ri-add-line dropdown__add"></i>
                    </div>

                    <ul class="dropdown__submenu">
                      <li>
                        <a href="#" class="dropdown__sublink">
                          <i class="ri-file-list-line"></i> Documents
                        </a>
                      </li>

                      <li>
                        <a href="#" class="dropdown__sublink">
                          <i class="ri-cash-line"></i> Payments
                        </a>
                      </li>

                      <li>
                        <a href="#" class="dropdown__sublink">
                          <i class="ri-refund-2-line"></i> Refunds
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#testimonialmenu" class="nav__link">
                  Testimonios
                </a>
              </li>

              <li>
                <a href="#acercademenu" class="nav__link">
                  Acerca de Mi
                </a>
              </li>

              <li>
                <a href="#contactomenu" class="nav__link">
                  Contact
                </a>
              </li>

              <li class="dropdown__item">
                <div class="nav__link">
                  Nuestras Redes
                  <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                </div>

                <ul class="dropdown__menu">
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=100083282203525"
                      target="_blank"
                      class="dropdown__link"
                    >
                      <i class="ri-facebook-circle-fill"></i> FACEBOOK
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/royalinsuranceusa"
                      target="_blank"
                      class="dropdown__link"
                    >
                      <i class="ri-instagram-fill"></i> INSTAGRAM
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://wa.me/19545489316"
                      target="_blank"
                      class="dropdown__link"
                    >
                      <i class="ri-whatsapp-fill"></i> WHATSAPP
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
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
                <a href="#testimonialmenu">Misión y Visión</a>
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
                <a href="#serviciosmenu">Recursos</a>
              </span>
              <div
                id="submenu"
                onMouseOver={funcion1}
                class="hidden static flex z-50 flex-col place-content-between absolute bg-[#003366] mt-9 text-white w-[300px] h-[300px] rounded-lg border-2 border-white"
              >
                <div class="m-2 flex flex-col text-white fuente-acumin text-[14px]">
                  <span id="menu1" class="hover:font-bold">
                    <a href="/">PREDICAS</a>
                  </span>
                  <span id="menu2" class="hover:font-bold">
                    <a href="/">LIBROS</a>
                  </span>
                  <span id="menu3" class="hover:font-bold">
                    <a href="/">LA BIBLIA ONLINE</a>
                  </span>
                </div>

                <div class="relative w-full h-[400px] rounded-r-lg">
                  <img
                    id="imgservice"
                    src={service1}
                    class="h-full rounded-r-lg"
                    alt=""
                  />
                  <div class="absolute fuente-acumin-cursiva w-[100%] h-[80px] bg-opacity-75 text-center mt-[-40px] bg-[#003366] rounded-lg">
                    <p id="titlesubmenu" class="text-sm p-2 leading-[14px]">
                      PLANES DE SEGURO DENTAL Y VISI&Oacute;N
                    </p>
                    <p id="desmenu" class="text-[10px] p-1 leading-[14px]">
                      Sonríe con confianza y cuida tus ojos. Nuestros seguros
                      dentales y de visión te ofrecen una cobertura completa
                      para mantener tu bienestar bucal y visual.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <span class="p-4 hover:cursor-pointer hover:font-bold">
              <span class="underline2 texto-azul-oscuro">
                <a href="#trasmitir">Transmisión</a>
              </span>
            </span>
            <span class="p-4 hover:cursor-pointer hover:font-bold">
              <span class="underline2 texto-azul-oscuro">
                <a href="#contactomenu">Contact</a>
              </span>
            </span>
            <div class="p-4">
              <div class="flex flex-row">
                <a
                  href="https://www.facebook.com/profile.php?id=100083282203525"
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
                  href="https://www.instagram.com/royalinsuranceusa"
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

                <a href="https://wa.me/19545489316" target="_blank">
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
          <Route path="/predica" element={<Predica />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </HashRouter>

      <Footer />
    </div>
  );
}

export default App;
