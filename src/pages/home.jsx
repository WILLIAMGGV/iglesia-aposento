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
  className="grid gap-0 bg-gray-900"
  style={{ gridTemplateRows: "80% 20%", gridTemplateColumns: "2fr 1fr" }}
>
  <Carosel />
  <Card />
</div>

<Eventos />

<Suscripcion />

<Contact />
    </>
  )
}

export default home
