import React, { Component } from "react";
import bodyImage from "../data/bodyImage.png";

class BodyImage extends Component {
  render() {
    return (
      <img
        src={bodyImage}
        style={{
          width: "26vw",
          height: "48vh",
          marginTop: 10,
        }}
      />
    );
  }
}

export default BodyImage;
