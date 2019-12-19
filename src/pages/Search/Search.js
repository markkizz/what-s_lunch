import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Search.module.css";
import FilterBar from "../../components/FilterBar/FilterBar";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { Row, Col } from "antd";

export class Search extends Component {
  render() {
    return (
      <div className={style.Bg}>
        <Navbar />
        <FilterBar />
        <div className={style.CardContainer}>
          <Row type="flex" justify="center" align="middle">
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
      </div>
    );
  }
}

export default Search;


