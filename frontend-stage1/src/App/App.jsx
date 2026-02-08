import { useState } from 'react'
import './App.css'
import Header from '../Header/Header.jsx'
import Main from '../Main/Main.jsx'
import About from '../About/About.jsx'
import Footer from '../Footer/Footer.jsx'


function App() {
  return (
    <div className='page'>
    <Header />
    <Main />
    <About />
    <Footer />
    </div>
  )
}

export default App
