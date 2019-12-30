import React, { Component } from "react";
import { Row, Col, Icon, Input, Select } from "antd";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import style from "./HomePage.module.css";
import RestaurantMiniCard from "../../components/RestaurantMiniCard/RestaurantMiniCard";
import PostCard from "../../components/PostCard/PostCard";

const { Option } = Select;

export class HomePage extends Component {
  render() {
    const data = ["a", "b", "c"];
    const options = data.map(d => <Option key={d}>{d}</Option>);
    return (
      <>
        <Navbar />
        <div className={style.ImgSearch}>
          <div className="container">
            <Row type="flex" align="middle" className={style.InputPosition}>
              <Col xs={24} sm={8} className={style.FlexCenter}>
                <Select
                  showSearch
                  search
                  // value={this.state.value}
                  // placeholder={this.props.placeholder}
                  style={{ width: "85%" }}
                  showArrow={false}
                  filterOption={false}
                  notFoundContent={null}
                >
                  {options}
                </Select>
                <Select
                  showSearch
                  search
                  // value={this.state.value}
                  // placeholder={this.props.placeholder}
                  style={{ width: "85%", marginTop: 10 }}
                  showArrow={false}
                  filterOption={false}
                  notFoundContent={null}
                >
                  {options}
                </Select>
              </Col>
            </Row>
          </div>
        </div>
        <div className="container">
          <div>
            <Row style={{ margin: "15px 0" }}>
              <Col span={6} className={style.Flex}>
                <div className={style.Circle}>
                  <Icon type="search" />
                </div>
              </Col>
              <Col span={6} className={style.Flex}>
                <div className={style.Circle}>
                  <Icon type="search" />
                </div>
              </Col>
              <Col span={6} className={style.Flex}>
                <div className={style.Circle}>
                  <Icon type="search" />
                </div>
              </Col>
              <Col span={6} className={style.Flex}>
                <div className={style.Circle}>
                  <Icon type="search" />
                </div>
              </Col>
            </Row>
          </div>
          <div className={style.TrendingContainer}>
            <div className="text-left">
              <h3>Trending Restaurant</h3>
            </div>
            <div className="text-right">
              <p>See all</p>
            </div>
            <div className={style.CardContainer}>
              <Row>
                <Col className={style.CardRestaurant}>
                  <RestaurantMiniCard />
                </Col>
              </Row>
            </div>
          </div>
          <div>
            <h2>From Community</h2>
          </div>
          <div>
            <PostCard />
          </div>
          {/* container */}
        </div>
      </>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     user: state.user
//   };
// };

export default connect(null, null)(HomePage);
