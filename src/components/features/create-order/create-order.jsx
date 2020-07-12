import React, { Component } from "react";
import ProductInformation from "./product-information/product-information";
import CustomerInformation from "./customer-information/customer-information";
import Axios from "axios";
import { COUNTRIES_URL, PRODUCT_URL } from "../../shared/constants/url";
import "./create-order.css";

class CreateOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      products: [],
      formValid: {
        customerInformationForm: false,
        productInformationForm: false,
      },
      errors: {
        customerInformation: {
          customerName: "",
          customerAddressLine1: "",
          customerPostalCode: "",
          customerCity: "",
          customerCountry: "",
          customerContactNo: "",
        },
        productInformation: {
          productName: "",
          amount: 0,
          unitPrice: 0,
          totalPrice: 0,
        },
      },
      values: {
        customerInformation: {},
        productInformation: {},
      },
    };

    this.getCountryList();
    this.getProductList();
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row" id="section1">
            <div className="col-lg-5 col-md-5">
              <h5 className="card-title" id="CustomerInformationTitle">
                Customer Information
              </h5>
              <div className="card-text" id="CustomerInformationBody">
                <CustomerInformation
                  AppState={this.state}
                  customerInformationEvent={this.customerInformationListener}
                />
              </div>
            </div>
            <div className="col-lg-2 col-md-2"></div>
            <div className="col-lg-5 col-md-5">
              <h5 className="card-title" id="DeliveryInformationTitle">
                Product Information
              </h5>
              <div className="card-text" id="DeliveryInformationBody">
                <ProductInformation AppState={this.state} />
              </div>
            </div>
          </div>

          <hr />
          <div id="PlaceOrderBtn">
            <button type="button" className="btn btn-info">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    );
  }

  getCountryList = () => {
    Axios.get(COUNTRIES_URL).then((res) =>
      this.setState({ countries: res.data })
    );
  };

  getProductList = () => {
    Axios.get(PRODUCT_URL).then((res) => this.setState({ products: res.data }));
  };

  customerInformationListener = (data) => {
    console.log(data);

    this.setState({
      values: { customerInformation: data.values.customerInformation },
      formValid: {
        customerInformationForm: data.formValid.customerInformationForm,
      },
    });
  };
}

export default CreateOrder;
