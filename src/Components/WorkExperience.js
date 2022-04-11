
const WorkExperience = (props) => {
    const { experience } = props;
    return (
        <ul>
        {experience.map( job => {
            return (
                <li key={job.name}>
                    <div>{job.name}</div>
                    <div>{job.description}</div>
                </li>
            )
        })}
        </ul>
    );
}

export default WorkExperience;