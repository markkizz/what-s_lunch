import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/actions";
import { createStructuredSelector } from "reselect";
import { selectUser } from "../../redux/selector/user.selector";
import { Icon, Button, Divider, Avatar, Col, Row } from "antd";
import style from "./DropdownUser.module.css";

export class DropdownSearch extends Component {
  handleLogout = () => {
    const { history, logout, onClickShow } = this.props;
    onClickShow();
    logout();
    history.push("/");
  };

  render() {
    const { role, username } = this.props.user;
    return (
      <div className={style.BgDropdown}>
        <div className={style.Container}>
          {role === "guest" ? (
            <Link to="/m.login">
              <Button block type="primary" size="large">
                LOGIN
              </Button>
            </Link>
          ) : (
            <p>
              <Avatar size="large" icon="user" />
              <span style={{ marginLeft: 8 }}>{username}</span>
            </p>
          )}
          <Divider />
          <div className={style.UserMenu}>
            <p className={style.MenuSelection}>
              <Icon type="user" style={{ marginRight: 10, marginLeft: 5 }} />
              profile
            </p>
          </div>
          <div className={style.UserMenu}>
            <p className={style.MenuSelection}>
              <Icon type="form" style={{ marginRight: 10, marginLeft: 5 }} />
              write post
            </p>
          </div>
          {role === "user" && (
            <div>
              <Row type="flex" justify="center">
                <Col className={style.BtnLogout}>
                  <Button block type="primary" onClick={this.handleLogout}>
                    Log out
                  </Button>
                </Col>
              </Row>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DropdownSearch)
);
