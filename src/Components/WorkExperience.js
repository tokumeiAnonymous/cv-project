
const WorkExperience = (props) => {
    const { experience } = props;
    return (
        <ul>
        {experience.map( (job, i) => {
            return (
                <li key={i}>
                    <div>{job.name}</div>
                    <div>{job.description}</div>
                </li>
            )
        })}
        </ul>
    );
}

export default WorkExperience;