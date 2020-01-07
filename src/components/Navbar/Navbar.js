import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Icon, Button, Avatar } from "antd";
import { ButtonLocation } from "../../shared/Button.styled";
import style from "./Navbar.module.css";
import DropdownLocation from "../DropdownLocation/DropdownLocation";
import DropdownUser from "../DropdownUser/DropdownUser";
import ModalLogin from "../ModalLogin/ModalLogin";

export class Navbar extends Component {
  state = {
    dropdownLocation: false,
    dropdownUser: false,
    mobileScreen: false,
    modalLoginVisible: false
  };

  handleShow = label => () => {
    this.setState(state => ({
      [label]: !state[`${label}`]
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
      mobileScreen,
      modalLoginVisible
    } = this.state;
    const { isSearchPage, keyword } = this.props.search;
    console.log("isMobileScreen", mobileScreen);
    return (
      <>
        <nav>
          <div className="container">
            <Row type="flex" justify="space-between" align="middle">
              <Col span={2}>
                <Link to="/">
                  <img
                    src={require("../../image/logo.png")}
                    alt="what's lunch"
                    className={style.LogoImg}
                  />
                </Link>
              </Col>
              <Col span={4}>
                {isSearchPage && (
                  <ButtonLocation onClick={this.handleShow("dropdownLocation")}>
                    <span style={{ color: "#2eba69" }}>
                      <Icon type="search" />
                    </span>
                    <span>{keyword}</span>
                  </ButtonLocation>
                )}
              </Col>
              <Col span={4}>{this.renderDiffComponentWhenMobileScreen()}</Col>
            </Row>
          </div>
        </nav>
        {dropdownLocation && <DropdownLocation />}
        {dropdownUser && (
          <DropdownUser onClickShow={this.handleShow("dropdownUser")} />
        )}
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
    user: state.user,
    search: state.search
  };
};

export default connect(mapStateToProps, null)(Navbar);
