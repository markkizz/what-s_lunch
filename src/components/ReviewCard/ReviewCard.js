import React from "react";
import style from "./Review.module.css";
import { Row, Col, Card, Rate, Icon } from "antd";

// TODO: send props with review data

function ReviewCard(props) {
  const { user, title, content, rating, user_like } = props.reviewData;
  return (
    <>
      <Card className={style.CardCustom} bodyStyle={{ padding: 0 }}>
        <Row>
          <Col span={24}>
            <Row>
              <Col span={4}>
                <img
                  src={user.profile_img_url}
                  alt=""
                  className={style.ImgReviewer}
                />
              </Col>
              <Col span={16}>
                <span>{`${user.first_name} ${user.last_name}`}</span>
                <br />
                <span>Bkk, Thailand</span>
              </Col>
              <Col span={4} style={{ textAlign: "right" }}>
                <p>
                  <Icon type="heart" />
                </p>
                <p>{user_like}</p>
              </Col>
            </Row>
          </Col>
          <Col span={24} className={style.MarginStar}>
            <Rate
              allowHalf
              disabled
              defaultValue={rating}
              className={style.StarRate}
            />
          </Col>
          <Col span={24}>
            <h3>{title}</h3>
          </Col>
          <Col span={24}>
            <p>{content}</p>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default ReviewCard;
