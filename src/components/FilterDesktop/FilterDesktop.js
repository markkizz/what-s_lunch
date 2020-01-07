import React from "react";
import style from "./FilterDesktop.module.css";
import { Row, Col, Divider } from "antd";
import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";

const optionList = ["test1", "test2", "test3", "test3", "test3", "test3"];

function FilterDesktop() {
  return (
    <div className={style.FilterContainer}>
      <Row>
        <Col span={24}>
          <h2>Location</h2>
          <CheckboxGroup options={optionList} />
          <Divider className={style.DividerCustom} />
        </Col>
        <Col span={24}>
          <h2>Cuisine</h2>
          <CheckboxGroup options={optionList} />
          <Divider className={style.DividerCustom} />
        </Col>
        <Col span={24}>
          <h2>Price</h2>
          <CheckboxGroup options={optionList} />
          <Divider className={style.DividerCustom} />
        </Col>
      </Row>
    </div>
  );
}

export default FilterDesktop;
