import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faq_data } from '../constants';
import SubHaeading from './SubHaeading';
import Title from './Title';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="component-gap">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Left Side - Title */}
        <div className="lg:col-span-5">
          <SubHaeading subTitle={'FAQ'} />
          <Title title={'Frequently Asked Questions'} />
        </div>

        {/* Right Side - Accordion */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          {faq_data.map((item, index) => (
            <div
              key={index}
              className={`bg-[#faf9f6] rounded-xl transition-all duration-300 overflow-hidden border-gray-200 ${openIndex === index
                  ? 'shadow-sm border-gray-200'
                  : 'border-gray-200 border hover:border-gray-200'
                }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none border-gray-200"
                aria-expanded={openIndex === index}
              >
                <span className="font-sans text-lg md:text-xl font-medium text-gray-900 pr-8">
                  <span className="text-gray-400 mr-6 font-normal inline-block w-8">
                    0{index + 1}.
                  </span>
                  {item.question}
                </span>

                <span
                  className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100 transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-black text-gray-500' : 'text-gray-500'
                    }`}
                >
                  <ChevronDown size={18} />
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-500 leading-relaxed text-base md:text-lg pl-18 pr-8 pb-8">
                    {item.answer}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
