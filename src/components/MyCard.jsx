import React, { Component } from "react";
import { Card } from "react-bootstrap/";

export default class MyCard extends Component {
  state = {
    cardMountedTime: 0,
  };

  // Lifecycle method: componentDidMount
  componentDidMount() {
    // Set up an interval to update cardMountedTime every second
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        cardMountedTime: prevState.cardMountedTime + 1,
      }));
    }, 1000);
  }

  // Lifecycle method: componentWillUnmount
  componentWillUnmount() {
    // Clear the interval to avoid memory leaks
    clearInterval(this.intervalId);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.props.person;

    return (
      <Card className="bg-dark text-white" style={{ width: "45rem" }}>
        <Card.Img src={imgSrc} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{fullName}</Card.Title>
          <Card.Text>{profession}</Card.Text>
          <Card.Text style={{ width: "60%" }}>{bio}</Card.Text>
        </Card.ImgOverlay>
        <Card.Text style={{ textAlign: "center" }}>
          Time since card mount: {this.state.cardMountedTime} seconds
        </Card.Text>
      </Card>
    );
  }
}
