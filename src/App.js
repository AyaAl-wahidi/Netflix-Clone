import React from 'react';
import Home from './components/Home/Home.js';
import FavList from './components/FavList/FavList.js';
import Navbar from './components/Navbar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/favorites" element={<FavList/>}></Route>
      </Routes>
    </div>
  );
}

export default App;