import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "mon@email.com",
      password: "monPassw0rd",
      name: "James",
      lastname: "Bond"
    };

    this.updateEmailField = this.updateEmailField.bind(this);

    this.updatePasswordField = this.updatePasswordField.bind(this);

    this.updateNameField = this.updateNameField.bind(this);

    this.updateLastNameField = this.updateLastNameField.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateEmailField(e) {
    this.setState({ email: e.target.value });
  }
  updatePasswordField(e) {
    this.setState({ password: e.target.value });
  }
  updateNameField(e) {
    this.setState({ name: e.target.value });
  }
  updateLastNameField(e) {
    this.setState({ lastname: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("This form has been submitted with these fields", this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>{JSON.stringify(this.state, 1, 1)}</h1>
          <input
            type="email"
            value={this.state.email}
            name="email"
            onChange={this.updateEmailField}
          />
          <input
            type="password"
            value={this.state.password}
            name="password"
            onChange={this.updatePasswordField}
          />
          <input
            type="name"
            value={this.state.name}
            name="name"
            onChange={this.updateNameField}
          />
          <input
            type="lastname"
            value={this.state.lastname}
            name="lastname"
            onChange={this.updateLastNameField}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
