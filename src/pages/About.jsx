import AboutMeBio from '../components/About/AboutMeBio';
import AboutCounter from '../components/About/AboutCounter';
import { AboutMeProvider } from '../components/Context/AboutMeContext';
import { motion } from 'framer-motion';
import Certification from '../components/shared/Certifications';
import certifData from '../data/certifData';
import { FiArrowDownCircle } from 'react-icons/fi';



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

const About = () => {
	return (
		<><><AboutMeProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>


			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				s
				<AboutCounter />
			</motion.div>

		</AboutMeProvider>
		<section className='flex flex-cols items-center justify-center'>
		<div className="max-w-screen-xl px-2 py-8 sm:px-6 sm:py-12 lg:px-4 lg:py-16">
		<div className="text-center mb-8"> 
                    <h1 className="text-3xl font-general-bold sm:text-4xl">My Role along different Products</h1>
                    <p className="mt-4 text-base text-gray-600 font-general-light sm:text-lg md:text-xl">See the impact and the Role I played in different products</p>
					<a
                        href="/myRole"
                        className="font-general-medium flex flex-col justify-center mt-4 items-center mx-auto w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                        aria-label="See Projectss"
                    >
                        
                        <span className="text-sm sm:text-lg font-general-medium duration-100">
                            See My Role
                        </span>

                    </a>
                </div>

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
			</section>
			
			</></>
		

	);
};

export default About;