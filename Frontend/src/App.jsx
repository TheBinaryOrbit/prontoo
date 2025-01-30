import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Header from './Component/Header'
import Home from './Pages/Home'
import Footer from './Component/Footer'
import Portals from './Pages/Portals'
import Pricing from './Pages/Pricing'
import RestaurantType from './Pages/RestaurantType'
import ScrollToTop from './Component/ScrollToTop'
const App = () => {
  return (
    <Router>
      <Header/>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ecosystem' element={<Portals />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/restauranttype' element={<RestaurantType />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
