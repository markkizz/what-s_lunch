import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Row, Input, Col, Icon, Button } from "antd";
import style from "./DropdownLocation.module.css";

export class DropdownLocation extends Component {
  state = {
    locations: [],
    keyword: ""
  };

  handleChangeKeyword = ({ target: { value } }) => {
    this.setState(state => ({
      keyword: value
    }));
  };

  handleClickSearch = () => {
    const { keyword } = this.state;
    if (keyword) {
      this.props.history.push(`/search?q=${keyword}`);
      window.location.reload(true);
    }
  };

  componentDidMount = () => {
    const { restaurantName, cuisine, district } = this.props.restaurant;
    const locations = [...restaurantName, ...cuisine, ...district];
    this.setState(state => ({
      locations
    }));
  };

  render() {
    const { locations, keyword } = this.state;
    return (
      <div className={style.BgDropdown}>
        <div className={style.Container}>
          <span className={style.JustifyCenter}>
            <Input
              prefix={<Icon type="search" />}
              className={style.InputCustom}
              onChange={this.handleChangeKeyword}
              value={keyword}
            />
          </span>
          <div className={style.ContainerLocation}>
            {locations
              .filter(location => (keyword ? location.includes(keyword) : true))
              .map((location, i) => (
                <div key={i + location} className={style.DropdownLocationCard}>
                  <Row>
                    <Col>
                      <span>{location}</span>
                    </Col>
                  </Row>
                </div>
              ))}
          </div>
        </div>
        <Row type="flex" justify="center" align="middle">
          <Col span={24} style={{ padding: "0 10px" }}>
            <Button
              type="primary"
              block
              size="large"
              onClick={this.handleClickSearch}
              disabled={keyword ? false : true}
            >
              Search
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  restaurant: state.restaurant
});

export default withRouter(connect(mapStateToProps)(DropdownLocation));
