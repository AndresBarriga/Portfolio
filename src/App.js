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
import  { DefaultAccordion } from "./components/Projects/Project1/Project1";
import  { Project2 } from "./components/Projects/Project2/Project2";
import { Project3 } from "./components/Projects/Project3/Project3"
import MyRole from './components/MyRole/MyRole';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here */}
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/projects/project1" element={<DefaultAccordion />} />
        <Route path="/projects/project2" element={<Project2 />} />
        <Route path="/projects/project3" element={<Project3 />} />
        <Route path="/myRole" element={<MyRole />} />
        
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
