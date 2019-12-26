import React from "react";
import style from "./RestaurantMiniCard.module.css";
import { Row, Col, Rate } from "antd";

function RestaurantMiniCard() {
  return (
    <Row>
      <Col span={24}>
        <img
          src="https://images.unsplash.com/photo-1566830646346-908d87490bba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="wat"
          style={{ width: "275px", borderRadius: 2 }}
          className={style.ImgCard}
        />
      </Col>
      <Col span={24} style={{ marginTop: 5 }}>
        <p>wat phar chan</p>
      </Col>
      <Col span={24}>
        <p>
          <Rate
            disabled
            defaultValue={3}
            style={{ fontSize: 16, marginRight: 5 }}
          />
          <small> 4505 reviews </small>
        </p>
      </Col>
    </Row>
  );
}

export default RestaurantMiniCard;
