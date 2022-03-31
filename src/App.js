import './Styles/App.css';
import React, { Component } from 'react';
import Personal from './Components/PersonalInfo';
import Summary from './Components/Summary';
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
        <Summary></Summary>
        <WorkExperience></WorkExperience>
        <Education></Education>
        <Skills></Skills>
        <Projects></Projects>
    </div>
    )
  }
}

export default App;
