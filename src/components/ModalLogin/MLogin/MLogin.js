import React from "react";
import { Col, Icon, Button, Form, Input, Divider} from "antd";
import style from './MLogin.module.css'

function MLogin(props) {
  const {onSwitchPage} = props

  return (
    <>
      <Col span={24} className={style.ContainerModal}>
        <Form.Item hasFeedback validateStatus={false && "error"}>
          <Input
            prefix={<Icon type="user" style={{ color: "#2eba69" }} />}
            placeholder="Email Address/Username"
          />
        </Form.Item>
      </Col>
      <Col span={24} className={style.ContainerModal}>
        <Form.Item hasFeedback validateStatus={false && "error"}>
          <Input.Password
            prefix={<Icon type="lock" style={{ color: "#2eba69" }} />}
            placeholder="Password"
          />
        </Form.Item>
      </Col>
      <Col span={24} className={style.ContainerButton}>
        <Button block type="primary">
          LOGIN
        </Button>
      </Col>
      <Col span={24}>
        <Divider>
          <span>or you can</span>
        </Divider>
      </Col>
      <Col span={24}>
        <Button block style={{ borderColor: "#2eba69", color: "#2eba69" }} onClick={onSwitchPage} >
          CREATE AN ACCOUNT
        </Button>
      </Col>
    </>
  );
}

export default MLogin;
