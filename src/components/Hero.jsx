import TextType from './TextType.jsx';
import { bghero, hero, profile2 } from '../constants';
import ScrollAnimation from "./ScrollAnimation.jsx";

const Hero = () => {
    
    return (
        <section id='home' className=" relative sm:min-h-screen h-[94vh] w-full overflow-hidden flex flex-col justify-end pt-20 pb-10 md:pb-0">
            <img src={bghero} alt="" className='absolute top-0 w-screen h-screen z-0' />
            {/* Main Content Container */}
            <div className="max-w-7xl relative z-10  mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col md:block h-full grow">

                {/* Central Image */}
                <div className="absolute inset-0">
                    <div className="h-full  w-full">
                      <ScrollAnimation direction="up">  
                        <img
                            
                            src={profile2}
                            loading='lazy'
                            alt="Portrait of Muneeb"
                            className="w-full max-md:ml-20 max-sm:ml-30 lg:h-screen max-md:h-screen h-full  object-cover  object-top md:object-contain "

                        />
                        </ ScrollAnimation>
                    </div>
                </div>



                {/* Main info */}
                <div className=" flex flex-col gap-4  z-20 absolute max-md:relative max-sm:mt-5 bottom-6">
                    <div className="w-fit flex  items-center gap-1 max-sm:gap-0  backdrop-blur-sm pl-2 pr-5 mt-4 rounded-full shadow-sm border border-white/50">
                        <span className="relative flex h-8 w-8 items-center justify-center rounded-full ">
                            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#FF5F1F] opacity-80"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5F1F]"></span>
                        </span>
                        <span className="text-xs  max-sm:hidden font-semibold tracking text-gray-800 ">
                            {hero.availability}
                        </span>
                        <span className="text-xs hidden max-sm:flex font-semibold tracking text-gray-800">
                            Available for work
                        </span>
                    </div>


                    <div  className="relative z-20 ">
                        
                        <div className="flex flex-col leading-none select-none max-sm:ml-2 gap-2">
                            <ScrollAnimation direction="left" delay={0.2}>
                            <span className="font-display font-semibold text-[80px] max-sm:text-5xl  drop-shadow-xs  max-md:drop-shadow-gray-300  text-slate-950   tracking-tighter transform md:translate-y-4">
                                I am
                            </span>
                            </ScrollAnimation>
                            <ScrollAnimation direction="left" delay={0.5}>
                                <div className='shrink-0'>
                            <span style={{fontFamily: 'Playfair Display'}} className=" tracking-tight  font-bold italic  text-[80px] max-sm:text-5xl drop-shadow-xs  max-md:drop-shadow-gray-300    text-slate-950  ">
                                Muneeb
                            </span>
                            </div>
                            </ScrollAnimation>
                        </div>
                        
                    </div>

                </div>

                <div className=' flex flex-col  gap-13 z-20 absolute  bottom-6 max-md:bottom-10  md:right-25 max-md:left-1 max-md:ml-4   '>
                    <div  className="relative z-20 max-w-[280px] text-left max-md:hidden">
                        <ScrollAnimation direction="up" delay={0.4}>
                        <p className="text-medium font text-gray-800 leading-[1.4]">
                            {hero.description}
                        </p>
                        </ScrollAnimation>
                    </div>
                    <div className="relative z-20 flex flex-col items-start ">
                        <h2  className=" font-bold text-3xl max-sm:text-4xl md:text-5xl  drop-shadow-xs  max-md:drop-shadow-gray-300 lg:text-4xl text-black/90 uppercase leading-none max-w-xs md:max-w-md text-left  tracking-tight">
                            Creative <br /><TextType
                                text={["Frontend", "Backend", "FullStack"]}
                                typingSpeed={140}
                                pauseDuration={1500}
                                showCursor={true}
                                cursorCharacter="_"
                            /> <br /> Developer
                        </h2>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
