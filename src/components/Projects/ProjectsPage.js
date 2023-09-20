import React, { useState } from "react";
import { motion } from 'framer-motion';
import laptopdesk from "../../images/laptopdesk.jpg";
import ProjectCardLongR from "../Projects/ProjectCardLongR";
import projectLongRData from "../../data/projectLongRData";
import projectLongLData from "../../data/projectLongLData";
import ProjectCardLongL from "./ProjectCardLongL";
import AboutCounter from "../About/AboutCounter";

function createProjectCardRLong(projectLongRData) {
  return (
    <ProjectCardLongR
    id = {projectLongRData.id}
    key={projectLongRData.key}
    industry={projectLongRData.industry}
    title={projectLongRData.title}
    description={projectLongRData.description}
    img={projectLongRData.img}
    title2={projectLongRData.title2}
    feature1={projectLongRData.feature1}
    feature2={projectLongRData.feature2}
    link={projectLongRData.link}
    />
  )
}

function createProjectCardLLong(projectLongLData) {
  return (
    <ProjectCardLongL
    id = {projectLongLData.id}
    key={projectLongLData.key}
    industry={projectLongLData.industry}
    title={projectLongLData.title}
    description={projectLongLData.description}
    img={projectLongLData.img}
    title2={projectLongLData.title2}
    feature1={projectLongLData.feature1}
    feature2={projectLongLData.feature2}
    link={projectLongLData.link}
    />
  )
}



const ProjectsPage = () => {
  const projectR1 = projectLongRData.find(project => project.id === 1);
  const projectL1 = projectLongLData.find(project => project.id === 4);
  const projectR2 = projectLongRData.find(project => project.id === 2);


  return (
    <><div className="bg-hsl-240-33-98 ">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2 mx-40 relative" // Add relative class to the container
      >
        <div
          className="w-full sm:w-2/3 h-[50vh] bg-cover bg-center bg-opacity-60"
          style={{
            backgroundImage: `url(${laptopdesk})`, // Set the image as a background
          }}
        ></div>
        <div className="w-full md:w-1/3 text-left bg-white p-6 rounded-md shadow-lg">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.4,
            }}
            className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark"
          >
            Highlighted Projects ✨
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.7,
            }}
            className="font-general-extralight mt-4 text-sec md:text-md lg:text-l xl:text-1xl text-center sm:text-left leading-normal text-gray-500"
          >
            Step into my world as a Product Manager, where innovation meets
            strategy. Journey through my portfolio, where we'll explore crafting
            solutions, making impactful decisions, and witnessing product
            successes in an ever-evolving landscape of innovation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.4,
            }}
            className="flex justify-center sm:block"
          ></motion.div>

        </div>

      </motion.section>
      
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2 mx-40 mb-16"s2
      > </motion.section>
    </div>
    
    <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<AboutCounter />
			</motion.div>
      <div> 
     <h1 className="text-center bg-white font-general-bold p-6 rounded-md  text-xl md:text-md lg:text-l xl:text-1xl text-gray-800
">Learn more </h1></div>
    <div>
    <div className="mt-8 ml-8">
        {createProjectCardRLong(projectR1)}
        </div>
        <div className="mt-8 ml-8">
        {createProjectCardLLong(projectL1)}
        </div>
        <div className="mt-8 ml-8">
        {createProjectCardRLong(projectR2)}
        </div>
      </div>
      </>
  );
};

export default ProjectsPage;

