import React from 'react'
import imgservice1 from "../img/service1.jpg"
import imgservice2 from "../img/service2.jpg"
import imgservice3 from "../img/service3.jpg"
import imgservice4 from "../img/service4.jpg"

const Services = () => {
  return (
    <>
       <div id="serviciosmenu" class=" flex flex-col justify-center items-center bg-[#003366]">
      <div class="mt-[20px] text-[20px] md:text-[30px] sm:text-[20px] lg:text-[40px] xl:text-[50px]  fuente-acumin-bold texto-dorado" data-aos="fade-up-left">OUR SERVICES</div>
      <section  class="container sm:h-svh  mt-[-50px]">
        <div class="card__container swiper">
           <div class="card__content" data-aos="fade-up"
           data-aos-duration="3000">
              <div class="swiper-wrapper">
            

                 <article class="card__article swiper-slide bg-white">
                  <div class="card__image">
                     <img src={imgservice1} alt="image" class="card__img" />
                     <div class="card__shadow"></div>
                  </div>
   
                  <div class="card__data  bg-[#ffffcc]">
                     <h3 class="card__name fuente-acumin-cursiva text-[16px]">OBAMACARE</h3>
                     <p class="card__description leading-[16px]  text-gray-700">
                        Discover the benefits of Obamacare and make sure you have access to quality medical services without compromising your pocketbook.
                     </p>
   
                     <a href="#" class="card__button rounded-full bg-[#003366] text-[#ffffcc] hover:bg-[#cc9933] hover:text-[#003366]">More Information</a>
                  </div>
               </article>

               <article class="card__article swiper-slide bg-white">
                <div class="card__image">
                   <img src={imgservice2} alt="image" class="card__img" />
                   <div class="card__shadow"></div>
                </div>
 
                <div class="card__data  bg-[#ffffcc]">
                   <h3 class="card__name fuente-acumin-cursiva text-[16px] ">Medicare</h3>
                   <p class="card__description leading-[16px]  text-gray-700">
                    Get ready to enjoy a full and carefree retirement with Medicare. <br /><br /><br />
                   </p>
 
                   <a href="#" class="card__button rounded-full bg-[#003366] text-[#ffffcc] hover:bg-[#cc9933] hover:text-[#003366]">More Information</a>
                </div>
             </article>


             <article class="card__article swiper-slide bg-white">
              <div class="card__image">
                 <img src={imgservice3} alt="image" class="card__img" />
                 <div class="card__shadow"></div>
              </div>

              <div class="card__data  bg-[#ffffcc]">
                 <h3 class="card__name fuente-acumin-cursiva text-[16px]">Medical Insurance</h3>
                 <p class="card__description leading-[16px] text-gray-700">
                    Access the medical care you need without worrying about costs. Your health comes first, and we understand that. <br /><br /> 
                 </p>

                 <a href="#" class="card__button rounded-full bg-[#003366] text-[#ffffcc] hover:bg-[#cc9933] hover:text-[#003366]">More Information</a>
              </div>
           </article>

           <article class="card__article swiper-slide bg-white">
            <div class="card__image">
               <img src={imgservice4} alt="image" class="card__img" />
               <div class="card__shadow"></div>
            </div>

            <div class="card__data  bg-[#ffffcc]">
               <h3 class="card__name fuente-acumin-cursiva text-[16px]">Dental and Vision Insurance</h3>
               <p class="card__description leading-[16px] text-gray-700">
                Smile with confidence and take care of your eyes. Our dental and vision insurance offers you complete coverage to maintain your oral and visual well-being.
               </p>

               <a href="#" class="card__button rounded-full bg-[#003366] text-[#ffffcc] hover:bg-[#cc9933] hover:text-[#003366]">More Information</a>
            </div>
         </article>
      

       <article class="card__article swiper-slide bg-white">
        <div class="card__image">
           <img src="img/service5.jpg" alt="image" class="card__img" />
           <div class="card__shadow"></div>
        </div>

        <div class="card__data  bg-[#ffffcc]">
           <h3 class="card__name fuente-acumin-cursiva text-[16px]">Accident insurance</h3>
           <p class="card__description leading-[16px] text-gray-700">
            From small mishaps to unforeseen events, make sure you're covered in any situation. <br /><br />
           </p>

           <a href="#" class="card__button rounded-full bg-[#003366] text-[#ffffcc] hover:bg-[#cc9933] hover:text-[#003366]">More Information</a>
        </div>
     </article>

     <article class="card__article swiper-slide bg-white">
      <div class="card__image">
         <img src="img/service6.jpg" alt="image" class="card__img" />
         <div class="card__shadow"></div>
      </div>

      <div class="card__data  bg-[#ffffcc]">
         <h3 class="card__name fuente-acumin-cursiva text-[16px]">Life Insurance</h3>
         <p class="card__description leading-[16px] text-gray-700">
            Protect your loved ones and secure their future. Get peace of mind knowing that your legacy is secure. <br /><br />
         </p>

         <a href="#" class="card__button rounded-full bg-[#003366] text-[#ffffcc] hover:bg-[#cc9933] hover:text-[#003366]">More Information</a>
      </div>
   </article>


             
                 
              </div>
           </div>
  
          
           <div class="swiper-button-next">
              <i class="ri-arrow-right-s-line text-white"></i>
           </div>
           
           <div class="swiper-button-prev">
              <i class="ri-arrow-left-s-line text-white"></i>
           </div>
  
         
           <div class="swiper-pagination"></div>
        </div>
     </section>
    </div>
    </>
  )
}

export default Services
