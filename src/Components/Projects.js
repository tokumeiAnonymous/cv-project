
const Projects = (props) => {
    const { projects } = props;
    return (
        <ul>
        {projects.map( project => {
            return (
                <li key={project.name}>
                    <a href={project.link}>{project.name}</a>
                    <div>{project.description}</div>
                </li>
            )
        })}
        </ul>
    );
}

export default Projects;