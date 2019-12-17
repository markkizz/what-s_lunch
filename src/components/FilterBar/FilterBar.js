import React, { Component } from "react";
import style from "./FilterBar.module.css";
import { Row, Col, Icon, Button } from "antd";
import { FaSlidersH } from "react-icons/fa";
import ModalFilter from './MFilter/MFilter'

export class FilterBar extends Component {
  render() {
    return (
      <>
        <Row
          className={style.ContainerFilter}
          type="flex"
          align="middle"
          style={{ padding: "0 10px", margin: 0 }}
          gutter={[16]}
        >
          <Col className={style.ColCustom}>
            <Button type="primary" className={style.ButtonCustom}>
              <FaSlidersH />
            </Button>
          </Col>
          <Col className={style.ColCustom}>
            <Button type="primary" className={style.ButtonCustom}>
              Popular
            </Button>
          </Col>
          <Col className={style.ColCustom}>
            <Button type="primary" className={style.ButtonCustom}>
              <p>
                Cuisine
                <Icon type="down" style={{fontSize: 10, marginLeft: 5 }} />
              </p>
            </Button>
          </Col>
          <Col className={style.ColCustom}>
            <Button type="primary" className={style.ButtonCustom}>
              Buffet
            </Button>
          </Col>
          <Col className={style.ColCustom}>
            <Button type="primary" className={style.ButtonCustom}>
              Low price
            </Button>
          </Col>
          <Col className={style.ColCustom}>
            <Button type="primary" className={style.ButtonCustom}>
              Open now
            </Button>
          </Col>
        </Row>
        <ModalFilter/>
      </>
    );
  }
}

export default FilterBar;
