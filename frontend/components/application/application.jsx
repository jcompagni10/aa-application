import React from "react";
import Errors from "../misc/errors";

export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      zip: ""
    };
  }

  handleChange(type) {
    return e => {
      let value = e.target.value;
      this.setState({ [type]: value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createApplication(this.state).then(
      // go to success page if app is validated
      result => this.props.history.push("/application/app_success")
    );
  }

  render() {
    return (
      <div className="application-wrapper">
        <h2> Application </h2>
        <Errors errors={this.props.errors} />
        <form className = "application-form">
          <div className="form-group">
            <label htmlFor="first-name">First Name: </label>
            <input
              className="form-control"
              id="first-name"
              type="text"
              onChange={this.handleChange("first_name")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name: </label>
            <input
              className="form-control"
              id="last-name"
              type="text"
              onChange={this.handleChange("last_name")}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              className="form-control"
              id="email"
              type="text"
              onChange={this.handleChange("email")}
            />
          </div>

          <div className="form-group">
            <label htmlFor="zip">Zip: </label>
            <input
              className="form-control"
              id="zip"
              type="text"
              onChange={this.handleChange("zip")}
            />
          </div>
          <div className="form-group">
            <input
              className="btn btn-primary"
              type="submit"
              value="Apply!"
              onClick={this.handleSubmit.bind(this)}
            />
          </div>
        </form>
      </div>
    );
  }
}
