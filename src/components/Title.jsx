import React from 'react'

const Title = (props) => {
    return (
        <h2 className="font-display text-5xl max-md:text-4xl font-bold text-start max-md:text-start mb-8 uppercase tracking-tight text-black">
            {props.title}
        </h2>
    )
}

export default Title