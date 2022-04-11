
const Form = (props) => {

  const { data, update /* updateArray, deleteFromArray*/ } = props;
  const { personal, experience } = data;
  return (
    <div className = 'form'>
      <section id='personal'>
          <h2 className='section-title'>Personal Information</h2>

          <label htmlFor='name'>Name: </label>
          <input id='name' type='text' placeholder={personal.name} onChange={e => {update(e)}} required/>

          <label htmlFor='profession'>Profession: </label>
          <input id='profession' type='text' placeholder={personal.profession} onChange={e => {update(e)}} required/>
          
          <label htmlFor='address'>Address: </label>
          <input id='address' type='text' placeholder={personal.address} onChange={e => {update(e)}} required/>
          
          <label htmlFor='contact'>Contact: </label>
          <input id='contact' type='number' placeholder={personal.contact} onChange={e => {update(e)}} required/>
          
          <label htmlFor='email'>Email: </label>
          <input id='email' type='email' placeholder={personal.email} onChange={e => {update(e)}} required/>
          
          <label htmlFor='description'>Description: </label>
          <input id='description' type='text' placeholder={personal.description} onChange={e => {update(e)}} required/>
          
          <label htmlFor='photo'>Photo: </label>
          <input id='photo' type='file' accept='image/png, image/jpeg' onChange={e => {update(e)}} />

      </section>
      <section id='work-experience'>
          {experience.map( job => {
            return (
              <div key={job.name} data-value='experience'>
                <label htmlFor='work-name'>Work Name: </label>
                <input id='work-name' type='text' data-value={job.name} placeholder={job.name} onChange={e => {update(e)}} required/>

                <label htmlFor='work-desc'>Work Description: </label>
                <input id='work-desc' type='text' data-value={job.description} placeholder={job.description} onChange={e => {update(e)}} required/>
              </div>
            )
          })}
      </section>
      {/* add more section here */}
    </div>
  );
}

export default Form;