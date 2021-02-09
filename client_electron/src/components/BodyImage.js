import React, { Component } from "react";
import bodyImage from "../data/screenShot.png";

class BodyImage extends Component {
  render() {
    return (
      <img
        src={bodyImage}
        style={{
          width: "25vw",
          width: window.innerWidth / 3,
          height: window.innerHeight / 2 - 100,
          marginTop: 40,
        }}
      />
    );
  }
}

export default BodyImage;
