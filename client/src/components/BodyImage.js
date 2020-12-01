import React, { Component } from "react";
import bodyImage from "../data/screenShot.png";

class BodyImage extends Component {
  render() {
    return (
      <img
        src={bodyImage}
        style={{ width: "30vw", height: "30vw", marginTop: 40 }}
      />
    );
  }
}

export default BodyImage;
