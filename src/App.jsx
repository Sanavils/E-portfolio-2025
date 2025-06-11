import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Abercrombie from './pages/Abercrombie'
import Scentify from './pages/Scentify'


import styled from 'styled-components'
import Scientify from './pages/Scentify'




const NavBar = styled.nav`
  display: flex;

justify-content: space-between;
align-items: center;
margin-bottom: 114px;

  position: relative;
  z-index: 1;
`
const NavLink = styled.a`
text-align: center;
font-family: "Neue Montreal";
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-transform: uppercase;
`

function App() {


  return (
    <>
    <Router>
      <NavBar> 
        <Link to="/"><NavLink>Accueil</NavLink></Link>
        <div className='NavLinks'>
          <Link to="/work"><NavLink>Work</NavLink></Link>
          <p><NavLink>/</NavLink></p>
          <Link to="/about"><NavLink>À propos</NavLink></Link>
          <p><NavLink>/</NavLink></p>
          <Link to="/mail"><NavLink>Mail</NavLink></Link>
        </div>
        
      </NavBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path='/work/abercrombie' element={<Abercrombie/>} />
        <Route path='/work/Scentify' element={<Scentify/>} />

      </Routes>
    </Router>

   
    </>
  )
}

export default App
