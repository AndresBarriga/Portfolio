import profileImage from '../../images/profile.jpeg';
import { useContext } from 'react';
import AboutMeContext from './AboutMeContext';
import { FiArrowDownCircle } from 'react-icons/fi';



const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<><div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="flex flex-col   mb-7 sm:mb-0">
				<img src={profileImage} className="rounded-lg w-1/3 sm:w-4/5" alt="" />

				<div className='flex  md:justify-start'> 
			</div>
			</div>
				

			<div className="font-general-light text-sm text-gray-500 w-full text-left">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-sm sm:text-base   "
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