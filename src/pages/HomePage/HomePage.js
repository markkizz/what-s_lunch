import React, { Component } from "react";
import {
  Row,
  Col,
  Rate,
  Icon,
  Card,
  Divider,
  Button,
  Input,
  Select
} from "antd";
import Navbar from "../../components/Navbar/Navbar";
import style from "./HomePage.module.css";

const { Option } = Select;

export class HomePage extends Component {
  render() {
    const options = ['a', 'b', 'c']
    return (
      <div className="bg-page">
        <Navbar />
        <div className={style.ImgSearch}>
          <div className="container">
            <Row type="flex" align="middle" className={style.InputPosition}>
              <Col xs={24} sm={8} className={style.FlexCenter}>
                {/* <Input className={style.InputStyle} />
                <Input className={style.InputStyle} /> */}
                <Select
                  showSearch
                  // value={this.state.value}
                  // placeholder={this.props.placeholder}
                  // style={this.props.style}
                  // defaultActiveFirstOption={false}
                  // showArrow={false}
                  // filterOption={false}
                  // onSearch={this.handleSearch}
                  // onChange={this.handleChange}
                  // notFoundContent={null}
                >
                  {options}
                </Select>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
