import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
