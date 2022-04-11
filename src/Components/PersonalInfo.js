
const Personal = (props) => {

    const { personal } = props;

    return (
        <section id='personal-info'>
            <img id='photo-holder' src={personal.photo} alt='holder-address'/>
            <div id='name'>{personal.name}</div>
            <div id='profession'> {personal.profession} </div>
            <div id='description' > {personal.description} </div>
            <div id='email'> {personal.email} </div>
            <div id='contact'> {personal.contact} </div>
            <div id='address'> {personal.address} </div>
        </section>
    );
}

export default Personal;