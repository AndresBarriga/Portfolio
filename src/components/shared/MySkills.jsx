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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-center">
        {/* Div 1 */}
        <div>
            {/* Div 2 */}
            <div className="flex">
                {/* Div 3 */}
              <div className="w-1/3 pr-4 flex flex-col justify-center">
                <h2 className="text-3xl font-bold sm:text-4xl">Building products for People</h2>
                <p className="mt-4 text-gray-600"> With my startup background, I bring a lean mindset for building products fast. My psychology background uniquely connects me to building products that understand and enhance user experiences.</p>
              </div>
              {/* Div 4 */}
                    <div className="w-2/3 flex flex-wrap ">
                    {skillsData.map((skill, index) => (
                        <Skills
                        key={index}
                        img={skill.img}
                        title={skill.title}
                        description={skill.description}
                        />
                    ))}
                    </div>
                </div>
            </div>
          </div>
        </div>
    </section>
  );
}


export default MySkills;
