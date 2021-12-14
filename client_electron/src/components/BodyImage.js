import React, { Component } from "react";
import bodyImage from "../data/bodyImage.png";

class BodyImage extends Component {
  render() {
    return (
      <img
        src={bodyImage}
        style={{
          width: "28vw",
          height: "50.6vh",
          marginTop: 10,
        }}
      />
    );
  }
}

export default BodyImage;
