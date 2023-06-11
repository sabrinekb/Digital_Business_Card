import { useState } from 'react';
import './App.css';
import Photo from './components/Photo';
import Info from './components/Info';
import Buttons from './components/Buttons';
import About from './components/About'
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {


  return (
    <div className="ctn">
      <Photo />
      <div className='ctn-mid-section'>
        <Info />
        <Buttons />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  )
}

export default App