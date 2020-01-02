import React, { Component } from "react";
import { connect } from "react-redux";
import {
  isSearchPage,
  notSearchPage,
  thunk_action_search_restaurant
} from "../../redux/actions/actions";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Search.module.css";
import FilterBar from "../../components/FilterBar/FilterBar";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import FilterDesktop from "../../components/FilterDesktop/FilterDesktop";
import { Row, Col } from "antd";
import queryMatch from "../../utils/queryMatch.util";

export class Search extends Component {
  // TODO: finish filter restaurant card

  componentDidMount = () => {
    const { district } = this.props.match.params;
    const query = this.props.location.search;
    let restaurantName = "";
    if (query) restaurantName = queryMatch(query);
    this.props.dispatch(isSearchPage(district));
    this.props.dispatch(
      thunk_action_search_restaurant(district, restaurantName)
    );
  };

  componentWillUnmount = () => {
    this.props.dispatch(notSearchPage());
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
                      <RestaurantCard />
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

const mapStateToProps = state => ({
  restaurant: state.restaurant,
  searchData: state.search.searchData
});

export default connect(mapStateToProps)(Search);
