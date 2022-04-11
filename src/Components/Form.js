
const Form = (props) => {

  const { data, update } = props;
  const { personal } = data;
  return (
    <div className = 'form'>
      <section id='personal-info'>
          <h2 className='section-title'>Personal Information</h2>

          <label htmlFor='name'>Name: </label>
          <input id='name' type='text' placeholder={personal.name} onChange={(e) => {update(e)}} required/>

          <label htmlFor='profession'>Profession: </label>
          <input id='profession' type='text' placeholder={personal.profession} onChange={(e) => {update(e)}} required/>
          
          <label htmlFor='address'>Address: </label>
          <input id='address' type='text' placeholder={personal.address} onChange={(e) => {update(e)}} required/>
          
          <label htmlFor='contact'>Contact: </label>
          <input id='contact' type='number' placeholder={personal.contact} onChange={(e) => {update(e)}} required/>
          
          <label htmlFor='email'>Email: </label>
          <input id='email' type='email' placeholder={personal.email} onChange={(e) => {update(e)}} required/>
          
          <label htmlFor='description'>Description: </label>
          <input id='description' type='text' placeholder={personal.description} onChange={(e) => {update(e)}} required/>
          
          <label htmlFor='photo'>Photo: </label>
          <input id='photo' type='file' accept='image/png, image/jpeg' onChange={(e) => {update(e)}} />

      </section>
      {/* add more section here */}
    </div>
  );
}

export default Form;