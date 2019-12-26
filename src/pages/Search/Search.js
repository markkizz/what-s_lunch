import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Search.module.css";
import FilterBar from "../../components/FilterBar/FilterBar";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import FilterDesktop from "../../components/FilterDesktop/FilterDesktop";
import { Row, Col } from "antd";

export class Search extends Component {
  // TODO: finish filter restaurant card
  render() {
    return (
      <div className="bg-page">
        <Navbar />
        <div className="container">
          <FilterBar />
          <Row type="flex" justify="center">
            <Col xs={0} lg={4}>
              <FilterDesktop />
            </Col>
            <Col xs={24} lg={20}>
              <div className={style.CardContainer}>
                <Row type="flex" align="middle">
                  <Col xs={24} sm={12} className={style.JustifyCenter}>
                    <RestaurantCard />
                  </Col>
                  <Col xs={24} sm={12} className={style.JustifyCenter}>
                    <RestaurantCard />
                  </Col>
                  <Col xs={24} sm={12} className={style.JustifyCenter}>
                    <RestaurantCard />
                  </Col>
                  <Col xs={24} sm={12} className={style.JustifyCenter}>
                    <RestaurantCard />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Search;
