import { useState } from 'react'
import './App.css'
import Header from '../Header/Header.jsx'
import Main from '../Main/Main.jsx'
import About from '../About/About.jsx'


function App() {
  return (
    <div className='page'>
    <Header />
    <Main />
    <About />
    </div>
  )
}

export default App
