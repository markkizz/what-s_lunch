import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Row, Col, Modal, Typography, Divider, Slider, Button } from "antd";
import style from "./MFilter.module.css";
import styled from "styled-components";

const ButtonSelect = styled.button`
  display: flex;
  align-content: center;
  width: fit-content;
  background: ${props => (props.active ? "none" : "#e9ebee")} transparent;
  color: ${props => (props.active ? "#2eba69" : "rgba(0, 0, 0, 0.3)")};
  font-size: 17px;
  margin: 0 8px 0 0;
  padding: 0.25em 1.25em;
  border: ${props =>
    props.active ? "2px solid #2eba69" : "1px solid #e9ebee"};
  border-radius: 8px;
  outline: none !important;
  &:hover {
    cursor: pointer;
  }
`;

const { Title } = Typography;
const marks = {
  0: "$",
  33: "$$",
  66: "$$$",
  100: "$$$$"
};

/**
 * @param `/search/filter?cuisine=keyword1,keyword2,..?district=keyword1,keyword2,... &price_range=from&price_range=to`
 * cuisine = [key1, key2 ,key3, ...]
 * district = [key1, key2 ,key3, ...]
 * price range = [$$, $$$$]
 */

export class MFilter extends Component {
  state = {
    districtSelected: [],
    cuisineSelected: [],
    priceRange: []
  };

  selectItem = (component, targetName) => {
    this.setState(state => ({
      [component]: [...state[component], targetName]
    }));
  };

  deSelectItem = (component, targetName) => {
    this.setState(state => ({
      [component]: state[component].filter(name => name !== targetName)
    }));
  };

  handleSliderChange = arrValue => {
    const arrValueParse = arrValue.map(v => marks[v]);
    this.setState(state => ({
      priceRange: arrValueParse
    }));
  };

  render() {
    const { cuisine, district } = this.props.restaurant;
    const { visible, handleShow } = this.props;
    const { districtSelected, cuisineSelected } = this.state;
    return (
      <>
        <Modal
          visible={visible}
          title={
            <Title level={3} style={{ margin: 0 }}>
              Filter
            </Title>
          }
          footer={null}
          width={320}
          closable
          onCancel={handleShow}
        >
          <Row>
            <Col span={24}>
              <div className={`text-left ${style.TextHead}`}>Distict</div>
              <div className={`text-right text-muted`}>Clear Selection</div>
            </Col>
            <Col span={24}>
              <Row type="flex" align="middle" className={style.ButtonSelectC}>
                {district.map((name, i) => (
                  <Col key={i + name}>
                    <ButtonSelect
                      active={districtSelected.includes(name)}
                      onClick={() =>
                        districtSelected.includes(name)
                          ? this.deSelectItem("districtSelected", name)
                          : this.selectItem("districtSelected", name)
                      }
                    >
                      {name}
                    </ButtonSelect>
                  </Col>
                ))}
              </Row>
            </Col>
            <Divider />
            <Col span={24}>
              <div className={`text-left ${style.TextHead}`}>Cuisine</div>
              <div className={`text-right text-muted`}>Clear Selection</div>
            </Col>
            <Col span={24}>
              <Row type="flex" align="middle" className={style.ButtonSelectC}>
                {cuisine.map((name, i) => (
                  <Col key={i + name}>
                    <ButtonSelect
                      active={cuisineSelected.includes(name)}
                      onClick={() =>
                        cuisineSelected.includes(name)
                          ? this.deSelectItem("cuisineSelected", name)
                          : this.selectItem("cuisineSelected", name)
                      }
                    >
                      {name}
                    </ButtonSelect>
                  </Col>
                ))}
              </Row>
            </Col>
            <Divider />
            <Col span={24}>
              <div className={`text-left ${style.TextHead}`}>Price</div>
            </Col>
            <Col span={24}>
              <Row type="flex" align="middle" className={style.ButtonSelectC}>
                <Col span={24} style={{ width: "96%", marginBottom: "30px" }}>
                  <Slider
                    range
                    marks={marks}
                    step={null}
                    defaultValue={[33, 66]}
                    tipFormatter={null}
                    onChange={this.handleSliderChange}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Button block size="large" type="primary">
                Apply
              </Button>
            </Col>
            <Col span={24}>
              <Button
                block
                size="large"
                className="btn-primary-transparent"
                style={{ marginTop: 15 }}
              >
                cancel
              </Button>
            </Col>
          </Row>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => ({
  restaurant: state.restaurant
});

export default withRouter(connect(mapStateToProps)(MFilter));
