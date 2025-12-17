import React from 'react';
import CircularTextBadge  from './CircularTextBadge';
import { profile } from '../constants';
import Button from './Button';
import TextType from './TextType';

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
        <h1 className="text-6xl max-md:text-4xl lg:text-7xl font-semibold leading-[1.3] tracking-tight text-gray-900">
          A <span className="text-orange-400/90 max-sm:text-[34px]">
          <TextType
                                text={["Frontend Developer", "Backend Developer", "FullStack Developer"]}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={true}
                                cursorCharacter=""
                            /></span>
          <br className="" />
          &amp; Digital Designer
        </h1>

        <p className="text-md md:text-xl text-gray-600 leading-relaxed max-w-lg">
          I collaborate with brands globally to design impactful, mission-focused websites
          that drive results and achieve business goals.
        </p>

        <div className="pt-4">
          <Button title={'My Resume'} className={'text-gray-50 bg-[#1b1b1b]'} />
        </div>
      </div>
    </section>
  );
};


export default AboutHero;