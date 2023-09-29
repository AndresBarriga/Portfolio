import React from 'react';
import Certification from './Certifications';
import certifData from '../../data/certifData';



function createCertifCard(certifData) {
  return (
      <Certification
      key={certifData.id}
      title={certifData.title}
      description={certifData.description}
      img={certifData.img}
      link={certifData.link}
      />
  );
}

const MyCertifications = () => {
  return (
  <section>
  

        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="text-center mb-8"> 
                    <h1 className="text-2xl font-general-bold sm:text-3xl md:text-4xl">Professional Certifications</h1>
                    <p className="mt-4 text-base text-gray-500 font-general-light sm:text-lg md:text-xl">I hold the following professional certifications, demonstrating my commitment to continuous learning and my expertise in <span className='text-indigo-500 text-general-bold'> Scrum and IT service management:</span></p>
                </div>
                <div className="flex flex-col w-auto md:flex-row justify-between ">
                
                    {certifData.map((certif) => (
                        createCertifCard(certif)
                    ))}
                    
                </div>
            </div>
            
        </section>

  );
}


export default MyCertifications;
