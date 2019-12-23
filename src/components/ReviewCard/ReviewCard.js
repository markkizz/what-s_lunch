import React from "react";
import style from "./Review.module.css";
import { Row, Col, Card, Rate, Icon } from "antd";

// TODO: send props with review data

function ReviewCard() {
  return (
    <>
      <Card className={style.CardCustom} bodyStyle={{ padding: 0 }}>
        <Row>
          <Col span={24}>
            <Row>
              <Col span={4}>
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  alt=""
                  className={style.ImgReviewer}
                />
              </Col>
              <Col span={16}>
                <span>mark</span>
                <br />
                <span>Bkk, Thailand</span>
              </Col>
              <Col span={4} style={{textAlign: "right"}}>
                <p><Icon type="heart" /></p>
                <p>2k</p>
              </Col>
            </Row>
          </Col>
          <Col span={24} className={style.MarginStar}>
            <Rate disabled defaultValue={5} className={style.StarRate} />
          </Col>
          <Col span={24}>
            <h3>This is Title</h3>
          </Col>
          <Col span={24}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam dolores tempore exercitationem illo dignissimos est modi officia ex quo ullam dolore nostrum quibusdam quia possimus, corporis quasi mollitia fugiat.</p>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default ReviewCard;
