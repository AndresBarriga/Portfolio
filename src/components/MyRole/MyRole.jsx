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
            <h2 className="text-lg font-general mt-6 sm:text-2xl">As a Product Manager my role it is about defining requirements, being in communication with the team and stakeholders to gather feedback and improve the product</h2>
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
                                <p className="text-xs sm:text-sm lg:text-base xl:text-lg mt"> As the Product Manager, I assumed a multifaceted role that encompassed both <span class="font-bold">strategic leadership and hands-on involvement</span> in the development process. At the core of my responsibilities was the shaping of team dynamics, the definition of sprint requirements, and the establishment of workflows critical to the project's success. This role required me to foster collaboration, ensure effective communication, and nurture an agile, adaptive work environment. From defining sprint requirements to meticulously crafting the "Definition of Done," I played an integral role in guiding the project's iterative development process. Additionally, I was deeply involved in defining workflows, including logistics and testing processes, to streamline our operations and enhance project efficiency. </p>
                            </div>
                            <div className="flex mt-4 text-xs sm:text-sm lg:text-base xl:text-lg mt-2">
                                    <div className="w-1/2 pr-4"> <h2 className="text-xl font-bold">Web Platform</h2>
                                        <p className="mt-2">The development of our web-based platform marked a significant milestone in our telemedical solution. As the Product Manager, I played a central role in <span class="font-bold"> shaping the platform's evolution </span> from inception to its readiness for launch. Here are the key aspects of my contributions: </p>
                                        <div className="mt-4">
                                            <span class="font-bold ">Product Development:</span> My role involved providing strategic oversight throughout the platform's development lifecycle. I ensured that our platform's features aligned seamlessly with the needs of healthcare providers and adhered to our overarching project objectives  </div>

                                        <div className="mt-2">
                                            <span class="font-bold">Compliance and Regulation:</span> Navigating complex legal requirements was a critical aspect of my role. I collaborated closely with legal experts to ensure that our platform complied with healthcare regulations and data protection standards. </div>
                                        <div className="mt-2">
                                            <span class="font-bold">Feedback Integration:</span> Active engagement with medical professionals and stakeholders was a hallmark of this phase. Through onboarding sessions, workshops, and participation in sprint reviews, I actively gathered feedback and ensured its integration into the platform's development. This iterative process allowed us to refine the platform based on real-world insights.</div>
                                        <div className="mt-2">
                                            <span class="font-bold">UX Design:</span> I played a role in shaping the platform's user experience (UX) design decisions, focusing on creating a seamless and efficient workflow for users           <div>
                                            </div>
                                            <div className="mt-2">
                                                <span class="font-bold">User Training and Onboarding:</span> To facilitate the platform's adoption, I was responsible for creating training materials and conducting onboarding sessions for healthcare providers.  </div>
                                            <div className="mt-2">
                                                <span class="font-bold">Project Milestones: </span> Several notable milestones marked our journey toward launching the web platform. These milestones included successful beta testing, achieving regulatory approvals, and the platform's integration into the healthcare ecosystem </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 pl-4">
                                        <h2 className="text-xl font-bold">Mobile App</h2>
                                        <div>
                                            <p className="mt-2"> The mobile phone app, developed in collaboration with an external company, represents a key component of our telemedical platform. My role was pivotal in ensuring the successful development and seamless integration of this mobile application with external medical devices. Throughout the development process, I played an active role in working alongside the external team to bring this innovative app to fruition.
                                            </p>
                                            <div className="mt-4">
                                                <span class="font-bold ">Scope of Work:</span> I initiated the project by creating a comprehensive scope of work, defining clear objectives, deliverables, and milestones.
                                            </div>
                                            <div className="mt-2">
                                                <span class="font-bold">Technical Liaison:</span>Serving as a crucial link between our internal team and external collaborators, I engaged in technical discussions and negotiations. This role required me to effectively communicate complex technical requirements and ensure alignment with our product vision.
                                            </div>
                                            <div className="mt-2">
                                                <span class="font-bold">External Partnerships: </span>Meticulously, I defined and documented the technical requirements, leaving no room for ambiguity and ensuring the app's seamless functionality.                     </div>
                                            <div className="mt-2">
                                                <span class="font-bold">Requirements Definition: </span>Collaboration with external device providers was integral to our project's success. I actively managed these partnerships, obtaining essential documentation and logs to facilitate seamless device integration.
                                            </div>
                                            <div className="mt-2">
                                                <span class="font-bold">Testing and Feedback: </span>Rigorous testing was integral to our development process. I actively tested the mobile app, identified improvements, and provided feedback to the external team. Additionally, I ensured seamless integration with our platform application, ensuring a cohesive user experience.
                                            </div>   </div>
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
                                <p className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2"> Primary contact between the development team and the diferent stakeholders at the company that we were building the product for. Responsible for defining requirements, gathering feedback, doing the set up and onboarding on site, and solving technical problems by using techniques such as getting the logs from repeater. </p>
                            </div><div className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2">
                            <li>Key role in defining the requirements, specifications, and features of the product, based on the needs and preferences of the client and the users. I communicated these to the development team and ensured that they were aligned with the project goals and scope.</li>
                            <li>Testing, debugging, and troubleshooting the product, both on the app and on the radios. I reported any issues or bugs to the development team and helped them resolve them as soon as possible.</li>
                            <li>Contributed to the documentation, presentation, and delivery of the product, both internally and externally. I prepared user manuals, training materials, and demo videos for the product. I also conducted training sessions and workshops for the client and the users on how to use the product effectively and efficiently.</li>
                            <li>Ongoing support and maintenance for the product, after it was launched and deployed. I monitored its performance, usage, and feedback, and suggested improvements or enhancements to the development team.</li>
                            <div className="text-xs sm:text-sm lg:text-base xl:text-lg mt-4">Some of the skills and tools that I used or learned during the project were:
                            
                            <li>Communication skills: I used various communication channels and methods, phone calls, meetings, reports, presentations, etc., to communicate effectively with different stakeholders. I also used clear, concise, and polite language to convey information, feedback, instructions, etc.</li>
                            <li>Technical skills: I used various technical tools and platforms, such as MOTORBO 2-way radios, repeaters, laptops, mobile phones, Bluetooth, Wi-Fi, etc., to work with the product and its components. I also used various software applications and systems, such as app development tools, Product Management tools (Confluence, Jira) , testing tools , documentation tools , presentation tools , etc., to create, test, debug, document, present, and deliver the product.</li>
                            <li>Problem-solving skills: I used various problem-solving techniques and strategies, such as brainstorming, research, analysis, testing, debugging, troubleshooting, etc., to solve any issues or challenges that arose during the product development process.</li>
                            </div>
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
                           
                            isOpen={openAccordion === 3}
                            onClick={() => handleOpen(3)}
                            body={<><div className="bg-gray-100 p-4">
                                <p className="mt-2 text-xs sm:text-sm lg:text-base xl:text-lg"> As the Product Manager for the "Pumma Connect" project, I assumed a central role in orchestrating its development, from conceptualization to successful implementation. </p>
                            </div><div className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2">
                            <li>My role was managing the product, defining requirements and bulding a draft with a designer, talk to clients, order the pieces, organise prototype buildunig, go with engineer to site to make the installation, etc.</li>
                            <li>I was responsible for overseeing the entire product development process, from ideation to delivery. I coordinated and communicated with different stakeholders, such as the development team, the client, the users, the suppliers, etc. I also ensured that the product met the quality standards and expectations of the client and the users.</li>
                            <li>I also contributed to the design, testing, and troubleshooting of the product, both on the software and hardware aspects.I worked with the engineer to test and debug the product on different devices and platforms, using tools such as network analyzers. I also helped them resolve any issues or challenges that arose during the product development process.</li>
                             My responsibilities encompassed a wide range of tasks and activities crucial to the project's success:
                             <li>Requirement Gathering</li>
                             <li>Client Engagement</li>
                             <li>Materials Procurement</li>
                             <li>Project Oversight</li>
                             <li>On-Site Installations</li>
                             <li>Performance Measurement</li>
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