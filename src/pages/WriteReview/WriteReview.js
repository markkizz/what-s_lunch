import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectRestaurantData } from "../../redux/selector/writeReview.selector";
import style from "./WriteReview.module.css";
import { Row, Col, Rate, Card, Divider, Button, Input } from "antd";
import Navbar from "../../components/Navbar/Navbar";

const { TextArea } = Input;

export class WriteReview extends Component {
  render() {
    return (
      <div className="bg-page">
        <Navbar />
        <div className="container">
          <Card className={style.CardCustom} bodyStyle={{ padding: 0 }}>
            <h2>Write review</h2>
            <Divider />
            <Row style={{ textAlign: "center" }}>
              <Col span={24}>
                <h3>Exellent</h3>
              </Col>
              <Col span={24}>
                <Rate defaultValue={5} className={style.StarRate} />
              </Col>
            </Row>
            <Row style={{ marginTop: 20 }}>
              <Col span={24} className={style.Margin}>
                <label for="title" className={style.LabelMargin}>
                  Title
                </label>
                <Input />
              </Col>
              <Col span={24} className={style.Margin}>
                <label for="description" className={style.LabelMargin}>
                  Review
                </label>
                <TextArea
                  // value={value}
                  // onChange={this.onChange}
                  style={{ resize: "none" }}
                  placeholder="Controlled autosize"
                  autoSize={{ minRows: 5, maxRows: 3 }}
                />
              </Col>
            </Row>
          </Card>
          <Row className={style.ButtonContainer}>
            <Col span={24}>
              <Button type="primary" className={style.StyleButton} size="large">
                Save
              </Button>
            </Col>
            <Col span={24}>
              <Button className={style.StyleButton} size="large">
                Cancel
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  restaurantData: selectRestaurantData
});

export default connect(mapStateToProps)(WriteReview);
