import { projects } from '../constants';
import WorkCard from '../components/WorkCard';
import Title from '../components/Title';
import SubHaeading from '../components/SubHaeading';
import ScrollAnimation from '../components/ScrollAnimation';

const Projects = () => {
    return (
        <section id="works" className="w-full bg-cream pt-24 pb-24 px-4 max-md:pt-4 md:px-8" >
            <div className="max-w-7xl mx-auto mt-4">

                {/* Section Header */}
                <SubHaeading subTitle={'My Work'} />
                <Title title={'All Projects'} />

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20 max-sm:mb-10">
                    {projects.map((project) => {
                        return (
                            <ScrollAnimation direction="up" delay={0.1 * project.id} >
                            <WorkCard key={project.id} title={project.title} image={project.image} category={project.category} link={project.link} />
                            </ScrollAnimation>
                        )
                    }

                    )}
                </div>
            </div>
        </section>
    )
}

export default Projects