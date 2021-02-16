import React, { Component } from "react";

class CenterBottom extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: window.innerWidth / 3,
          height: window.innerHeight / 2 - 90,
        }}
      >
        <div>CenterBottom component</div>
      </div>
    );
  }
}

export default CenterBottom;
