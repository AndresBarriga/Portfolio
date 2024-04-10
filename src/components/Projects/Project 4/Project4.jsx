import React, { useState} from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { motion } from 'framer-motion';
import { FaUser, FaMapMarkerAlt, FaComments, FaBell, FaHandshake, FaUserCircle } from 'react-icons/fa';
import DBSquema from "../../../images/DBSquema.png"
import overview from "../../../images/overview.png"
import overview2 from "../../../images/backgroundSmall.png"
import PassSquema from "../../../images/PassCreation.drawio.png"
import MessagesDb from "../../../images/messagesDB.png"
import 'swagger-ui-react/swagger-ui.css';

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};

function NestedAccordion({ title, children }) {
    const [openNestedAccordion, setOpenNestedAccordion] = useState(0);

    const handleNestedOpen = (value) => setOpenNestedAccordion(openNestedAccordion === value ? 0 : value);

    return (
        <div>
            <AccordionItem
                title={title}
                isOpen={openNestedAccordion === 1}
                onClick={() => handleNestedOpen(1)}
                body={children}
            />
        </div>
    );
}

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


export function Project4() {
     
    const [openAccordion, setOpenAccordion] = useState(0);
    const handleOpen = (value) => setOpenAccordion(openAccordion === value ? 0 : value);
    

    return (
        <>  <div className="text-center mb-8 mx-10">
            <motion.section
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
 className="flex flex-col md:flex-row items-center mt-12 md:mt-2 mx-5 relative sm:mx-10 md:mx-25 lg:mx-35"
>
<div
 className="w-full md:w-2/3 h-[60vh] md:h-[30vh] bg-cover bg-center bg-opacity-60"
 style={{
    backgroundImage: `url(${overview})`
 }}
></div>




 <div className="w-full md:w-1/3 text-left bg-white p-6 rounded-md shadow-lg">
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.9,
        delay: 0.4,
      }}
      className="font-general-bold text-center"
    >
      <div className="text-md sm:text-2xl md:text-3xl lg:text-4xl">"Climbing Club" - Web Application</div>
      <div className="font-general-light text-sm sm:text-lg">Developed entirely by myself</div>
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.9,
        delay: 0.7,
      }}
      className="font-general-extralight mt-4 text-center leading-normal text-gray-500 text-sm sm:text-base md:text-lg "
    >
      <div className="text-sm sm:text-base md:text-lg ">
        Comprehensive solution for climbers, combining robust backend functionality with a user-friendly frontend to create a seamless and engaging platform for climbing enthusiasts
      </div>
    </motion.p>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.9,
        delay: 0.4,
      }}
      className="flex justify-center sm:block"
    ></motion.div>
 </div>
</motion.section>

            <div className="flex justify-center 
        ">
 <a
    href="/projects/Endpoints"
    className="font-general-medium flex flex-col justify-center mt-4 items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
    aria-label="See Projectss"
 >
    <span className="text-sm sm:text-lg font-general-medium duration-100">
      Endpoint Documentation
    </span>
 </a>
</div>

        </div>
            <div className="flex ">
                <div className="w-screen mt-8 mx-4">
                    <div className=" rounded-t-lg border border-neutral-200 bg-white">
                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Overview and main features</h1>}
                            isOpen={openAccordion === 1}
                            onClick={() => handleOpen(1)}
                            body={
                                <div>
                                    <p className="text-xs sm:text-sm lg:text-base xl:text-lg">
                                        The Climbing App is a comprehensive social media / platform designed to connect climbers, facilitate the sharing of climbing requests, and enhance the overall climbing experience through location marking, messaging, notifications, and profile management. The application is divided into two main components: the backend and the frontend, each serving distinct roles in the overall functionality of the app.
                                    </p>

                                    <div className="mt-4 flex justify-center items-center ">
                                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                                            Main features
                                        </p>
                                    </div>
                                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                                        <div className="flex flex-col items-center">
                                            <FaUser size={48} />
                                            <h2 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl mt-2">User Account Creation, Authentication</h2>
                                            <p className="text-xs sm:text-sm lg:text-base xl:text-lg">Secure process to create accounts (possible with Google OAuth, password set up and recovery)</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <FaMapMarkerAlt size={48} />
                                            <h2 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl mt-2">Climbing Locations</h2>
                                            <p className="text-xs sm:text-sm lg:text-base xl:text-lg">Placed on a map, with external links, add reviews, add to favourite</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <FaComments size={48} />
                                            <h2 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl mt-2">Messaging - Asynchronous Chat</h2>
                                            <p className="text-xs sm:text-sm lg:text-base xl:text-lg">Real-time messaging functionality</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <FaBell size={48} />
                                            <h2 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl mt-2">Notifications</h2>
                                            <p className="text-xs sm:text-sm lg:text-base xl:text-lg">Push notifications for important updates</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <FaHandshake size={48} />
                                            <h2 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl mt-2">Create / Join Climbing Requests</h2>
                                            <p className="text-xs sm:text-sm lg:text-base xl:text-lg">Functionality to create or join climbing requests</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <FaUserCircle size={48} />
                                            <h2 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl mt-2">Users Profiles</h2>
                                            <p className="text-xs sm:text-sm lg:text-base xl:text-lg">User profiles for personalization and interaction</p>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl"> My role and the motivation</h1>}

                            isOpen={openAccordion === 2}
                            onClick={() => handleOpen(2)}
                            body={<>
                                <div className="bg-gray-100 p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                    <h2 className="sm:text-lg md:text-xl font-bold">My Role within the project</h2>
                                    <p className="mt-2">In this project, my role was multifaceted, encompassing multiple roles across the development lifecycle. As the primary developer, I was responsible for conceptualizing, designing, and implementing the web app from ideation to deployment. My duties included</p>
                                </div>
                                <div className="mt-2 text-xs sm:text-sm lg:text-base xl:text-lg">
      

                                        <li><strong className="sm:text-base md:text-lg text-gray-800 " >Product Management:</strong></li>
                                        <ul>
                                            <li>Ideation and requirements gathering and ideation, supported by <strong className="text-gray-600">Jira and Confluence</strong>  documentation to make sure everything was written down and development could be organised</li>
                                        </ul>
                                        <li><strong className="sm:text-base md:text-lg text-gray-800 ">Designing the architecture and database schema:</strong></li>
                                        <ul>
                                            <li>Design of architecture, technologies selection and DB schema draw were some of the task I was involved</li>
                                        </ul>
                                        <li><strong className="sm:text-base md:text-lg text-gray-800 ">Frameworks design and writing the content</strong></li>
                                        <ul>
                                            <li>Design of frameworks using <strong className=" text-gray-600">Figma</strong> and creativity for  the written content itself</li>
                                        </ul>
                                        <li><strong className="sm:text-base md:text-lg text-gray-800 ">Developer (FE and BE):</strong></li>
                                        <ul>
                                            <li>Writting all the code both FE and BE for the app </li>
                                        </ul>
                                        <li><strong className="sm:text-base md:text-lg text-gray-800 ">QA:</strong></li>
                                        <ul>
                                            <li>Writting in each Jira ticket test cases and testing them to ensure the absence of bugs </li>
                                        </ul>
                                        <li><strong className="sm:text-base md:text-lg text-gray-800 ">Git management and its deployment</strong></li>
                                        <ul>
                                            <li>Making sure a Git Branch strategy it is in place (2 branches, development and production) and the deployment of the app using <strong className="text-gray-600">Vercel for hosting FE and Heroku to host BE and DB</strong></li>
                                            <li>Note that application is not on Production right now because its associated costs, the purpose of the project is self-learning</li>
                                   </ul>
                                   <div className="bg-gray-100 p-4 text-xs sm:text-sm lg:text-base xl:text-lg mt-8">
                                    <h2 className="sm:text-lg md:text-xl font-bolds">The motivation</h2>
                                    <p className="mt-2">I was driven by a strong motivation to address a specific need in the target audience while also pursuing personal interests in technology and innovation, after having done some smaller projects I wanted to build a web-application where I could apply multiple learnings together, from development to deployment addressing frameworks design or architecture design.
                                    Additionally, personal interests, passions (climbing topic itself), or a desire to learn and grow professionally may have also served as motivating factors.</p>
                                </div>
                                </div>

                            </>
                            } />
                            <AccordionItem
    title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Challenges and learning</h1>}
    isOpen={openAccordion === 3}
    onClick={() => handleOpen(3)}
    body={
        <>
            <div className="bg-gray-100 p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                <h2 className="sm:text-lg md:text-xl font-bold">Main Challenges</h2>
                </div>
                <div className=" p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                <ul className="list-disc list-inside mt-4">
                    <li><strong className="sm:text-base md:text-lg text-gray-800 ">Starting from Scratch:</strong> Initiating a project of this magnitude from scratch posed the initial challenge of where to begin. Overcoming this challenge required careful planning, breaking down the project into manageable tasks, defining personas and establishing a clear roadmap for execution.</li>
                    <li className="mt-2"><strong className="sm:text-base md:text-lg text-gray-800 ">Technology Selection:</strong> Choosing the right technologies for the project was crucial for its success. Navigating the vast landscape of available technologies required thorough research, evaluation of pros and cons, and consideration of factors such as scalability, performance, and ease of integration.</li>
                    <li className="mt-2"><strong className="sm:text-base md:text-lg text-gray-800 ">Deployment to Production:</strong> Deploying the project to production environments presented challenges in terms of learning and navigating various tools and platforms such as Google Cloud Console, Heroku, and SendGrid. Overcoming this hurdle involved dedicated learning, experimentation, and leveraging online resources and documentation.</li>
                    <li className="mt-2"><strong className="sm:text-base md:text-lg text-gray-800 ">APIs Usage and Integration:</strong> Integrating with third-party APIs introduced complexities that required careful handling. Overcoming this challenge involved understanding API documentation, implementing robust error handling mechanisms, and ensuring seamless integration with the rest of the application.</li>
                    <li className="mt-2"><strong className="sm:text-base md:text-lg text-gray-800 ">Location Data Scraping:</strong> Acquiring location data through web scraping proved to be a challenging task. To address this challenge, I opted to hire a freelancer specialized in web scraping. Effective communication and organization were essential in managing the freelance contract and ensuring the successful acquisition of the required data.</li>
                    <li className="mt-2"><strong className="sm:text-base md:text-lg text-gray-800 ">Development Using Jira:</strong> Adopting Jira for project management introduced a learning curve in terms of navigating the platform and leveraging its features effectively. Overcoming this challenge involved familiarizing myself with Jira's functionalities through self-learning and seeking guidance from online resources and tutorials.</li>
                    <li className="mt-2"><strong className="sm:text-base md:text-lg text-gray-800 ">Time Management:</strong> Balancing the demands of developing the project alongside a full-time job required effective time management and prioritization. Despite the time constraints, my passion for coding and the project itself fueled my motivation, making it easier to allocate sufficient time and energy to both endeavors.</li>
                </ul>
            </div>
            <div className="bg-gray-100 p-4 text-xs sm:text-sm lg:text-base xl:text-lg mt-8">
            <h2 className="sm:text-lg md:text-xl font-bold">Main Learnings</h2>
            </div>
            <div className="p-4 text-xs sm:text-sm lg:text-base xl:text-lg mt-8">
            
                <ul className="list-disc list-inside mt-4">
                <li className="mt-2"><strong className="sm:text-base md:text-lg text-gray-800 ">Resilience and Adaptability:</strong> I learned to break down complex tasks into smaller, manageable steps, from business and tech point of view. This approach allowed me to maintain momentum and make steady progress.</li>
                <li className="mt-2"><strong className="sm:text-base md:text-lg text-gray-800 ">Decision-Making:</strong> I learned to evaluate options critically, weigh trade-offs, and make informed decisions that align with project requirements and objectives. This involved deep dives into technical documentation, comparative analysis of frameworks and libraries, and consideration of factors such as scalability, maintainability, and community support.</li>
                <li className="mt-2"><strong className="sm:text-base md:text-lg text-gray-800 ">Technical Proficiency:</strong> The challenges of deploying to production, integrating with APIs provided valuable opportunities to deepen my technical expertise. Deploying to platforms such as Google Cloud Console and Heroku involved learning about cloud infrastructure, and deployment pipelines. Integrating with third-party APIs required understanding authentication mechanisms, data formats, and error handling strategies. These experiences expanded my technical toolkit.</li>
                <li className="mt-2"><strong className="sm:text-base md:text-lg text-gray-800 ">Time Management and Prioritization:</strong> Balancing project development with a full-time job underscored the importance of effective time management and prioritization.</li>
                </ul>
            </div>
            <div className="bg-gray-100 p-4 text-xs sm:text-sm lg:text-base xl:text-lg mt-8">
                <h2 className="sm:text-lg md:text-xl font-bold">Conclusion</h2>
                <p className="mt-4">In conclusion, the challenges encountered throughout the development of this project served as invaluable learning experiences that contributed to my personal and professional growth. By overcoming these challenges, I not only gained technical expertise but also developed essential skills. These experiences have equipped me with the confidence and capability to tackle even more ambitious projects in the future, while also fostering a deeper understanding of the technical challenges and complexities of modern web development. They say you do not learn something until you do it and I could not agree more.</p>
            </div>
        </>
    }
/>
                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl"> Technologies, tools and 3rd Party integrations Used</h1>}

                            isOpen={openAccordion === 4}
                            onClick={() => handleOpen(4)}
                            body={<>
                                <div className="bg-gray-100 p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                    <h2 className="sm:text-lg md:text-xl font-bold">Main Set-up</h2>
                                    <p className="mt-2">This section approaches in detail which technologies have been used for both BE and FE as well as 3rd Parties integration and a small overview of what are they used for. Additionally there is a dedicated section for the DB</p>
                                </div>
                                <div className="mt-2 text-xs sm:text-sm lg:text-base xl:text-lg">
                                    <NestedAccordion title={<h2 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Backend </h2>}>


                                        <p className="mb-4 text-xs m:2 sm:text-sm lg:text-base xl:text-lg">The backend of the Climbing App is built using <span className="font-bold">Node.js</span>, leveraging the <span className="font-bold">Express.js </span>framework for routing and handling API requests. It serves as the server-side logic, managing user authentication, climbing requests, location management, messaging, notifications, and profile details.
                                            The backend interacts with a database <span className="font-bold">(PostgresSQL)</span> to store and retrieve data, ensuring a robust and scalable infrastructure, on the cloud it is being hosted in <span className="font-bold">Heroku.</span></p>


                                        <li><strong className="sm:text-base md:text-lg  text-gray-800 " >Database Communication:</strong></li>
                                        <ul>
                                            <li><strong className="text-gray-600">pg (pg) and pg-pool (pg-pool):</strong> PostgreSQL client and connection pooling modules for Node.js.</li>
                                        </ul>
                                        <li><strong className="sm:text-base md:text-lg text-gray-800">Email Communication:</strong></li>
                                        <ul>
                                            <li><strong className="text-gray-600">SendGrid (sendgrid/mail):</strong> Leveraged for efficient email communication, facilitating the dispatch of authentication tokens, password creation, and recovery emails to users.</li>
                                        </ul>
                                        <li><strong className="sm:text-base md:text-lg text-gray-800">Image Uploads (User Content):</strong></li>
                                        <ul>
                                            <li><strong className="text-gray-600">Cloudinary (cloudinary):</strong> Integrated for cloud-based image management, enabling seamless upload, storage, and manipulation of multimedia assets within the app.</li>
                                        </ul>
                                        <ul>
                                            <li><strong className="text-gray-600">Multer (multer):</strong> Middleware utilized for handling multipart/form-data, facilitating file uploads within the application.</li>
                                        </ul>
                                        <li><strong className="sm:text-base md:text-lg  text-gray-800">OAuth 2.0 Authentication:</strong></li>
                                        <ul>
                                            <li><strong className="text-gray-600">Passport-Google-OAuth20 (passport-google-oauth20):</strong> OAuth 2.0 authentication integrated with Google Accounts for user authentication.</li>
                                        </ul>
                                        <li><strong className="sm:text-base md:text-lg  text-gray-800">Password Hashing:</strong></li>
                                        <ul>
                                            <li><strong className="text-gray-600">bcrypt (bcrypt):</strong> Secure password hashing, for password and other sensitive data to be stored in DB.</li>
                                        </ul>
                                        <li><strong className="sm:text-base md:text-lg  text-gray-800">Session Management, Session Persistence, and Auth Middleware:</strong></li>
                                        <ul>
                                            <li><strong className="text-gray-600">Clerk (clerk):</strong> Used for user authentication and session management.</li>
                                        </ul>
                                        <ul>
                                            <li><strong className="text-gray-600">Passport (passport):</strong> Flexible authentication middleware employed for Node.js.</li>
                                        </ul>
                                        <li><strong className="sm:text-base md:text-lg  text-gray-800">Cookie-based Authentication - Cookies Parsing, and Tokens:</strong></li>
                                        <ul>
                                            <li><strong className="text-gray-600">Cookie-Parser (cookie-parser):</strong> Middleware employed for parsing HTTP request cookies, enabling cookie-based authentication and session handling within the app.</li>
                                        </ul>
                                        <ul>
                                            <li><strong className="text-gray-600">JSON Web Token (jsonwebtoken):</strong> Employed for generating and verifying JWTs.</li>
                                        </ul>
                                        <li><strong className="sm:text-base md:text-lg  text-gray-800">Cross-Origin Resource Sharing (CORS):</strong></li>
                                        <ul>
                                            <li><strong className="text-gray-600">CORS (cors):</strong> Enables Cross-Origin Resource Sharing.</li>
                                        </ul>
                                        <li><strong className="sm:text-base md:text-lg  text-gray-800">Environment Variable Management:</strong></li>
                                        <ul>
                                            <li><strong className="text-gray-600">dotenv (dotenv):</strong> Used for loading environment variables from a .env file.</li>
                                        </ul>


                                    </NestedAccordion>

                                    <NestedAccordion title={<h2 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Frontend </h2>}>
                                        <p className="mb-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                            The frontend of the Climbing App is developed using <span className="font-bold">React.js</span>. It provides a dynamic and responsive user experience, with components for different parts of the application like headers, buttons, cards, search bars, and more. The frontend communicates with the backend through <span className="font-bold">API calls</span>, rendering data received from the server and sending user actions back to the server.
                                            <br />
                                            Key features and implementations include responsive design, state management, styling using <span className="font-bold">Tailwind CSS and MaterialUI</span>, and User authentication which is handled in the FE, including login, registration, password reset, and more.
                                            <span className="font-bold">Google Cloud Console</span> it is used to manage integrations such as Google Auth or Google Maps API and <span className="font-bold">Sendgrid</span> is used as email provider.
                                        </p>
                                        <li><strong className="sm:text-base md:text-lg  text-gray-800">User Interface Components:</strong></li>
                                        <ul>
                                            <li><strong className="text-gray-600">Material-UI (MUI):</strong> React UI framework providing a wide range of customizable components .</li>
                                            <li><strong className="text-gray-600">Emotion (emotion/react, emotion/styled):</strong> A CSS-in-JS library used for styling components.</li>
                                            <li><strong className="text-gray-600">React Icons (react-icons):</strong> A library of customizable icons for React applications.</li>
                                        </ul>
                                        <li><strong className="sm:text-base md:text-lg  text-gray-800">Styling and Design:</strong></li>
                                        <ul>
                                            <li><strong className="text-gray-800">Tailwind CSS (tailwindcss):</strong> Utility-first CSS framework used for styling components and layouts, providing a scalable and customizable approach to design.</li>
                                        </ul>
                                        <li><strong className="sm:text-base md:text-lg  text-gray-800">Date and Time Management:</strong></li>
                                        <ul>
                                            <li><strong className="text-gray-600">Date-fns (@date-io/date-fns, date-fns):</strong> A lightweight and modular JavaScript library for date and time manipulation.</li>
                                        </ul>
                                        <li><strong className="sm:text-base md:text-lg  text-gray-800">Map Integration:</strong></li>
                                        <ul>
                                            <li><strong className="text-gray-600">Leaflet (leaflet):</strong> An open-source JavaScript library for interactive maps, used for integrating maps and location-based features into the application.</li>
                                        </ul>
                                        <li><strong className="sm:text-base md:text-lg  text-gray-800">State Management and Animation:</strong></li>
                                        <ul>
                                            <li><strong className="text-gray-600">React Spring (@react-spring/web, react-spring):</strong> A spring-physics-based animation library for React.</li>
                                            <li><strong className="text-gray-600">Framer Motion (framer-motion):</strong> A library for creating fluid animations and interactive UIs in React applications.</li>
                                        </ul>
                                        <li><strong className="sm:text-base md:text-lg  text-gray-800">User Authentication and Security:</strong></li>
                                        <ul>
                                            <li><strong className="text-gray-600">React Google Button (react-google-button):</strong> Component for integrating Google sign-in functionality.</li>
                                            <li><strong className="text-gray-600">React Google reCAPTCHA (react-google-recaptcha):</strong> Component for implementing Google reCAPTCHA v3.</li>
                                        </ul>
                                        <li><strong className="sm:text-base md:text-lg  text-gray-800">Routing and Navigation:</strong></li>
                                        <ul>
                                            <li><strong className="text-gray-600">React Router DOM (react-router-dom):</strong> Routing and navigation in React applications.</li>
                                        </ul>
                                        <li><strong className="sm:text-base md:text-lg text-gray-800">Data Visualization and Presentation:</strong></li>
                                        <ul>
                                            <li><strong className="text-gray-600">React Big Calendar (react-big-calendar):</strong> Component for displaying events and schedules in a calendar format.</li>
                                            <li><strong className="text-gray-600">React Chat Elements (react-chat-elements):</strong> Component for displaying chat.</li>

                                        </ul>


                                    </NestedAccordion>
                                    <NestedAccordion title={<h2 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Database</h2>}>
                                        <p className="mb-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                            The database for the Climbing App is managed using <span className="font-bold">PGAdmin</span>, which is a graphical interface for <span className="font-bold">PostgreSQL</span>. The database is hosted on the cloud platform <span className="font-bold">Heroku</span>, ensuring scalability and reliability.
                                            <br />
                                            Regular <span className="font-bold">cron jobs</span> are set up for database cleanup and security checks, maintaining the integrity and security of the data.
                                        </p>

                                        <p className="mt-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                            <span className="font-bold">Database Squema:</span></p>
                                        <img src={DBSquema} alt="Database Schema" className="w-full h-auto mb-4" />
                                    </NestedAccordion>
                                </div>

                            </>
                            } />


                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl"> User Accounts & Secure Password Creation (Feature Showcase) </h1>}

                            isOpen={openAccordion === 5}
                            onClick={() => handleOpen(5)}
                            body={<>
                                <div className="bg-gray-100 p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                    <h2 className="text-sm sm:text-base lg:text-xl font-bold">User Accounts & Secure Password Creation</h2>
                                    <p className="mt-2">The Users Account Creation feature allows individuals to sign up for a new account on our platform, they will receive an email with a link which will send them to a page where they can securely create a Password. Process for requesting a new password works almost the same</p>
                                </div>
                                <div className="flex flex-col md:flex-row items-center justify-center">
                                    <div className="w-full md:w-1/2 p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                        <ul className="list-disc list-inside mt-4">
                                            <li className="font-bold">Form Interface:</li>
                                            <p>Users fill out a registration form with essential details like email, first name, last name.</p>
                                            <li className="font-bold">Validation of emails and passwords:</li>
                                            <p>We validate user inputs to ensure accuracy and completeness, displaying error messages for low security password or not valid email addresses.</p>
                                            <li className="font-bold">CAPTCHA Integration:</li>
                                            <p>We integrate CAPTCHA to prevent automated bot registrations.</p>
                                            <li className="font-bold">Email Verification:</li>
                                            <p>Users receive a verification email upon registration, containing a unique link which will allow them to create a password and mark account as active.</p>
                                            <li className="font-bold">Password Setting:</li>
                                            <p>Users set their passwords securely through a password link sent via email.</p>
                                            <li className="font-bold">Success Feedback:</li>
                                            <p>Upon successful registration, users receive confirmation messages and may be redirected to their personalized dashboard.</p>
                                        </ul>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <img src={PassSquema} alt="Password Schema" className="w-full h-auto mt-4" />
                                    </div>
                                </div>


                            </>
                            } />
                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">  User Initial steps. Profile creation and edition (Feature Showcase) </h1>}

                            isOpen={openAccordion === 6}
                            onClick={() => handleOpen(6)}
                            body={<>
                                <div className="bg-gray-100 p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                    <h2 className="text-sm sm:text-base lg:text-xl font-bold">User Initial steps. Profile creation and edition</h2>
                                    <p className="mt-2">Upon registering and establishing a password, users are prompted to furnish essential details during their initial login. This information is gathered through a Wizard-style form, facilitating the creation of their profil. Later on profile cards will be created allowing other users to get a feeling of who you might be as a climber.</p>
                                </div>
                                <div className="flex flex-col md:flex-row items-center justify-center">
                                    <div className="w-full md:w-1/2 p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                        <ul className="list-disc list-inside mt-4">
                                            <li className="font-bold">Location Selection :</li>
                                            <p>Implemented with Google Maps API, this selection will allow us to show the person information relevant to their location</p>
                                            <li className="font-bold">Profile Picture Upload:</li>
                                            <p>Using Cloudfare we are able to store profile pictures on the cloud. DB will just pick up a link generated after the picture have been uploaded to Cloudfare servers</p>
                                            <li className="font-bold">Gender and Birthdate selection</li>
                                            <p>Allowing us to display age and gender on profile</p>
                                            <li className="font-bold">Climbing Style Selection:</li>
                                            <p>There are many types of climbers and this will allow us to narrow down the profiles of people you might want to connect with</p>
                                            <li className="font-bold">How you are as a climber, additional material etc:</li>
                                            <p>Including some other information that other people might want to know about you</p>
                                            <li className="font-bold">Profile view and edition</li>
                                            <p>Profile preferences can be changed anytime, additional information can be added and this will create a card which other people can see.</p>
                                        </ul>
                                    </div>
                                    <div className="w-full md:w-1/2 aspect-w-16 aspect-h-9">
                                        <video src="https://res.cloudinary.com/de1yd9kjx/video/upload/v1712641003/tszpq9fokpof2wpbnyjc.mov" controls loop className="w-full h-full object-contain">
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>


                            </>
                            } />

                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl"> Find Climbing Locations (Feature Showcase) </h1>}
                            isOpen={openAccordion === 7}
                            onClick={() => handleOpen(7)}
                            body={
                                <>
                                    <div className="bg-gray-100 p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                        <h2 className="text-sm sm:text-base lg:text-xl font-bold">Finding Climbing Locations</h2>
                                        <p className="mt-2">Climbing locations can be found by using three search logic, search bar or simply looking at the map!</p>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center justify-center mt-4">
                                        <div className="p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                            <NestedAccordion title={<h2 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl">Location search by Three-View and Name</h2>}>
                                                <div className="flex flex-col md:flex-row items-center justify-center">
                                                    <div className="w-full md:w-1/2 p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                                        <ul className="list-disc list-inside mt-4">
                                                            <li className="font-bold">Location Selection by Three View:</li>
                                                            <p>Locations are organized following the logic Country/Region/Area & Routes, that can be used to find any location</p>
                                                            <li className="font-bold">Search bar (1:06 and 1:21)</li>
                                                            <p>Any route, location or area can be found using the Search Bar</p>
                                                            <li className="font-bold">Info displayed & External Links (00:41):</li>
                                                            <p>Nice information can be seen here; amount of routes, avg. height, external links (to website or crag info or directions in Google Map) </p>
                                                            <li className="font-bold">Actions possible: (00:59)</li>
                                                            <p>Routes can be added as favourite from this view , also climbing request can be created directly from here</p>
                                                            <li className="font-bold">Adding a route to favourite will keep it on the dashboard and activate notifications (1:33)</li>
                                                            <p>Every favourite route added to the profile will be stored unlocking further possibilties such as receiving notifications if someone climbs here</p>
                                                        </ul>
                                                    </div>
                                                    <div className="w-full md:w-1/2 aspect-w-16 aspect-h-9">
                                                        <video src="https://res.cloudinary.com/de1yd9kjx/video/upload/v1712641835/wauyq6baphpwvfmncqg4.mov" controls loop className="w-full h-full object-contain">
                                                            Your browser does not support the video tag.
                                                        </video>
                                                    </div>
                                                </div>
                                            </NestedAccordion>
                                            <NestedAccordion title={<h2 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl">Location search by Map + Locations Card Overview</h2>}>
                                                <div className="flex flex-col md:flex-row items-center justify-center">
                                                    <div className="w-full md:w-1/2 p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                                        <ul className="list-disc list-inside mt-4">

                                                            <li className="font-bold">Location Selection by Map:</li>
                                                            <p>Locations are located in the map using <span class="font-bolt"> Leaflet Open Integration</span>, here general information or existent requests for the place are shown</p>
                                                            <li className="font-bold">Route Overview:  (00:39) </li>
                                                            <p>Allow an overview of the route and unlock actions and information</p>
                                                            <li className="font-bold">Request on the route: (00:44)</li>
                                                            <p>Active request for this specific routes can be seen here, together with the profile of the person who created it an other details </p>
                                                            <li className="font-bold">See and write reviews: (1:08)</li>
                                                            <p>Each route can be reviewed, allowing people to get real user insights of the place</p>
                                                        </ul>
                                                    </div>
                                                    <div className="w-full md:w-1/2 aspect-w-16 aspect-h-9">
                                                        <video src="https://res.cloudinary.com/de1yd9kjx/video/upload/v1712641926/vfwintdjitxbrx71e4h2.mov" controls loop className="w-full h-full object-contain">
                                                            Your browser does not support the video tag.
                                                        </video>
                                                    </div>
                                                </div>
                                            </NestedAccordion>

                                        </div>

                                    </div>
                                </>
                            }
                        />
                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl"> Climbing Request - Create or join. (Feature Showcase) </h1>}
                            isOpen={openAccordion === 8}
                            onClick={() => handleOpen(8)}
                            body={
                                <>
                                    <div className="bg-gray-100 p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                        <h2 className="text-sm sm:text-base lg:text-xl font-bold">Create or join to existent climbing request to connect with people</h2>
                                        <p className="mt-2">The way of connecting with people is through climbing requests, these can be created or joined and are as flexible as you want them to be!</p>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center justify-center mt-4">
                                        <div className="p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                            <NestedAccordion title={<h2 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl">Creating Climbing Requests & Active Request Dashboard</h2>}>
                                                <p className="mt-2">While creating a climbing request you will go into a Wizard Style process which allow you to choose a place, day/time , climbing style and agree on the material needed</p>

                                                <div className="flex flex-col md:flex-row items-center justify-center">
                                                    <div className="w-full md:w-1/2 p-4 text-xs sm:text-sm lg:text-base xl:text-base">
                                                        <ul className="list-disc list-inside mt-4">
                                                            <li className="font-bold">Place selection: (00:15) </li>
                                                            <p>Following the "Three-Locations" logic, you can choose if you want to select one specific route, multiple or just a request for the whole area</p>
                                                            <li className="font-bold">Time selection. Fix vs Flexible (00:40) (00:50)</li>
                                                            <p> Choose flexible if you can climb anytime or if every week looks the same for you, these request does not expire! </p>
                                                            <p>Fix climbing request are specific for a day and a time, also a multi-day trip can be organized</p>
                                                            <li className="font-bold">Add if you need any material or you bring your own (01:14):</li>
                                                            <p>First select the style of climbing, which will determine what material is associated to it, second add info about the material you can bring with you and the one you will need your partner to bring!</p>
                                                            <li className="font-bold">Add a message! (02:04)</li>
                                                            <p>This message will be visible for other people while looking into your request, better be nice!</p>
                                                            <li className="font-bold">Request Overview and creation (02:40)</li>
                                                            <p>The screen allow you to see all the information just as other users will see it!</p>
                                                            <li className="font-bold">Active request Dashboard: (02:56) and look into the request created (03:18)</li>
                                                            <p>Unique place to see & manage all the request you created</p>
                                                        </ul>
                                                    </div>
                                                    <div className="w-full md:w-1/2 aspect-w-16 aspect-h-9">
                                                        <video src="https://res.cloudinary.com/de1yd9kjx/video/upload/v1712641140/usthuvzn27onw7avaxxe.mov" controls loop className="w-full h-full object-contain">
                                                            Your browser does not support the video tag.
                                                        </video>
                                                    </div>
                                                </div>
                                            </NestedAccordion>
                                            <NestedAccordion title={<h2 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl">Joining other user's Climbing Requests </h2>}>
                                                <p className="mt-2">This feature allow you to join to other climbers, it has some filters to filter out routes and offer the possibility of contactimng people</p>

                                                <div className="flex flex-col md:flex-row items-center justify-center">
                                                    <div className="w-full md:w-1/2 p-4 text-xs sm:text-sm lg:text-base xl:text-base">
                                                        <ul className="list-disc list-inside mt-4">

                                                            <li className="font-bold">Request overview: (00:24)</li>
                                                            <p> All active requests can be found here</p>
                                                            <li className="font-bold">Filters: (00:08) </li>
                                                            <p>To narrow down the amount of request different filters can be used</p>
                                                            <li className="font-bold">Profile overview: (00:26)</li>
                                                            <p> Info to the profile who created the request is displayed</p>
                                                            <li className="font-bold">Swipping cards (00:31)</li>
                                                            <p>Cards can be swipped, here all the details of the request and even profile are shown! </p>
                                                            <li className="font-bold">Connecting with people (00:42) (01:15) </li>
                                                            <p>Connect with people is easy, select the request you are interested in and swipe right or click on "Connect"</p>

                                                        </ul>
                                                    </div>
                                                    <div className="w-full md:w-1/2 aspect-w-16 aspect-h-9">
                                                        <video src="https://res.cloudinary.com/de1yd9kjx/video/upload/v1712641057/ep0obnvunlmfb6xqc2dd.mov" controls loop className="w-full h-full object-contain">
                                                            Your browser does not support the video tag.
                                                        </video>
                                                    </div>
                                                </div>
                                            </NestedAccordion>
                                            <NestedAccordion title={<h2 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl">Active Request Dashboard</h2>}>
                                                <p className="mt-2">A place where active request can be seen or deleted.</p>

                                                <div className="flex flex-col md:flex-row items-center justify-center">
                                                    <div className="w-full md:w-1/2 p-4 text-xs sm:text-sm lg:text-base xl:text-base">
                                                        <ul className="list-disc list-inside mt-4">

                                                            <li className="font-bold">Request Overview</li>
                                                            <p> All active requests can be found here</p>
                                                            <li className="font-bold">Deletion of requests </li>
                                                            <p> Active request can be deleted from here</p>
                                                            <li className="font-bold">See request on detail</li>
                                                            <p> If clicking on the specific request further details are shown </p>

                                                        </ul>
                                                    </div>
                                                    <div className="w-full md:w-1/2 aspect-w-16 aspect-h-9">
                                                        <video src="https://res.cloudinary.com/de1yd9kjx/video/upload/f_auto:video,q_auto/wpc3rypjhfzbk9kupbvj" controls loop className="w-full h-full object-contain">
                                                            Your browser does not support the video tag.
                                                        </video>
                                                    </div>
                                                </div>
                                            </NestedAccordion>

                                        </div>

                                    </div>
                                </>
                            }
                        />

                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">  Private Messages (Feature Showcase) </h1>}
                            isOpen={openAccordion === 9}
                            onClick={() => handleOpen(9)}
                            body={
                                <>
                                    <div className="bg-gray-100 p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                        <h2 className="text-sm sm:text-base lg:text-xl font-bold">Private Messages functionality and Messages notifications</h2>
                                        <p className="mt-2">Users can connect and send messages within the app. Every new message will display a notification.</p>
                                    </div>

                                    <div className="p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                        <NestedAccordion title={<h2 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl"> The functionality </h2>}>
                                            <div className="flex flex-col md:flex-row items-center justify-center">
                                                <div className="w-full md:w-1/2 p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                                    <ul className="list-disc list-inside mt-4">
                                                        <li className="font-bold">Sending and answering messages:</li>
                                                        <p>Messages are sent from UI and stored in its DB table</p>
                                                        <li className="font-bold">Notifications for new messages</li>
                                                        <p>Functionality looks for unread message and display one notification per message not read</p>
                                                        <li className="font-bold">Conversation deletion: (soft delete)</li>
                                                        <p>User 1 can delete conversation but User 2 will still see it. If User 2 answers User 1 after conversation was deleted, User 1 will see the conversation but only the messages after deletion</p>
                                                    </ul>
                                                </div>
                                                <div className="w-full md:w-1/2 aspect-w-16 aspect-h-9">
                                                    <video src="https://res.cloudinary.com/de1yd9kjx/video/upload/v1712641066/zsp9ycrtfmkpwjksfzdb.mov" controls loop className="w-full h-full object-contain">
                                                        Your browser does not support the video tag.
                                                    </video>
                                                </div>
                                            </div>
                                        </NestedAccordion>

                                        <NestedAccordion title={<h2 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl"> Technical Implementation - The logic </h2>}>
                                            <div className="bg-gray-100 p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                                <h2 className="text-sm sm:text-base lg:text-xl font-bold">Messaging Functionality Documentation</h2>
                                                <p className="mt-2">Explore how the feature has been implemented from a technical point of view. From database structuring to frontend and backend integration.</p>
                                            </div>
                                            <hr className="border-t border-gray-200 my-4" />
                                            <div className="mt-2 flex flex-col md:flex-row">
                                                <div className="w-full md:w-1/2 p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                                    <h3 className="text-sm sm:text-base lg:text-xl font-bold">Database Structure</h3>
                                                    <div className="p-4 mt-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                                        <h5 className="text-sm sm:text-base lg:text-xl font-bold">Conversations Table:</h5>
                                                        <p>Stores conversation details such as "conversation_id" - A unique identifier assigned to each conversation, facilitating easy retrieval. "user_id1" and "user_id2" uid of the two users engaged in the conversation, and deleted status for each user.</p>
                                                        <p>Upon the initiation of a conversation, a new record is integrated into the conversations table, effectively linking the participants of it.</p>


                                                        <h5 className="text-sm sm:text-base lg:text-xl font-bold">Messages Table</h5>
                                                        <p>Designed to encapsulate the actual content exchanged within each conversation, the messages table serves as a repository for the messages themselves, along with pertinent metadata.</p>
                                                        <p>Each message exchange within a conversation is stored within the messages table, keeping all relevant information while facilitating the differentiation of message types, timestamps, and tracking of message statuses.</p>
                                                    </div>
                                                    <img src={MessagesDb} alt="Messages Schema" className="w-full md:w-90 h-auto mb-4" />
                                                </div>

                                                <div className="w-full md:w-1/2 p-4 mt-4 md:mt-0 text-xs sm:text-sm lg:text-base xl:text-lg">
                                                    <h2 className="text-sm sm:text-base lg:text-xl font-bold mt-4" >Frontend (FE) Implementation</h2>
                                                    <p className="mt-2">Two main components, messages screen (where react-chat-elements library is used to display the messages) and Top Bar component, in charge of the notifications and provide the access to messages</p>


                                                    <h2 className="text-sm sm:text-base lg:text-xl font-bold mt-4">Backend (BE) Implementation</h2>
                                                    <p className="mt-2">API endpoints, JWT Tokens and Database Operations are performed to query the needed data</p>



                                                    <h2 className="text-sm sm:text-base lg:text-xl font-bold mt-4">User Workflow</h2>
                                                    <p className="mt-2">This section outlines the core functionalities of the messaging system, and what happens behind the scenes</p>

                                                    <div className="p-2  text-xs sm:text-sm lg:text-base xl:text-lg">
                                                        <h5 className="font-bold">1. Creating a Conversation</h5>
                                                        <p>Upon the initiation of a conversation between two users, first a new record is "conversation_id" is stored into the conversations table, creating the link between the involved users. Then the message will be stored in Messages Table with the link to conversation</p>
                                                    </div>

                                                    <div className="p-2  text-xs sm:text-sm lg:text-base xl:text-lg">
                                                        <h5 className="font-bold">2. Sending a Message</h5>
                                                        <p>When sending a message, a new record is stored into the messages table, including the message content along with its conversation_id and other metadata such as the sender's identification, message type, and timestamp of creation.</p>
                                                    </div>

                                                    <div className="p-2  text-xs sm:text-sm lg:text-base xl:text-lg">
                                                        <h5 className="font-bold">3. Reading a Message</h5>
                                                        <p>As users open a message, a POST request updates the is_read flag within the messages table, which will be used for the Message Notifications.</p>
                                                    </div>

                                                    <div className="p-2 text-xs sm:text-sm lg:text-base xl:text-lg">
                                                        <h5 className="font-bold">4. Fetching Conversations and Messages</h5>
                                                        <p>First queries the conversations table, filtering the results based on the user's id (current user), then a subquery is done to Messages table, which will fetch all messages and order them based on timestamp</p>
                                                    </div>
                                                    <div className="p-2 text-xs sm:text-sm lg:text-base xl:text-lg">
                                                        <h5 className="font-bold">5. Deletion logic.</h5>
                                                        <p>Approach is to have "soft deletion" so records are never deleted from DB, just a flag manage its visibility for the users. This deletion can be one-side performed, if user 1 deletes conversation with user 2 will not see any more messages unless user 2 write him again a new one. When this happen a query is done to messages table which by using timestamp of deletion will understand which messages have been deleted and show only the new ones</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </NestedAccordion>


                                    </div>
                                </>
                            }
                        />
                        <AccordionItem
                            title={<h1 className="font-general-bold text-sm sm:text-base lg:text-lg xl:text-xl">Other features: Calendar, favourites (Feature Showcase)</h1>}
                            isOpen={openAccordion === 10}
                            onClick={() => handleOpen(10)}
                            body={
                                <>
                                    <div className="bg-gray-100 p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                        <h2 className="text-sm sm:text-base lg:text-xl font-bold">Other features: Calendar and favourites</h2>
                                        <p className="mt-2">Users can add their climbing request to the calendar to keep an overview of them</p>
                                    </div>
                                    <div className="flex flex-col md:flex-row mt-4">
                                        <div className="p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                            <NestedAccordion title={<h2 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl">Calendar</h2>}>
                                                <div className="flex flex-col md:flex-row items-center justify-center">
                                                    <div className="w-full md:w-1/2 p-4 text-xs sm:text-sm lg:text-base xl:text-lg">

                                                        <ul className="list-disc list-inside mt-4">
                                                            <li className="font-bold">Display of active request or requests added:</li>
                                                            <p>All request will be stored in the calendar</p>
                                                            <li className="font-bold">Open a request from calendar:</li>
                                                            <p>Details of climbing request can be opened from calendar</p>
                                                            <li className="font-bold">Notifications for requests:</li>
                                                            <p> User can get notifications when a climbing request is close in time (flexible definition, 1 day, 1 hour prior etc) </p>
                                                        </ul>
                                                    </div>
                                                    <div className="w-full md:w-1/2 aspect-w-16 aspect-h-9">
                                                        <video src="https://res.cloudinary.com/de1yd9kjx/video/upload/f_auto:video,q_auto/ffqxc40wobde3j7e1102" controls loop className="w-full h-full object-contain">
                                                            Your browser does not support the video tag.
                                                        </video>
                                                    </div>
                                                </div>
                                            </NestedAccordion>
                                            <NestedAccordion title={<h2 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl">Favourites Locations</h2>}>
                                                <div className="flex flex-col md:flex-row items-center justify-center">
                                                    <div className="w-full md:w-1/2 p-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                                                        <ul className="list-disc list-inside mt-4">
                                                            <li className="font-bold">Add routes to favourites</li>
                                                            <p>Climbing places/routes can be added to favourites and managed from this dashboard.</p>
                                                            <li className="font-bold">Notifications for new request in favourite location</li>
                                                            <p>User can define if wants to get a notification everytime someone is creating a request for a favourite place</p>
                                                        </ul>
                                                    </div>
                                                    <div className="w-full md:w-1/2 aspect-w-16 aspect-h-9">
                                                        <video src="https://res.cloudinary.com/de1yd9kjx/video/upload/v1712641065/i9lts9rixwy9denigcux.mov" controls loop className="w-full h-full object-contain">
                                                            Your browser does not support the video tag.
                                                        </video>
                                                    </div>
                                                </div>
                                            </NestedAccordion>

                                        </div>

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

export default Project4;