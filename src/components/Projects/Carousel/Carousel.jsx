import React, { useEffect, useState } from 'react';
import KeenSlider from "keen-slider";
import CarouselCard from './CarouselCard';

const Carousel = () => {
  const [slider, setSlider] = useState(null);
  

  useEffect(() => {
    const keenSlider = new KeenSlider('#keen-slider', {
      loop: true,
      slidesPerView: 2, // Show 2 slides at a time
      spacing: 16,
      breakpoints: {
        '(min-width: 1024px)': {
          slidesPerView: 3, // On larger screens, show 3 slides at a time
          spacing: 32,
        },
      },
    });

    setSlider(keenSlider);

    return () => {
      keenSlider.destroy(); // Clean up the slider when the component unmounts
    };
  }, []); // Empty dependency array to ensure this effect runs only once.

  const previousSlide = () => {
    if (slider) {
      slider.prev();
    }
  };

  const nextSlide = () => {
    if (slider) {
      slider.next();
    }
  };

  return (
    <div>
    <section className="bg-indigo-50">
      <div className="mx-10 max-w-[1340px] px-4 py-12 sm:px-6 ">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-8 ">
            {/* Empty div for spacing on smaller screens */}
            
            <div className="col-span-2">
              <CarouselCard />
            </div>
          </div>
        </div>
  
        <div className="mt-8 flex justify-center gap-4 ">
          <button
            aria-label="Previous slide"
            onClick={previousSlide}
            className="rounded-full border border-indigo-500 p-4 text-indigo-600 transition hover:bg-rose-600 hover:text-white"
          >
            <svg
              className="h-5 w-5 -rotate-180 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
  
          <button
            aria-label="Next slide"
            onClick={nextSlide}
            className="rounded-full border border-indigo-500 p-4 text-indigo-500 transition hover:bg-indigo-600 hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  </div>
  
  );
  };
  export default Carousel;