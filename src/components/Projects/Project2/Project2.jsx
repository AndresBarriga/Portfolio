import React, { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import SchemaRadio from "../../../images/SchemaRadio.png";


const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};

function AccordionItem({ title, body, isOpen, onClick }) {
    return (
        <Accordion
            open={isOpen}
            animate={CUSTOM_ANIMATION}
            className="group relative w-full items-center rounded-t-[15px] bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]]"
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

export function Project2() {
    const [openAccordion, setOpenAccordion] = useState(0);

    const handleOpen = (value) => setOpenAccordion(openAccordion === value ? 0 : value);

    return (
        <>  <div className="text-center mb-8 mx-10">
            <h1 className="text-xl font-general-bold mt-6 sm:text-3xl">Walkie Talkies Management App </h1>
            <h2 className="text-lg font-general mt-6 sm:text-2xl">  In a world where seamless communication is paramount, <br /> our customizable mobile application emerged as a game-changer.</h2>
            <p className="mt-4 text-gray-600 font-general-light text-sm sm:text-base">A groundbreaking solution that revolutionized how our client, a prominent organization in the logitic sector, managed their radio systems</p>
        </div>
            <div className="flex">
            <div className="w-screen mt-8 mx-4">
                    <div className=" rounded-t-lg border border-neutral-200 bg-white ">
                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Overview</h1>}
                            isOpen={openAccordion === 1}
                            onClick={() => handleOpen(1)}
                            body={<p className="text-xs sm:text-sm lg:text-base xl:text-lg">Introducing the Walkie Talkies Management App— a dynamic mobile application designed to empower users in effectively managing  2-way radios. These radios are essential devices that facilitate wireless communication over short distances, playing a pivotal role in various industries such as logistics , construction, security or hospitality 
                            <div>
                                    <span class="font-bold mt-2">Key Features:</span> 
                                    <li><span class="font-bold mt-2">Effortless Radio Management: </span> Our app simplifies the complex task of managing Walkie Talkies, offering an intuitive interface for efficient control.</li>
                                    <li><span class="font-bold mt-2">Over-the-Air Updates: </span>Stay up-to-date with ease. Users can install new software versions directly through the app, eliminating the need for complex computer connections.</li>
                                    </div>

                                <div>
                                   <li> <span class="font-bold mt-2">A Tailored Solution:</span> This app stands as a testament to innovation and adaptability, crafted as a customizable service for a major client.</li>
                                    
                                   <li> <span class="font-bold mt-2">Target Market:</span> It comprises businesses that rely on seamless communication to coordinate operations.</li>
                                    
                                    </div>
                                    </p>}
                        />
                        <AccordionItem
                             title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Problem</h1>}
                          
                            isOpen={openAccordion === 2}
                            onClick={() => handleOpen(2)}
                            body={<p className="text-xs sm:text-sm lg:text-base xl:text-lg"> <div className="bg-gray-100 p-4">Effective communication is the lifeblood of success. Imagine the biggest world logistic company and how smooth communication needs to be.</div>
                            <div>
                                    <span class=" mt-4">Managing Walkie Talkies </span> can be very time-consuming for both the users and the administrators. 
                                    <li>Administrators need to monitor and control the usage of radios across different departments, locations, and workers, such as assigning radios, limiting usage, retrieving logs, blocking radios, and sending messages</li>
                                    <li>Radios needs to be updated regularly to ensure optimal performance and security, which <span class="font-bold">requires connecting them to a computer</span> and following a <span class="font-bold">complex process.</span></li>
                                    </div>

                                <div className="mt-2">
                                     The existing solutions or alternatives are either too costly, too complicated, or too limited.</div>
                                     </p>}/>
                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Solution</h1>}
                            
                            isOpen={openAccordion === 3}
                            onClick={() => handleOpen(3)}
                            body={<p className="text-xs sm:text-sm lg:text-base xl:text-lg">The solution is an app that allows users to manage the usage of the radios in a simple and convenient way. <br />The app has the following features:
                            <div className="mt-2">
                            <li className="mt-2"><span class="font-bold">Linking radios to workers via PIN:</span> Users can easily be linked to a radio by entering a unique PIN code. Radios are at the same time always <span class="font-bold">related to an user</span></li>
                            <li className="mt-2"><span class="font-bold">Retrieving logs for messages:</span> Administrators can view and download logs of all the messages sent and received by users on their radios.</li>
                            <li className="mt-2"><span class="font-bold">Limiting usage per department (or location):</span> Administrators can assign radios to different departments or locations within their organization. This helps them organize and manage their radio fleet more efficiently.</li>
                            <li className="mt-2"><span class="font-bold">Blocking radios if leaving the area:</span> Administrators can enable a geofencing feature that automatically blocks radios from working if they leave a predefined area. This helps them prevent theft or loss of the device.</li>
                            <li className="mt-2"><span class="font-bold">Sending general alerts and messages:</span> Administrators can send general alerts and messages to all or selected users on their radios.</li>
                            <li repeater is a device that amplifies and converts the app orders to radio signals><span class="font-bold">Creating dedicated channels via laptop:</span> Users can create dedicated channels on their radios via the app. This adds easiness to the whole management of the radios</li>
                               </div></p>}
                        ></AccordionItem>
                        <AccordionItem
    title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">How it works?</h1>}
    isOpen={openAccordion === 4}
    onClick={() => handleOpen(4)}
    body={
        <> <div className="text-xs sm:text-sm lg:text-base xl:text-lg">
            <p>The product works as follows:</p>
            <div className="mt-2">
                1. The laptop contains the app and connects to a repeater via a cable. (The repeater amplifies and converts the app orders to radio signals)
            </div>
            <div className="mt-2">
                2. The app allows the admin to access and modify the settings and preferences. The app sends these settings to the repeater, which then sto the repends them eater, which then sends them to the radios.
            </div>
            <div>
                3. The app allows the administrator to send updates over the air to the radios via the app. Downloaded in the laptop , transmited to the repeater and then sent (as radio signals) and installed in the radios.
            </div>
            <div>
                4. The app allows the administrator to enable geofencing features on the radios via the app, which are activated and deactivated by the GPS location of the radios.
            </div>
            
                                    <div className="flex flex-col-1 items-center mt-4">
                                            <img src={SchemaRadio} alt="BigBox" className="h-auto justify-center my-2 sm:mx-auto" />
                                        
                                        </div>
            </div>
        </>
    }
></AccordionItem>

                        
                        <AccordionItem
                             title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">My Role</h1>}
                           
                            isOpen={openAccordion === 5}
                            onClick={() => handleOpen(5)}
                            body={<><div className="bg-gray-100 p-4 ">
                                <h2 className="text-base sm:text-lg lg:text-xl font-bold">My Role in the Product</h2>
                                <p className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2"> Contact between the development team and the stakeholders (engineers, managers) at the company that we were building the product for. Responsible for defining requirements, gathering feedback, doing the set up, onboarding, and solving technical problems onsite. </p>
                            </div><div className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2">
                            <li>Requirements, specifications, and features definition, based on users input. Put these into a Product Backlog and managed Sprints.</li>
                            <li>Testing, debugging, and troubleshooting the product. I reported any issues or bugs to the development team and helped them resolve them as soon as possible.</li>
                            <li>Documentation, presentation, and delivery of the product. I prepared user manuals, training materials, and demo videos for the product. I also conducted training sessions onsite.</li>
                            <li>Ongoing support and maintenance for the product, after it was launched. Monitored its performance and usage, gathered feedback and introduced it into the development cycle.</li>
                        
                            </div>
                                    
                                    
                            </>
                            }
                        />
                        <AccordionItem
                             title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Building Process</h1>}
                           
                            isOpen={openAccordion === 7}
                            onClick={() => handleOpen(7)}
                            body={
                                <> <div className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2">
                                    <p>
                                        Our journey to develop the telemedical platform was a strategic process that unfolded in several key phases:
                                    </p>

                                    <div className="mt-2">
                                        <span class="font-bold">Product Development with an Agile Approach.</span>  We used a Scrum framework to organize our work into 2 weeks sprints. We used a Kanban board to visualize our workflow, track our progress, and manage our priorities
                                    </div>

                                    <div className="mt-2">
                                        <span class="font-bold">Timeline:</span> We started the project in February 2021, first we detected the pain point in our clients , then wec conducted user research to validate the problem and identify the needs of our users.
                                    </div>

                                    <div className="mt-2">
                                        <span class="font-bold">Requirements, specifications, and features : </span> based on the research findings. First we created a prototype, using tools such as Figma, and presented it to the users.
                                    </div>

                                    <div className="mt-2">
                                    <span class="font-bold">Developing the product.</span>  We followed an iterative and incremental approach, where we developed consistently and improved the product in <span className="font-bold">small batches</span> to get early feedback and recude waste.
                                    </div>

                                    <div className="mt-2">
                                        <span class="font-bold">Gathering Feedback</span> , using tools such as SurveyMonkey and visits to the client on-site.
                                    </div>

                                    <div className="mt-2">
                                        <span class="font-bold">Finished and launched the product in October 2021</span> , after we completed all the features agreed upon with the client. We prepared user manuals and conducted training sessions with the users
                                    </div>
                                    </div>
                                </>
                            }
                        />

                        <AccordionItem
                             title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Challenges</h1>}
                           
                            isOpen={openAccordion === 8}
                            onClick={() => handleOpen(8)}
                            body={<><p className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2">
                                Some of the challenges that I faced during the product development process were:


                                <div className="mt-4">
                                    <span class="font-bold">Compatibility and interoperability:</span> different devices and platforms have different specifications, standards, and protocols that may not work well together.</div>
                                <div className="mt-2">
                                    <span class="font-bold">Reliability and stability of radio signals in different environments: </span> radio signals may be affected by various factors, such as distance, interference, noise, weather, etc., that may reduce their quality or availability. For example, radio signals may are weak or distorted if the radios are too far from the repeater, or if there are electromagnetic sources nearby (what typically happens in our clients environment).</div>

                                <div className="mt-2">
                                    <span class="font-bold">User-friendliness and usability of the product:</span> Some scenarios required a quick and easy access to the product features, while others required a detailed and thorough explanation of the product features.</div>
                                <div className="mt-2">
                                    <span class="font-bold">Some of the ways that I overcame these challenges were:</span></div>
                                <div className="mt-2">
                                Conducting extensive research and testing on different devices and platforms to ensure compatibility and interoperability. I used various tools and methods, such as device emulators, compatibility testers, network analyzers, etc., to simulate and evaluate how different devices and platforms work together. </div>
                                <div className="mt-2">
                                Implementing various security and privacy measures on different devices and platforms to ensure data and communication protection. I used various tools and techniques, such as encryption, authentication, authorization, firewall, VPN, etc.</div>
                                <div className="mt-2">
                                Optimizing various parameters and settings on different devices and platforms to ensure radio signal quality</div>

                            </p></>
                            }
                        />

                        <AccordionItem
                             title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Results</h1>}
                           
                            isOpen={openAccordion === 9}
                            onClick={() => handleOpen(9)}
                            body={<><div className="bg-gray-100 p-4 mt-4">
                                
                                <p className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2">
                                    Our collaborative efforts and meticulous approach yielded significant results in the solution we developed. These outcomes reflect the impact of our work and the value it brought.
                                </p>
                            </div>
                            <div className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2">
                                    <li className="mt-4">
                                    The product was successfully launched and deployed in October 2021, after nine months of development. The product met all the requirements, specifications, and features that were agreed upon with the client. The product also passed all the tests and evaluations that were conducted by the development team, the client, and the users.</li>
                                    <li>
                                    The product also increased the efficiency and effectiveness of communication and coordination among the users, as well as reduced the cost and complexity of managing MOTORBO 2-way radios. According to a survey conducted by the client, the product had an average rating of 4.8 out of 5 stars, a net promoter score of 82%, and a retention rate of 95% among the users.</li>
                                    <li>
                                    The product generated a significant return on investment and value for the client and the development team. The product helped the client save time and money by eliminating the need for additional hardware or software installation and maintenance, optimizing the battery life and bandwidth of the radios, preventing theft or loss of the devices</li>
                                    <li>
                                    The product also helped the development team gain recognition and reputation by creating a high-quality and innovative product that solved a real problem or a large client   </li>
                                    <li>
                                    According to a report by the client, the product saved them an estimated $0.7 million per year in operational costs, increased their productivity by 15%. According to a report by the development team, the product earned them an estimated 300k in revenue. </li>
                                    </div></>
                            }
                        />

                    </div>
                </div>
            </div>
            <div className="font-general-light-italic mx-20 text-xs sm:text-sm"> * Disclaimer:

The content presented in this project portfolio is a fictional scenario created for illustrative purposes. Real names, specific product details, and confidential information have been intentionally avoided and omitted to uphold confidentiality agreements and protect sensitive business information. Any resemblance to actual individuals, organizations, or products, living or dead, is purely coincidental. The primary aim of this portfolio is to provide a general overview of a hypothetical project and its various components, challenges, and outcomes. All information and descriptions contained herein are for demonstration and creative purposes only.</div>
        
            
        </>
    );
}

export default Project2;