import React from 'react'
import logo from '../img/logo.jpg'

const Footer = () => {


  const cargapage = (page) => {
    window.location.href = page;
   window.scrollTo(0, 0);
  }


  return (
    <>
      <div class="pg-footer fuente-acumin text-[18px]">
      <footer class="footer">
        <svg
          class="footer-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            class="footer-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          ></path>
        </svg>
        <div class="footer-content">
          <div class="footer-content-column">
            <div class="footer-logo">
              <a class="footer-logo-link" href="/">
                <img src={logo} width="200px" alt="" />
              </a>
            </div>
            <div class="footer-menu flex flex-col place-content-center justify-center">
              
              <ul id="menu-get-started" class="footer-menu-list">
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-product"
                >
                  
                </li>
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-product"
                >
                <br />
                
                </li>
                
              </ul>
            </div>
          </div>
          <div class="footer-content-column">
            <div class="footer-menu">
              <h2 class="footer-menu-name">SITIOS</h2>
              <ul id="menu-company" class="footer-menu-list">
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page"
                >
                  <a style={{cursor: 'pointer'}} onClick={() => {
                  cargapage("/#/mision");
                  }}>Misión y Visión</a>
                </li>
                <li
                  class="menu-item menu-item-type-taxonomy menu-item-object-category"
                >
                  <a style={{cursor: 'pointer'}} onClick={() => {
                  cargapage("/#/transmision");
                  }}>Transmisión en Vivo</a>
                </li>
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page"
                >
                  <a style={{cursor: 'pointer'}} onClick={() => {
                  cargapage("/#/contacto");
                  }}>Contacto</a>
                </li>
              </ul>
            </div>
            {/* <div class="footer-menu">
              <h2 class="footer-menu-name">Legal</h2>
              <ul id="menu-legal" class="footer-menu-list">
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434"
                >
                  <a href="/">Privacy Notice</a>
                </li>
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page"
                >
                  <a href="/">Terms of Use</a>
                </li>
              </ul>
            </div> */}
          </div>
          <div class="footer-content-column">
            <div class="footer-menu">
              <h2 class="footer-menu-name">Recursos</h2>
              <ul id="menu-quick-links" class="footer-menu-list">
                <li
                  class="menu-item menu-item-type-custom menu-item-object-custom"
                >
                  <a rel="noopener noreferrer" style={{cursor: 'pointer'}} onClick={() => {
                  cargapage("/#/videos");
                  }}
                    >Predicas</a>
                </li>
                <li
                  class="menu-item menu-item-type-custom menu-item-object-custom"
                >
                  <a rel="noopener noreferrer" style={{cursor: 'pointer'}} onClick={() => {
                  cargapage("/#/books");
                  }}
                    >Libros</a
                  >
                </li>
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page"
                >
                  <a href="#">La Biblia Online</a>
                </li>
                
              </ul>
            </div>
          </div>
          <div class="footer-content-column">
            <div class="footer-call-to-action">
              <h2 class="footer-call-to-action-title">Contactanos</h2>
              <p class="footer-call-to-action-description">
                Estamos para Atenderte
              </p>
              <a
                class="footer-call-to-action-button button text-[14px]"
                href="tel:+584126515046"
                target="_self"
              >
              <i class="ri-phone-fill"></i> +58-412-6515046
              </a>
             
            </div>
            <p class="footer-call-to-action-link-wrapper">
                
                
              <div class="flex flex-row mt-0">
                <a  rel="noopener noreferrer" href="https://www.facebook.com/iglesia.elaposentoalto.1" target="_blank">
                <div
            class="rounded-full  p-3 m-1 hover:cursor-pointer bg-[#cc9933] hover:bg-[#ffb217] relative"
          >
            <div
              class="absolute inset-0 rounded-full border-2 border-black opacity-0 hover:opacity-100 transition-opacity"
            ></div>
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
          </div></a>

          <a  rel="noopener noreferrer" href="https://www.facebook.com/iglesia.elaposentoalto.1" target="_blank">
          <div
            class="rounded-full p-3 m-1 hover:cursor-pointer bg-[#cc9933] hover:bg-[#ffb217] relative"
          >
            <div
              class="absolute inset-0 rounded-full border-2 border-black opacity-0 hover:opacity-100 transition-opacity"
            ></div>
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
        <a  rel="noopener noreferrer" href="https://wa.me/584126515046" target="_blank">
          <div
            class="rounded-full p-3 m-1 hover:cursor-pointer bg-[#cc9933] hover:bg-[#ffb217] relative"
          >
            <div
              class="absolute inset-0 rounded-full border-2 border-black opacity-0 hover:opacity-100 transition-opacity"
            ></div>
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
              
            </p>
           
            
          </div>
         
        </div>
        <div class="footer-copyright bg-gray-900 ">
          <div class="footer-copyright-wrapper">
            <p class="footer-copyright-text">
              <a  rel="noopener noreferrer" class="footer-copyright-link text-[18px]" href="/" target="_self">
                ©2025. | Elaborado Por Aposento Alto | Todos los derechos reservados.
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

export default Footer
