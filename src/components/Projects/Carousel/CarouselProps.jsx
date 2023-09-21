import React from "react";
import testimonialsData from "../../../data/testimonialsData";

function CarouselProps(props) {
    return(
       
      <><div>

            <div className="mt-4 flex justify-center items-center">
            <img
                    alt="Man"
                    src={props.img}
                    className="h-full rounded justify-items object-cover" />
                </div>
                <p className="text-xl mt-4 font-general-bold text-rose-600 sm:text-3xl">
                    {props.title}
                </p>

                <p className="text-sm font-general-light  mt-4 text-gray-600 sm:text-base md:text-lg">
                    {props.description}
                </p>
            
        </div><footer className="text-sm font-medium text-gray-700 sm:mt-6 flex items-center">
                
                <p className="ml-2 text-gray-600"> {props.person}</p>
                <p className="ml-2 font-general-italic text-gray-500"> - {props.company}</p>

            </footer></>
    
    )
}

export default CarouselProps;
