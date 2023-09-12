import React from 'react';
import AppBanner from '../components/shared/AppBanner';
import MySkills from "../components/shared/MySkills";
import Projects from "../components/Projects/Projects";
import Testimonials from "../components/Testimonials/Testimonials";

function Home() {
  return (
    <div className="container mx-auto">
      <AppBanner></AppBanner>
      <MySkills></MySkills>
      <Projects></Projects>
      <Testimonials></Testimonials>
    </div>
  );
}

export default Home;
