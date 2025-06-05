import React from 'react'
import Transmision from '../components/transmision'
import Banner from '../components/banner'
import Carosel from '../components/carosel'
import Eventos from '../components/eventos'
import Suscripcion from '../components/suscripcion'
import Contact from '../components/contact'
import Card from '../components/card'
import HomeEventsSection from '../components/HomeEventsSection'
import ImageSlider from '../components/ImageSlider'

const home = () => {
  return (
    <>
     <Banner />

<Transmision />

<HomeEventsSection />

<ImageSlider />




<Eventos />

<Suscripcion />

<Contact />
    </>
  )
}

export default home
