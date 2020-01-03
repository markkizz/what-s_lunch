import React, { Component } from "react";
import { connect } from "react-redux";
import { thunk_action_restaurant } from "../../redux/actions/actions";
import style from "./FilterBar.module.css";
import { Row, Col, Icon, Button, Dropdown, Menu } from "antd";
import { FaSlidersH } from "react-icons/fa";
import ModalFilter from "./MFilter/MFilter";

const menu = (
  <Menu>
    <Menu.Item key="1">
      <Icon type="user" />
      1st menu item
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user" />
      3rd item
    </Menu.Item>
  </Menu>
);

export class FilterBar extends Component {
  state = {
    modalVisible: false
  };

  handleShow = () => {
    this.setState(state => ({
      modalVisible: !state.modalVisible
    }));
  };

  componentDidMount = () => {
    this.props.dispatch(thunk_action_restaurant());
  };

  render() {
    const { modalVisible } = this.state;
    const { restaurantName } = this.props.restaurant;
    console.log(restaurantName);
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
            <Button
              type="primary"
              className={style.ButtonCustom}
              onClick={this.handleShow}
            >
              <FaSlidersH />
            </Button>
          </Col>
          <Col className={style.ColCustom}>
            <Button type="primary" className={style.ButtonCustom}>
              Popular
            </Button>
          </Col>
          <Col className={style.ColCustom}>
            <Dropdown overlay={menu}>
              <Button type="primary" className={style.ButtonCustom}>
                <p>
                  Cuisine
                  <Icon type="down" style={{ fontSize: 10, marginLeft: 5 }} />
                </p>
              </Button>
            </Dropdown>
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
        <ModalFilter visible={modalVisible} handleShow={this.handleShow} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  restaurant: state.restaurant
});

export default connect(mapStateToProps)(FilterBar);
