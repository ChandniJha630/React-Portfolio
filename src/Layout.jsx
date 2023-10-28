import React from 'react'
import Navbar from './Components/navbar'
import Logo from './Components/logo'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
      <Navbar/>
      <Logo/>
      <Outlet/>
    </>
  )
}

export default Layout
