
import Hero from '../components/Hero'
import RecentProjects from '../components/RecentWork'
import Experience from '../components/Experience'
import Services from '../components/Services'
import Workspace from '../components/Workspace'
import Logos from '../components/Logos'
import About from '../components/About'
import Talk from '../components/Talk'
import AboutHero from '../components/AboutHero'
import TechStackMarquee from '../components/TechStackMarquee'


const Homepage = () => {
  return (
    <div>
      <div className='max-md:hidden'>
        <Hero />
        <Logos />
        <About />
      </div>
      <div className='max-md:block hidden overflow-hidden pt-20 pb-0 w-full bg-cream  px-2 md:px-8'>
        <AboutHero />
        <TechStackMarquee />
      </div>

      <RecentProjects />
      <Experience />
      <Services />
      <Talk />
      <Workspace />

    </div>
  )
}

export default Homepage