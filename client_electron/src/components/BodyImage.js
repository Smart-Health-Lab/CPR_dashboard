import React, { Component } from "react";
import bodyImage from "../data/screenShot.png";

class BodyImage extends Component {
  render() {
    return (
      <img
        src={bodyImage}
        style={{
          // width: window.innerWidth / 3,
          width: "33vw",
          // height: window.innerHeight / 2 - 85,
          height: "40vh",
          marginTop: 10,
        }}
      />
    );
  }
}

export default BodyImage;
