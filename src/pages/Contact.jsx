import { motion } from 'framer-motion';
import ContactDetails from '../components/Contact/contactDetails';
import ContactForm from '../components/Contact/contactForm';
import CalendlyWidget from '../components/Contact/CalendlyWidget';

const Contact = () => {
	return (
        <div>
			<div className='flex flex-col justify-items items-center mx-auto'>
			<ContactDetails />
			</div>
			
			<h1 className="text-3xl flex flex-col justify-items items-center mx-auto mt-10 font-general-bold sm:text-4xl">Or book a meeting with me 👨🏻‍💻 🤝🏼</h1>
			
			 <CalendlyWidget />
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.5,
				delay: 0.1,
			}}
			className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
		>
			{/* <ContactForm /> */}
			
		</motion.div>
        </div>
	);
};

export default Contact;