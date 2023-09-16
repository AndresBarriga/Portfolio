import React from "react";
import ProjectShortCard from "../components/Projects/ProjectsShortCard";
import projectsShortCardData from "../data/projectsShortCardData";

function createProjectCard(projectsShortCardData) {
  return (
    <ProjectShortCard
      key={projectsShortCardData.id}
      subtitle={projectsShortCardData.subtitle}
      title={projectsShortCardData.title}
      description={projectsShortCardData.description}
      feature1title={projectsShortCardData.feature1title}
      feature1subtitle={projectsShortCardData.feature1subtitle}
      feature2title={projectsShortCardData.feature2title}
      feature2subtitle={projectsShortCardData.feature2subtitle}
    />
  );
}

const Projects = () => {
  const project1 = projectsShortCardData.find(project => project.id === 1);
  const project2 = projectsShortCardData.find(project => project.id === 2);
  const project3 = projectsShortCardData.find(project => project.id === 3);

  return (
    <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-general-bold sm:text-4xl">
          Personal Projects 👩🏻‍💻 🚧 🏗
        </h1>
        <p className="mt-4 text-gray-600 font-general-light">
          I hold the following professional certifications, demonstrating my
          commitment
        </p>
        <p className="mt-4 text-gray-600 font-general-light">
          to enhancing my skills and knowledge in Scrum and IT service
          management:
        </p>
      </div>

      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://source.unsplash.com/640x480/?1"
            alt=""
            className="h-80 my-7 dark:bg-gray-500 aspect-video"
          />
          {createProjectCard(project1)}
        </div>

        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          {createProjectCard(project2)}
          <img
            src="https://source.unsplash.com/640x480/?1"
            alt=""
            className="h-80 my-7 dark:bg-gray-500 aspect-video"
          />
        </div>

        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://source.unsplash.com/640x480/?1"
            alt=""
            className="h-80 my-7 dark:bg-gray-500 aspect-video"
          />
          {createProjectCard(project3)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
