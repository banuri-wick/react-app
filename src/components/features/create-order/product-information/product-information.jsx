import React, { Component } from "react";

class ProductInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form className="form">
        <div className="form-group">
          <label>Product</label>
          <select
            className="form-control"
            id="product"
            formcontrolname="productName"
          >
            <option>Select product</option>
            {this.props.AppState.products.map((product) => (
              <option key={product.productName}>{product.productName}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            formcontrolname="amount"
          />
        </div>
        <div className="form-group">
          <label>Unit price</label>
          <input
            type="text"
            className="form-control"
            id="unitPrice"
            formcontrolname="unitPrice"
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Total price</label>
          <input
            type="number"
            className="form-control"
            id="totalPrice"
            formcontrolname="totalPrice"
            readOnly
          />
        </div>
      </form>
    );
  }
}

export default ProductInformation;
