import React from 'react';
import AppBanner from '../components/shared/AppBanner';
import MySkills from "../components/shared/MySkills";
import Projects from './Projects';
import TestimonialsSlider from '../components/Testimonials/Testimonials';



function Home() {
  return (
    <div className="container mx-auto">
      <AppBanner  ></AppBanner>
      <MySkills />
      <Projects />
      <TestimonialsSlider />
    </div>
  );
}

export default Home;
