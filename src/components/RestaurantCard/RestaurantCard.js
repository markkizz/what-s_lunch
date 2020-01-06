import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./RestaurantCard.module.css";
import { Card, Row, Col, Button, Rate, Tag, Icon } from "antd";
import { FaQuoteLeft } from "react-icons/fa";

export class RestaurantCard extends Component {
  render() {
    const { restaurantDetail, handleClickToDetail } = this.props;
    const maxChar = 105;
    return (
      <>
        <Card
          className={style.CardCustom}
          bodyStyle={{ padding: "16px 0", height: "100%" }}
        >
          <Row type="flex">
            <Col span={12}>
              <img
                src={restaurantDetail.image_url}
                alt={restaurantDetail.name}
                className={style.CardImg}
              />
            </Col>
            <Col span={12} className={style.PositionP}>
              <Row>
                <Col span={24}>
                  <h3>{restaurantDetail.name}</h3>
                </Col>
                {/* TODO: dynamic star */}
                <Col span={24}>
                  <Rate
                    disabled
                    defaultValue={restaurantDetail.rating}
                    className={style.StarCustom}
                  />
                  <small>{restaurantDetail.total_review} reviews</small>
                </Col>
                <Col span={24}>
                  <Tag color="green">{restaurantDetail.price_range}</Tag>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className={style.ContentP}>
            <Row type="flex" justify="center">
              <Col span={24}>
                <p>
                  <FaQuoteLeft style={{ color: "#2eba69" }} />
                  {restaurantDetail.description.length > maxChar
                    ? restaurantDetail.description.substr(0, maxChar) + "... "
                    : restaurantDetail.description}
                  {restaurantDetail.description.length > maxChar && (
                    <Link> more </Link>
                  )}
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
                <Button
                  type="primary"
                  style={{ padding: "0.25em 2.25em" }}
                  onClick={handleClickToDetail(
                    restaurantDetail.name,
                    restaurantDetail.id
                  )}
                >
                  <p>
                    <Icon type="caret-right" /> visit
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
