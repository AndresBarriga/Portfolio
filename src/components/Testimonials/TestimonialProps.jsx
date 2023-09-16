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
                <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                    {props.title}
                </p>

                <p className="mt-4 leading-relaxed text-gray-700">
                    {props.description}
                </p>
            </div>
        </div><footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6 flex items-center">
                <img
                    alt="Man"
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="h-14 w-14 rounded-full object-cover" />
                <p className="ml-2"> {props.person}</p>
                <p className="ml-2"> - {props.company}</p>
            </footer></>
    
    )
}

export default Testimonials;
