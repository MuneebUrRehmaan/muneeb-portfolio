import React from 'react';
import { workstation } from '../constants';
import Title from './Title';
import SubHaeading from './SubHaeading';
import ScrollAnimation from './ScrollAnimation';

const Workspace = () => {
  return (
    <section className="max-w-7xl mx-auto bg-cream pt-24 pb-34 overflow-hidden">
      

      <div className=' px-4 md:px-8'>
        <SubHaeading subTitle={'Workstation'} />
        <Title title={'My Workstation'} />
      </div>

      <div className="relative w-full  flex overflow-hidden">
        {/* Track 1 */}
        <div className="flex  animate-scroll ">
          {workstation.map(item => (
           
            <div key={`a-${item.id}`} className="shrink-0 w-130 max-sm:w-100 py-4  mr-6 overflow-hidden ">
              <img src={item.image} loading='lazy' alt={item.alt} className="w-full border border-[#e2e8f0]  h-90 max-sm:h-60 object-cover rounded-xl " />
            </div>
            
          ))}
          {/* Duplicate for seamless effect */}
          {workstation.map(item => (
            <div key={`b-${item.id}`} className="shrink-0 w-130 max-sm:w-100 py-4  mr-6 overflow-hidden ">
              <img src={item.image} loading='lazy' alt={item.alt} className="w-full border border-[#e2e8f0] h-90  max-sm:h-60 object-cover rounded-xl " />
            </div>
          ))}
        </div>
        
      </div>

    </section>
  );
};

export default Workspace;
