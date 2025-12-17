import React, { useEffect, useState } from 'react';
import { projects } from '../constants';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import WorkCard from './WorkCard';
import Title from './Title';
import Button from './Button';



const RecentProjects = () => {

    const [recentWork, setRecentWork] = useState([])

   const hash = ()=>{
      window.scrollTo(0, 0)
    }

    useEffect(() => {
    
      setRecentWork(projects.slice(0, 4))

    }, [])
    


    return (
        <section className="component-gap" id="works">
            <div className="max-w-7xl mx-auto">
               <Title title={'Recent Projects'}/>
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
                        
                    >
                      <Button title={"VIEW ALL PROJECTS"} className={'pt-4 pb-4 pl-8 pr-8 text-gray-50 bg-slate-900'}/>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default RecentProjects;
