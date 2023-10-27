import React from 'react'
import ReactDOM from 'react-dom/client'
import Background from './Components/background.jsx'
import Navbar from './Components/navbar.jsx'
import Logo from './Components/logo.jsx'
import Buttons from './Components/buttons.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <>

    <Navbar/>
    <Background />
    <Logo/>
    <Buttons/>
 
  </>
   
)
