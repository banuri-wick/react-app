import React, { Component } from "react";

class CustomerInformation extends Component {
  render() {
    const { errors } = this.props.AppState;

    return (
      <form className="form">
        <div className="form-group">
          <label>Customer name</label>
          <input
            type="text"
            className="form-control"
            name="customerName"
            onChange={this.handleChange}
          />
          {errors.customerInformation.customerName.length > 0 && (
            <span style={{ color: "Red" }}>
              {errors.customerInformation.customerName}
            </span>
          )}
        </div>
        <div className="form-group">
          <label>Contact no</label>
          <input
            type="text"
            className="form-control"
            name="customerContactNo"
            onChange={this.handleChange}
          />
          {errors.customerInformation.customerContactNo.length > 0 && (
            <span style={{ color: "Red" }}>
              {errors.customerInformation.customerContactNo}
            </span>
          )}
        </div>
        <div className="form-group">
          <label>Address line1</label>
          <input
            type="text"
            className="form-control"
            name="customerAddressLine1"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Postal code</label>
          <input
            type="text"
            className="form-control"
            name="customerPostalCode"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            name="customerCity"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Country</label>
          <select
            className="form-control"
            name="customerCountry"
            onChange={this.handleChange}
          >
            {this.props.AppState.countries.map((country) => (
              <option key={country.code}>{country.name}</option>
            ))}
          </select>
        </div>
      </form>
    );
  }

  handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    let errors = { ...this.props.AppState.errors };
    const { formValid } = this.props.AppState;
    const { customerInformation } = { ...this.props.AppState.values };
    const currentState = customerInformation;
    currentState[name] = value;

    const validPhoneNumberRegex = RegExp(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
    );

    switch (name) {
      case "customerName":
        errors.customerInformation.customerName =
          value.length < 5 ? "Customer name needs at least 5 characters" : "";
        break;
      case "customerContactNo":
        errors.customerInformation.customerContactNo = validPhoneNumberRegex.test(
          value
        )
          ? ""
          : "Invalid phone number";
        break;
      default:
        break;
    }

    this.setState({
      errors,
      values: {
        customerInformation: currentState,
      },
    });

    this.setState({
      formValid: {
        customerInformationForm: this.validateForm(errors.customerInformation),
      },
    });

    console.log(formValid.customerInformationForm);

    if (formValid.customerInformationForm === true) {
      this.sendData();
    }
  };

  validateForm = (errors) => {
    let valid = true;

    Object.values(errors).forEach((x) => x.length > 0 && (valid = false));

    return valid;
  };

  sendData = () => {
    this.props.AppState.customerInformationEvent(this.props.AppState);
  };
}

export default CustomerInformation;
