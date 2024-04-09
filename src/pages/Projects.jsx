import React from "react";
import ProjectShortCard from "../components/Projects/ProjectsShortCard";
import projectsShortCardData from "../data/projectsShortCardData";
import box from "../images/Box.png";


function createProjectCard(projectsShortCardData) {
  return (
    <ProjectShortCard
      key={projectsShortCardData.id}
      title={projectsShortCardData.title}
      subtitle={projectsShortCardData.subtitle}
      description={projectsShortCardData.description}
      feature1title={projectsShortCardData.feature1title}
      feature1subtitle={projectsShortCardData.feature1subtitle}
      feature1subtitle2={projectsShortCardData.feature1subtitle2}
      feature1subtitle3={projectsShortCardData.feature1subtitle3}
      feature2title={projectsShortCardData.feature2title}
      feature2subtitle={projectsShortCardData.feature2subtitle}
      feature2subtitle2={projectsShortCardData.feature2subtitle2}
      feature2subtitle3={projectsShortCardData.feature2subtitle3}
      link={projectsShortCardData.link}
    />
  );
}

const Projects = () => {
  const project1 = projectsShortCardData.find(project => project.id === 1);
  const project2 = projectsShortCardData.find(project => project.id === 2);
  const project3 = projectsShortCardData.find(project => project.id === 3);
  const project4 = projectsShortCardData.find(project => project.id === 4);

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
      <div className="container mx-auto space-y-12">
      <div className="flex flex-col overflow-hidden items-center rounded-md shadow-sm lg:flex-row">
          <img
            src="https://i.ibb.co/PDRWCRN/overview.png"
            alt=""
            className=" my-7 w-400"
          />
          {createProjectCard(project1)}
        </div>
        </div>
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden items-center rounded-md shadow-sm lg:flex-row">
          <img
            src="https://i.ibb.co/887vM4C/medical-banner-with-doctor-working-laptop.jpg"
            alt=""
            className="h-60 w-auto"
          />
          {createProjectCard(project2)}
        </div>
        <div className=" justify-center items-center md:hidden">
        <img
            src="https://i.ibb.co/887vM4C/medical-banner-with-doctor-working-laptop.jpg"
            alt=""
            className="h-60 w-auto "
          />
          </div>
        <div className="flex flex-col-rev items-center overflow-hidden rounded-md shadow-sm lg:flex-row">
          
          {createProjectCard(project4)}
          <div className="flex justify-center items-center h-60 ">
          <div className="hidden md:block">
          <img
            src={box}
            alt=""
            className="w-auto my-7 sm:h-80 "
          />
          </div>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden items-center rounded-md shadow-sm lg:flex-row">
          <img
            src="https://i.ibb.co/9qNxcym/futuristic-smart-city-with-5g-global-network-technology.jpg"
            alt=""
            className="h-80 my-7 w-600"
          />
          {createProjectCard(project3)}
        </div>

      </div>
    </section>
  );
};

export default Projects;
