import React from 'react';
import { experience } from '../constants';
import Title from './Title';
import SubHaeading from './SubHaeading';

const Experience = () => {

  return (
    <section id="experience" className="component-gap">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 max-md:mb-12">
          <SubHaeading  subTitle={'My Skills'}/>
          <Title title={'Experience &  Skills'}/>
        </div>

        {/* Experience List */}
        <div className="flex flex-col"
          onMouseEnter={() => window.dispatchEvent(new Event("cursor-hover-images"))}
          onMouseLeave={() => window.dispatchEvent(new Event("cursor-hover-leave"))}
        >
          {experience.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row items-start md:items-center py-3 md:py-8 border-b border-gray-200 hover:border-gray-400 transition-colors duration-300"
            >

              {/* Period */}
              <div className="w-full md:w-1/5 mb-4 md:mb-0">
                <span className="font-sans text-sm md:text-base font-medium text-gray-500 group-hover:text-black transition-colors">
                  {item.period}
                </span>
              </div>

              {/* Role */}
              <div className="w-full md:w-2/5 mb-2">
                <h3 className="font-display text-3xl max-md:text-2xl font-semibold text-black sm:uppercase tracking-wide">
                  {item.role}
                </h3>
              </div>

              {/* Skills */}
              <div className="w-full md:w-2/5">
                <div className="flex flex-wrap gap-x-3 gap-y-2 md:justify-end">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="relative text-sm sm:text-base sm:font-medium text-gray-600 group-hover:text-black transition-colors"
                    >
                      <span className="mr-0.5 text-orange-500">•</span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
