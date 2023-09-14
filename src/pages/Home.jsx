import React from 'react';
import AppBanner from '../components/shared/AppBanner';
import MySkills from "../components/shared/MySkills";
import Projects from './Projects';


function Home() {
  return (
    <div className="container mx-auto">
      <AppBanner  ></AppBanner>
      <MySkills />
      <Projects />
      {/* <Testimonials></Testimonials> */}
    </div>
  );
}

export default Home;
