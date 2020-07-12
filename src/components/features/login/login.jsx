import React, { Component } from "react";
import login from "./../../../images/login.png";
import styles from "./../login/login.module.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formValid: false,
      errors: {
        userName: "",
        password: "",
      },
    };
  }

  render() {
    const { errors, formValid } = this.state;

    return (
      <div className="card m-5 p-2">
        <form>
          <div className="form-group col-md-5 col-lg-5">
            <label>User name</label>
            <input
              type="text"
              className="form-control"
              name="userName"
              placeholder="Enter username"
              onChange={this.handleChange}
              noValidate
            />
            {errors.userName.length > 0 && (
              <span className={styles.error}>{errors.userName}</span>
            )}
          </div>
          <div className="form-group col-md-5 col-lg-5">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={this.handleChange}
              noValidate
            />
            {errors.password.length > 0 && (
              <span className={styles.error}>{errors.password}</span>
            )}
          </div>
          <button className="btn btn-primary m-2" onClick={this.Login}>
            Submit
          </button>
        </form>
        <img className={styles.login} src={login} alt="" />
      </div>
    );
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    switch (name) {
      case "userName":
        errors.userName = validEmailRegex.test(value) ? "" : "Invalid username";
        break;
      case "password":
        errors.password =
          value.length < 5 ? "Password must have 5 characters" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
    this.setState({
      formValid: this.validateForm(this.state.errors),
    });
  };

  validateForm = (errors) => {
    let valid = true;

    Object.values(errors).forEach((x) => x.length > 0 && (valid = false));

    return valid;
  };

  Login = (event) => {
    event.preventDefault();

    if (
      this.state.userName === "user@aaaa.com" &&
      this.state.password === "user123"
    ) {
      console.log("logged in");
      this.props.history.push("/order/order-list");
    } else {
      console.log("invalid user name or password");
    }
  };
}

export default Login;
