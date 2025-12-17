import React from 'react';
import CircularTextBadge  from './CircularTextBadge';
import { profile } from '../constants';
import Button from './Button';

const AboutHero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
      
      {/* Left Column: Image Container */}
      <div className="relative lg:w-1/3 max-w-[500px] lg:max-w-none max-sm:hidden">
        
        {/* Image Mask Wrapper */}
        <div className="relative z-0 w-full h-120 overflow-hidden rounded rounded-b-[170px] shadow-sm">
          <img
            src={profile}
            alt="Portrait of the developer"
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Optional overlay */}
          <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
        </div>

        {/* Floating Badge */}
        <div className="absolute  right-3 bottom-4  z-10">
          <CircularTextBadge text="LETS TALK" />
        </div>
      </div>

      {/* Right Column: Text Content */}
      <div className="w-full lg:w-2/3 flex flex-col items-start text-left space-y-4 pt-10 lg:pt-0">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-gray-900">
          A <span className="text-orange-400/90">creative developer</span>
          <br className="hidden md:block" />
          &amp; digital designer
        </h1>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
          I collaborate with brands globally to design impactful, mission-focused websites
          that drive results and achieve business goals.
        </p>

        <div className="pt-4">
          <Button title={'My Resume'} className={'text-gray-50 bg-slate-900'} />
        </div>
      </div>
    </section>
  );
};


export default AboutHero;