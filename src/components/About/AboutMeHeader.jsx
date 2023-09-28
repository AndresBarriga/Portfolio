import AboutMeBio from './AboutMeBio';
import AboutCounter from './AboutCounter';
import { AboutMeProvider } from './AboutMeContext';
import { motion } from 'framer-motion';


const AboutMeHeader = () => {
	return (
		<><AboutMeProvider>
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
			
			</>
		

	);
};

export default AboutMeHeader;