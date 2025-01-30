import React from 'react'
import Feature from '../Component/Feature'
import WhyProntoo from '../Component/WhyProntoo'
import Portals from './Portals'
import Trusted from '../Component/Trusted'
import Contact from '../Component/Contact'
import LaptopView from '../Component/LaptopView'
import AboutSection from '../Component/AboutSection'
import Restaurant from '../Component/Restaurant'
import Ecosystem from '../Component/Ecosystem'

const Home = () => {
  return (
    <>
      <LaptopView />
      <WhyProntoo />
      <Restaurant />
      <Ecosystem />
      {/* <AboutSection /> */}
      {/* <Portals /> */}
      <Trusted />
      <Contact />
      <Feature />
    </>
  )
}

export default Home
