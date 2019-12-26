import React, { Component } from "react";
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
import ReviewCard from '../../components/ReviewCard/ReviewCard';

export class RestaurantDetail extends Component {
  render() {
    return (
      <div className="bg-page">
        <Navbar />
        {/* Header */}
        <div className={style.Header}>
          <div className="container">
            <Row type="flex" align="middle">
              <Col span={24}>
                <div className="text-left">
                  <h2>Restaurant Name</h2>
                </div>
                <div className="text-right" style={{ lineHeight: "36px" }}>
                  <Icon type="heart" />
                </div>
              </Col>
              <Col span={24}>
                <Rate disabled defaultValue={3} className={style.StarCustom} />
                <span>
                  5.0 <small>(1k reviews)</small>
                </span>
              </Col>
              <Col span={24}>
                <p>$$$$ Japanese</p>
              </Col>
              <Col span={24}>
                <Tag color="green">open</Tag>
              </Col>
            </Row>
          </div>
        </div>
        {/* Slider */}
        <div>
          <Carousel style={{ width: 375, height: 210 }}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                alt=""
                style={{ width: 375, height: 210 }}
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                alt=""
                style={{ width: 375, height: 210 }}
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                alt=""
                style={{ width: 375, height: 210 }}
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt=""
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
                    <p>Japanese</p>
                  </Col>
                </Row>
                <Row className={style.StyleText}>
                  <Col span={2}>
                    <MdLocationOn />
                  </Col>
                  <Col span={22}>
                    <p>
                      257/1-3 Charoennakorn Road Anantara Bangkok Riverside,
                      Bangkok 10600 Thailand
                    </p>
                  </Col>
                </Row>
                <Row className={style.StyleText}>
                  <Col span={2}>
                    <MdLocalPhone />
                  </Col>
                  <Col span={22}>
                    <p>0847211814</p>
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
                    <Button block type="primary">
                      Write review
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <ReviewCard/>
        </div>
      </div>
    );
  }
}

export default RestaurantDetail;
