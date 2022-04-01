import './Styles/App.css';
import React, { Component } from 'react';
import Personal from './Components/PersonalInfo';
import Socials from './Components/Socials';
import WorkExperience from './Components/WorkExperience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects'

class App extends Component {
  constructor() {
    super();

    /* passed update method as props then receive it as onChange */
  }

  render() {
    return (
      <div className="App">
        <Personal></Personal>
        {/* add the buttons here or in the component*/}
        <Socials></Socials>
        <WorkExperience></WorkExperience>
        <Education></Education>
        <Skills></Skills>
        <Projects></Projects>
    </div>
    )
  }
}

export default App;
