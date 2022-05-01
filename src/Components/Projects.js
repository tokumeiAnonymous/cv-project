
const Projects = (props) => {
    const { projects } = props;
    return (
        <ul>
            <div className='sub-title'>Projects</div>
        {projects.map( project => {
            return (
                <li key={project.name}>
                    <div>{project.name}</div>
                    <div>{project.description}</div>
                </li>
            )
        })}
        </ul>
    );
}

export default Projects;