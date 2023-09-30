import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 4, duration: 2 });
	useCountUp({ ref: 'githubStarsCounter', end: 67, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 142, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 89, duration: 2 });

	return (
		
		<div className="mt-10 my-20 sm:mt-20 bg-primary-light bg-ternary-dark">
			<div className="font-general-medium font-sm sm:font-base items-center  block sm:flex sm:py-10 py-2 sm:justify-between ">
				<CounterItem
					title="Years of experience"
					counter={<span id="experienceCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Sprints Done"
					counter={<span id="githubStarsCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Features Launched"
					counter={<span id="feedbackCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Customer Satisfaction Score"
					counter={<span id="projectsCounter" />}
					measurement="%"
				/>
			</div>
		</div>
		
	);
};

export default AboutCounter;
