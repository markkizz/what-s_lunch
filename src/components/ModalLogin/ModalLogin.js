import React, { Component } from "react";
import { Row, Col, Modal } from "antd";
import style from "./ModalLogin.module.css";
import MLogin from "./MLogin/MLogin";
import MRegister from "./MRegister/MRegister";

export class ModalLogin extends Component {
  state = {
    isCreateAccount: false
  };

  handleSwitchPage = () => {
    this.setState(state => ({
      isCreateAccount: !(state.isCreateAccount)
    }));
  };

  render() {
    const { isCreateAccount } = this.state;
    const {visibility, onCancel} = this.props
    return (
      <>
        <Modal visible={visibility} onCancel={onCancel} footer={null} width={420} closable>
          <Row type="flex" justify="center" align="middle" gutter={[16, 16]}>
            <Col>
              <img
                src={require("../../image/logo.png")}
                className={style.ImgModal}
                alt="App logo"
              />
            </Col>

            {isCreateAccount ? (
              <MRegister onSwitchPage={this.handleSwitchPage} />
            ) : (
              <MLogin onSwitchPage={this.handleSwitchPage} />
            )}
          </Row>
        </Modal>
      </>
    );
  }
}

export default ModalLogin;
