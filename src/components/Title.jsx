import React from 'react'

const Title = (props) => {
    return (
        <h2 className=" text-5xl max-md:text-4xl font-bold text-start max-md:text-start mb-8 capitalize sm:uppercase tracking-tight text-slate-950">
            {props.title}
        </h2>
    )
}

export default Title