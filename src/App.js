import "./Styles/App.css";
import React, { Component } from "react";
import Personal from "./Components/PersonalInfo";
import Socials from "./Components/Socials";
import WorkExperience from "./Components/WorkExperience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Form from "./Components/Form";

class App extends Component {
  constructor() {
    super();

    this.state = {
      personal: {
        name: 'Jane Doe',
        profession: 'Software Developer',
        address: 'Cebu city, Philippines',
        contact: '091234567',
        email: 'janedoe@gmail.com',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, recusandae et.',
        photo: 'https://www.stevensegallery.com/400/400',
      },
      experience: [{ name: 'Awesome Job', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
                    { name: 'Fantastic Job', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}],
      education: [{ name: 'BSME', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
                    { name: 'The Odin Project', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},],
      projects: [{ name: 'Project 1', link: 'https://github.com/tokumeiAnonymous', description: 'Simple description 1' },
                  { name: 'Project 2', link: 'https://github.com/tokumeiAnonymous', description: 'Simple description 2' }],
      socials: [{ name: 'Github', link: 'https://github.com/tokumeiAnonymous' }, 
                { name: 'LinkedIn', link: 'https://www.linkedin.com/in/jerome-taguba-a15735231/' }, 
                { name: 'Website', link: 'https://tokumeianonymous.github.io/temporary-portfolio/' }],
      skills: ['html/css/javascript', 'git', 'react', 'java', 'node']
    };
    /* passed update method as props then receive it as onChange */
    this.updateData = this.updateData.bind(this);
  }

  updateData = e => {
    e.preventDefault();
    this.setState({
      [e.target.parentNode.id]: {...this.state[e.target.parentNode.id], [e.target.id]: e.target.value}
    })
  }

  updateDataArray = e => {
    e.preventDefault();
    const {index, toUpdateState} = this.getIndexAndToUpdateState(e);
    const toUpdateKey = e.target.getAttribute('data-key');
    const oldData = this.getElementWith(index, this.state[toUpdateState]);
    oldData[toUpdateKey] = e.target.value;
    const newDataArray = this.state[toUpdateState];
    newDataArray[index] = oldData;

    this.setState({
    [toUpdateState]: newDataArray
    })
  }

getIndexAndToUpdateState = e => {
  const toUpdateState = e.target.parentNode.getAttribute('data-state');
  const index = e.target.parentNode.getAttribute('data-index');
  return {index, toUpdateState};
}

getElementWith = (index, array) => {

  for (let i = 0; i < array.length; i++) {
    // the index from data-index is a string so only used a double equal
    if (i == index) return array[i];
  }
  return null;
}

deleteFromArray = e => {
  const {index, toUpdateState} = this.getIndexAndToUpdateState(e);
  const oldData = this.state[toUpdateState];
  const newData = oldData.filter((element, i) => index != i);
  this.setState({
    [toUpdateState]: newData
  })
}

addFromArray = e => {
  const toUpdateState = e.target.parentNode.getAttribute('data-state');
  const newData = this.state[toUpdateState]; // something wrong here
  console.log(newData, toUpdateState);
  newData.push({});
  this.setState({
    [toUpdateState]: newData
  })
}

  render() {
    return (
      <div className = 'App'>
          <Form data={this.state} update={e => this.updateData(e)} 
                updateDataArray={e => this.updateDataArray(e)} 
                deleteFromArray={e => this.deleteFromArray(e)} 
                addFromArray={e => this.addFromArray(e)}
                />
        <div className = 'generated'>
          <aside>
            <Personal personal={this.state.personal} />
            <Socials socials={this.state.socials} />
          </aside>
          <main>
            <WorkExperience experience={this.state.experience} />
            <Education education={this.state.education} />
            <Skills skills={this.state.skills} />
            <Projects projects={this.state.projects} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
