import React from 'react';
import skillsData from '../../data/skillsData';


function Skills(props) {
    return (
        <div >
          <div className="flex flex-wrap gap-4 sm:grid-cols-3 p-0 m-4 " >
            <a class="w-60  h-60  block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring mx-6 my-1" style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}>
          
            <span className="inline-block rounded-lg bg-gray-50 p-4">
               <img className= "h-12 w-12 text-white"src={props.img} alt="Image"></img> 
            </span>
            <h2 className="text-lg font-secondary-bold">{props.title}</h2>
            <p className="hidden font-secondary-light sm:mt-1 sm:block sm:text-sm sm:text-gray-600" style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}>{props.description}</p>
        </a>
          </div>
        </div>
      );
    }

export default Skills;