import React, { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import STSProcess from "../../../images/STSProcess.png"

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};

function AccordionItem({ title, body, isOpen, onClick }) {
    return (
        <Accordion
            open={isOpen}
            animate={CUSTOM_ANIMATION}
            className="group relative w-full items-center rounded-t-[15px] bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] [&:not([data-te-collapse-collapsed])]:bg-neutral-800  ]"
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

export function DefaultAccordion() {
    const [openAccordion, setOpenAccordion] = useState(0);

    const handleOpen = (value) => setOpenAccordion(openAccordion === value ? 0 : value);

    return (
        <>  <div className="text-center mb-8">
            <h1 className="text-xl font-general-bold mt-6 sm:text-3xl">Full-service Telemedical Platform </h1>
            <h2 className="text-lg font-general mt-6 sm:text-2xl"> Telemonitoring in heart failure</h2>
            <p className="mt-4 text-gray-600 font-general-light text-sm sm:text-base">Solution to connect healthcare stakeholders and provide remote telemonitoring to patients <br></br> with chronic diseases through the analysis of vital data from the comfort of their homes</p>
        </div>
            <div className="flex ">
                <div className="w-screen mt-8 mx-4">
                    <div className="rounded-t-lg border border-neutral-200 bg-white">
                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Overview</h1>}
                            isOpen={openAccordion === 1}
                            onClick={() => handleOpen(1)}
                            body={<p className="text-xs sm:text-sm lg:text-base xl:text-lg">At STS Telemedical Solutions, we developed a full-service telemedical platform that enables doctors to monitor patients’ health 24/7 from the comfort of their homes. The product suite included a mobile app for patients and a web-based platform for doctors. </p>}
                        />
                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Problem Statement</h1>}
                            isOpen={openAccordion === 2}
                            onClick={() => handleOpen(2)}
                            body={<p className="text-xs sm:text-sm lg:text-base xl:text-lg">The primary challenge was to improve the healthcare of elderly patients with conditions like heart insufficiency, who typically visit the hospital only a few times a month for vital data checks. By enabling daily measurements, we aimed to enhance patient care and detect dangerous trends faster..</p>}
                        />
                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Solution </h1>}
                            isOpen={openAccordion === 3}
                            onClick={() => handleOpen(3)}
                            body={<p className="text-xs sm:text-sm lg:text-base xl:text-lg">In response to this challenge, our team developed a comprehensive telemedical platform. This platform empowered patients to take daily vital measurements from the comfort of their homes, enabling quicker detection of health issues and improved overall care.
                            </p>}
                        ></AccordionItem>
                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">How it works?</h1>}
                            isOpen={openAccordion === 4}
                            onClick={() => handleOpen(4)}
                            body={<><p className="text-xs sm:text-sm lg:text-base xl:text-lg">
                                Our telemedical platform empowers patients to take control of their health by allowing them to share vital measurements daily. Here's how it works:


                                <div>
                                    <span class="font-bold">Data Collection:</span> Patients connect their mobile app to various medical devices via Bluetooth. These devices include a <span class="italic">Spo2 monitor, ECG, BloodPressure monitor, and heart rate monitor</span>.
                                </div>

                                <div>
                                    <span class="font-bold">Data Analysis:</span> The platform collects these vital measurements and employs a sophisticated internal algorithm developed in collaboration with medical experts. This algorithm continuously analyzes the data, looking for any anomalies or concerning trends.
                                </div>

                                <div>
                                    <span class="font-bold">Alert Generation:</span> If the algorithm detects any irregularities or signs of potential health issues, it triggers an alert. These alerts are promptly attended to by the patient's doctor.
                                </div>

                                <div>
                                    <span class="font-bold">Doctor's Actions:</span> Doctors can take immediate actions based on the alerts generated. They may schedule an appointment with the patient for further evaluation, adjust medication with a valid prescription, or recommend specific interventions to ensure the patient's well-being.
                                </div></p>
                                <div className="flex justify-center sm:hidden">
                                    <img src={STSProcess} alt="STS PRocess" style={{  height: 'auto', marginTop: '8px' }}>
                                    </img>
                                </div>
                                <div className="hidden sm:block sm:flex justify-center items-center">
                                    <img  src={STSProcess} alt="STS PRocess" style={{ width: '50%', maxWidth: '50%', height: 'auto', marginTop: '8px' }}>
                                    </img>
                                </div></>
                            }
                        ></AccordionItem>

                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Product(s)</h1>}
                            isOpen={openAccordion === 5}
                            onClick={() => handleOpen(5)}
                            body={<p className="text-xs sm:text-sm lg:text-base xl:text-lg">
                                We developed two core products to revolutionize the healthcare landscape:


                                <div className="mt-4">
                                    <span class="font-bold">Web-Based Platform for Doctors:</span> Our web-based platform provides a robust and secure environment for doctors to monitor and analyze patient data in real-time. My role in this aspect was hands-on, where I served as the Product Manager from inception, overseeing the entire development process, and addressing the complex challenges that arose.
                                </div>
                                <div className="mt-2">
                                    <span class="font-bold">Main goal is to ensure the platform remains user-friendly and streamlines processes to enable doctors to efficiently treat patients, saving them time.</span></div>

                                <div className="mt-4">
                                    <span class="font-bold">Mobile App for Patients:</span> Our mobile application serves as a pivotal tool in revolutionizing patient care by enabling effortless sharing of vital measurements with medical devices. While my multifaceted role in shaping this product extends beyond traditional product management responsibilities, it's important to note that the development of this application was a collaborative effort. Working in close partnership with an external company, I leveraged my skills to ensure the successful creation of this transformative tool.
                                </div>
                                <div className="mt-2">
                                    <span class="font-bold">The aim is to create an intuitive user experience with large, easy-to-identify tiles and buttons, ensuring that using the app is as user-friendly and straightforward as possible for the older target audience.</span> </div>

                            </p>
                            }
                        ></AccordionItem>
                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">My Role</h1>}
                            isOpen={openAccordion === 6}
                            onClick={() => handleOpen(6)}
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            }
                        />
                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Building Process</h1>}
                            isOpen={openAccordion === 7}
                            onClick={() => handleOpen(7)}
                            body={
                                <> <p className="text-xs sm:text-sm lg:text-base xl:text-lg">
                                    <p>
                                        Our journey to develop the telemedical platform was a strategic process that unfolded in several key phases:
                                    </p>

                                    <div className="mt-2">
                                        <span class="font-bold">1. Minimum Viable Product (MVP)</span> We initiated the project by building an MVP and presenting the concept to medical professionals. This allowed us to gather valuable initial feedback and insights.
                                    </div>

                                    <div className="mt-2">
                                        <span class="font-bold">2. Requirements Gathering:</span> We actively collaborated with doctors, collecting their proposals and insights, which served as foundational requirements for our platform. These insights played a pivotal role in shaping our development roadmap.
                                    </div>

                                    <div className="mt-2">
                                        <span class="font-bold">3. Legal and Workflow Analysis</span> We conducted an in-depth analysis of relevant healthcare laws and regulations. Building upon this legal foundation, we meticulously designed workflows, including patient onboarding procedures and data management processes.
                                    </div>

                                    <div className="mt-2">
                                        <span class="font-bold">4. User-Centric Development: </span> Our development process was guided by user-centric principles. We worked closely with medical professionals to identify the vital data that needed measurement and devised robust methods for data analysis.
                                    </div>

                                    <div className="mt-2">
                                        <span class="font-bold">5. Initial Data Input: </span> We introduced a mobile app as a pivotal component of our platform. This app streamlined data input, allowing users to seamlessly connect medical devices via Bluetooth for accurate measurements.
                                    </div>

                                    <div className="mt-2">
                                        <span class="font-bold">6. Introduction of Mobile App: </span> Our development process was guided by user-centric principles. We worked closely with medical professionals to identify the vital data that needed measurement and devised robust methods for data analysis.
                                    </div>

                                    <div className="mt-2">
                                        <span class="font-bold">7. CRM Integration: </span> To enhance user engagement, we integrated a Customer Relationship Management (CRM) system, tightly linked to logistics. This enabled personalized interactions with patients and efficient management of healthcare resources.
                                    </div>

                                    <div className="mt-2">
                                        <span class="font-bold">8. User Adoption: </span> Throughout the development journey, we maintained meticulous documentation of processes, regulations, and project insights. This documentation ensured transparency and facilitated knowledge transfer within the team.
                                    </div>

                                    <p className="mt-2">
                                        This step-by-step approach enabled us to navigate complex healthcare challenges, incorporate medical expertise, and create a telemedical platform that was not only legally compliant but also user-friendly and effective.
                                    </p>
                                    </p>
                                </>
                            }
                        />

                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Challenges</h1>}
                            isOpen={openAccordion === 8}
                            onClick={() => handleOpen(8)}
                            body={<><p className="text-xs sm:text-sm lg:text-base xl:text-lg">
                                Our endeavor to develop the telemedical platform involved navigating several intricate challenges, each requiring meticulous attention and innovative solutions:


                                <div className="mt-4">
                                    <span class="font-bold">Legal Complexity - Multifaceted Regulations:</span> The legal landscape surrounding telemonitoring in healthcare is multifaceted and continually evolving. Complying with regulations such as the <span class="font-italic">BAnz AT 30.03.2021 Telemonitoring bei Herzinsuffizienz"</span> and the <span class="font-italic"> "Qualitätssicherungsvereinbarung Telemonitoring bei Herzinsuffizienz </span> was a paramount challenge. Additionally, accommodating the variations in legal requirements across different <span class="font-italic"> Bundesländer</span> (federal states) added complexity to our compliance efforts.</div>
                                <div className="mt-2">
                                    <span class="font-bold">Data Protection - Safeguarding Patient Privacy: </span> Ensuring the highest standards of data protection and privacy was a persistent challenge. We were committed to safeguarding patient data, implementing encryption, access controls, and strict data handling protocols to meet these stringent requirements.</div>

                                <div className="mt-2">
                                    <span class="font-bold">Variety of Medical Devices and Mobile App Integration:</span> Integrating a diverse range of medical devices into our platform was a complex technical challenge. Seamless connectivity between these devices and our mobile app required rigorous testing and technical expertise.</div>
                                <div className="mt-2">
                                    <span class="font-bold">Diverse Medical Software in Doctor Offices:</span> Doctors' offices often utilize a variety of medical software systems, each with its own data format and integration requirements. Ensuring compatibility and efficient data exchange with these systems was a multifaceted challenge.</div>
                                <div className="mt-2">
                                    <span class="font-bold">Data Analysis - Extracting Meaningful Insights:</span>The platform collected extensive patient data, necessitating the development of a sophisticated data analysis system. Balancing the need for meaningful insights while respecting data privacy posed a continuous challenge. </div>
                                <div className="mt-2">
                                    <span class="font-bold">Scaling Operations - Logistics and More: </span> As the project evolved, we faced operational challenges related to scaling. This encompassed logistics, resource allocation, and ensuring that our platform seamlessly integrated into the broader healthcare ecosystem.</div>

                            </p></>
                            }
                        />
                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Tech & Processes</h1>}
                            isOpen={openAccordion === 9}
                            onClick={() => handleOpen(9)}
                            body={
                                <>
                                    <p className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2">Our telemedical platform was built on a robust foundation of technology and efficient processes. Key elements of our technology stack and development processes included:
                                    <div className="flex mt-4">
                                        <div className="w-1/2 pr-4">
                                            <h2 className="text-xl font-bold">Technology Stack</h2>

                                            <div className="mt-4">
                                                <span className="font-bold">Backend Development:</span> Our backend development relied on technologies such as JavaScript and Node.js, ensuring the scalability and responsiveness of our platform
                                            </div>
                                            <div className="mt-2">
                                                <span className="font-bold">Frontend Development:</span> The frontend was crafted using technologies like JavaScript and React, providing a seamless user interface for both patients and healthcare providers.
                                            </div>
                                            <div className="mt-2">
                                                <span className="font-bold">Database Management:</span> We employed PostgreSQL for efficient data storage and management.
                                            </div>
                                            <div className="mt-2">
                                                <span className="font-bold">UX Design:</span> I played a role in shaping the platform's user experience (UX) design decisions, focusing on creating a seamless and efficient workflow for users.
                                            </div>
                                            <div className="mt-2">
                                                <span className="font-bold">API Integration:</span> To enable smooth communication between various components, we utilized APIs for data exchange.
                                            </div>
                                        </div>
                                        <div className="w-1/2 pl-4">
                                            <h2 className="text-xl font-bold">Development Processes</h2>
                                            <div>
                                                <div className="mt-4">
                                                    <span className="font-bold">Agile Methodology - Scrum:</span> We followed the Agile methodology with Scrum at its core. This framework facilitated iterative development, sprint planning, and continuous improvement, ensuring our project remained adaptable and aligned with evolving requirements.
                                                </div>
                                                <div className="mt-2">
                                                    <span className="font-bold">Continuous Integration/Continuous Deployment (CI/CD):</span> CI/CD pipelines were implemented to automate the testing and deployment processes, ensuring efficient and error-free updates.
                                                </div>
                                                <div className="mt-2">
                                                    <span className="font-bold">Data Security Measures:</span> To protect patient data, we implemented encryption, access controls, and strict data handling protocols, adhering to the highest data security standards.
                                                </div>
                                                <div className="mt-2">
                                                    <span className="font-bold">Cross-Functional Collaboration:</span> Our development process encouraged cross-functional collaboration, bringing together developers, designers, medical experts, legal advisors, and project managers to address the multifaceted aspects of our platform.
                                                </div>
                                                <div className="mt-2">
                                                    <span className="font-bold">User Feedback Integration:</span> User feedback played a crucial role in shaping our platform. We actively gathered feedback through onboarding sessions, workshops, and sprint reviews, ensuring that user insights directly influenced our development decisions.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </p>
                                </>
                            }
                        />

                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Results</h1>}
                            isOpen={openAccordion === 10}
                            onClick={() => handleOpen(10)}
                            body={
                                <>
                                    <div className="bg-gray-100 p-4 mt-4">
                                        <p className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2">
                                            Our collaborative efforts and meticulous approach yielded significant results in the telemedical solution we developed. These outcomes reflect the impact of our work and the value it brought to healthcare providers and patients alike.
                                        </p>
                                    </div>
                                    <ul className="mt-4 text-xs sm:text-sm lg:text-base xl:text-lg ">
                                        <li>
                                            <span className="font-bold">Enhanced Patient Care:</span> The implementation of our telemedical platform significantly improved patient care. Doctors could monitor patients' health 24/7, leading to early intervention, timely adjustments to treatment plans, and improved overall patient outcomes.
                                        </li>
                                        <li>
                                            <span className="font-bold">Legal Compliance:</span> We successfully navigated the complex legal landscape, ensuring compliance with healthcare regulations and data protection standards. This compliance not only mitigated legal risks but also built trust among healthcare providers and patients.
                                        </li>
                                        <li>
                                            <span className="font-bold">Streamlined Workflows:</span> The carefully defined workflows, from patient onboarding to data analysis, streamlined operations for healthcare providers. This efficiency translated to time savings, reduced administrative burden, and increased capacity to care for more patients.
                                        </li>
                                        <li>
                                            <span className="font-bold">User-Centered Design:</span> Our focus on user experience design led to an intuitive platform that healthcare providers found easy to use. This resulted in high user adoption rates and positive feedback.
                                        </li>
                                        <li>
                                            <span className="font-bold">Scalability:</span> As the project evolved, we ensured that the platform and app were scalable. This readiness for growth allowed us to expand our services, accommodating a larger user base.
                                        </li>
                                        <li>
                                            <span className="font-bold">Data Insights:</span> Our platform's data analysis capabilities provided doctors with valuable insights into patient health trends. This data-driven approach empowered informed decision-making and personalized patient care.
                                        </li>
                                    </ul>
                                </>
                            }
                        />


                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center"><iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/wHlrPgUOMrg?si=yJlifdPrqGDCMMnb"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            </div>
        </>
    );
}

export default DefaultAccordion;