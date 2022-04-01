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
  }

  render() {
    return (
      <div className="App">
        <Personal></Personal>
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
