import ScrollAnimation from "./ScrollAnimation";

// Tech stack data with inline SVGs (same-to-same)
const techStack = [
  {
    name: 'React js',
    icon: (
      <img src="https://cdn.worldvectorlogo.com/logos/react-academy.svg" loading='lazy' alt="" className='w-6 h-6' />
    ),
  },
  {
    name: 'Node js',
    icon: (
      <img src="https://cdn.worldvectorlogo.com/logos/nodejs-3.svg" loading='lazy' alt="" className='w-6 h-6' />
    ),
  },
  {
    name: 'Express js',
    icon: (
      <img src='https://cdn.worldvectorlogo.com/logos/expressjs.svg' loading='lazy' alt="" className='w-6 h-6' />
    ),
  },
  {
    name: 'Firebase',
    icon: (
      <img src='https://cdn.worldvectorlogo.com/logos/firebase-1.svg' loading='lazy' alt="" className='w-6 h-6' />
    ),
  },
  {
    name: 'Mongodb',
    icon: (
      <img src='https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg' loading='lazy' alt="" className='w-6 h-6' />
    ),
  },
  {
    name: 'GSAP',
    icon: (
      <img src='https://cdn.worldvectorlogo.com/logos/g-j.svg' loading='lazy' alt="" className='w-6 h-6' />
    ),
  },
  {
    name: 'JavaScript',
    icon: (
      <img src='https://cdn.worldvectorlogo.com/logos/javascript-1.svg' loading='lazy' alt="" className='w-6 h-6' />
    ),
  },
  {
    name: 'Figma',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M12 12a3 3 0 110-6h3v6h-3z" fill="#F24E1E" />
        <path d="M12 12a3 3 0 11-6 0v-6h6v6z" fill="#A259FF" />
        <path d="M6 12a3 3 0 116 0v6a3 3 0 11-6 0v-6z" fill="#0ACF83" />
        <path d="M12 6h3a3 3 0 110 6h-3V6z" fill="#FF7262" />
        <path d="M12 18a3 3 0 113-3v3h-3z" fill="#1ABCFE" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#38B2AC">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: 'GIT',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#F05032">
        <path d="M23.546 10.93L13.067.452c-.6-.6-1.577-.6-2.177 0L.454 10.942c-.6.6-.6 1.577 0 2.177l10.46 10.43c.6.6 1.577.6 2.177 0l10.455-10.455c.603-.603.603-1.58.003-2.165z" />
      </svg>
    ),
  },
];

const TechStackMarquee = () => {
  return (
    <div className="w-full pt-16 pb-6 overflow-hidden relative">
       <ScrollAnimation direction="up" delay={0.2}>
      <div className="flex w-max animate-scroll">
        {[1, 2, 3].map(loop => (
         
          <div key={loop} className="flex items-center gap-6 px-3">
            {techStack.map((tech, index) => (
              <div
                key={`${loop}-${index}`}
                className="flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 min-w-max hover:shadow-md transition-shadow group"
              >
                <div className="w-4 h-6 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-gray-700 font-medium  sm:text-lg whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
         
        ))}
      </div>
       </ ScrollAnimation>
    </div>
  );
};


export default TechStackMarquee;