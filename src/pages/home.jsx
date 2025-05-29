import React from 'react'
import Transmision from '../components/transmision'
import Banner from '../components/banner'
import Carosel from '../components/carosel'
import Eventos from '../components/eventos'
import Suscripcion from '../components/suscripcion'
import Contact from '../components/contact'
import Card from '../components/card'

const home = () => {
  return (
    <>
     <Banner />

<Transmision />

<div
  className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-4 bg-gray-900"
>
  {/* Card primero en móviles, luego a la derecha en md+ */}
  <div className="order-1 md:order-2 md:col-span-1">
    <Card />
  </div>

  {/* Carosel después en móviles, pero a la izquierda en md+ */}
  <div className="order-2 md:order-1 md:col-span-2">
    <Carosel />
  </div>
</div>


<Eventos />

<Suscripcion />

<Contact />
    </>
  )
}

export default home
