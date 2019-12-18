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
          <Row type="flex" justify="center">
            <Col span={24}>
              <RestaurantCard />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Search;
