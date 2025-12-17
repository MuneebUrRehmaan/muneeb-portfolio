import React from 'react';
import { service } from '../constants';
import Title from './Title';

const Services = () => {
  return (
    <section id="services" className="component-gap">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 max-md:mb-12 ">
          <Title title={'Services'}/>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300 ">
          {service.map((service, index) => (
            <div
              key={index}
              className="group p-8 max-md:p-4 hover:bg-white/50 transition-colors duration-300 flex flex-col h-full"
            >

              {/* Number */}
              <div className="mb-8 md:mb-12">
                <span className="font-display text-6xl md:text-7xl font-light text-gray-200 group-hover:text-orange-300/50 transition-colors duration-300 italic">
                  {service.id}
                </span>
              </div>

              {/* Title */}
              <div className="mb-4 md:mb-6">
                <h3 className="font-display text-3xl max-md:text-2xl font-bold uppercase tracking-wide text-black">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <div className="mt-auto">
                <p className="font-sans text-gray-600 leading-relaxed text-base md:text-lg">
                  {service.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
