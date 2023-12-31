import React, { useState } from "react";
import { motion } from 'framer-motion';
import laptop from "../../images/Laptop3.png"
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
            backgroundImage: `url(${laptop})`, // Set the image as a background
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
            className="font-general-bold text-center"
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
        		<div className="text-center mb-8"> 
                    <h1 className="text-2xl font-general-bold sm:text-3xl  md:text-4xl">My Role along different Products</h1>
                    <p className="mt-4 text-base text-gray-500 font-general-light sm:text-lg md:text-xl">See the impact and the Role I played in different products</p>
					<a
                        href="/myRole"
                        className="font-general-medium flex flex-col justify-center mt-4 items-center mx-auto w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                        aria-label="See Projectss"
                    >
                        
                        <span className="text-sm sm:text-lg font-general-medium duration-100">
                            Discover More
                        </span>

                    </a>
                </div>

        <div className="mx-10 bg-gray-50 m-gray-50">
				<AboutCounter />
        </div>
			</motion.div>

      <div className="max-full bg-indigo-50 mt-4 text-center">
              <h2 className="text-xl pt-6 font-general-bold sm:text-3xl md:text-4xl">
              Highlighted Projects 👩🏻‍💻 🚧 🏗
              </h2>
  
              <p className="text-base mt-4 text-gray-500 font-general-light sm:text-lg md:text-xl">
              The projects that stands out.
              </p>
  
             
            </div>
            <div className="flex flex-col items-center mx-auto bg-indigo-50">
      <Carousel />
      </div>
    </>
  );
};

export default ProjectsPage;

