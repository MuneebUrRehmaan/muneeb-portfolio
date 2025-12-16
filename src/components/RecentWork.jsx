import React, { useEffect, useState } from 'react';
import { projects } from '../constants';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import WorkCard from './WorkCard';



const RecentProjects = () => {

    const [recentWork, setRecentWork] = useState([])

   const hash = ()=>{
      window.scrollTo(0, 0)
    }

    useEffect(() => {
    
      setRecentWork(projects.slice(0, 4))

    }, [])
    


    return (
        <section className="w-full bg-cream pt-16 max-sm:pt-12 pb-10  px-4 md:px-8" id="works">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <h2 className="font-display text-5xl max-md:text-4xl font-bold text-center max-md:text-start mb-16 uppercase tracking-tight text-black">
                    Recent Projects
                </h2>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20 max-sm:mb-10">

                    {recentWork.map((project) => {
                            return (
                                <WorkCard title={project.title} image= {project.image} category={project.category} link={project.link}/>
                            )
                    })}

                </div>

                {/* View All Button */}
                <div className="flex justify-center w-full">
                    <Link
                        onClick={()=>{hash()}}
                        to="projects#works"
                        className="group relative inline-flex items-center gap-3 px-10 py-3 bg-transparent border border-black rounded-full overflow-hidden transition-all duration-300 hover:bg-black active:bg-black hover:text-white active:text-white hover:px-12 hover:shadow-xl"
                    >
                        <span className="font-display font-bold text-lg uppercase tracking-widest">
                            View All Projects
                        </span>

                        <ArrowRight
                            size={20}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default RecentProjects;
