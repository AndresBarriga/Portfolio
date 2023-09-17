import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import laptopdesk from "../../images/laptopdesk.jpg";
import { Link } from 'react-router-dom';
import { LiaFileAlt } from "react-icons/lia";

const ProjectsPage = () => {
  return (
    <div className="bg-hsl-240-33-98 ">
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
        className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2 mx-40 mb-16" // Add mb-8 (margin-bottom) class here
      ></motion.section>

      <div className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2 mx-40">

        <article className="w-full md:w-2/3 relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"  >
          <img
            alt="Office"
            src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div
            className="relative bg-gradient-to-t from-gray-900/30 to-gray-900/10 pt-32 sm:pt-48 lg:pt-64"
          >
            <div className="p-4 sm:p-6">
              <time datetime="2022-10-10" className="block text-xs text-white/90">
                10th Oct 2022
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">
                  How to position your furniture for positivity
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                Molestias explicabo corporis voluptatem?
              </p>

            </div>
          </div>
        </article>
        <article className="w-10/12 md:w-4/6 relative overflow-hidden rounded-lg shadow transition hover:shadow-lg mt-4 bg-gray-300 bg-opacity-75" style={{ position: 'relative', zIndex: '1', left: '-80px' }}>
          <div
            className="grid grid-cols-4 grid-rows-3 mt-6 mb-6 gap-2 relative pt-0 sm:pt-0 lg:pt-0  "
          >

            <div className="col-span-2 col-start-2 row-span-3">
              <h3 className=" text-lg ">
                How to position your furniture for positivity
              </h3>
              <div className="flex">
                <div className="flex-shrink-0 mt-2">
                  <div className="flex items-center justify-center w-6 h-6 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4 mt-2">
                  <h4 className="text-base font-seconday-light leadi dark:text-gray-50">Hola</h4>
                  <p className="mt-2 text-sm font-seconday-light dark:text-gray-400">Adios</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mt-2">
                  <div className="flex items-center justify-center w-6 h-6 rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4 mt-2">
                  <h4 className="text-base font-seconday-light leadi dark:text-gray-50">Hola</h4>
                  <p className="mt-2 text-sm font-seconday-light dark:text-gray-400">Adios</p>
                </div>
              </div>
              <a
                href="/projects/project1"
                className="mx-2 font-general-light flex justify-center items-center w-20 sm:w-36 mt-4 sm:mt-12 mb-2 sm:mb-0 text-base sm:text-lg border border-indigo-200 py-2 sm:py-2.5 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                aria-label="Download Resume"

              >
                <LiaFileAlt className="mr-1 sm:mr-3 h-4 w-4 sn:w-5 sm:h-5 duration-100"></LiaFileAlt>
                <span className="text-xs sm:text-base font-general-light duration-100">
                  View More
                </span>
              </a>
            </div>

          </div>

        </article>

      </div>
    </div>
  );
};

export default ProjectsPage;


