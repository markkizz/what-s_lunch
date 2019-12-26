import React from "react";
import { Row, Col, Avatar, Icon } from "antd";
import style from "./PostCard.module.css";

function PostCard() {
  return (
    <div className={style.PostContainer}>
      <div className={style.UserContainer}>
        <Row>
          <Col span={4} style={{ lineHeight: "50px" }}>
            <Avatar size="large" icon="user" />
          </Col>
          <Col span={16} style={{}}>
            <Row>
              <Col>
                <p>Mark</p>
              </Col>
              <Col>
                <p>23/2/19</p>
              </Col>
            </Row>
          </Col>
          <Col span={4} className={style.UserSetting}>
            <Icon type="search" />
          </Col>
        </Row>
      </div>
      <div className={style.ContentContainer}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          exercitationem ea rem magnam iure adipisci recusandae temporibus, id
          optio debitis omnis illum laudantium alias vitae atque ratione libero
          inventore ipsa!
        </p>
      </div>
      <div className={style.ImgContainer}>
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="food"
        />
      </div>
    </div>
  );
}

export default PostCard;
