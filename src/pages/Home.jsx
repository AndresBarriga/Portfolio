import React from 'react';
import AppBanner from '../components/shared/AppBanner';
import MySkills from "../components/shared/MySkills";
import Projects from './Projects';
import TestimonialsSlider from '../components/Testimonials/Testimonials';
import AboutMeHeader from '../components/About/AboutMeHeader';
import MyCertifications from '../components/shared/MyCertifications';




function Home() {
  return (
    <div className="container mx-auto">
      <AppBanner  ></AppBanner>
      <AboutMeHeader/>
      <MySkills />
      <Projects />
      <MyCertifications />
      <TestimonialsSlider />
      
      
    </div>
  );
}

export default Home;
