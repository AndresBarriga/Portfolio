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
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-center ">
        {/* Div 1 */}
        <div>
            {/* Div 2 */}
            <div className="flex">
                {/* Div 3 */}
              <div className="w-1/3 pr-10 flex flex-col mx-7 justify-center">
                <h2 className="text-3xl font-general-bold sm:text-4xl">Building products for People</h2>
                <p className="mt-4 font-general-light text-gray-600"> With my startup background, I bring a lean mindset for building products fast. My psychology background uniquely connects me to building products that understand and enhance user experiences.</p>
              </div>
              {/* Div 4 */}
                    <div className="w-2/3 flex flex-wrap ">
                    {skillsData.map((skill, index) => (
                        createSkillCard(skill)
                    ))}
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="text-center mb-8"> 
                    <h1 className="text-3xl font-general-bold sm:text-4xl">Professional Certifications</h1>
                    <p className="mt-4 text-gray-600 font-general-light">I hold the following professional certifications, demonstrating my commitment to enhancing my skills and knowledge in Scrum and IT service management:</p>
                </div>
                <div className="flex space-x-4 mx-8">
                    {certifData.map((certif, index) => (
                        createCertifCard(certif)
                    ))}
                </div>
            </div>
        </section>
  );
}


export default MySkills;
