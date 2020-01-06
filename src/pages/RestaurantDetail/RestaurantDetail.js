import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectRestaurantDetailPage } from "../../redux/selector/restaurant.selector";
import {
  thunk_action_select_restaurant,
  restaurantToReview
} from "../../redux/actions/actions";
import Navbar from "../../components/Navbar/Navbar";
import {
  Row,
  Col,
  Rate,
  Tag,
  Icon,
  Carousel,
  Card,
  Divider,
  Progress,
  Button
} from "antd";
import style from "./RestaurantDetail.module.css";
import { MdLocationOn, MdLocalPhone, MdRestaurant } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

export class RestaurantDetail extends Component {
  componentDidMount = () => {
    const { id } = this.props.match.params;
    const { fetchRestaurant } = this.props;
    fetchRestaurant(id);
  };

  handleClickWriteReview = () => {
    const { writeReviewWith, restaurantDetail, history } = this.props;
    writeReviewWith(restaurantDetail);
    history.push("/write-review");
  };

  render() {
    const { restaurantDetail } = this.props;
    return (
      <div className="bg-page">
        <Navbar />
        {/* Header */}
        <div className={style.Header}>
          <div className="container">
            <Row type="flex" align="middle">
              <Col span={24}>
                <div className="text-left">
                  <h2>{restaurantDetail.name}</h2>
                </div>
                <div className="text-right" style={{ lineHeight: "36px" }}>
                  <Icon type="heart" />
                </div>
              </Col>
              <Col span={24}>
                <Rate
                  disabled
                  allowHalf
                  defaultValue={restaurantDetail.rating}
                  className={style.StarCustom}
                />
                <span>
                  {restaurantDetail.rating}
                  <small>({restaurantDetail.total_review} reviews)</small>
                </span>
              </Col>
              <Col span={24}>
                <p>{restaurantDetail.cuisine}</p>
              </Col>
              <Col span={24}>
                <Tag color="green">{restaurantDetail.price_range}</Tag>
                <Tag color="green">open</Tag>
              </Col>
            </Row>
          </div>
        </div>
        {/* Slider */}
        <div>
          <Carousel style={{ width: 375, height: 210 }}>
            {/* TODO: map div img */}
            <div>
              <img
                src={restaurantDetail.image_url}
                alt={restaurantDetail.image_url}
                style={{ width: 375, height: 210 }}
              />
            </div>
          </Carousel>
        </div>
        {/* location and detail */}
        <div className="container">
          <Row type="flex" justify="center">
            <Col span={24} className={style.MarginBottom}>
              <Card className={style.CardCustom} bodyStyle={{ padding: 0 }}>
                <h2>Location and Detail</h2>
                <Divider />
                <Row className={style.StyleText}>
                  <Col span={2}>
                    <FaDollarSign />
                  </Col>
                  <Col span={22}>
                    <p>110 - 1,500 Baht</p>
                  </Col>
                </Row>
                <Row className={style.StyleText}>
                  <Col span={2}>
                    <MdRestaurant />
                  </Col>
                  <Col span={22}>
                    <p>{restaurantDetail.cuisine}</p>
                  </Col>
                </Row>
                <Row className={style.StyleText}>
                  <Col span={2}>
                    <MdLocationOn />
                  </Col>
                  <Col span={22}>
                    <p>{restaurantDetail.address}</p>
                  </Col>
                </Row>
                <Row className={style.StyleText}>
                  <Col span={2}>
                    <MdLocalPhone />
                  </Col>
                  <Col span={22}>
                    <p>{restaurantDetail.phone}</p>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={24} className={style.MarginBottom}>
              {/* Review star card */}
              <Card className={style.CardCustom} bodyStyle={{ padding: 0 }}>
                <h2>
                  Review <span className="text-muted">(567)</span>
                </h2>
                <Divider />
                {/* TODO: map star 5 to 1 */}
                <Row style={{ textAlign: "center", marginBottom: 15 }}>
                  <Col span={10}>
                    <Rate
                      disabled
                      defaultValue={5}
                      className={style.StarRate}
                    />
                  </Col>
                  <Col span={10}>
                    <Progress percent={80} size="small" showInfo={false} />
                  </Col>
                  <Col span={4}>
                    <span>1200</span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Button
                      block
                      type="primary"
                      onClick={this.handleClickWriteReview}
                    >
                      Write review
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <ReviewCard />
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  restaurantDetail: selectRestaurantDetailPage
});

const mapDispatchToProps = dispatch => ({
  fetchRestaurant: id => dispatch(thunk_action_select_restaurant(id)),
  writeReviewWith: data => dispatch(restaurantToReview(data))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RestaurantDetail)
);
