import ScrollAnimation from './ScrollAnimation';

const Title = (props) => {
    return (
        <ScrollAnimation direction="up">
        <h2 className=" text-5xl max-md:text-4xl font-bold text-start max-md:text-start mb-8 capitalize sm:uppercase tracking-tight text-slate-950">
            {props.title}
        </h2>
        </ScrollAnimation>
    )
}

export default Title