import React, { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import BigBox from "../../../images/BigBox2.drawio.png"
import SmallBox from "../../../images/SmallBox.png"


const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};

function AccordionItem({ title, body, isOpen, onClick }) {
    return (
        <Accordion
            open={isOpen}
            animate={CUSTOM_ANIMATION}
            className="group relative w-full items-center rounded-t-[15px] bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] "
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

export function Project3() {
    const [openAccordion, setOpenAccordion] = useState(0);

    const handleOpen = (value) => setOpenAccordion(openAccordion === value ? 0 : value);

    return (
        <>  <div className="text-center mb-8 mx-10">
            <h1 className="text-xl font-general-bold mt-6 sm:text-3xl">Pumma Connect. </h1>
            <h2 className="text-lg font-general mt-6 sm:text-2xl">Dedicated Server & Reliable Internet Connection. Empowering Uninterrupted Connectivity in Any Environment</h2>
            <p className="mt-4 text-gray-600 font-general-light text-sm sm:text-base">Unleash Uninterrupted Performance and Security, Anywhere, Anytime! Harness the power of Multipath TCP technology, merging multiple LTE/5G circuits for lightning-fast, rock-solid internet connectivity. Two options: 'The Big One' - supercharged with a dedicated server and backup system, or 'The Small One' - ultra-portable yet powerful.</p>
        </div>
            <div className="flex ">
            <div className="w-screen mt-8 mx-4">
                    <div className=" rounded-t-lg border border-neutral-200 bg-white">
                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Overview</h1>}
                            isOpen={openAccordion === 1}
                            onClick={() => handleOpen(1)}
                            body={<p className="text-xs sm:text-sm lg:text-base xl:text-lg">Introducing Pumma Connect , it is a product that provides a dedicated server and fast and available internet in environments where other providers are not able to do it, these challenging environments could be from construction sites to remote warehouses.<div>
                                    <span class="font-bold mt-2">Key Features:</span> 
                                    <li><span class="font-bold mt-2">Two options: </span>
                                     <div class="ml-8 mt-2" ><li>The big version consists of two dedicated servers (normal and backup) that have their own hosting, and each server has up to 10 sim cards from different providers (and modems) that are combined into one signal. The big version also has <span className="font-bold">5G capabilities</span>.</li>
                                     <li>The small version consists of one server that has up to 4 sim cards from different providers (and modems) that are combined into one signal. Both versions use antennas and antenna cables to get the internet connection from the cell towers, and create an internal closed and safe connection for every device connected to the server.</li></div></li>
                                   </div>

                                <div>
                                    <span class="font-bold mt-2">Hardware and software:</span> Product include both, the solution that was developed as an experiment for a large client that provides construction and logistics services. The product is intended to be used within a place such as the server room of a big warehouse, where mobile network does not work, or in a portable version for temporary places, such as a construction site office</div>
                                    <div>
                                    <span class="font-bold mt-2">Target Market:</span> is mainly businesses and organizations that need to have internet connection in places where it is not available or reliable, such as construction, logistics, mining, agriculture, etc.</div>
                                    </p>}
                        />
                        <AccordionItem
                             title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">The Challenge</h1>}
                          
                            isOpen={openAccordion === 2}
                            onClick={() => handleOpen(2)}
                            body={<>
                            <div className="bg-gray-100 p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                <h2 className="text-xl font-bold">The Challenge</h2>
                                <p className="mt-2"> The challenge was clear: how do we ensure a stable and secure internet connection in places where it's traditionally hard to come by? Whether it's a bustling construction site or the heart of a massive warehouse, our mission was to provide a dependable solution that keeps businesses connected and minimizes losses due to network downtime. </p>
                            </div>
                            <div className="mt-2 text-xs sm:text-sm lg:text-base xl:text-lg">
                            <li>The environment may block or interfere with the mobile network coverage, such as metal structures, concrete walls, underground tunnels, etc. This may result in weak or no signal for devices that rely on mobile network, such as smartphones, tablets, laptops, etc</li>
                            <li>The environment may also require high performance and reliability for internet connection, such as high speed, low latency, high bandwidth, etc. This may result in low quality or availability of internet connection for devices that rely on mobile network, especially if there are many users or devices competing for the same signal.</li>
                            <li>The need of closed networks for companies that work with confidential information is the risk of data leakage or breach due to unauthorized access or exposure.companies that work with confidential information need to have closed networks that can protect their data from external or internal threats, such as hackers, competitors, or malicious insiders.</li>
                            </div>
                            <div className="bg-gray-100 p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                <p className="mt-2"> The existing solutions or alternatives are either too costly, too complicated, or too limited.  </p>
                        
                            </div>      
                            </>
                            }/>
                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Solution</h1>}
                            
                            isOpen={openAccordion === 3}
                            onClick={() => handleOpen(3)}
                            body={<p className="text-xs sm:text-sm lg:text-base xl:text-lg">Our solution involves two distinct products: <br /> A robust server setup designed for permanent installations and a portable version tailored for temporary needs.
                            <div className="mt-2">
                            <li><span class="font-bold">The main server setup</span>  combines the strengths of multiple internet sources through advanced antenna technology. With up to 10 sim cards from different providers, our product intelligently aggregates signals, ensuring both performance and redundancy.</li>
                            For locations like warehouse server rooms, where mobile networks often struggle to penetrate, we strategically position antennas on the building's roof to capture strong signals. The entire system is housed in racks, reminiscent of those used at concerts and music events, offering a compact yet powerful solution.
                            <li>On the other hand,<span class="font-bold"> our portable version,</span> owered by a Raspberry Pi, addresses the connectivity challenges faced in metal-based construction site offices. The product places antennas outside the office containers to capture signals from the cell towers, and connects them to a small box that is powered by a Raspberry Pi. The small box then amplifies the signal and connects it to a Wi-Fi device that creates an internal closed and safe connection for every device connected to the server. This solution is cost-effective and highly reliable.</li>
                           <li><span class="font-bold">Our product's value proposition is simple yet vital:</span> a guaranteed internet connection in places where it cannot afford to fail. By providing a private and secure working environment, we empower businesses to operate efficiently without the fear of network disruptions, ensuring productivity and minimizing losses.</li>
                           <div class="mt-4 font-bold"> Key features </div>
                           <li>Dedicated server</li>
                           <li>Aggregation of multiple internet sources</li>
                           <li>Redundancy for uninterrupted connectivity</li>
                           <li>5G capabilities (main server setup)</li>
                           <li>Customized modem configurations based on location</li>
                           <li>Strategic antenna placement for optimal signal strength</li>
                           <li>Portable Raspberry Pi-powered solution for temporary setups</li>
                           </div></p>}
                        ></AccordionItem>
                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">How it works?</h1>}
                            isOpen={openAccordion === 4}
                            onClick={() => handleOpen(4)}
                            body={<><div className="bg-gray-100 p-4">
                                <p className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2"> Whether it's a bustling construction site or the confines of a warehouse, our product ensures a stable and secure connection. Here's how it accomplishes this: </p>
                                </div>
                                <div className="flex mt-2 text-xs sm:text-sm lg:text-base xl:text-lg">
                                    <div className="w-1/2 pr-4"> <h2 className="text-sm sm:text-base lg:lg xl:text-xl font-bold">Main Server Setup (Permanent Solution):</h2>
                                       
                                        <div className="mt-4">
                                            <span class="font-bold ">Multiple Internet Sources:</span> Each box is equipped with up to 10 SIM cards from different providers, along with 4G and 5G modems. This diversity of internet sources is crucial for achieving high performance and redundancy.  </div>

                                        <div className="mt-2">
                                            <span class="font-bold">Signal Aggregation:</span>The product excels in aggregating the signals from these diverse sources into one unified, high-speed internet connection. This aggregation process combines the strengths of different providers, <span className="font-bold"> maximizing network performance and reliability. </span></div>
                                        <div className="mt-2">
                                            <span class="font-bold">5G Capability:</span> For locations with 5G coverage, our product leverages this advanced technology, ensuring blazing-fast internet speeds where available.</div>
                                        <div className="mt-2">
                                            <span class="font-bold">Antenna Placement:</span>To overcome the challenge of poor mobile network coverage, strategically positioned antennas on the building's roof capture strong signals. These antennas are reminiscent of the setups used in concerts and music events <div>
                                            </div>
                                            <div className="mt-2">
                                                <span class="font-bold">Rack Houseing: </span> The entire system is neatly housed within racks, making it a compact and efficient solution for permanent installations.</div>
                                                
                                        </div>
                                    </div>
                                    <div className="w-1/2 pl-4">
                                    <h2 className="text-sm sm:text-base lg:lg xl:text-xl font-bold">Portable Version (Temporary Solution):</h2>
                                        <div>
                                        
                                            <div className="mt-4">
                                                <span class="font-bold ">Raspberry Pi Power: </span> The portable version of our product is designed for temporary setups, particularly in locations like construction site offices. It's powered by a Raspberry Pi, a versatile and compact computing platform.
                                            </div>
                                            <div className="mt-2">
                                                <span class="font-bold">Antenna Placement:</span> o counteract the Faraday Cage effect caused by metal structures, antennas are placed outside the office containers. These antennas capture signals from the surrounding area.
                                            </div>
                                            <div className="mt-2">
                                                <span class="font-bold">Signal Amplification: </span>The captured signals are then amplified by a small box connected to a Wi-Fi device. This amplification ensures that even in challenging environments, a reliable internet connection is provided within the office container.<div className="mt-2">
                                                <span class="font-bold">Customization: </span>We understand that each location is unique, and network conditions vary. To address this, our portable solution allows for customization, ensuring the best possible connectivity for every temporary setup.</div>
                                                </div>
                                                
                                    </div>
                                    
                                </div>
                                
                                </div>
                                <div className="hidden sm:block">
                                    <div className="flex flex-col sm:flex-row items-center mt-4">
                                        <div className="flex flex-col items-center">
                                            <p className="font-general-bold font-sm">Big Box Squema</p>
                                            <img src={BigBox} alt="BigBox" className="h-auto my-2" />
                                        </div>
                                        <div className="flex flex-col items-center ">
                                            <p className="font-general-bold font-sm">Small Box Squema</p>
                                            <img src={SmallBox} alt="Small Box" className="h-auto my-2" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center sm:hidden">
                                    
                                        <p className=" font-general-bold font-sm"> Bix Box Squema</p>
                                        <img src={BigBox} alt="BigBox" className=" h-auto my-2 " />
                                        <p className=" font-general-bold font-sm"> Small Box Squema</p>
                                        <img src={SmallBox} alt="Small Box" className="h-auto  my-2" />
                                    
                                </div>
                            </>
                            }
                        />

                        
                        <AccordionItem
                             title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">My Role</h1>}
                           
                            isOpen={openAccordion === 5}
                            onClick={() => handleOpen(5)}
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
                            
                            </div>
                              
                                    
                            </>
                            }
                        />
                        <AccordionItem
                             title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Building Process</h1>}
                           
                            isOpen={openAccordion === 7}
                            onClick={() => handleOpen(7)}
                            body={
                                <>
                                    <p className="text-xs sm:text-sm lg:text-base xl:text-lg">
                                    The journey was marked by iterative development and a deep commitment to solving connectivity challenges in diverse environments. This building process can be divided into distinct phases:
                                    </p>

                                    <div className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2">
                                        <span class="font-bold">Phase 1: Big Box Prototype without 5G</span>
                                        <li> <span class="font-bold">Conceptualization and Design: </span>
                                         We started by conceptualizing the initial version of the product, focusing on creating a robust internet connectivity solution for challenging environments. This phase involved designing the hardware components and selecting the appropriate modems and antennas.
                                        </li>
                                        <li> <span class="font-bold">Testing and Prototyping: </span>
                                         To validate our design, we conducted extensive testing of the connectivity solution. We experimented with different modem configurations and antenna setups to optimize performance.
                                        </li>
                                        <li> <span class="font-bold">Hardware Development: </span>
                                         With a clear design in place, we proceeded to develop the hardware components required for the big box prototype. This included sourcing and integrating the necessary hardware elements.
                                        </li>
                                        <li> <span class="font-bold">Deployment: </span>
                                         The first big box prototype was deployed in selected test environments to assess its performance and gather real-world data.
                                        </li>
                                    </div>
                                    <div className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2">
                                        <span class="font-bold">Phase 2: Integration of 5G Technology</span>
                                        <li> <span class="font-bold">Conceptual Enhancement: </span>
                                        Recognizing the importance of 5G technology, we enhanced our existing design to incorporate 5G capabilities into the product.</li>
                                        <li> <span class="font-bold">Hardware integration, Testing and Performance Validation:</span>
                                        We ensured seamless compatibility with existing components.  We measured the impact on connection speed and reliability.The integrated 5G technology was rigorously tested in various environments to validate its ability to deliver high-speed internet connectivity </li>
                                    </div>
                                    <div className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2">
                                        <span class="font-bold">Phase 3: Development of the Small Prototype</span>
                                        <li> <span class="font-bold">Identification of Need:</span>
                                        Recognizing the demand for a smaller, more portable version of our product, we initiated the development of the small prototype </li>
                                        <li> <span class="font-bold">Proof of Concept with Raspberry Pi:</span>
                                        We experimented with the use of a Raspberry Pi to power the small prototype, aiming for a compact , efficient and <span class="font-bold"> cheaper </span> solution. </li>
                                        <li> <span class="font-bold">Customized Hardware: </span>
                                        To address the challenges posed by environments like construction site offices, we customized the hardware components, including antennas, signal amplification devices, PoE powered systems.. </li>
                                        <li> <span class="font-bold">3D Printed Case:  </span>
                                        Designing and producing a 3D printed case was essential for the small prototype, ensuring durability and practicality.</li>
                                        <li> <span class="font-bold">Performance testing:  </span>
                                        Rigorous performance testing was conducted to ensure that the small prototype met the unique needs of its intended use cases.</li>

                                    </div>

                                    

                                </>
                            }
                        />

                        <AccordionItem
                             title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Challenges</h1>}
                           
                            isOpen={openAccordion === 8}
                            onClick={() => handleOpen(8)}
                            body={<><p className="text-xs sm:text-sm lg:text-base xl:text-lg">
                                Some of the challenges that I faced during the product development process were:
                                <div className="mt-4">
                                    <span class="font-bold">Limited 5G Availability: </span>  This necessitated careful selection of deployment locations and coordination with network providers to maximize 5G coverage.</div>
                                <div className="mt-2">
                                    <span class="font-bold">Testing Mobility: </span>Testing the product's performance required us to move across different environments, from the controlled environment where it was developed to the real-world settings where it needed to be installed.</div>

                                <div className="mt-2">
                                    <span class="font-bold">Environmental Disparities: :</span> The environments where we were building and those where the product needed to be installed often presented stark disparities. For instance, the controlled development environment contrasted with the rugged conditions of construction sites.</div>
                                <div className="mt-2">
                                    <span class="font-bold">Microchip Scarcity:</span> The global shortage of microchips posed a challenge during the production phase. Sourcing and securing the necessary microchips for our product became a delicate balance, as we had to manage supply chain disruptions while meeting production timelines.</div>
                                    <div className="mt-2">
                                    <span class="font-bold">Cost Constraints for the Small Prototype: </span> The small, portable version of our product was designed to be cost-effective, making it accessible to a broader range of users. Balancing cost constraints while ensuring quality and reliability was a constant challenge.</div>
                                    <div className="mt-2">
                                    <span class="font-bold">Customization Complexity:</span> Each installation location had unique requirements, demanding customization of hardware components such as antennas and signal amplification devices. </div>
                                    <div className="mt-2">
                                    <span class="font-bold">Regulatory Compliance: </span>Navigating regulatory requirements in different regions was a complex undertaking. Being able to use public/private radio signal bandwidths while being compliant became a huge challenge</div>
                               
                            </p></>
                            }
                        />

                        <AccordionItem
                             title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Results</h1>}
                           
                            isOpen={openAccordion === 9}
                            onClick={() => handleOpen(9)}
                            body={<><div className="bg-gray-100 p-4 mt-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                
                                <p className="mt-2 text-xs sm:text-sm lg:text-base xl:text-lg">
                                The culmination of our efforts in developing "Reliable Internet Connection on a Box" has yielded impressive results, demonstrating the product's effectiveness and value in addressing connectivity challenges in demanding environments.
                                </p>
                            </div>
                            <div className="text-xs sm:text-sm lg:text-base xl:text-lg mt-4">
                                    <span class="font-bold">Successful Product Launch: </span>The product gained traction and saw widespread adoption in industries and locations where internet connectivity was traditionally unreliable.</div>
                                <div className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2">
                                    <span class="font-bold">Installation Success: </span> Installation of our product in diverse environments, including construction sites, warehouses, and remote offices, was met with resounding success.</div>
                                    <div className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2">
                                    <span class="font-bold">Positive Client Feedback: </span> Client feedback has been overwhelmingly positive. Users have praised the product for its performance, ease of use, and adaptability to unique site requirements. Valuable insights from clients have continued to inform product refinements.</div>
                                <div className="text-xs sm:text-sm lg:text-base xl:text-lg mt-2">
                                    <span class="font-bold">Proven Reliability: </span>The Product has consistently delivered on its promise of dependable connectivity. Performance metrics, including connection speed, reliability, and reduced downtime, have exceeded expectations</div>
                                    
</>
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

export default Project3;