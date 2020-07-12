import React, { Component } from "react";
import axios from "axios";
import { ORDER_LIST_URL } from "../../shared/constants/url";

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };

    this.getAllOrders();
  }

  render() {
    return (
      <div
        className="card"
        style={{ marginTop: 10 + "%", marginLeft: 12 + "%" }}
      >
        <div className="card-body">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Order no</th>
                <th scope="col">Customer name</th>
                <th scope="col">Delivery name</th>
                <th scope="col">Product name</th>
                <th scope="col">Amount</th>
                <th scope="col">Total price</th>
                <th scope="col">Deleivery status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.orders.map((order) => (
                <tr key={order.orderNo}>
                  <th>{order.orderNo}</th>
                  <td>{order.customerName}</td>
                  <td>{order.deliveryName}</td>
                  <td>{order.productName}</td>
                  <td>{order.amount}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    <span
                      className="badge badge-secondary"
                      style={{
                        backgroundColor: this.changeDeliveryStatusColor(
                          order.status
                        ),
                      }}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  getAllOrders = () => {
    axios.get(ORDER_LIST_URL).then((res) => {
      this.setState({ orders: res.data });
    });
  };

  changeDeliveryStatusColor = (status) => {
    switch (status) {
      case "Not-delivered":
        return "#566573";
      case "Delivered":
        return "#3498DB";
    }
  };
}

export default OrderList;
