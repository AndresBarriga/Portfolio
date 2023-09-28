import React from 'react';
import skillsData from '../../data/skillsData';


function Skills(props) {
    return (
        <div className='flex flex-groww-1/2 sm:w-1/2 md:w-1/2' >
          
            <a className="block rounded-xl border border-indigo-200 p-4 shadow-sm md:w-auto lg:w-60  mx-6 my-1 " style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}>

            <span className="inline-block rounded-lg bg-indigo-50 p-4">
               <img className= "aspect-square h-6 w-auto sm:h-10 sm:w-auto md:h-12 md:h-auto text-white "src={props.img} alt="Image"></img> 
            </span>
            <h2 className="font-general-bold text-base md:text-lg">{props.title}</h2>
            <p className="font-general-light text-xs sm:mt-1 sm:block sm:text-sm sm:text-gray-600" style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}>{props.description}</p>
            
        </a>
          </div>
        
      );
    }

export default Skills;