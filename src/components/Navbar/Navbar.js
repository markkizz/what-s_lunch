import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Icon, Button, Avatar } from "antd";
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

  handleShow = component => () => {
    this.setState(state => ({
      [component]: !state[`${component}`]
    }));
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  };

  resize = () => {
    let isMobileScreen = window.innerWidth <= 767;
    if (isMobileScreen !== this.state.mobileScreen) {
      this.setState({
        mobileScreen: isMobileScreen,
        dropdownUser: false,
        dropdownLocation: false
      });
    }
  };

  renderDiffComponentWhenMobileScreen = () => {
    const { mobileScreen } = this.state;
    const { role } = this.props.user;
    if (mobileScreen) {
      if (role === "user") {
        return <Avatar onClick={this.handleShow("dropdownUser")}>USER</Avatar>;
      } else {
        return <Icon type="user" onClick={this.handleShow("dropdownUser")} />;
      }
    } else {
      return (
        <Button type="primary" onClick={this.handleShow("modalLoginVisible")}>
          Login
        </Button>
      );
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
    console.log("isMobileScreen", mobileScreen);
    return (
      <>
        <nav>
          <div className="container">
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
              <Col span={4}>{this.renderDiffComponentWhenMobileScreen()}</Col>
            </Row>
          </div>
        </nav>
        {dropdownLocation && <DropdownLocation />}
        {dropdownUser && <DropdownUser />}
        <ModalLogin
          visibility={modalLoginVisible}
          onCancel={this.handleShow("modalLoginVisible")}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, null)(Navbar);
