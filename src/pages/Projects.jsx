import React from 'react'
import { projects } from '../constants';
import WorkCard from '../components/WorkCard';

const Projects = () => {
    return (
        <section id="works" className="w-full bg-cream pt-24 pb-24 px-4 md:px-8" >
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <h2  className="font-display text-5xl max-md:text-4xl font-bold text-start mb-10 uppercase tracking-tight text-black">
                    All Projects
                </h2>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20 max-sm:mb-10">
                    {projects.map((project) => {
                        return (
                           <WorkCard title={project.title} image= {project.image} category={project.category} link={project.link}/>
                        )
                    }

                    )}
                </div>
            </div>
        </section>
    )
}

export default Projects