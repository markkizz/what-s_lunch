import React, { Component } from "react";
import { Row, Col, Icon, Button } from "antd";
import styled from "styled-components";
import style from "./Navbar.module.css";
import DropdownLocation from "../DropdownLocation/DropdownLocation";
import DropdownUser from "../DropdownUser/DropdownUser";
import ModalLogin from "../ModalLogin/ModalLogin";

const ButtonLocation = styled.button`
  display: flex;
  align-content: center;
  width: fit-content;
  background: transparent;
  color: black;
  font-size: 1em;
  margin: 0;
  padding: 0.25em 1em 0.25em 1em;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  outline: none !important;

  > span {
    > i {
      > svg {
        margin-right: 5px;
        margin-top: 5px;
      }
    }
  }
`;

export class Navbar extends Component {
  state = {
    dropdownLocation: false,
    dropdownUser: false,
    isSearch: true,
    mobileScreen: false,
    modalLoginVisible: false
  };

  handleShowModal = () => {
    this.setState(state => ({
      modalLoginVisible: !state.modalLoginVisible
    }));
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  };

  resize = () => {
    let isMobileScreen = window.innerWidth <= 767;
    if (isMobileScreen !== this.state.mobileScreen) {
      this.setState({ mobileScreen: isMobileScreen });
    }
  };

  render() {
    const {
      dropdownLocation,
      dropdownUser,
      isSearch,
      mobileScreen,
      modalLoginVisible
    } = this.state;
    console.log(mobileScreen);
    return (
      <>
        <nav>
          <Row type="flex" justify="space-between" align="middle">
            <Col span={2}>
              <img
                src={require("../../image/logo.png")}
                alt="what's lunch"
                className={style.LogoImg}
              />
            </Col>
            <Col span={4}>
              {isSearch && (
                <ButtonLocation>
                  <span style={{ color: "#2eba69" }}>
                    <Icon type="search" />
                  </span>
                  <span>Pathumwan</span>
                </ButtonLocation>
              )}
            </Col>
            <Col span={4}>
              {mobileScreen ? (
                <Icon type="user" />
              ) : (
                <Button type="primary" onClick={this.handleShowModal}>
                  Login
                </Button>
              )}
            </Col>
          </Row>
        </nav>
        {dropdownLocation && <DropdownLocation />}
        {dropdownUser && <DropdownUser />}
        <ModalLogin
          visibility={modalLoginVisible}
          onCancel={this.handleShowModal}
        />
      </>
    );
  }
}

export default Navbar;
