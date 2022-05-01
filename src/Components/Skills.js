
const Skills = (props) => {

    const { skills } = props;
    return (
        <ul>
            <div className='sub-title'>Skills</div>
        {skills.map( skill => {
            return (
                <li key={skill.name}>
                    <div>{skill.name}</div>
                </li>
            )
        })}
        </ul>
    );
}

export default Skills;