import React from "react";
import "./App.css";
import SignUp from "./SignUp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputEmail: "test"
    };
    this.updateEmailField = this.updateEmailField.bind(this);
  }

  updateEmailField(e) {
    this.setState({ inputEmail: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>{this.state.inputEmail}</h1>
        <SignUp updateEmailField={this.updateEmailField} />
      </div>
    );
  }
}

export default App;
