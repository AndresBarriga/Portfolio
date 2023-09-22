import React, { useState } from "react";
import { motion } from 'framer-motion';
import laptopdesk from "../../images/laptopdesk.jpg";
import desktop1 from "../../images/desktop1.jpg"
import desktop2 from "../../images/desktop2.jpg"
import AboutCounter from "../About/AboutCounter";
import Carousel from "./Carousel/Carousel";

const ProjectsPage = () => {
  return (
    <>
    
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="flex flex-col md:justify-between items-center md:flex-row mt-12 md:mt-2 mx-5 relative sm:mx-10 md:mx-25 lg:mx-35" // Add relative class to the container
      >
        <div
          className="w-full items-center sm:w-2/3 h-[40vh] bg-cover bg-center bg-opacity-60"
          style={{
            backgroundImage: `url(${desktop1})`, // Set the image as a background
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
            className="font-general-semibold text-center"
          >
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Highlighted Projects ✨</div>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.7,
            }}
            className="font-general-extralight mt-4 text-center leading-normal text-gray-500"
          >
          <div className="text-base sm:text-base md:text-lg ">
            Step into my world as a Product Manager, where innovation meets
            strategy. Journey through my portfolio, where we'll explore crafting
            solutions, making impactful decisions, and witnessing product
            successes in an ever-evolving landscape of innovation.
            </div>
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
        className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2 mx-40 mb-16"
      > </motion.section>
    
    
    <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<AboutCounter />
			</motion.div>
      <Carousel />
    </>
  );
};

export default ProjectsPage;

