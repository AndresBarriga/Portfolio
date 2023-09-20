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
            className="group relative w-full items-center rounded-t-[15px] bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
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
            <h1 className="text-3xl  mt-6 sm:text-4xl">MOTOTRBO 2-way radios management app </h1>
            <h2 className="text-2xl font-general mt-6 sm:text-3xl">  In a world where seamless communication is paramount, <br /> our customizable mobile application emerged as a game-changer.</h2>
            <p className="mt-4 text-gray-600 font-general-light">Introducing the MOTORBO 2-way radios management app, a groundbreaking solution <br /> that revolutionized how our client, a prominent organization in the logitic sector, managed their radio systems</p>
        </div>
            <div className="flex justify-center items-center my-10">
                <div className="w-[calc(100%-320px)] mt-8">
                    <div className=" rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                        <AccordionItem
                            title="Overview"
                            isOpen={openAccordion === 1}
                            onClick={() => handleOpen(1)}
                            body={<p>Introducing the MOTORBO 2-way radios management app—a dynamic mobile application designed to empower users in effectively managing MOTORBO 2-way radios. These radios are essential devices that facilitate wireless communication over short distances, playing a pivotal role in various industries such as logistics , construction, security or hospitality 
                            <div>
                                    <span class="font-bold">Key Features:</span> 
                                    <li><span class="font-bold">Effortless Radio Management: </span> Our app simplifies the complex task of managing MOTORBO 2-way radios, offering users an intuitive interface for efficient control.</li>
                                    <li><span class="font-bold">Over-the-Air Updates: </span>Stay up-to-date with ease. Users can download and install new software versions directly through the app, eliminating the need for complex computer connections.</li>
                                    </div>

                                <div>
                                    <span class="font-bold mt-2">A Tailored Solution:</span> This app stands as a testament to innovation and adaptability, as it was crafted as a customizable service for a major client.</div>
                                    <div>
                                    <span class="font-bold mt-2">Target Market:</span> Our primary audience comprises businesses and organizations that rely on seamless communication to coordinate operations and engage with their workforce in real-time.</div>
                                    </p>}
                        />
                        <AccordionItem
                            title="Problem Statement"
                            isOpen={openAccordion === 2}
                            onClick={() => handleOpen(2)}
                            body={<p>In the fast-paced world of modern business, effective communication is the lifeblood of success. Now imagine the bigger Logistic company in the world and how useful this for them would be
                            <div>
                                    <span class="font-bold">Managing the usage of MOTORBO 2-way radios: </span> can be difficult and time-consuming for both the users and the administrators
                                    <li>Users need to manually configure their radios according to their preferences and needs, such as setting up channels, volume, alerts, and encryption.</li>
                                    <li>Administrators need to monitor and control the usage of radios across different departments, locations, and workers, such as assigning radios, limiting usage, retrieving logs, blocking radios, and sending messages</li>
                                    <li>Both users and administrators need to update their radios regularly to ensure optimal performance and security, which <span class="font-bold">requires connecting them to a computer</span> and following a <span class="font-bold">complex process.</span></li>
                                    </div>

                                <div className="mt-2">
                                     The existing solutions or alternatives are either too costly, too complicated, or too limited.</div>
                                    <div className="mt-2">
                                    Using other communication devices or platforms, such as smartphones. These devices are <span class="font-bold">more expensive, less durable, less reliable, and less secure </span>than MOTORBO 2-way radios. They also <span class="font-bold">require internet access or cellular network coverage,</span> which may not be available in some areas or situations.</div>
                                    </p>}/>
                        <AccordionItem
                            title="Solution"
                            isOpen={openAccordion === 3}
                            onClick={() => handleOpen(3)}
                            body={<p>The solution is an app that allows users to manage the usage of MOTORBO 2-way radios in a simple and convenient way. <br />The app has the following features:
                            <div className="mt-2">
                            <li><span class="font-bold">Linking radios to workers via PIN:</span> Users can easily pair their radios with their mobile phones by entering a unique PIN code. Making sure user kept their <span class="font-bold">personal settings</span> and radios are at the same time always <span class="font-bold">related to a worker</span></li>
                            <li><span class="font-bold">Limiting usage of radio:</span> Administrators can set limits on how long or how often users can use their radios. This helps them optimize the battery life and bandwidth of the radios, as well as <span class="font-bold">prevent misuse </span> of the devices.</li>
                            <li><span class="font-bold">Retrieving logs for messages:</span> Administrators can view and download logs of all the messages sent and received by users on their radios.</li>
                            <li><span class="font-bold">Limiting usage per department (and sections, location):</span> Administrators can assign radios to different departments, sections, or locations within their organization. This helps them organize and manage their radio fleet more efficiently and effectively.</li>
                            <li><span class="font-bold">Blocking radios if leaving the building:</span> Administrators can enable a geofencing feature that automatically blocks radios from working if they leave a predefined area. This helps them prevent theft or loss of the devices, as well as protect sensitive information from unauthorized access.</li>
                            <li><span class="font-bold">Sending general alerts and messages:</span> Administrators can send general alerts and messages to all or selected users on their radios. This helps them communicate important information or instructions quickly and easily</li>
                            <li><span class="font-bold">Creating dedicated channels via software:</span> Users can create dedicated channels on their radios via the app. This allows them to communicate with specific groups or individuals without interfering with other channels or users.</li>
                            <div className="mt-4">The value proposition or competitive advantage of the product is that it provides a comprehensive and customizable solution for managing MOTORBO 2-way radios using mobile phones.</div>
                            </div></p>}
                        ></AccordionItem>
                        <AccordionItem
    title="How it works?"
    isOpen={openAccordion === 4}
    onClick={() => handleOpen(4)}
    body={
        <>
            <p>The product works as follows:</p>
            <div>
                1. The laptop contains the app and connects to a repeater via a cable.
            </div>
            <div>
                2. The repeater is a device that amplifies and converts the app orders to radio signals and sends them to the radios.
            </div>
            <div>
                3. The radios are devices that enable wireless communication over short distances using radio waves.
            </div>
            <div>
                4. The app allows the administrator to access and modify the global settings and preferences on their phone, such as limits, logs, assignments, blocks, and messages. The app sends these settings to the laptop, which then sends them to the repeater, which then sends them to the radios.
            </div>
            <div>
                5. The app allows the administrator to send updates over the air to the radios via the app, which are downloaded by the laptop and then sent to the repeater and then installed by the radios.
            </div>
            <div>
                6. The app allows the administrator to enable geofencing features on the radios via the app, which are activated and deactivated by the GPS location of the radios.
            </div>
        </>
    }
></AccordionItem>

                        
                        <AccordionItem
                            title="My Role"
                            isOpen={openAccordion === 5}
                            onClick={() => handleOpen(5)}
                            body={<><div className="bg-gray-100 p-4">
                                <h2 className="text-xl font-bold">My Role in the Product</h2>
                                <p className="mt-2"> My role was the primary contact between the development team and the engineers working at the company that we were building the product for. I was responsible for gathering feedback, going on site and speaking to people to understand how everything was working and challenges or get logs from repeater.. </p>
                            </div><div className="mt-2">
                            <li>Key role in defining the requirements, specifications, and features of the product, based on the needs and preferences of the client and the users. I communicated these to the development team and ensured that they were aligned with the project goals and scope.</li>
                            <li>Testing, debugging, and troubleshooting the product, both on the app and on the radios. I reported any issues or bugs to the development team and helped them resolve them as soon as possible.</li>
                            <li>Contributed to the documentation, presentation, and delivery of the product, both internally and externally. I prepared user manuals, training materials, and demo videos for the product. I also conducted training sessions and workshops for the client and the users on how to use the product effectively and efficiently.</li>
                            <li>Ongoing support and maintenance for the product, after it was launched and deployed. I monitored its performance, usage, and feedback, and suggested improvements or enhancements to the development team.</li>
                            <div className="mt-4">Some of the skills and tools that I used or learned during the project were:</div>
                            </div>
                            <li>Communication skills: I used various communication channels and methods, phone calls, meetings, reports, presentations, etc., to communicate effectively with different stakeholders. I also used clear, concise, and polite language to convey information, feedback, instructions, etc.</li>
                            <li>Technical skills: I used various technical tools and platforms, such as MOTORBO 2-way radios, repeaters, laptops, mobile phones, Bluetooth, Wi-Fi, etc., to work with the product and its components. I also used various software applications and systems, such as app development tools, Product Management tools (Confluence, Jira) , testing tools , documentation tools , presentation tools , etc., to create, test, debug, document, present, and deliver the product.</li>
                            <li>Problem-solving skills: I used various problem-solving techniques and strategies, such as brainstorming, research, analysis, testing, debugging, troubleshooting, etc., to solve any issues or challenges that arose during the product development process.</li>
                            
                                    
                                    
                            </>
                            }
                        />
                        <AccordionItem
                            title="Building process"
                            isOpen={openAccordion === 7}
                            onClick={() => handleOpen(7)}
                            body={
                                <>
                                    <p>
                                        Our journey to develop the telemedical platform was a strategic process that unfolded in several key phases:
                                    </p>

                                    <div className="mt-2">
                                        <span class="font-bold">The product was based on agile principles and practices.</span>  We used a Scrum framework to organize our work into sprints, which were two-week periods of time where we planned, executed, reviewed, and delivered a set of features or tasks. We used a Kanban board to visualize our workflow, track our progress, and manage our prioritie
                                    </div>

                                    <div className="mt-2">
                                        <span class="font-bold">Timeline of the building process:</span> We started the project in February 2021, after we detected the pain point in our clients while trying to manage the radios. We conducted a market research and a user research to validate the problem and identify the needs and preferences of the potential users. .
                                    </div>

                                    <div className="mt-2">
                                        <span class="font-bold">We defined the requirements, specifications, and features of the product,</span> based on the research findings and the client’s feedback. We also created a prototype and a mockup of the product, using tools such as Figma and Adobe XD, to demonstrate the functionality and design of the product.
                                    </div>

                                    <div className="mt-2">
                                        We then started developing the product, using app development tools such as Android Studio and cloud-based services such as Firebase. We followed an iterative and incremental approach, where we developed, tested, debugged, and improved the product in <span className="font-bold">small batches</span>. We also deployed the product every two weeks
                                    </div>

                                    <div className="mt-2">
                                        <span class="font-bold">We then gathered feedback from the client and the users</span> , using tools such as SurveyMonkey. We also went on site and spoke to people to understand how everything was working and challenges or get logs from repeater. We used this feedback to make changes or enhancements to the product according to their needs.
                                    </div>

                                    <div className="mt-2">
                                        <span class="font-bold">We then finalized and launched the product in October 2021</span> , after we completed all the features and tasks that were agreed upon with the client. We also prepared user manuals, training materials, and demo videos for the product. We also conducted training sessions and workshops for the client and the users
                                    </div>

                                </>
                            }
                        />

                        <AccordionItem
                            title="Challenges"
                            isOpen={openAccordion === 8}
                            onClick={() => handleOpen(8)}
                            body={<><p>
                                Some of the challenges that I faced during the product development process were:


                                <div className="mt-4">
                                    <span class="font-bold">Ensuring compatibility and interoperability between different devices and platforms:</span> different devices and platforms have different specifications, standards, and protocols that may not work well together.</div>
                                <div className="mt-2">
                                    <span class="font-bold">Ensuring reliability and stability of radio signals in different environments: </span>was a challenge because radio signals may be affected by various factors, such as distance, interference, noise, weather, etc., that may reduce their quality or availability. For example, radio signals may are weak or distorted if the radios are too far from the repeater, or if there are other radio devices or electromagnetic sources nearby (what typically happens in our clients environment).</div>

                                <div className="mt-2">
                                    <span class="font-bold">Ensuring user-friendliness and usability of the product for different users and scenarios.:</span> some users prefer a simple interface and functionalities, while others may prefer a complex and customizable interface. Some scenarios required a quick and easy access to the product features, while others required a detailed and thorough explanation of the product features.</div>
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
                            title="Results"
                            isOpen={openAccordion === 9}
                            onClick={() => handleOpen(9)}
                            body={<><div className="bg-gray-100 p-4 mt-4">
                                
                                <p className="mt-2">
                                    Our collaborative efforts and meticulous approach yielded significant results in the solution we developed. These outcomes reflect the impact of our work and the value it brought.
                                </p>
                            </div>
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
                                </>
                            }
                        />

                    </div>
                </div>
            </div>
            <div className="font-general-light-italic mx-20 text-sm"> * Disclaimer:

The content presented in this project portfolio is a fictional scenario created for illustrative purposes. Real names, specific product details, and confidential information have been intentionally avoided and omitted to uphold confidentiality agreements and protect sensitive business information. Any resemblance to actual individuals, organizations, or products, living or dead, is purely coincidental. The primary aim of this portfolio is to provide a general overview of a hypothetical project and its various components, challenges, and outcomes. All information and descriptions contained herein are for demonstration and creative purposes only.</div>
        
            
        </>
    );
}

export default Project2;