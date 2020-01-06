import React, { Component } from "react";
import { connect } from "react-redux";
import {
  isSearchPage,
  notSearchPage,
  thunk_action_search_restaurant,
  thunk_action_restaurant,
  thunk_action_filter_restaurant,
  searchPopular,
  searchTopStar,
  searchTopReview
} from "../../redux/actions/actions";
import { createStructuredSelector } from "reselect";
import { selectSearchData } from "../../redux/selector/search.selector";
import queryString from "query-string";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Search.module.css";
import FilterBar from "../../components/FilterBar/FilterBar";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import FilterDesktop from "../../components/FilterDesktop/FilterDesktop";
import { Row, Col } from "antd";
import {
  selectPopularRestaurant,
  selectTopStarRestaurant,
  selectTopReviewRestaurant
} from "../../redux/selector/restaurant.selector";

// TODO: move popular topstar topreview to thunk not select from redux
// * Stay DRY
export class Search extends Component {
  handleClickToDetail = (restaurantName, id) => () => {
    this.props.history.push(`/restaurant-detail/${restaurantName}/${id}`);
  };

  componentDidMount = () => {
    this.props.fetchRestaurant();
    const { district, keyword, q, cuisine, price_range } = queryString.parse(
      this.props.location.search
    );
    const { option } = this.props.match.params;
    const {
      isSearchPage,
      reqSearchRestaurant,
      reqFilterRestaurant,
      sendPopular,
      sendTopStar,
      sendTopReview,
      popularRestaurant,
      topStarRestaurant,
      topReviewRestaurant
    } = this.props;
    if (district && keyword) {
      isSearchPage(district);
      reqSearchRestaurant(district, keyword);
    } else if (q) {
      isSearchPage(q);
      reqSearchRestaurant(null, null, q);
    } else if (option === "filter") {
      isSearchPage(option);
      reqFilterRestaurant(district, cuisine, price_range);
    } else if (option === "popular") {
      isSearchPage(option);
      sendPopular(popularRestaurant);
    } else if (option === "topstar") {
      isSearchPage(option);
      sendTopStar(topStarRestaurant);
    } else if (option === "topreview") {
      isSearchPage(option);
      sendTopReview(topReviewRestaurant);
    }
  };

  componentWillUnmount = () => {
    this.props.notSearchPage();
  };

  render() {
    const { searchData } = this.props;
    return (
      <div className="bg-page">
        <Navbar />
        <FilterBar />
        <div className="container">
          <Row type="flex" justify="center">
            <Col xs={0} lg={4}>
              <FilterDesktop />
            </Col>
            <Col xs={24} lg={20}>
              <div className={style.CardContainer}>
                <Row type="flex" align="middle">
                  {searchData.map((restaurant, i) => (
                    <Col
                      xs={24}
                      sm={12}
                      className={style.JustifyCenter}
                      key={i + restaurant.name}
                    >
                      <RestaurantCard
                        restaurantDetail={restaurant}
                        handleClickToDetail={this.handleClickToDetail}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  searchData: selectSearchData,
  popularRestaurant: selectPopularRestaurant,
  topStarRestaurant: selectTopStarRestaurant,
  topReviewRestaurant: selectTopReviewRestaurant
});

const mapDispatchToProps = dispatch => ({
  isSearchPage: keyword => dispatch(isSearchPage(keyword)),
  notSearchPage: () => dispatch(notSearchPage()),
  fetchRestaurant: () => dispatch(thunk_action_restaurant()),
  reqSearchRestaurant: (district, keyword, q) =>
    dispatch(thunk_action_search_restaurant(district, keyword, q)),
  reqFilterRestaurant: (district, cuisine, priceRange) =>
    dispatch(thunk_action_filter_restaurant(district, cuisine, priceRange)),
  sendPopular: data => dispatch(searchPopular(data)),
  sendTopStar: data => dispatch(searchTopStar(data)),
  sendTopReview: data => dispatch(searchTopReview(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
