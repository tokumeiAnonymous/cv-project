
const Skills = (props) => {

    const { skills } = props;
    return (
        <ul>
        {skills.map( skill => {
            return (
                <li key={skill}>
                    <div>{skill}</div>
                </li>
            )
        })}
        </ul>
    );
}

export default Skills;