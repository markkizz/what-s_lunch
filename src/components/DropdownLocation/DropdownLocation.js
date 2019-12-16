import React, { Component } from "react";
import { Row, Input, Col, Icon } from "antd";
import style from "./DropdownLocation.module.css";

export class DropdownLocation extends Component {
  state = {
    locations: [
      "Pathumwan",
      "Ratchathewi",
      "Bang Bon",
      "Bang Kapi",
      "Bang Phlat",
      "Prawets"
    ]
  };

  render() {
    const { locations } = this.state;
    return (
      <div className={style.BgDropdown}>
        <div className={style.Container}>
          <span className={style.JustifyCenter}>
            <Input
              prefix={<Icon type="search" />}
              className={style.InputCustom}
            />
          </span>
          {locations.map(location => (
            <div className={style.DropdownLocationCard}>
              <Row>
                <Col>
                  <span>{location}</span>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DropdownLocation;
