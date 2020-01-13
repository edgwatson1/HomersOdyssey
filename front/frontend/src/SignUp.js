import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input
          type="email"
          name="email"
          onChange={this.props.updateEmailField}
        />
      </div>
    );
  }
}

export default SignUp;
