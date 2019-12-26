import React, { Component } from "react";
import "antd/dist/antd.css";
import LoginMobile from "./pages/Login/LoginMobile";
import RegisterMobile from "./pages/Register/RegisterMobile";
import Search from "./pages/Search/Search";
import RestaurantDetail from "./pages/RestaurantDetail/RestaurantDetail";
import WriteReview from "./pages/WriteReview/WriteReview";
import HomePage from "./pages/HomePage/HomePage";
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
    return (
      <div>
        <Layout>
          <HomePage />
        </Layout>
      </div>
    );
  }
}

export default App;
