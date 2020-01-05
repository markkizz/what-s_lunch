import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Icon, Button, Divider, Avatar } from "antd";
import style from "./DropdownUser.module.css";

export class DropdownSearch extends Component {
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
              <Icon type="form" style={{ marginRight: 10, marginLeft: 5 }} />
              write post
            </p>
          </div>
          <div className={style.UserMenu}>
            <p className={style.MenuSelection}>
              <Icon
                type="schedule"
                style={{ marginRight: 10, marginLeft: 5 }}
              />
              Booking
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, null)(DropdownSearch);
