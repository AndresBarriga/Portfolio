import React from 'react';



const Certification = (props) => {
  return (
    <div>
      {/* Card */}
      <article className="group">
        <img
          src={props.img}
          className="h-40 w-40 ml-5 rounded-xl object-cover shadow-xl "
        />

        <div className="p-4">
          <a href="#">
            <h3 className="text-lg font-secondary-bold text-gray-900">
              {props.title}
            </h3>
          </a>

          <p className="mt-2 line-clamp-6 text-sm text-gray-500 font-secondary-light">
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
      </article>
    </div>
    
  );
}

export default Certification;

