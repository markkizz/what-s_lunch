import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { thunk_action_restaurant } from "../../redux/actions/actions";
import { Row, Col, Icon, Select, Button } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import style from "./HomePage.module.css";
import RestaurantMiniCard from "../../components/RestaurantMiniCard/RestaurantMiniCard";
import PostCard from "../../components/PostCard/PostCard";
import { FaLocationArrow, FaSearch } from "react-icons/fa";
import { MdRestaurant, MdRateReview } from "react-icons/md";
import { GiBookCover } from "react-icons/gi";

const { Option } = Select;

export class HomePage extends Component {
  state = {
    districtSelected: "",
    searchText: ""
  };

  handleSelected = component => value => {
    this.setState(state => ({
      [component]: value
    }));
  };

  handleSearch = value => {
    this.setState(state => ({
      searchText: value
    }));
  };

  handleClick = () => {
    const { districtSelected, searchText } = this.state;
    if (districtSelected && searchText) {
      this.props.history.push(`/search/${districtSelected}?q=${searchText}`);
    } else if (districtSelected) {
      this.props.history.push(`/search/${districtSelected}`);
    }
  };

  componentDidMount = () => {
    this.props.dispatch(thunk_action_restaurant());
  };

  render() {
    const { restaurants } = this.props;
    const restaurantName = restaurants.restaurantData.map(
      restaurantDetail => restaurantDetail.name
    );
    const options1 = restaurants.district.map(d => (
      <Option key={d}>{d}</Option>
    ));
    const options2 = restaurantName.map(d => <Option key={d}>{d}</Option>);
    return (
      <div className="bg-page">
        <Navbar />
        <div className={style.ImgSearch}>
          <div className="container">
            <Row type="flex" align="middle" className={style.InputPosition}>
              <Col xs={24} sm={8} className={style.FlexCenter}>
                <Select
                  showSearch
                  search
                  // placeholder={this.props.placeholder}
                  style={{ width: "85%" }}
                  showArrow
                  filterOption
                  suffixIcon={<FaLocationArrow />}
                  notFoundContent={null}
                  onSelect={this.handleSelected("districtSelected")}
                >
                  {options1}
                </Select>
                <Select
                  showSearch
                  search
                  // placeholder={this.props.placeholder}
                  style={{ width: "85%", marginTop: 10 }}
                  onChange={this.handleSearch}
                  showArrow
                  filterOption
                  mode="combobox"
                  notFoundContent={null}
                  suffixIcon={<FaSearch />}
                >
                  {options2}
                </Select>
                <Button
                  block
                  type="primary"
                  style={{ width: "85%", marginTop: 10 }}
                  onClick={this.handleClick}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </div>
        </div>
        <div className="container">
          <div>
            <Row style={{ margin: "15px 0" }}>
              <Col span={6} className={style.Flex}>
                <Row type="flex" justify="center">
                  <Col>
                    <div
                      className={style.Circle}
                      style={{ backgroundColor: "#2eba69" }}
                    >
                      <MdRestaurant />
                    </div>
                  </Col>
                  <Col>
                    <p>Poppular</p>
                  </Col>
                </Row>
              </Col>
              <Col span={6} className={style.Flex}>
                <Row type="flex" justify="center">
                  <Col>
                    <div
                      className={style.Circle}
                      style={{ backgroundColor: "#797CE8" }}
                    >
                      <GiBookCover />
                    </div>
                  </Col>
                  <Col>
                    <p>Categories</p>
                  </Col>
                </Row>
              </Col>
              <Col span={6} className={style.Flex}>
                <Row type="flex" justify="center">
                  <Col>
                    <div
                      className={style.Circle}
                      style={{ backgroundColor: "#7997E8" }}
                    >
                      <Icon type="like" />
                    </div>
                  </Col>
                  <Col>
                    <p>Top Star</p>
                  </Col>
                </Row>
              </Col>
              <Col span={6} className={style.Flex}>
                <Row type="flex" justify="center">
                  <Col>
                    <div
                      className={style.Circle}
                      style={{ backgroundColor: "#91CCFF" }}
                    >
                      <MdRateReview />
                    </div>
                  </Col>
                  <Col>
                    <p>Top reviews</p>
                  </Col>
                </Row>
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
              {restaurants.restaurantData.map((restaurant, i) => (
                <Row key={i + restaurant.name}>
                  <Col className={style.CardRestaurant}>
                    <RestaurantMiniCard
                      restaurantName={restaurant.name}
                      src={restaurant.image_url}
                      rating={restaurant.rating}
                      totalReviews={restaurant.total_review}
                    />
                  </Col>
                </Row>
              ))}
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurant
  };
};

export default connect(mapStateToProps, null)(HomePage);
