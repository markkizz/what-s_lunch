import React from "react";
import style from "./RestaurantMiniCard.module.css";
import { Row, Col, Rate } from "antd";

function RestaurantMiniCard(props) {
  return (
    <Row>
      <Col span={24}>
        <img
          src={props.src}
          alt={props.restaurantName}
          style={{ width: "275px", borderRadius: 2 }}
          className={style.ImgCard}
        />
      </Col>
      <Col span={24} style={{ marginTop: 5 }}>
        <p>{props.restaurantName}</p>
      </Col>
      <Col span={24}>
        <div>
          <Rate
            disabled
            defaultValue={props.rating}
            style={{ fontSize: 16, marginRight: 5 }}
          />
          <small> {props.totalReviews} reviews </small>
        </div>
      </Col>
    </Row>
  );
}

export default RestaurantMiniCard;
