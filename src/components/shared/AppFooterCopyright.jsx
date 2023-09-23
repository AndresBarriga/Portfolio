function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark ">
				&copy; {new Date().getFullYear()}
				<a
					href="https://github.com/AndresBarriga/Portfolio"
					target="__blank"
					className="font-secondary-medium text-sm uppercase hover:underline hover:text-indigo-600 ml-1 duration-500 sm:text-xl "
				>
					React & Tailwind CSS Portfolio
				</a>
				.
				<a
					href="https://andresbarriga.me"
					target="__blank"
					className="font-secondary-medium text-sm uppercase hover:underline hover:text-indigo-600 ml-1 duration-500 sm:text-xl"
				>
					Andrés Barriga
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;