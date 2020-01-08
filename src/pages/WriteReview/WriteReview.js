import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectRestaurantData } from "../../redux/selector/writeReview.selector";
import axios from "../../config/api.service";
import style from "./WriteReview.module.css";
import {
  Row,
  Col,
  Rate,
  Card,
  Divider,
  Button,
  Input,
  notification
} from "antd";
import Navbar from "../../components/Navbar/Navbar";

const { TextArea } = Input;

export class WriteReview extends Component {
  state = {
    restaurantId: "",
    restaurantName: "",
    title: "",
    content: "",
    rating: 5,
    titleRating: "Exellent"
  };

  componentDidMount = () => {
    const { restaurantData } = this.props;
    const JsonData = JSON.parse(localStorage.getItem("store")).writeReview
      .restaurantData;
    let restaurantId, restaurantName;
    if (
      Object.entries(JsonData).length === 0 &&
      JsonData.constructor === Object
    ) {
      restaurantId = restaurantData.id;
      restaurantName = restaurantData.name;
    }
    restaurantId = JsonData.id;
    restaurantName = JsonData.name;

    this.setState(() => ({
      restaurantId,
      restaurantName
    }));
  };

  handleChange = label => ({ target: { value } }) => {
    this.setState(() => ({
      [label]: value
    }));
  };

  handleChangeRating = value => {
    let titleRating = "";
    if (value >= 4) titleRating = "Exellent";
    else if (value >= 2.5 && value < 4) titleRating = "Good";
    else titleRating = "Poor";
    this.setState(state => ({
      rating: value,
      titleRating
    }));
  };

  openNotification = type => {
    const successWord = "Create review successful";
    const errorWord = "Error cannot create review";
    const description = type === "success" ? successWord : errorWord;
    const notifyConfig = {
      message: "Successful Create Review",
      description,
      duration: 1.5
    };
    notification[type](notifyConfig);
  };

  handleCreateReview = async () => {
    const { restaurantId, restaurantName, title, content, rating } = this.state;
    const { history } = this.props;
    const data = {
      title,
      content,
      rating
    };
    try {
      axios.post(`/review-create/${restaurantId}`, data);
      this.openNotification("success");
      setTimeout(() => {
        history.push(`/restaurant-detail/${restaurantName}/${restaurantId}`);
      }, 1100);
    } catch (err) {
      console.error(err);
      this.openNotification("err");
      setTimeout(() => {
        window.location.reload(true);
      }, 1100);
    }
  };

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
                <h3>{this.state.titleRating}</h3>
              </Col>
              <Col span={24}>
                <Rate
                  allowHalf
                  defaultValue={5}
                  className={style.StarRate}
                  onChange={this.handleChangeRating}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: 20 }}>
              <Col span={24} className={style.Margin}>
                <label for="title" className={style.LabelMargin}>
                  Title
                </label>
                <Input onChange={this.handleChange("title")} />
              </Col>
              <Col span={24} className={style.Margin}>
                <label for="description" className={style.LabelMargin}>
                  Review
                </label>
                <TextArea
                  onChange={this.handleChange("content")}
                  style={{ resize: "none" }}
                  autoSize={{ minRows: 5, maxRows: 3 }}
                />
              </Col>
            </Row>
          </Card>
          <Row className={style.ButtonContainer}>
            <Col span={24}>
              <Button
                type="primary"
                className={style.StyleButton}
                size="large"
                onClick={this.handleCreateReview}
              >
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
