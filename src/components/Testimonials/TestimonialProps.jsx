import React from "react";
import Stars from "./stars"
import testimonialsData from "../../data/testimonialsData";

function Testimonials(props) {
    return(
       
      <><div>
            <div className="flex gap-0.5 text-green-500">
                <Stars />
                <Stars />
                <Stars />
                <Stars />
                <Stars />
            </div>

            <div className="mt-4">
                <p className="text-3xl font-general-bold text-rose-600 sm:text-3xl">
                    {props.title}
                </p>

                <p className="mt-4 text-gray-600 font-general-light">
                    {props.description}
                </p>
            </div>
        </div><footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6 flex items-center">
                <img
                    alt="Man"
                    src={props.img}
                    className="h-14 w-14 rounded-full object-cover" />
                <p className="ml-2 text-gray-600"> {props.person}</p>
                <p className="ml-2 font-general-italic text-gray-500"> - {props.company}</p>
            </footer></>
    
    )
}

export default Testimonials;
