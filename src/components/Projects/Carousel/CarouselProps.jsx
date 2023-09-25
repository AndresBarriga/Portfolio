import React from "react";
import { LiaFileAlt } from "react-icons/lia";
import testimonialsData from "../../../data/testimonialsData";

function CarouselProps(props) {
    return(
       
      <><div>

            <div className="mt-4 flex justify-center items-center">
            <img
                    alt="Man"
                    src={props.img}
                    className=" rounded justify-center object-cover h-[400px]" />
                </div>
                <div className="mx-4">
                <p className="text-xl mt-4 mx-auto font-general-bold text-indigo-500 sm:text-3xl">
                    {props.title}
                </p>

                <p className="text-sm font-general-light mt-4 text-gray-500 sm:text-base md:text-lg">
                    {props.description}
                </p>
                <div className="flex justify-end items-end">
                <a
        href={props.link}
        className="flex justify-center items-center font-general-light mx-2 w-20 sm:w-36 mt-4 sm:mt-12 mb-2 sm:mb-0 text-base sm:text-lg border border-indigo-200 py-2 sm:py-2.5 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover.text-white duration-500"
        aria-label="Download Resume"
      >
        <LiaFileAlt className="mx-2 h-5 w-5 sm:mx-3  sm:w-6 sm:h-6 duration-100"></LiaFileAlt>
        <span className="text-xs font-general-medium duration-300 sm:text-sm md:text-base">
          View More
        </span>
      </a>
      </div>
      
        </div><footer className="text-sm font-medium text-gray-700 mx-2 sm:mt-6 flex items-center">
                
                <p className="ml-2 text-gray-600"> {props.person}</p>
                <p className="ml-2 font-general-italic text-gray-500 justify-end "> - {props.company}</p>

            </footer>
            </div></>
    
    )
}

export default CarouselProps;
