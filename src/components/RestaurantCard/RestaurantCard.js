import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./RestaurantCard.module.css";
import { Card, Row, Col, Button, Rate, Tag, Icon } from "antd";
import { FaQuoteLeft } from "react-icons/fa";

export class RestaurantCard extends Component {
  render() {
    const {
      restaurantName,
      src,
      rating,
      totalReviews,
      description,
      priceRange
    } = this.props;
    const maxChar = 95;
    return (
      <>
        <Card
          className={style.CardCustom}
          bodyStyle={{ padding: "16px 0", height: "100%" }}
        >
          <Row type="flex">
            <Col span={12}>
              <img src={src} alt={restaurantName} className={style.CardImg} />
            </Col>
            <Col span={12} className={style.PositionP}>
              <Row>
                <Col span={24}>
                  <h3>{restaurantName}</h3>
                </Col>
                {/* TODO: dynamic star */}
                <Col span={24}>
                  <Rate
                    disabled
                    defaultValue={rating}
                    className={style.StarCustom}
                  />
                  <small>{totalReviews} reviews</small>
                </Col>
                <Col span={24}>
                  <Tag color="green">{priceRange}</Tag>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className={style.ContentP}>
            <Row type="flex" justify="center">
              <Col span={24}>
                <p>
                  <FaQuoteLeft style={{ color: "#2eba69" }} />
                  {description.length > maxChar
                    ? description.substr(0, maxChar) + "... "
                    : description}
                  {description.length > maxChar && <Link> more </Link>}
                </p>
              </Col>
            </Row>
          </div>
          <div className={style.ButtonCard}>
            <Row type="flex" justify="center">
              <Col span={12}>
                <Button className={style.ButtonCustom}>
                  <p>
                    <Icon type="edit" /> Review
                  </p>
                </Button>
              </Col>
              <Col span={12}>
                <Button type="primary" style={{ padding: "0.25em 2.25em" }}>
                  <p>
                    <Icon type="schedule" /> visit
                  </p>
                </Button>
              </Col>
            </Row>
          </div>
        </Card>
      </>
    );
  }
}

export default RestaurantCard;
