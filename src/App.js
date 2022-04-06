import "./Styles/App.css";
import React, { Component } from "react";
import Personal from "./Components/PersonalInfo";
import Socials from "./Components/Socials";
import WorkExperience from "./Components/WorkExperience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

class App extends Component {
  constructor() {
    super();

    this.state = {
      personal: {
        name: "Jane Doe",
        profession: "Software Developer",
        contact: "091234567",
        email: "janedoe@gmail.com",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, recusandae et.",
        photo: "alternative",
      },
    };
    /* passed update method as props then receive it as onChange */
    this.updateData = this.updateData.bind(this);
  }

  updateData = (e) => {
    const newName = e.target.value;
    this.setState({
      // should update the specific data but for now personal info
      personal: {...this.state.personal, name: newName}
    })
  }

  render() {
    return (
      <div className="App">
        <Personal personal={this.state.personal} update={(e) => this.updateData(e)} />
        {/* add the buttons here or in the component */}
        <Socials/>
        <WorkExperience/>
        <Education/>
        <Skills/>
        <Projects/>
      </div>
    );
  }
}

export default App;
