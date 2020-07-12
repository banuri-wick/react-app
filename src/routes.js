import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/features/login/login";
import MainLayout from "./components/shared/components/main-layout/main-layout";

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/orders" component={MainLayout} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default Routes;
