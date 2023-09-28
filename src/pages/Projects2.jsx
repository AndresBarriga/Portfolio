import React from "react";
import Carousel from "../components/Projects/Carousel/Carousel";






const Projects2 = () => {

  return (
    <section className="p-4 lg:p-8 ">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-general-bold sm:text-3xl md:text-4xl">
          Personal Projects 👩🏻‍💻 🚧 🏗
        </h1>
        <p className="mt-4 text-gray-500 font-general-light text-base sm:text-lg">
        <span className='text-indigo-500 text-general-bold'>Join me along my journey </span> and discover some of the products that I have been working on
        </p>
      </div>
      <div className="flex flex-col items-center mx-auto bg-indigo-50">
      <Carousel />
      </div>

    </section>
  );
}
;

export default Projects2;
