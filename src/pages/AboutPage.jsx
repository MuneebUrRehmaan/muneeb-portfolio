import React from 'react'
import AboutHero from '../components/AboutHero'
import { Section } from 'lucide-react'
import TechStackMarquee from '../components/TechStackMarquee'
import Hero from '../components/Hero'
import About from '../components/About'
import Logos from '../components/Logos'
import { ProcessSection } from '../components/ProcessSection'

const AboutPage = () => {
  return (
    <section>
        <div className='max-sm:hidden pt-20 '>
            <AboutHero />
        <TechStackMarquee />
        </div>

        <div className='max-sm:block hidden'>
         <Hero />
         <Logos />
         <About />

        </div>


        <ProcessSection />
        
    </section>
  )
}

export default AboutPage;