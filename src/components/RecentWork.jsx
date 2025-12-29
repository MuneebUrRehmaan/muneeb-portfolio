import { useEffect, useState } from 'react';
import { projects } from '../constants';
import { Link } from 'react-router-dom';
import WorkCard from './WorkCard';
import Title from './Title';
import Button from './Button';
import SubHaeading from './SubHaeading';



const RecentProjects = () => {

    const [recentWork, setRecentWork] = useState([])

    const hash = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {

        setRecentWork(projects.slice(0, 4))

    }, [])



    return (
        <section className="component-gap" id="works">
            <div className="max-w-7xl mx-auto">
                <SubHaeading subTitle={'My Work'} />
                <Title title={'Recent Projects'} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20 max-sm:mb-10">

                    {recentWork.map((project) => {
                        return (
                            <WorkCard key={project.id} title={project.title} image={project.image} category={project.category} link={project.link} />
                        )
                    })}

                </div>

                {/* View All Button */}
                <div className="flex justify-around items-center w-full">
                    <hr className='w-12 hidden max-sm:block h-1 bg-orange-400/80 rounded-bl-2xl rounded-tl-2xl border-none' />
                    <Link
                        onClick={() => { hash() }}
                        to="projects#works"

                    >
                        <Button title={"VIEW ALL PROJECTS"} className={'pt-4 pb-4 pl-8 pr-8 text-gray-50 bg-[#1b1b1b]'} />
                    </Link>

                    <hr className='w-12 hidden max-sm:block h-1 bg-orange-400/80 rounded-br-2xl rounded-tr-2xl border-none' />
                </div>
            </div>
        </section>
    );
};

export default RecentProjects;
