
const Education = (props) => {
    const { education } = props;
    return (
        <ul>
            <div className='sub-title'> Education </div>
        {education.map( course => {
            return (
                <li key={course.name}>
                    <div>{course.name}</div>
                    <div>{course.description}</div>
                </li>
            )
        })}
        </ul>
    );

}

export default Education;