import React, { Component } from "react";
import { Icon, Button, Divider } from "antd";
import style from "./DropdownUser.module.css";

export class DropdownSearch extends Component {
  render() {
    return (
      <div className={style.BgDropdown}>
        <div className={style.Container}>
          <Button block type="primary" size="large">
            LOGIN
          </Button>
          <Divider />
          <div className={style.UserMenu}>
            <p className={style.MenuSelection}>
              <Icon type="form" style={{marginRight: 10, marginLeft: 5}} />
              write post
            </p>
          </div>
          <div className={style.UserMenu}>
            <p className={style.MenuSelection}>
              <Icon type="schedule" style={{marginRight: 10, marginLeft: 5}} />
              Booking
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DropdownSearch;
