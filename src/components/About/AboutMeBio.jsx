import profileImage from '../../images/profile.jpeg';
import { useContext } from 'react';
import AboutMeContext from './AboutMeContext';
import { FiArrowDownCircle } from 'react-icons/fi';



const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<><div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="flex flex-col w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src={profileImage} className="rounded-lg w-96" alt="" />

				<div className='flex  md:justify-start'> 
			<a
			download="Andres-Resume.pdf"
			href="/files/Andres-Resume.pdf"
			className="mx-7 font-general-medium sm:ml-4 flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
			aria-label="Download Resume"
		>
			<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
			<span className="text-sm md:text-lg sm:text-base  font-general-medium duration-100">
				Download CV
			</span>
		</a>
			</div>
			</div>
				

			<div className="font-general-regular text-gray-500 w-full sm:w-3/4 text-left">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>     
               
		</div>
					</>
	);
};

export default AboutMeBio;