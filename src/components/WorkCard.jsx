import React from 'react'



const WorkCard = (project) => {
    return (
        <div
            className="recent-work-item group relative overflow-hidden rounded cursor-pointer bg-gray-100 shadow-sm border border-gray-200"
            key={project.id}
        >

            {/* Image */}
            <div className="recent-work-item relative aspect-4/2 overflow-hidden" onMouseEnter={() => window.dispatchEvent(new Event("cursor-hover-button"))}
                onMouseLeave={() => window.dispatchEvent(new Event("cursor-hover-leave"))} >

                <a href={project.link} target='_blank'><div className='absolute w-full h-full bg-transparent z-14 '> </div> </a>

                <img

                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

            </div>

            {/* Overlay */}
            <div className="flex flex-col justify-end p-6 bg-[#f3efde] ">

                {/* Slide Up Content */}
                <div><p className='text-sm max-sm:text-xs  text-[#6c6b6a]'>{project.category}</p></div>

                <div className="flex items-center justify-between pt-2 gap-2 ">

                    <h3 className="text-black font-display text-2xl max-sm:text-xl  font-semibold capitalize leading-none tracking-normal">
                        {project.title}
                    </h3>

                    {/* Visit Website */}
                    <a href={project.link} target='_blank'>
                        <button className=" border-gray-400 border text-black transition-colors py-3 px-6 max-sm:px-4 max-sm:py-2 rounded-full text-sm font-semibold  tracking-wide active:bg-slate-950 hover:bg-slate-950 hover:text-white active:text-white bg-white cursor-pointer whitespace-nowrap">
                            Live Link
                        </button> </a>


                </div>
            </div>
        </div>
    )
}

export default WorkCard