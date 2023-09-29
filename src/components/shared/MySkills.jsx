import React from 'react';
import Skills from "./Skills";
import skillsData from '../../data/skillsData'; // Import the skills data



function createSkillCard(skillsData) {
    return (
        <Skills
        key={skillsData.id}
        title={skillsData.title}
        description={skillsData.description}
        img={skillsData.img}
        />
    );
}



const MySkills = () => {
  return (
  <section>
  <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    
              <div className="flex flex-col md:justify-between items-center md:flex-row mt-12 md:mt-2">
                      
                      <div className="flex flex-col justify-center md:w-2/4 ">
                          <h1 className="text-2xl font-general-bold sm:text-3xl md:text-4xl">Building <span className='text-indigo-500'>products for People</span></h1>
                          <p className=" text-gray-500 text-base mt-4 font-general-light  md:text-lg lg:text-1xl xl:text-2xl">With my startup background, I place <span className='text-indigo-500'>customer experience</span> at the forefront of product development. This customer-centric approach drives my passion for crafting products that <span className='text-indigo-500'>truly understand and enhance </span>user experiences. </p>
                      </div>
                      <div className="flex flex-row mt-4 flex-wrap space-evently md:w-auto ">
                          {skillsData.map((skill, index) => (
                              createSkillCard(skill)
                          ))}
                      </div>
              </div>


            </div>
        </section>

  );
}


export default MySkills;
