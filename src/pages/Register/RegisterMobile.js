import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../../config/api.service";
import { Row, Input, Col, Button, Icon, Form } from "antd";
import style from "./RegisterMobile.module.css";
import { FaUserCircle, FaPhone } from "react-icons/fa";

export class RegisterMobile extends Component {
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
              password: values.password,
              first_name: values.firstname,
              last_name: values.lastname,
              phone: values.phone
            };
            try {
              setTimeout(async () => {
                const result = await axios.post("/userRegistation", data);
                console.log(result.data.message);
                this.props.history.push("/");
                window.location.reload(true);
              }, 1000);
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
            <Form onSubmit={this.handleSubmit}>
              <Col span={24} className={style.InputH}>
                <Form.Item>
                  {getFieldDecorator("firstname", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your first name"
                      }
                    ]
                  })(
                    <Input
                      size="large"
                      placeholder="First name"
                      prefix={<FaUserCircle />}
                    />
                  )}
                </Form.Item>
              </Col>
              <Col span={24} className={style.InputH}>
                <Form.Item>
                  {getFieldDecorator("lastname", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your lastname name"
                      }
                    ]
                  })(
                    <Input
                      size="large"
                      placeholder="Last name"
                      prefix={<FaUserCircle />}
                    />
                  )}
                </Form.Item>
              </Col>
              <Col span={24} className={style.InputH}>
                <Form.Item>
                  {getFieldDecorator("phone", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your phone number"
                      }
                    ]
                  })(
                    <Input
                      size="large"
                      placeholder="Phone"
                      prefix={<FaPhone />}
                    />
                  )}
                </Form.Item>
              </Col>
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
                      size="large"
                      placeholder="Email Address or Username"
                      prefix={<Icon type="mail" />}
                    />
                  )}
                </Form.Item>
              </Col>
              <Col span={24} className={style.InputH}>
                <Form.Item>
                  {getFieldDecorator("password", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your password"
                      }
                    ]
                  })(<Input.Password size="large" placeholder="Password" />)}
                </Form.Item>
              </Col>
              <Col className={style.JustifyCenter} span={24}>
                <Form.Item>
                  <Button
                    htmlType="submit"
                    block
                    type="primary"
                    size="large"
                    style={{ marginTop: 10 }}
                    loading={this.state.isLoading}
                  >
                    CREATE AN ACCOUNT
                  </Button>
                </Form.Item>
              </Col>
            </Form>
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

const FormRegisterMobile = Form.create({ name: "register" })(RegisterMobile);

export default FormRegisterMobile;
