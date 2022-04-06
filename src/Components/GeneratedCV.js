const GeneratedCV = (props) => {
  return (
    <section className="generated-cv">
      <h2>Generated Curriculum Vitae</h2>
      <section id="personal-info">
        <h2 className="section-title">Personal Information</h2>

        <input id="name" type="text" value={props.personal.name} />

        <input id="profession" type="text" value={props.personal.profession} />

        <input id="contact" type="number" value={props.personal.contact} />

        <input id="email" type="email" value={props.personal.email} />

        <input id="description"type="text"value={props.personal.description} />
        {/*research how new FileReader()
        <img id="photo-holder" src={props.personal.photo} alt="image-holder-address" />
        */}
      </section>
    </section>
  );
};

export default GeneratedCV;
