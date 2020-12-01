import React, { Component } from "react";
import circle from "../data/circle.png";

class ChildProcessIcon extends Component {
  render() {
    return (
      <div style={{ marginLeft: 10 }}>
        <img src={circle} style={{ width: 25, height: 25 }} />
      </div>
    );
  }
}

export default ChildProcessIcon;
