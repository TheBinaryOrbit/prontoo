import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Header from './Component/Header'
import Home from './Pages/Home'
import Footer from './Component/Footer'
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
