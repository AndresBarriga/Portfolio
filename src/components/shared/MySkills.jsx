import React from 'react';
import Skills from "./Skills";
import skillsData from '../../data/skillsData'; // Import the skills data
import Certification from './Certifications';
import certifData from '../../data/certifData';


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


function createCertifCard(certifData) {
  return (
      <Certification
      key={certifData.id}
      title={certifData.title}
      description={certifData.description}
      img={certifData.img}
      link={certifData.link}
      />
  );
}

const MySkills = () => {
  return (
  <section>
  <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    
              <div className="flex flex-col md:justify-between items-center md:flex-row mt-12 md:mt-2">
                      
                      <div className="flex flex-col justify-center md:w-1/3 ">
                          <h1 className="text-2xl font-general-bold sm:text-3xl md:text-4xl">Building <span className='text-indigo-500'>products for People</span></h1>
                          <p className="text-base mt-4 font-general-light text-gray-600 sm:text-lg md:text-xl">With my startup background, I place <span className='text-indigo-500'>customer experience</span> at the forefront of product development. This customer-centric approach drives my passion for crafting products that <span className='text-indigo-500'>truly understand and enhance </span>user experiences. </p>
                      </div>
                      <div className="flex flex-row mt-4 flex-wrap space-evently md:w-2/3 ">
                          {skillsData.map((skill, index) => (
                              createSkillCard(skill)
                          ))}
                      </div>
              </div>

        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="text-center mb-8"> 
                    <h1 className="text-3xl font-general-bold sm:text-4xl">Professional Certifications</h1>
                    <p className="mt-4 text-base text-gray-600 font-general-light sm:text-lg md:text-xl">I hold the following professional certifications, demonstrating my commitment to enhancing my skills and knowledge in Scrum and IT service management:</p>
                </div>
                <div className="flex flex-col md:flex-row">
                    {certifData.map((certif, index) => (
                        createCertifCard(certif)
                    ))}
                </div>
            </div>
            </div>
        </section>

  );
}


export default MySkills;
