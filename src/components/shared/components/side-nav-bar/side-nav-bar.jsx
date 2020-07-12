import React from "react";
import "./side-nav-bar.css";
import { Link } from "react-router-dom";

const SideNavBar = () => {
  return (
    <div id="wrapper" className="active">
      <div id="sidebar-wrapper">
        <ul id="sidebar_menu" className="sidebar-nav">
          <li className="sidebar-brand">
            Menu
            <span
              id="main_icon"
              className="glyphicon glyphicon-align-justify"
            ></span>
          </li>
        </ul>
        <ul className="sidebar-nav" id="sidebar">
          <li>
            <Link to="/orders/create-order">
              Create order
              <span className="sub_icon glyphicon glyphicon-link"></span>
            </Link>
          </li>
          <li>
            <Link to="/orders/order-list">
              Order list
              <span className="sub_icon glyphicon glyphicon-link"></span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavBar;
