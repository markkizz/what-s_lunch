import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import axios from "../../config/api.service";
import { MdCancel } from "react-icons/md";
import { Row, Input, Col, Button, Divider, Icon, Form } from "antd";
import style from "./LoginMobile.module.css";

export class Login extends Component {
  render() {
    return (
      <div className={style.BgLogin}>
        <Row type="flex" justify="end">
          <Col>
            <Link to="/" style={{ color: "black" }}>
              <span className={style.CancelPosition}>
                <MdCancel style={{ fontSize: 20 }} />
              </span>
            </Link>
          </Col>
        </Row>
        <Row type="flex" justify="center" align="middle" gutter={[16, 16]}>
          <div className={style.ContainerLogin}>
            <Col span={24} style={{ textAlign: "center" }}>
              <h1>Login</h1>
            </Col>
            <Col span={24} className={style.InputH}>
              <Form.Item hasFeedback validateStatus={false && "error"}>
                <Input
                  prefix={<Icon type="user" style={{ color: "#2eba69" }} />}
                  size="large"
                  placeholder="Email Address/Username"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item hasFeedback validateStatus={false && "error"}>
                <Input.Password
                  size="large"
                  prefix={<Icon type="lock" style={{ color: "#2eba69" }} />}
                  placeholder="Password"
                />
              </Form.Item>
            </Col>
            <Col className={style.JustifyCenter}>
              <Button
                block
                type="primary"
                size="large"
                style={{ marginTop: 10 }}
              >
                LOGIN
              </Button>
            </Col>
            <Col>
              <Divider>
                <span>or you can</span>
              </Divider>
            </Col>
            <Link to="/m.register">
              <Col className={style.JustifyCenter}>
                <Button
                  block
                  size="large"
                  style={{ borderColor: "#2eba69", color: "#2eba69" }}
                >
                  CREATE AN ACCOUNT
                </Button>
              </Col>
            </Link>
          </div>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = {
  login: login
};

export default connect(null, mapDispatchToProps)(Login);
