import React from 'react';
import "./css/App.css";
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from "./pages/Home"
import AppFooter from './components/shared/AppFooter';
import Projects from './pages/Projects';
import ProjectsPage from './components/Projects/ProjectsPage';
import Contact from './pages/Contact';
import About from "./pages/About";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here */}
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
