import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 4, duration: 2 });
	useCountUp({ ref: 'githubStarsCounter', end: 67, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 92, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 87, duration: 2 });

	return (
		<div className="mt-10 my-20 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium font-base items-center  block sm:flex sm:py-10 py-2 sm:justify-between ">
				<CounterItem
					title="Years of experience"
					counter={<span id="experienceCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Sprints Done"
					counter={<span id="githubStarsCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Positive feedback"
					counter={<span id="feedbackCounter" />}
					measurement="%"
				/>

				<CounterItem
					title="Projects completed"
					counter={<span id="projectsCounter" />}
					measurement="%"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;