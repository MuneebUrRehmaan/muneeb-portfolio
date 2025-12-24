import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CircularTextBadge = ({ text, className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center w-10 h-10 md:w-24 md:h-24 bg-white rounded-full shadow-lg ${className}`}>
      {/* Rotating Text Ring */}
      <div className="absolute inset-0 w-full h-full animate-spin-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            id="circlePath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="transparent"
          />
          <text className="text-[11px] font-medium tracking-[0.15em] uppercase fill-gray-900">
            <textPath href="#circlePath" startOffset="0%">
              {text} • {text}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center Icon */}
      <div className="relative z-10 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border border-gray-200 rounded-full bg-white text-gray-800">
        <ArrowUpRight size={24} strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default CircularTextBadge;