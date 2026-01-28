import {
  PenTool,
  PencilRuler,
  Code,
  ShieldCheck,
  Lightbulb
} from 'lucide-react';
import Title from './Title';
import SubHaeading from './SubHaeading';
import ScrollAnimation from './ScrollAnimation';

const steps = [
  {
    number: '01',
    title: 'Strategy & Research',
    description:
      'Every successful project starts with a deep dive. I analyze market trends, user behaviors, and business goals to build a solid roadmap.',
    icon: <Lightbulb size={32} className="text-white" />,
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50 text-emerald-600'
  },
  {
    number: '02',
    title: 'Wireframing',
    description:
      'Structuring the information architecture. I create low-fidelity layouts to ensure the user flow is logical and intuitive before visual design begins.',
    icon: <PenTool size={32} className="text-white" />,
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50 text-blue-600'
  },
  {
    number: '03',
    title: 'Visual Design',
    description:
      'Bringing the brand to life. I craft pixel-perfect interfaces with engaging typography, colors, and motion that resonate with your audience.',
    icon: <PencilRuler size={32} className="text-white" />,
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50 text-purple-600'
  },
  {
    number: '04',
    title: 'Development',
    description:
      'Translating design into code. I build scalable, performant, and accessible front-ends using modern tech stacks like React and Tailwind.',
    icon: <Code size={32} className="text-white" />,
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50 text-orange-600'
  },
  {
    number: '05',
    title: 'QA & Launch',
    description:
      'Rigorous testing across devices and browsers. I ensure everything runs smoothly, optimize performance, and handle the final deployment.',
    icon: <ShieldCheck size={32} className="text-white" />,
    color: 'bg-teal-500',
    lightColor: 'bg-teal-50 text-teal-600'
  }
];

export const ProcessSection = () => {


  return (

    <section className="block  w-full py-20 px-4 md:px-8">
      <ScrollAnimation direction="up" >
      <div className="mb-12">
        <SubHaeading subTitle={'Steps I Follow'} />
        <Title title={'My Process'} />

      </div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8 pb-8">
        {steps.map((step, index) => (
          <ScrollAnimation key={index} direction="up" delay={0.1 * index} >
          <div
            key={index}
            className="relative p-8 bg-transparent rounded-xl border border-[#e2e8f0]  overflow-hidden"
          >
            <div className="flex flex-col gap-6 relative z-10">
              <div
                className={`w-14 h-14 flex items-center rounded justify-center  ${step.color}`}
              >
                {step.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-base tracking-wide text-[#0a0a0a]">{step.description}</p>
              </div>
            </div>

            {/* <span className="absolute -right-4 -bottom-8 text-[10rem] font-bold text-gray-50">
                {step.number}
              </span> */}
          </div>
            </ ScrollAnimation>
        ))}
      </div>
    </section>

  );
};
