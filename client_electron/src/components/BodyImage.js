import React, { Component } from "react";
import bodyImage from "../data/screenShot.png";

class BodyImage extends Component {
  render() {
    return (
      <img
        src={bodyImage}
        style={{
          width: "33vw",
          height: "30vh",
          marginTop: 10,
        }}
      />
    );
  }
}

export default BodyImage;
