import React from "react";
import { Input, Col, Button, Icon, Form } from "antd";
import { FaUserCircle, FaPhone } from "react-icons/fa";

function MRegister(props) {
  const {onSwitchPage} = props

  return (
    <>
      <Col span={24} style={{height: 50}}>
        <Form.Item>
          <Input placeholder="Full name" prefix={<FaUserCircle style={{color: "#2eba69"}} />} />
        </Form.Item>
      </Col>
      <Col span={24} style={{height: 50}}>
        <Form.Item>
          <Input placeholder="Phone" prefix={<FaPhone style={{color: "#2eba69"}} />} />
        </Form.Item>
      </Col>
      <Col span={24} style={{height: 50}}>
        <Form.Item>
          <Input
            placeholder="Email Address or Username"
            prefix={<Icon type="mail" style={{color: "#2eba69"}} />}
          />
        </Form.Item>
      </Col>
      <Col span={24} style={{height: 50}}>
        <Form.Item>
          <Input.Password placeholder="Password" prefix={<Icon type="lock" style={{color: "#2eba69"}} />} />
        </Form.Item>
      </Col>
      <Col span={24} style={{marginTop: 25}}>
        <Button block type="primary">
          CREATE ACCOUNT
        </Button>
      </Col>
      {/* TODO: switch page when click login */}
      <Col span={24} style={{ textAlign: "center" }}>
        <p>Already have an account? <span onClick={onSwitchPage}>Login</span> </p>
      </Col>
    </>
  );
}

export default MRegister;
