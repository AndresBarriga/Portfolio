import { FiArrowDownCircle } from 'react-icons/fi';
import soft from "../../images/soft.jpg";
import { motion } from "framer-motion";


const AppBanner = () => {
    return (
        <div className='bg-hsl-240-33-98'>
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
            className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2 "
        >
            <div className="w-full  md:w-1/3 text-left ">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.9,
                        delay: 0.1,
                    }}
                    className="font-general-semibold text-2xl mx-7 lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark "
                >
                    Hi, I am <span className='text-indigo-500 text-general-bold'> Andrés </span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.9,
                        delay: 0.2,
                    }}
                    className="mx-7 font-general-medium mt-4 text-base md:text-lg lg:text-1xl xl:text-2xl text-center sm:text-left leading-normal text-gray-500"
                >
                    a <span className='text-indigo-500 text-general-bold'>Product Manager</span> with a passion for turning ideas into successful products. <span className='text-indigo-500 text-bold'>Explore my journey</span> in product development and innovation.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.9,
                        delay: 0.3,
                    }}
                    className="flex justify-center sm:block"
                >
                    <a
                        download="Andres-Resume.pdf"
                        href="/files/Andres-Resume.pdf"
                        className="mx-7 font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                        aria-label="Download Resume"
                    >
                        <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
                        <span className="text-sm sm:text-lg font-general-medium duration-100">
                            Download CV
                        </span>

                    </a>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: -180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
            >
                <img
                    src={soft}
                    alt="ProductCreation"
                />
            </motion.div>
        </motion.section>
        </div>
    );
};

export default AppBanner;