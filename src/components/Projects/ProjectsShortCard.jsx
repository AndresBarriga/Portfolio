import React from "react";
import { LiaFileAlt } from "react-icons/lia";

function ProjectShortCard(props) {
    return (
        /* ------Project 1------- */
        <>

            <div className="flex flex-col justify-center flex-1 p-6">
                <span className="text-xs uppercase dark:text-gray-400 sm:text-sm">{props.subtitle}</span>
                <h3 className="text-xl font-bold">{props.title}</h3>
                <p className="my-6 font-general-regular text-sm sm:text-base">{props.description}</p>

                <div className="flex">
                    <div className="flex-shrink-0 mt-2">
                        <div className="flex items-center justify-center w-6 h-6 rounded-md dark:bg-violet-400 dark:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="ml-4 mt-2">
                        <h4 className="text-sm font-seconday-light sm:text-base">{props.feature1title}</h4>
                        <p className="mt-2 text-xs font-seconday-light sm:text-sm">{props.feature1subtitle}</p>
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
                        <h4 className="text-sm font-seconday-light  sm:text-base">{props.feature2title}</h4>
                        <p className="mt-2 text-xs font-seconday-light sm:text-sm">{props.feature2subtitle}</p>
                    </div>
                </div>

                <a
                    href={props.link}
                    className="mx-7 font-general-medium flex justify-center items-center w-28 sm:w-36 mt-4 sm:mt-12 mb-2 sm:mb-0 text-base sm:text-lg border border-indigo-200 py-2 sm:py-2.5 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                    aria-label="See project"
                >
                    <LiaFileAlt className="mr-1 sm:mr-3 h-4 w-4 sn:w-5 sm:h-5 duration-100"></LiaFileAlt>
                    <span className="text-xs sm:text-base font-general-medium duration-100">
                        View Project
                    </span>
                </a>
            </div>


        </>
    )
}
export default ProjectShortCard;


