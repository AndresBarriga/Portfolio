import React from 'react';

const CounterItem = ({ title, counter, measurement }) => {
	return (
		<div className="hidden mx-auto md:block mb-20 sm:mb-0">
			<h2 className="text-lg md:text-3xl text-center text-secondary-dark mb-2">
				{counter} {measurement}
			</h2>
			<span className="font-general-regular block text-xs md:text-base text-center text-ternary-dark ">
				{title}
			</span>
		</div>
	);
};

export default CounterItem;