
const Form = (props) => {

  const { data, update, updateDataArray , deleteFromArray, addFromArray } = props;
  const { personal, experience, education, projects, socials, /*skills*/ } = data;
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
          {experience.map( (job, i) => {
            return (
              <div key={i + ' experience'} data-state='experience' data-index={i} >
                <label htmlFor='work-name'>Work Name: </label>
                <input id='work-name' data-key='name' type='text' placeholder={job.name} onChange={e => updateDataArray(e)} required/>

                <label htmlFor='work-desc'>Work Description: </label>
                <input id='work-desc' data-key='description' type='text' placeholder={job.description} onChange={e => updateDataArray(e)} required/>
                <button onClick={e => deleteFromArray(e)} >Delete</button>
              </div>
            )
          })}
          <button data-name='experience' onClick={e => addFromArray(e)}>Add Experience</button>
      </section>

      <section id='education'>
          {education.map( (edu, i) => {
            return (
              <div key={i + ' education'} data-state='education' data-index={i} >
                <label htmlFor='education-name'>Education Name: </label>
                <input id='education-name' data-key='name' type='text' placeholder={edu.name} onChange={e => updateDataArray(e)} required/>

                <label htmlFor='education-description'>Education Description: </label>
                <input id='education-description' data-key='description' type='text' placeholder={edu.description} onChange={e => updateDataArray(e)} required/>
                <button onClick={e => deleteFromArray(e)} >Delete</button>
              </div>
            )
          })}
          <button data-name='education' onClick={e => addFromArray(e)}>Add Education</button>
      </section>

      <section id='projects'>
          {projects.map( (project, i) => {
            return (
              <div key={i + ' project'} data-state='projects' data-index={i} >
                <label htmlFor='project-name'>Project Name: </label>
                <input id='project-name' data-key='name' type='text' placeholder={project.name} onChange={e => updateDataArray(e)} required/>

                <label htmlFor='project-description'>Project Description: </label>
                <input id='project-description' data-key='description' type='text' placeholder={project.description} onChange={e => updateDataArray(e)} required/>
                <button onClick={e => deleteFromArray(e)} >Delete</button>
              </div>
            )
          })}
          <button data-name='projects' onClick={e => addFromArray(e)}>Add Project</button>
      </section>

      <section id='socials'>
          {socials.map( (social, i) => {
            return (
              <div key={i + ' social'} data-state='socials' data-index={i} >
                <label htmlFor='social-name'>Social Name: </label>
                <input id='social-name' data-key='name' type='text' placeholder={social.name} onChange={e => updateDataArray(e)} required/>

                <label htmlFor='social-link'>Social Link: </label>
                <input id='social-link' data-key='link' type='text' placeholder={social.link} onChange={e => updateDataArray(e)} required/>
                <button onClick={e => deleteFromArray(e)} >Delete</button>
              </div>
            )
          })}
          <button data-name='socials' onClick={e => addFromArray(e)}>Add Social</button>
      </section>
      {/* 
      <section id='skills'>
          {skills.map( (skill, i) => {
            return (
              <div key={i + ' skill'} data-state='skills' data-index={i} >
                <label htmlFor='skill-name'>Skill Name: </label>
                <input id='skill-name' data-key='name' type='text' placeholder={skill.name} onChange={e => updateDataArray(e)} required/>
                <button onClick={e => deleteFromArray(e)} >Delete</button>
              </div>
            )
          })}
          <button data-name='skills' onClick={e => addFromArray(e)}>Add Skill</button>
      </section>
      */}
    </div>
  );
}

export default Form;