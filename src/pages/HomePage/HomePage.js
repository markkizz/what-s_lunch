import React, { Component } from "react";
// import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { thunk_action_restaurant } from "../../redux/actions/actions";
import { createStructuredSelector } from "reselect";
import {
  selectRestaurantData,
  selectRestaurantName,
  selectDistrictRestaurant
} from "../../redux/selector/restaurant.selector";
import { Row, Col, Select, Button } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import style from "./HomePage.module.css";
import RestaurantMiniCard from "../../components/RestaurantMiniCard/RestaurantMiniCard";
import PostCard from "../../components/PostCard/PostCard";
import { FaLocationArrow, FaSearch, FaHeart } from "react-icons/fa";
import { MdRestaurant, MdRateReview } from "react-icons/md";
import { GiBookCover } from "react-icons/gi";

const { Option } = Select;

export class HomePage extends Component {
  state = {
    districtSelected: "",
    searchText: "",
    quickSearchs: [
      { name: "Popular", iconName: <MdRestaurant />, color: "#9878FF" },
      { name: "Categories", iconName: <GiBookCover />, color: "#797CE8" },
      { name: "Top Star", iconName: <FaHeart />, color: "#7997E8" },
      { name: "Top reviews", iconName: <MdRateReview />, color: "#91CCFF" }
    ]
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
      this.props.history.push(
        `/search?district=${districtSelected}&keyword=${searchText}`
      );
    } else if (districtSelected) {
      this.props.history.push(`/search?district=${districtSelected}`);
    }
  };

  componentDidMount = () => {
    this.props.dispatch(thunk_action_restaurant());
  };

  render() {
    const { quickSearchs } = this.state;
    const { restaurants, restaurantName, restaurantDistrict } = this.props;
    const options1 = restaurantDistrict.map(d => <Option key={d}>{d}</Option>);
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
              {quickSearchs.map((quickSearch, i) => (
                <Col span={6} className={style.Flex}>
                  <Row type="flex" justify="center">
                    <Col>
                      <div
                        className={style.Circle}
                        style={{ backgroundColor: quickSearch.color }}
                      >
                        {quickSearch.iconName}
                      </div>
                    </Col>
                    <Col>
                      <p>{quickSearch.name}</p>
                    </Col>
                  </Row>
                </Col>
              ))}
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
              {restaurants.map((restaurant, i) => (
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

const mapStateToProps = createStructuredSelector({
  restaurants: selectRestaurantData,
  restaurantName: selectRestaurantName,
  restaurantDistrict: selectDistrictRestaurant
});

export default connect(mapStateToProps, null)(HomePage);

// {/* <Col span={6} className={style.Flex}>
//                 <Row type="flex" justify="center">
//                   <Col>
//                     <div
//                       className={style.Circle}
//                       style={{ backgroundColor: "#797CE8" }}
//                     >
//                       <GiBookCover />
//                     </div>
//                   </Col>
//                   <Col>
//                     <p>Categories</p>
//                   </Col>
//                 </Row>
//               </Col>
//               <Col span={6} className={style.Flex}>
//                 <Row type="flex" justify="center">
//                   <Col>
//                     <div
//                       className={style.Circle}
//                       style={{ backgroundColor: "#7997E8" }}
//                     >
//                       <Icon type="like" />
//                     </div>
//                   </Col>
//                   <Col>
//                     <p>Top Star</p>
//                   </Col>
//                 </Row>
//               </Col>
//               <Col span={6} className={style.Flex}>
//                 <Row type="flex" justify="center">
//                   <Col>
//                     <div
//                       className={style.Circle}
//                       style={{ backgroundColor: "#91CCFF" }}
//                     >
//                       <MdRateReview />
//                     </div>
//                   </Col>
//                   <Col>
//                     <p>Top reviews</p>
//                   </Col>
//                 </Row>
//               </Col> */}
