import React from "react";
import { LiaFileAlt } from "react-icons/lia";
import { Link } from 'react-router-dom';


function ProjectCardLongR(props) {
    return (
        <div className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2 mx-2">

        <article className="bg-gray-300 bg-opacity-75 w-full md:w-2/3 relative overflow-hidden rounded-lg shadow transition hover:shadow-lg "  >
          <img
            alt="Office"
            src={props.img}
            className="absolute inset-0  h-full w-full "
          />
          

          <div
            className="relative pt-32 bg-opacity-75 sm:pt-48 lg:pt-64 ml-14"
          >
            <div className="p-4 sm:p-6">
              <time dateTime="2022-10-10" className="block text-xs text-white/90">
                {props.industry}
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white/90">
                  {props.title}
                </h3>
              </a>

              <p className="mt-2 md:w-2/3  text-sm/relaxed text-white/95">
                {props.description}
              </p>

            </div>
          </div>
        </article>


        <article className="w-10/12 md:w-4/6 relative overflow-hidden rounded-lg shadow transition hover:shadow-lg mt-4 bg-gray-300 bg-opacity-75" style={{ position: 'relative', zIndex: '1', left: '-80px' }}>
          <div
            className="grid grid-cols-4 grid-rows-3 mt-6 mb-6 gap-2 relative pt-0 sm:pt-0 lg:pt-0  "
          >

            <div className="col-span-2 col-start-2 row-span-3 col-span-3 mr-6">
              <h3 className=" text-base ">
                {props.title2}
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
                  <h4 className="font-seconday-light text-sm dark:text-gray-50">{props.feature1}</h4>
                  <p className="mt-2 text-xs font-seconday-light dark:text-gray-400">{props.feature1more}</p>
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
                  <h4 className="text-sm font-seconday-light leadi dark:text-gray-50">{props.feature2}</h4>
                  <p className="mt-2 text-sm font-seconday-light dark:text-gray-400">{props.feature2more}</p>
                </div>
              </div>
              <a
                href={props.link}
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
    )
}

export default ProjectCardLongR;