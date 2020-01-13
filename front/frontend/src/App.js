import React from "react";
import "./App.css";
import SignUp from "./SignUp";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>React FrontEnd Test for Quest</h1>
        <SignUp />
      </div>
    );
  }
}

export default App;
