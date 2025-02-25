import React from 'react'
import Feature from '../Component/Feature'
import WhyProntoo from '../Component/WhyProntoo'
import Trusted from '../Component/Trusted'
import Contact from '../Component/Contact'
import LaptopView from '../Component/LaptopView'
import Restaurant from '../Component/Restaurant'
import Ecosystem from '../Component/Ecosystem'
import Hero from '../Component/Hero'

const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      <LaptopView />
      <WhyProntoo />
      <Restaurant />
      <Ecosystem />
      {/* <Portals /> */}
      <Trusted />
      <Contact />
      <Feature />
    </>
  )
}

export default Home
