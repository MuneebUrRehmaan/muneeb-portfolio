import CircularTextBadge from './CircularTextBadge';
import { profile } from '../constants';
import Button from './Button';
import TextType from './TextType';
import { resume } from '../constants'
import ScrollAnimation from './ScrollAnimation';


const AboutHero = () => {
  return (
    <section className="md:px-8 px-4 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

      {/* Left Column: Image Container */}
      <div className="relative lg:w-1/3 max-w-[500px] lg:max-w-none max-sm:hidden">

        {/* Image Mask Wrapper */}
     <ScrollAnimation direction="up" >
        <div className="relative z-0 w-full h-120 overflow-hidden rounded rounded-b-[170px] shadow-sm">
          
          <img
            loading='lazy'
            src={profile}
            alt="Portrait of the developer"
            className="w-full h-full object-cover object-top scale-105 transition-transform duration-700 ease-out"
          />
        
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-black/3 pointer-events-none"></div>
        </div>
          </ ScrollAnimation>

        {/* Floating Badge */}
        <div className="absolute  right-3 bottom-4  z-10">
          <ScrollAnimation direction="left" delay={0.2} >
          <CircularTextBadge text="LETS TALK" />
          </ ScrollAnimation>
        </div>
      </div>

      {/* Right Column: Text Content */}
      <div className="w-full lg:w-2/3 flex flex-col items-start text-left space-y-4 pt-10 lg:pt-0">
      <ScrollAnimation direction="up" delay={0.2} >
        <h1 className="text-6xl max-md:text-4xl lg:text-7xl font-semibold leading-[1.3] tracking-tight text-gray-950">
          A <span className="text-[#F97316] max-sm:text-[32px]">
            <TextType
              text={["Frontend Developer", "Backend Developer", "FullStack Developer"]}
              typingSpeed={120}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter=""
            /></span>
          <br className="" />
          &amp; Digital Designer
        </h1>
        </ ScrollAnimation>
       <ScrollAnimation direction="up" delay={0.3} >
        <p className="text-md md:text-xl text-gray-600 leading-relaxed max-w-lg">
          I collaborate with brands globally to design impactful, mission-focused websites
          that drive results and achieve business goals.
        </p>
        </ ScrollAnimation>
        {/* Resume Button */}
        <ScrollAnimation direction="up" delay={0.4} >
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="pt-2"
        >

          <Button title={'My Resume'} className={'text-gray-50 bg-[#1b1b1b]'} />
        </ a >
        </ ScrollAnimation>

      </div>
    </section>
  );
};


export default AboutHero;