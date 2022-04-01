
const Personal = (props) => {

    return (
        <section id='personal-info'>
            <h2 className='section-title'>Personal Information</h2>
            <label htmlFor='name'>Name: </label>
            <input id='name' type='text' required/>
            <label htmlFor='profession'>Profession: </label>
            <input id='name' type='text' required/>
            <label htmlFor='contact'>Contact: </label>
            <input id='contact' type='number' required/>
            <label htmlFor='email'>Email: </label>
            <input id='email' type='email' required/>
            <label htmlFor='description'>Description: </label>
            <input id='description' type='text' required/>
            <label htmlFor='photo'>Photo: </label>
            <input id='photo' type='file' accept='image/png, image/jpeg' />
        </section>
    );
}

export default Personal;