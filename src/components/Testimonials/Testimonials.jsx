import React, { useEffect, useState } from 'react';
import KeenSlider from 'https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm';
import TestimonialCard from './TestimonialCard';

const TestimonialsSlider = () => {
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
      <section className="bg-gray-50">
        <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-3xl font-general-bold sm:text-4xl">
              Working with me...
              </h2>
  
              <p className="mt-4 text-gray-600 font-general-light">
              Hear from my colleagues about what it's like to work with me.
              </p>
  
              <div className="mt-4 lg:hidden">
                <button
                  aria-label="Previous slide"
                  onClick={previousSlide}
                  className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                >
                  Previous
                </button>
  
                <button
                  aria-label="Next slide"
                  onClick={nextSlide}
                  className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white ml-2"
                >
                  Next
                </button>
              </div>
            </div>
  
            <div className="-mx-6 col-span-2 lg:mx-0">
              <TestimonialCard />
            </div>
          </div>
  
          <div className="mt-8 flex justify-center gap-4 lg:hidden">
            <button
              aria-label="Previous slide"
              onClick={previousSlide}
              className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
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
              className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
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
  export default TestimonialsSlider;