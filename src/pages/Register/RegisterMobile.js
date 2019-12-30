import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Input, Col, Button, Icon, Form } from "antd";
import style from "./RegisterMobile.module.css";
import { FaUserCircle, FaPhone } from "react-icons/fa";

export class RegisterMobile extends Component {
  state = {};

  render() {
    return (
      <div className={style.BgRegis}>
        <Row type="flex" justify="end">
          <Col>
            <span className={style.CancelPosition}>
              <Icon type="close" style={{ fontSize: 18 }} />
            </span>
          </Col>
        </Row>
        <Row type="flex" justify="center" align="middle" gutter={[16, 16]}>
          <div className={style.ContainerRegis}>
            <Col span={24} style={{ textAlign: "center" }}>
              <h1>Create Account</h1>
            </Col>
            <Col span={24} className={style.InputH}>
              <Form.Item>
                <Input
                  size="large"
                  placeholder="First name"
                  prefix={<FaUserCircle />}
                />
              </Form.Item>
            </Col>
            <Col span={24} className={style.InputH}>
              <Form.Item>
                <Input
                  size="large"
                  placeholder="Last name"
                  prefix={<FaUserCircle />}
                />
              </Form.Item>
            </Col>
            <Col span={24} className={style.InputH}>
              <Form.Item>
                <Input size="large" placeholder="Phone" prefix={<FaPhone />} />
              </Form.Item>
            </Col>
            <Col span={24} className={style.InputH}>
              <Form.Item>
                <Input
                  size="large"
                  placeholder="Email Address or Username"
                  prefix={<Icon type="mail" />}
                />
              </Form.Item>
            </Col>
            <Col span={24} className={style.InputH}>
              <Form.Item>
                <Input.Password size="large" placeholder="Password" />
              </Form.Item>
            </Col>
            <Col className={style.JustifyCenter}>
              <Button
                block
                type="primary"
                size="large"
                style={{ marginTop: 10 }}
              >
                CREATE ACCOUNT
              </Button>
            </Col>
            <Col span={24} style={{ textAlign: "center" }}>
              <p>
                Already have an account? <Link to="/m.login">Login</Link>
              </p>
            </Col>
          </div>
        </Row>
      </div>
    );
  }
}

export default RegisterMobile;
