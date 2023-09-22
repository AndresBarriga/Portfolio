import React from "react";
import projectsCarousel from "../../../data/ProjectsCarousel";
import CarouselProps from "./CarouselProps";

function createCarouselCard(projectsCarousel) {
    return(
        <CarouselProps
        key={projectsCarousel.id}
        title={projectsCarousel.title}
        description={projectsCarousel.description}
        person={projectsCarousel.person}
        company={projectsCarousel.company}
        img={projectsCarousel.img}
        link={projectsCarousel.link}
        />
    )
}


const CarouselCard = () => {
    const card1 = projectsCarousel.find((projectsCarousel) => projectsCarousel.id === 1);
    const card2 = projectsCarousel.find((projectsCarousel) => projectsCarousel.id === 2);
    const card3 = projectsCarousel.find((projectsCarousel) => projectsCarousel.id === 3);
  
    return (
      <div id="keen-slider" className="keen-slider flex overflow-hidden relative select-none touch-callout-none tap-highlight-transparent min-h-full w-full">

        <div className="keen-slider__slide relative overflow-hidden w-full min-h-full">
          <blockquote className="flex flex-col h-full justify-between bg-white shadow-sm">
            {createCarouselCard(card1)}
          </blockquote>
        </div>

        <div className="keen-slider__slide relative overflow-hidden w-full min-h-full">
          <blockquote className="flex flex-col h-full justify-between bg-white shadow-sm ">
            {createCarouselCard(card2)}
          </blockquote>
        </div>

        <div className="keen-slider__slide relative overflow-hidden w-full min-h-full">
          <blockquote className="flex flex-col h-full justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
            {createCarouselCard(card3)}
          </blockquote>
        </div>

        
        
      </div>
    );
  }
  
  export default CarouselCard;
  

