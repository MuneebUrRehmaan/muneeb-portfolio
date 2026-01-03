import { ArrowUpRight, Heart } from 'lucide-react';
import { contact, herologo, nav_links, social } from '../constants';
import { Link } from 'react-router-dom'
import ScrollAnimation from './ScrollAnimation';

const Footer = () => {

  const hash = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer id="contact" className="component-gap bg-black/90 relative z-20 -mt-12">
      <div className="max-w-7xl mx-auto">

        {/* Top Section: Call to Action */}
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-orange-500 font-medium tracking-[0.2em] uppercase mb-6 text-sm md:text-base animate-pulse">
            What's Next?
          </span>
          <ScrollAnimation  direction="up" delay={0.1}>
          <h2 className="text-white font-display text-6xl  font-bold uppercase tracking-normal mb-10 leading-[0.9]">
            Let's Work Together
          </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
          <a
            href={`mailto:${contact.email}`}
            className="group relative inline-flex items-center gap-3 text-2xl md:text-4xl font-serif italic hover:text-orange-200 transition-colors duration-300"
          >
          
            <span className="text-white border-b border-white/30 group-hover:border-orange-200 group-hover:text-orange-200 pb-1 transition-colors duration-300 ">
              {contact.email}
            </span>
            <span className="text-white group-hover:text-orange-200">
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </span>
          </a>
          </ScrollAnimation>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-16" />

        {/* Bottom Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Brand & Copyright - Spans 5 columns */}
          <div className="md:col-span-5 flex flex-col justify-between h-full">
            <div className="mb-6">
              <a href="/" className="">
                <img src={herologo} loading='lazy' alt="" className='w-40' />
              </a>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              &copy; {new Date().getFullYear()} Muneeb's Portfolio. All rights reserved. <br />
              Contact: 0305-3010428
            </p>
          </div>

          {/* Navigation - Spans 3 columns */}
          <div className="md:col-span-3 md:pl-8">
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8 text-opacity-80">Menu</h3>
            <ul className="space-y-4">
              {nav_links.map(link => (
                <li key={link.label}>
                  <Link to={link.href} onClick={() => { hash() }} className="text-gray-400 hover:text-[#F97316] transition duration-200  text-base font-medium inline-block hover:translate-x-1 transform">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to='muneeb-portfolio/contact' onClick={() => { hash() }} className="text-gray-400 hover:text-[#F97316] transition duration-200  text-base font-medium inline-block hover:translate-x-1 transform">
                  Contact</Link>
              </li>
            </ul>
          </div>

          {/* Socials - Spans 4 columns */}
          <div className="md:col-span-4 max-sm:mb-13">
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8 text-opacity-80">Socials</h3>
            <ul className="grid  grid-cols-2  sm:gap-x-4 gap-y-4 w-full">
              {social.map(link => (
                <li key={link.label}>
                  <Link to={link.href} target='_blank' className="text-gray-400 hover:text-orange-200 transition-colors duration-200 text-base font-medium flex items-center gap-2 group">
                    {link.label}
                    <ArrowUpRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
              <li title='0305-3010428' className=" cursor-pointer text-gray-400 hover:text-orange-200 transition-colors duration-200 text-base font-medium flex items-center gap-2 group">
                Contact<span className="sm:opacity-0 opacity-100 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition-all whitespace-nowrap" >: 0305-3010428</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
