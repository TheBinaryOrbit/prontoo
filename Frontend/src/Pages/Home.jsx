import React from 'react'
import Hero from '../Component/Hero'
import Feature from '../Component/Feature'
import WhyProntoo from '../Component/WhyProntoo'
import Portals from '../Component/Portals'
import Trusted from '../Component/Trusted'
import Contact from '../Component/Contact'
import LaptopView from '../Component/LaptopView'
import AboutSection from '../Component/AboutSection'

const Home = () => {
  return (
    <>
      <Hero />
      <LaptopView />
      <WhyProntoo />
      <AboutSection />
      <Portals />
      <Trusted />
      <Contact />
      <Feature />
    </>
  )
}

export default Home
