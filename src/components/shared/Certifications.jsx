import React from 'react';



const Certification = (props) => {
  return (
    <div className="flex-1 min-w-200" >
      {/* Card */}
      
        <img
          src={props.img}
          className=" ml-5 rounded-xl h-20 w-auto shadow-xl sm:h-25 custom-height-25   "
        />

        <div className="p-4">
          <a href="#">
            <h3 className=" font-secondary-bold text-base text-gray-900 sm:text-xl md:text-2xl">
              {props.title}
            </h3>
          </a>

          <p className="text-sm font-secondary-light mt-2 line-clamp-6 text-gray-500 sm:text-base hidden sm:block ">
            {props.description}
          </p>
          <a
            href={props.link}
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          >
            Find out more
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </a>
        </div>
      
    </div>
    
  );
}

export default Certification;

