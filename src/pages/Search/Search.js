import React, { Component } from "react";
import { connect } from "react-redux";
import {
  isSearchPage,
  notSearchPage,
  thunk_action_search_restaurant,
  thunk_action_restaurant,
  thunk_action_filter_restaurant
} from "../../redux/actions/actions";
import { createStructuredSelector } from "reselect";
import { selectSearchData } from "../../redux/selector/search.selector";
import qs from "query-string";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Search.module.css";
import FilterBar from "../../components/FilterBar/FilterBar";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import FilterDesktop from "../../components/FilterDesktop/FilterDesktop";
import { Row, Col } from "antd";

export class Search extends Component {
  // TODO: finish filter restaurant card

  componentDidMount = () => {
    const { district, keyword, q, cuisine } = qs.parse(
      this.props.location.search
    );
    const filter = this.props.match.params.option;
    if (district && keyword) {
      this.props.dispatch(isSearchPage(district));
      this.props.dispatch(thunk_action_search_restaurant(district, keyword));
    } else if (q) {
      this.props.dispatch(isSearchPage(q));
      this.props.dispatch(thunk_action_search_restaurant(null, null, q));
    } else if (filter) {
      this.props.dispatch(thunk_action_filter_restaurant(district, cuisine));
    }
    this.props.dispatch(thunk_action_restaurant());
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
                      <RestaurantCard
                        restaurantName={restaurant.name}
                        src={restaurant.image_url}
                        rating={restaurant.rating}
                        totalReviews={restaurant.total_review}
                        description={restaurant.description}
                        priceRange={restaurant.price_range}
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
  searchData: selectSearchData
});

export default connect(mapStateToProps)(Search);
