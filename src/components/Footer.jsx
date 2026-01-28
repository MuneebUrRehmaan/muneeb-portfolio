import { ArrowUpRight, Heart } from 'lucide-react';
import { contact, herologo, nav_links, social } from '../constants';
import ScrollAnimation from './ScrollAnimation';

const Footer = () => {

  const hash = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <div id="contact" className="w-[95vw] py-12 px-6 mb-6 mx-auto border bg-[#fffc] border-[#e2e8f0] rounded-3xl relative z-20 -mt-12">
        <div className="max-w-7xl mx-auto">

          {/* Top Section: Call to Action */}
          <div className="flex flex-col items-center text-center mb-24">
            <span className="text-orange-600 font-medium tracking-[0.2em] uppercase mb-6 text-sm md:text-base animate-pulse">
              What's Next?
            </span>
            <ScrollAnimation direction="up" delay={0.1}>
              <h2 className="text-black font-display text-4xl md:text-6xl leading-[1.1em]  font-bold uppercase tracking-normal mb-10">
                Let's Work Together
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.2}>
              <a
                href={`mailto:${contact.email}`}
                className="group  relative inline-flex items-center gap-3 text-2xl md:text-4xl font-serif italic hover:text-orange-500 transition-colors duration-300"
              >

                <span style={{ fontFamily: 'Playfair Display' }} className="text-[#0a0a0a] border-b border-black group-hover:border-orange-500 group-hover:text-orange-500 pb-1 transition-colors duration-300 ">
                  {contact.email}
                </span>
                <span className="text-white group-hover:text-orange-500">
                  <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>
              </a>
            </ScrollAnimation>
          </div>


        </div>
      </div>

      <div className='flex max-w-7xl w-[92vw] py-6 max-sm:pb-20  mx-auto justify-between '>
        <div className='text-base text-[#0a0a0a]'>Copyright@2025</div>
        <div className='flex gap-4 text-[#0a0a0a]'>
          <a href="https://www.linkedin.com/in/muneeb-ur-rehman-3aa98a27a/" target='_blank'>Linkdin</a>
          <a href="https://github.com/MuneebUrRehmaan" target='_blank'>Github</a>
          <a href="https://www.facebook.com/share/1BF3Nfzcxu/" target='_blank'>facebook</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
