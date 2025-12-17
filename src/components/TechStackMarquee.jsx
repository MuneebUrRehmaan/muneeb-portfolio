import React from 'react';

// Tech stack data with inline SVGs (same-to-same)
const techStack = [
  {
    name: 'PostgreSQL',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#336791">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm3.5 3c.83 0 1.5-.67 1.5-1.5S11.33 11 10.5 11s-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm6.5-1c0 2.21-1.79 4-4 4s-4-1.79-4-4h8z"/>
      </svg>
    ),
  },
  {
    name: 'Cypress',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" className="text-gray-400" strokeWidth="1.5" />
        <path d="M15 9l-6 6M9 9l6 6" className="text-green-600" />
      </svg>
    ),
  },
  {
    name: 'Docker',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#2496ED">
        <path d="M13 7h2v2h-2V7zm-3 0h2v2h-2V7zm-3 0h2v2H7V7zm3-3h2v2h-2V4zm-3 0h2v2H7V4zM4 7h2v2H4V7zm-3 4.5v3.6c0 1.6 2.4 3 6.6 3.4 1-.2 1.9-.5 2.5-.9-.1-.2-.1-.5-.1-.7 0-1.7 1.3-3 3-3 .2 0 .5 0 .7.1V10H1v1.5z"/>
      </svg>
    ),
  },
  {
    name: 'Firebase',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M3.89 15.67L6.44 2.6a.66.66 0 011.18-.23l3.05 5.86L3.89 15.67z" fill="#FFCA28"/>
        <path d="M13.29 8.24l3.05-5.87a.66.66 0 011.19.24l2.58 13.06-6.82-7.43z" fill="#FFA000"/>
        <path d="M12 17.58l-8.11-4.72-1.35 2.59a.65.65 0 00.32.86l9.14 5.14 9.14-5.14a.65.65 0 00.32-.86l-1.35-2.59L12 17.58z" fill="#F57C00"/>
      </svg>
    ),
  },
  {
    name: 'AWS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M17.2 14.5c-.5.9-1.3 1.6-2.4 1.9-1.1.3-2.3.3-3.3-.1-1-.4-1.8-1.2-2.3-2.1-.5-1-.7-2.1-.5-3.2.1-1.1.6-2.1 1.4-2.8.8-.7 1.8-1.1 2.9-1.1 1.1 0 2.2.4 3 1.1.4.3.7.7 1 1.2h.1V5.2h2.2v9.6c0 1.5.3 2.7.9 3.6l-2 1.2c-.7-1-1-2.4-1-4.1z" fill="#232F3E"/>
        <path d="M3.5 16.5c2.4 1.8 5.6 2.3 8.3 1.5.4-.1.6-.6.5-1-.1-.4-.6-.6-1-.5-2.2.6-4.9.1-6.9-1.3-.3-.2-.8-.2-1 .2-.3.3-.3.8 0 1.1z" fill="#FF9900"/>
      </svg>
    ),
  },
  {
    name: 'GSAP',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#88CE02">
        <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z"/>
        <circle cx="12" cy="15" r="2" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Framer Motion',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#BB00FF">
        <path d="M4 0h16v8h-8zM4 8h8l8 8h-16zM4 16h8v8z"/>
      </svg>
    ),
  },
  {
    name: 'Figma',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M12 12a3 3 0 110-6h3v6h-3z" fill="#F24E1E"/>
        <path d="M12 12a3 3 0 11-6 0v-6h6v6z" fill="#A259FF"/>
        <path d="M6 12a3 3 0 116 0v6a3 3 0 11-6 0v-6z" fill="#0ACF83"/>
        <path d="M12 6h3a3 3 0 110 6h-3V6z" fill="#FF7262"/>
        <path d="M12 18a3 3 0 113-3v3h-3z" fill="#1ABCFE"/>
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#38B2AC">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    ),
  },
  {
    name: 'GIT',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#F05032">
        <path d="M23.546 10.93L13.067.452c-.6-.6-1.577-.6-2.177 0L.454 10.942c-.6.6-.6 1.577 0 2.177l10.46 10.43c.6.6 1.577.6 2.177 0l10.455-10.455c.603-.603.603-1.58.003-2.165z"/>
      </svg>
    ),
  },
];

const TechStackMarquee = () => {
  return (
    <div className="w-full py-16 overflow-hidden relative">
  
      <div className="flex w-max animate-scroll">
        {[1, 2, 3].map(loop => (
          <div key={loop} className="flex items-center gap-6 px-3">
            {techStack.map((tech, index) => (
              <div
                key={`${loop}-${index}`}
                className="flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 min-w-max hover:shadow-md transition-shadow group"
              >
                <div className="w-6 h-6 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-gray-700 font-medium text-lg whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};


export default TechStackMarquee;