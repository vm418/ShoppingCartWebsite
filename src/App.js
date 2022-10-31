import React from 'react';
import './Css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar.js'
import Home from './Home'
import Shop from './Shop'
import About from './About'
import Blueberry from './Products/Blueberry';
import Pineapple from './Products/Pineapple';
import Coconut from './Products/Coconut';
import Mango from './Products/Mango';
import Kiwi from './Products/Kiwi';
import HoneyDew from './Products/HoneyDew';
import Lychee from './Products/Lychee';
import Pomegranate from './Products/Pomegranate';
import Cart from './Cart'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path='/shop' element={<Shop />}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/blu' element={<Blueberry/>}></Route>
            <Route path='/pin' element={<Pineapple/>}></Route>
            <Route path='/coc' element={<Coconut/>}></Route>
            <Route path='/man' element={<Mango/>}></Route>
            <Route path='/kiw' element={<Kiwi/>}></Route>
            <Route path='/hon' element={<HoneyDew/>}></Route>
            <Route path='/lyc' element={<Lychee/>}></Route>
            <Route path='/pom' element={<Pomegranate/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
