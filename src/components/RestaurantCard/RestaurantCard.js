import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./RestaurantCard.module.css";
import { Card, Row, Col, Button, Rate, Tag, Icon } from "antd";
import { FaQuoteLeft } from "react-icons/fa";

export class RestaurantCard extends Component {
  render() {
    let text =
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias nam assumenda architecto sed quae culpa ab soluta. Suscipit ratione dicta dignissimos commodi quidem. Perspiciatis ullam vero asperiores cumque quae vel.";
    let maxChar = 95;
    return (
      <>
        <Card
          className={style.CardCustom}
          bodyStyle={{ padding: "16px 0", height: "100%" }}
        >
          <Row type="flex">
            <Col span={12}>
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                alt="example"
                className={style.CardImg}
              />
            </Col>
            <Col span={12} className={style.PositionP}>
              <Row>
                <Col span={24}>
                  <h3>looooooooong resssssss</h3>
                </Col>
                {/* TODO: dynamic star */}
                <Col span={24}>
                  <Rate
                    disabled
                    defaultValue={3}
                    className={style.StarCustom}
                  />
                  <small>1k reviews</small>
                </Col>
                <Col span={24}>
                  <Tag color="green">green</Tag>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className={style.ContentP}>
            <Row type="flex" justify="center">
              <Col span={24}>
                <p>
                  <FaQuoteLeft style={{ color: "#2eba69" }} />
                  {text.length > maxChar
                    ? text.substr(0, maxChar) + "... "
                    : "false"}
                  {text.length > maxChar && <Link> more </Link>}
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
                    <Icon type="schedule" /> Booking
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
