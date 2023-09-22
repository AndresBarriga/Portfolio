import AboutMeBio from '../components/About/AboutMeBio';
import AboutCounter from '../components/About/AboutCounter';
import { AboutMeProvider } from '../components/Context/AboutMeContext';
import { motion } from 'framer-motion';
import Certification from '../components/shared/Certifications';
import certifData from '../data/certifData';
import Carousel from '../components/Projects/Carousel/Carousel';

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
				<AboutCounter />
			</motion.div>

		</AboutMeProvider>
		<div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
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
			
			</></>
		

	);
};

export default About;