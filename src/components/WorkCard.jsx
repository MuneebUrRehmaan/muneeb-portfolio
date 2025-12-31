import Button from './Button'

const WorkCard = (project) => {
    return (
        <div
            className=" recent-work-item group relative overflow-hidden rounded  bg-gray-100 shadow-sm border border-gray-200"
            key={project.id}
        >

            {/* Image */}
            <div className="recent-work-item relative   aspect-4/2 overflow-hidden " onMouseEnter={() => window.dispatchEvent(new Event("cursor-hover-button"))}
                onMouseLeave={() => window.dispatchEvent(new Event("cursor-hover-leave"))} >

                <a href={project.link} target='_blank'><div className='cursor-none group absolute w-full h-full bg-transparent z-14 '> </div> </a>

                <img

                    src={project.image}
                    loading='lazy'
                    alt={project.title}
                    className="w-full h-full object-cover transition-all group-hover:scale-105 duration-300  "
                />

            </div>

            {/* Overlay */}
            <div className="flex flex-col justify-end p-4 md:p-6 bg-[#fbf9f4] ">

                {/* Slide Up Content */}
                <div><p className='text-sm max-sm:text-xs  text-orange-400 font-semibold -mb-1.5'>{project.category}</p></div>

                <div className="flex items-center justify-between pt-2 gap-2 ">

                    <h3 className="text-black text-2xl max-sm:text-2xl  font-semibold capitalize leading-none tracking-normal">
                        {project.title}
                    </h3>

                    {/* Visit Website */}
                    <a href={project.link} target='_blank'>
                        <Button title={'Live Link'} className={'text-gray-50 bg-[#1b1b1b]'} /></a>
                </div>
            </div>
        </div>
    )
}

export default WorkCard