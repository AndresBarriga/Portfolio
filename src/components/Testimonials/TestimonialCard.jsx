import React from "react";
import testimonialsData from "../../data/testimonialsData";
import Testimonials from "./TestimonialProps";

function createTestimonialCard(testimonialsData) {
    return(
        <Testimonials
        key={testimonialsData.id}
        title={testimonialsData.title}
        description={testimonialsData.description}
        person={testimonialsData.person}
        company={testimonialsData.company}
        img={testimonialsData.img}
        />
    )
}


const TestimonialCard = () => {
    const card1 = testimonialsData.find((testimonial) => testimonial.id === 1);
    const card2 = testimonialsData.find((testimonial) => testimonial.id === 2);
    const card3 = testimonialsData.find((testimonial) => testimonial.id === 3);
  
    return (
      <div id="keen-slider" className="keen-slider flex overflow-hidden relative select-none touch-callout-none tap-highlight-transparent min-h-full w-full">

        <div className="keen-slider__slide relative overflow-hidden w-full min-h-full">
          <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
            {createTestimonialCard(card1)}
          </blockquote>
        </div>

        <div className="keen-slider__slide relative overflow-hidden w-full min-h-full">
          <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
            {createTestimonialCard(card2)}
          </blockquote>
        </div>

        <div className="keen-slider__slide relative overflow-hidden w-full min-h-full">
          <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
            {createTestimonialCard(card3)}
          </blockquote>
        </div>

        
        
      </div>
    );
  }
  
  export default TestimonialCard;
  

