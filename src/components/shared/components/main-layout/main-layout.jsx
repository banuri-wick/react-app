import React from "react";
import { Route } from "react-router-dom";
import Header from "../header/header";
import SideNavBar from "../side-nav-bar/side-nav-bar";
import OrderList from "../../../features/order-list/order-list";
import CreateOrder from "../../../features/create-order/create-order";

const MainLayout = () => {
  return (
    <div id="wrapper">
      <Header />
      <SideNavBar />

      <div id="page-content-wrapper">
        <div className="page-content">
          <div className="container-fluid">
            <Route path="/orders/order-list" component={OrderList} />
            <Route path="/orders/create-order" component={CreateOrder} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
