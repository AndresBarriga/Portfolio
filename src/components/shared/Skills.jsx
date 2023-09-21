import React from 'react';
import skillsData from '../../data/skillsData';


function Skills(props) {
    return (
        <div className='flex flex-groww-1/2 sm:w-1/2 md:w-1/2' >
          
            <a className="block rounded-xl border border-gray-100 p-4 shadow-sm  lg:w-60  mx-6 my-1 " style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}>

            <span className="inline-block rounded-lg bg-gray-50 p-4">
               <img className= "h-6 w-6 sm:h-10 sm:w-10 md:h-12 md:h-12 text-white"src={props.img} alt="Image"></img> 
            </span>
            <h2 className="font-secondary-bold text-base md:text-xl lg:3xl">{props.title}</h2>
            <p className="font-secondary-light text-sm sm:mt-1 sm:block sm:text-base sm:text-gray-600" style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}>{props.description}</p>
            
        </a>
          </div>
        
      );
    }

export default Skills;