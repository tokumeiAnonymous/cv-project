
const Personal = (props) => {

    const { personal, update } = props;

    return (
        <section id='personal-info'>
            <h2 className='section-title'>Personal Information</h2>

            <label htmlFor='name'>Name: </label>
            <input id='name' type='text' placeholder={personal.name} onChange={(e) => {update(e)}} required/>

            <label htmlFor='profession'>Profession: </label>
            <input id='profession' type='text' placeholder={personal.profession} required/>
            
            <label htmlFor='contact'>Contact: </label>
            <input id='contact' type='number' placeholder={personal.contact} required/>
            
            <label htmlFor='email'>Email: </label>
            <input id='email' type='email' placeholder={personal.email} required/>
            
            <label htmlFor='description'>Description: </label>
            <input id='description' type='text' placeholder={personal.description} required/>
            
            <label htmlFor='photo'>Photo: </label>
            <input id='photo' type='file' accept='image/png, image/jpeg' />

            <img id='photo-holder' src={personal.photo} alt='holder-address'/>
        </section>
    );
}

export default Personal;