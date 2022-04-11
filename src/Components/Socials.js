
const Socials = (props) => {
    const { socials } = props;
    return (
        <ul>
            {socials.map( site => {
                return (
                    <li key={site.name}>
                        <div>{site.name}</div>
                        <a href={site.link}>{site.link}</a>
                    </li>
                )
            })}
        </ul>
    );
}

export default Socials;
