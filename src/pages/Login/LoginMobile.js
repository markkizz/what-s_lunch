import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "../../config/api.service";
import { MdCancel } from "react-icons/md";
import { Row, Input, Col, Button, Divider, Icon, Form } from "antd";
import style from "./LoginMobile.module.css";

export class Login extends Component {
  state = {
    isLoading: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.setState(
          state => ({
            isLoading: !state.isLoading
          }),
          () => {
            const data = {
              username: values.username,
              password: values.password
            };
            try {
              setTimeout(async () => {
                const result = await axios.post("/userLogin", data);
                const token = result.data.token;
                const user = jwtDecode(token);
                console.log("user", user);
                this.props.login(user, token);
                this.props.history.push("/");
                window.location.reload(true);
              }, 500);
            } catch (err) {
              console.log(err);
              this.props.form.resetFields();
            }
          }
        );
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isLoading } = this.state;
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
            <Form onSubmit={this.handleSubmit}>
              <Col span={24} className={style.InputH}>
                <Form.Item>
                  {getFieldDecorator("username", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your username"
                      }
                    ]
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: "#2eba69" }} />}
                      size="large"
                      placeholder="Email Address/Username"
                    />
                  )}
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item>
                  {getFieldDecorator("password", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your password"
                      }
                    ]
                  })(
                    <Input.Password
                      size="large"
                      prefix={<Icon type="lock" style={{ color: "#2eba69" }} />}
                      placeholder="Password"
                    />
                  )}
                </Form.Item>
              </Col>
              <Col className={style.JustifyCenter}>
                <Button
                  loading={isLoading}
                  htmlType="submit"
                  block
                  type="primary"
                  size="large"
                  style={{ marginTop: 10 }}
                >
                  LOGIN
                </Button>
              </Col>
            </Form>
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

const LoginFormMobile = Form.create({ name: "login" })(Login);

export default connect(null, mapDispatchToProps)(LoginFormMobile);
