import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import logo from "../../images/Logo.png";
import { motion } from 'framer-motion';
import Button from '../reusable/Button';

const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto"
		>

			

			{/* Small screen hamburger menu */}
			
			
			<div
				className={
					showMenu
						? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
						: 'hidden'
				}
			>
				<Link
					to="/projects"
					className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
					aria-label="Projects"
				>
					Projects
				</Link>
				<Link
					to="/about"
					className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
					aria-label="About Me"
				>
					About Me
				</Link>
				<Link
					to="/contact"
					className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
					aria-label="Contact"
				>
					Contact
				</Link>
				<div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
					<Link to="/contact">
						<span className="font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24" aria-label="Book a Call">
							<Button title="Book a Call" />
						</span>
					</Link>
				</div>
			</div>

			{/* Header links large screen */}
			<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
			<Link
					to="/"
					className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
					aria-label="Projects"
				>
					Home
				</Link>
				<Link
					to="/projects"
					className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
					aria-label="Projects"
				>
					Projects
				</Link>
				<Link
					to="/about"
					className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
					aria-label="About Me"
				>
					About Me
				</Link>
				<Link
					to="/contact"
					className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
					aria-label="Contact"
				>
					Contact
				</Link>

				<div className="w-64 h-16 "></div>
				<div className="w-64 h-16 "></div>
				{/* Header right section buttons */}

				<div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
					<div className="hidden md:flex">
						<Link to="/contact">
							<span
								className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
								aria-label="Hire Me Button"
							>
								<Button title="Let's talk" />
							</span>
						</Link>

					</div>
				</div>


			</div>
			{/*</div>*/}
		</motion.nav>


	);
};

export default AppHeader;