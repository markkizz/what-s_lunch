import React, { Component } from "react";
import "antd/dist/antd.css";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { PrivateRoutes } from "./components/routes/PrivateRoutes";
import { Layout } from "antd";

export class App extends Component {
  componentDidMount = () => {
    if (module.hot) {
      module.hot.accept("./pages/HomePage/HomePage", () => {
        this.forceUpdate();
      });
    }
  };

  render() {
    let role = this.props.user.role;
    return (
      <>
        <Switch>
          <PrivateRoutes role={role} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, null)(App);
