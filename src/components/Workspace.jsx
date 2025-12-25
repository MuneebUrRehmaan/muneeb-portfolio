import React from 'react';
import { workstation } from '../constants';
import Title from './Title';
import SubHaeading from './SubHaeading';

const Workspace = () => {
  return (
    <section className="w-full bg-cream pt-24 pb-34 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 max-sm:hidden md:px-8 mb-24 max-md:mb-16 text-center">
        <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-black">
          My Workstation
        </h2>
      </div>

      <div className='sm:hidden px-4'>
        <SubHaeading subTitle={'Workstation'}/>
         <Title title={'My Workstation'}/>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Track 1 */}
        <div className="flex animate-scroll ">
          {workstation.map(item => (
            <div key={`a-${item.id}`} className="shrink-0 w-160 max-sm:w-100   mr-6 overflow-hidden ">
              <img src={item.image} alt={item.alt} className="w-full shadow-sm h-90 max-sm:h-60 object-cover rounded " />
            </div>
          ))}
          {/* Duplicate for seamless effect */}
          {workstation.map(item => (
            <div key={`b-${item.id}`} className="shrink-0 w-160 max-sm:w-100    mr-6 overflow-hidden">
              <img src={item.image} alt={item.alt} className="w-full h-90 shadow-sm max-sm:h-60 object-cover rounded" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Workspace;
