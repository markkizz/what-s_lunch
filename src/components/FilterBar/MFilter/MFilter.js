import React from "react";
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

function MFilter(props) {
  return (
    <>
      <Modal
        visible={props.visible}
        title={
          <Title level={3} style={{ margin: 0 }}>
            Filter
          </Title>
        }
        footer={null}
        width={320}
        closable
        onCancel={props.handleShow}
      >
        <Row>
          {/* Distict header */}
          <Col span={24}>
            <div className={`text-left ${style.TextHead}`}>Distict</div>
            <div className={`text-right text-muted`}>Clear Selection</div>
          </Col>
          {/* button selection */}
          <Col span={24}>
            <Row type="flex" align="middle" className={style.ButtonSelectC}>
              <Col>
                <ButtonSelect active>test</ButtonSelect>
              </Col>
              <Col>
                <ButtonSelect>test</ButtonSelect>
              </Col>
              <Col>
                <ButtonSelect>test</ButtonSelect>
              </Col>
              <Col>
                <ButtonSelect>test</ButtonSelect>
              </Col>
            </Row>
          </Col>
          <Divider />
          {/* Cuisine header */}
          <Col span={24}>
            <div className={`text-left ${style.TextHead}`}>Cuisine</div>
            <div className={`text-right text-muted`}>Clear Selection</div>
          </Col>
          {/* button selection */}
          <Col span={24}>
            <Row type="flex" align="middle" className={style.ButtonSelectC}>
              <Col>
                <ButtonSelect active>test</ButtonSelect>
              </Col>
              <Col>
                <ButtonSelect>test</ButtonSelect>
              </Col>
              <Col>
                <ButtonSelect>test</ButtonSelect>
              </Col>
              <Col>
                <ButtonSelect>testtesttesttest</ButtonSelect>
              </Col>
            </Row>
          </Col>
          <Divider />
          {/* Price header */}
          <Col span={24}>
            <div className={`text-left ${style.TextHead}`}>Price</div>
          </Col>
          {/* button selection */}
          <Col span={24}>
            <Row type="flex" align="middle" className={style.ButtonSelectC}>
              <Col span={24} style={{ width: "96%", marginBottom: "30px" }}>
                <Slider
                  range
                  marks={marks}
                  step={null}
                  defaultValue={[33, 66]}
                  tipFormatter={null}
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

export default MFilter;
