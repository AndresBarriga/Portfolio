import React, { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};

function AccordionItem({ title, body, isOpen, onClick }) {
    return (
        <Accordion
            open={isOpen}
            animate={CUSTOM_ANIMATION}
            className="group relative w-full items-center rounded-t-[15px] bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] ]"
        >
            <AccordionHeader onClick={onClick}>
                <span className="mr-auto">{title}</span>
                <span className="ml-auto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke-width="4"
                        viewBox="0 0 24 24"
                        stroke={isOpen ? '#336dec' : 'currentColor'}
                        className={`h-5 w-5 transform transition-transform duration-200 ease-in-out ${isOpen ? 'rotate-180' : ''
                            }`}
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </span>
            </AccordionHeader>
            <AccordionBody>
                {body}
            </AccordionBody>
        </Accordion>
    );
}

export function MyRole() {
    const [openAccordion, setOpenAccordion] = useState(0);

    const handleOpen = (value) => setOpenAccordion(openAccordion === value ? 0 : value);

    return (
        <>  <div className="text-center mb-8">
            <h1 className="text-xl font-general-bold mt-6 sm:text-3xl">My Role Within The Products </h1>
              <p className="mt-4 text-gray-600 font-general-light text-sm sm:text-base">In this section you will able to get an overview of the role that I played in the different products</p>
        </div>
            <div className="flex ">
                <div className="w-screen mt-8 mx-4">
                    <div className="rounded-t-lg border border-neutral-200 bg-white">
                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">My Role in the Telemedicine Platform</h1>}
                            isOpen={openAccordion === 1}
                            onClick={() => handleOpen(1)}
                            body={<><div className="bg-gray-100 p-4">
                                <h2 className="text-xl font-bold">My Role in the Product</h2>
                                <p className="text-xs sm:text-sm lg:text-base xl:text-lg mt"> My role included both <span class="font-bold">strategic leadership and hands-on involvement</span> in the development process. At the core of my responsibilities was the shaping of team dynamics, the definition of sprint requirements, and the establishment of workflows critical to the project's success. This role required me to foster collaboration, ensure effective communication, and nurture an agile, adaptive work environment. From defining sprint requirements to meticulously crafting the "Definition of Done," I played an integral role in guiding the project's iterative development process. Additionally, I was deeply involved in defining workflows, including logistics and testing processes, to streamline our operations and enhance project efficiency. </p>
                            </div>
                            <div className="flex mt-4 text-xs sm:text-sm lg:text-base xl:text-lg mt-2">
                                    <div className="w-1/2 pr-4"> <h2 className="text-xl font-bold">Web Platform</h2>
                                        <p className="mt-2">The development of our web-based platform marked a significant milestone in our telemedical solution. As the Product Manager, I played a central role in <span class="font-bold"> shaping the platform's evolution </span> from inception to its readiness for launch. Here are the key aspects of my contributions: </p>
                                        <div className="mt-4">
                                            <span class="font-bold ">Product Development:</span> Strategic oversight throughout the platform's development lifecycle. I ensured that our platform's features aligned seamlessly with user and business needs  </div>

                                        <div className="mt-2">
                                            <span class="font-bold">Compliance and Regulation:</span> Navigating complex legal requirements was critical. I collaborated with legal experts to ensure that our platform complied with healthcare regulations and data protection standards. </div>
                                        <div className="mt-2">
                                            <span class="font-bold">Feedback Integration:</span> Active engagement with medical professionals and stakeholders. Through onboarding sessions, workshops, and participation in sprint reviews, I  gathered feedback and ensured its integration into the platform's development. This iterative process allowed us to refine the platform based on real-world insights.</div>
                                        <div className="mt-2">
                                            <span class="font-bold">UX Design:</span> Shaping the platform's user experience (UX) design decisions, focusing on creating a seamless and efficient workflow for users           <div>
                                            </div>
                                            <div className="mt-2">
                                                <span class="font-bold">User Training and Onboarding:</span> I was responsible for creating training materials and conducting onboarding sessions for healthcare providers.  </div>
                                            </div>
                                    </div>
                                    <div className="w-1/2 pl-4">
                                        <h2 className="text-xl font-bold">Mobile App</h2>
                                        <div>
                                            <p className="mt-2"> The App was developed in collaboration with an external company. My role was ensuring the successful development and seamless integration of the app with external medical devices.I played an active role in working with the external team to bring this app to fruition.
                                            </p>
                                            <div className="mt-4">
                                                <span class="font-bold ">Scope of Work:</span> I initiated the project by creating a comprehensive scope of work, defining clear objectives, deliverables, and milestones.
                                            </div>
                                            <div className="mt-2">
                                                <span class="font-bold">Technical Liaison:</span> Serving as a link between our internal team and externalss. It required me to effectively communicate complex technical requirements and ensure alignment with our product vision.
                                            </div>
                                            <div className="mt-2">
                                                <span class="font-bold">Technical Requirements Definition: </span>Collaboration with external device providers was a must to our project's success. I  managed these partnerships, obtaining documentation and logs to facilitate the devices integration.
                                            </div>
                                            <div className="mt-2">
                                                <span class="font-bold">Testing and Feedback: </span> I actively tested the mobile app, identified improvements, and provided feedback to the external team. Additionally, I ensured seamless integration with our platform application, ensuring a cohesive user experience.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                            <a
                        href="/projects/project1"
                        className="font-general-medium flex flex-col justify-center mt-4 items-center mx-auto w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                        aria-label="See Projectss"
                    >
                        
                        <span className="text-sm sm:text-lg font-general-medium duration-100">
                            See Complete Project
                        </span>

                    </a>
                                  
                                
                            </>
                            }
                        />
                       <AccordionItem
                             title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">My Role in the Walkie-Talkie Management App</h1>}
                           
                           
                             isOpen={openAccordion === 2}
                             onClick={() => handleOpen(2)}
                             body={<><div className="bg-gray-100 p-4 ">
                                 <h2 className="text-base sm:text-lg lg:text-xl font-bold">My Role in the Product</h2>
                                 <p className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2"> Contact between the development team and the stakeholders (engineers, managers) at the company that we were building the product for. Responsible for defining requirements, gathering feedback, doing the set up, onboarding, and solving technical problems onsite. </p>
                             </div><div className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2">
                             <li>Requirements, specifications, and features definition, based on users input. Put these into a Product Backlog and managed Sprints.</li>
                             <li>Testing, debugging, and troubleshooting the product. I reported any issues or bugs to the development team and helped them resolve them as soon as possible.</li>
                             <li>Documentation, presentation, and delivery of the product. I prepared user manuals, training materials, and demo videos for the product. I also conducted training sessions onsite.</li>
                             <li>Ongoing support and maintenance for the product, after it was launched. Monitored its performance and usage, gathered feedback and introduced it into the development cycle.</li>
                         
                             
                            <a
                        href="/projects/project2"
                        className="font-general-medium flex flex-col justify-center mt-4 items-center mx-auto w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                        aria-label="See Projectss"
                    >
                        
                        <span className="text-sm sm:text-lg font-general-medium duration-100">
                            See Complete Project
                        </span>

                    </a>
                            </div>
                                    
                                    
                            </>
                            }
                        />
                        <AccordionItem
                             title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">My Role in the Puma Connect Project</h1>}
                           
                             isOpen={openAccordion === 5}
                             onClick={() => handleOpen(5)}
                             body={<><div className="bg-gray-100 p-4">
                                 <p className="mt-2 text-xs sm:text-sm lg:text-base xl:text-lg"> As the Product Manager for the "Pumma Connect" project, I assumed a central role in orchestrating its development, from conceptualization to successful implementation. </p>
                             </div><div className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2">
                              My responsibilities encompassed a wide range of tasks and activities crucial to the project's success:
                              <li>Requirement Gathering</li>
                              <li>Client Engagement</li>
                              <li>Materials Procurement</li>
                              <li>Project Oversight</li>
                              <li>On-Site Installations</li>
                              <li>Performance Measurement</li>
                              <li>Testing and troubleshooting</li>
                              <li>Feedback Integration and Customization</li>
                             
                             
                               
                             <a
                        href="/projects/project3"
                        className="font-general-medium flex flex-col justify-center mt-4 items-center mx-auto w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                        aria-label="See Projectss"
                    >
                        
                        <span className="text-sm sm:text-lg font-general-medium duration-100">
                            See Complete Project
                        </span>

                    </a>
                            
                            </div>
                              
                                    
                            </>
                            }
                        />


                    </div>
                </div>
            </div>
  
        </>
    );
}

export default MyRole;