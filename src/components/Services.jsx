
import { service } from '../constants';
import Title from './Title';
import SubHaeading from './SubHaeading';
import { Scroll } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const Services = () => {
  return (
    <section id="services" className="component-gap">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 max-md:mb-12 ">
          <SubHaeading subTitle={'what i do'} />
          <Title title={'Services'} />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e2e8f0] ">
          {service.map((service, index) => (
            <ScrollAnimation direction='up' delay={0.2 * index}   >
              <div
                key={index}
                className="group p-8 max-md:p-4 hover:bg-white/50 transition-colors duration-300 flex flex-col h-full"
              >


                {/* Number */}
                <div className="mb-8 md:mb-12">
                  <span className="font-display text-6xl md:text-7xl font-light text-[#ff5f1f7a] transition-colors duration-300 ">
                    {service.id}
                  </span>
                </div>

                {/* Title */}
                <div className="mb-4 md:mb-6">
                  <h3 style={{fontFamily: 'Playfair Display'}} className=" text-3xl max-md:text-2xl font-bold tracking-normal  text-black">
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
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
