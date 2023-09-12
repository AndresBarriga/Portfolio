import React from 'react';
import "./css/App.css";
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from "./pages/Home"

import "./App";



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here */}
      </Routes>
    </div>
  );
}

export default App;