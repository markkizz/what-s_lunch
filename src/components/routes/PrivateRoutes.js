import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import rolesConfig from "../../config/role";
import * as AllRoutes from "./AllRoutes";

export class PrivateRoutes extends Component {
  state = {
    allowedRoutes: []
  };

  componentDidMount = () => {
    const role = this.props.role;
    this.setState(state => ({
      allowedRoutes: rolesConfig[role].routes
    }));
  };

  render() {
    // const { role } = this.props;
    const { allowedRoutes } = this.state;
    return (
      <>
        {allowedRoutes.map((route, i) => (
          <Route
            exact
            path={route.path}
            component={AllRoutes[route.component]}
            key={i + route.path}
          />
        ))}
        {/* <Route path="/home" component={AllRoutes.Homepage} /> */}
      </>
    );
  }
}

export default withRouter(PrivateRoutes);

// {/* <Route
//               exact
//               path={route.path + "/:restaurantName?/:district?"}
//               component={AllRoutes[route.component]}
//               key={i + route.path}
//             />  */}
