import React, { Component } from "react";

class ChildProcess extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          margin: 10,
          backgroundColor: "#DFECEE",
          width: "30vw",
          padding: 10,
        }}
      >
        <div>{this.props.time}</div>
        <div style={{ marginLeft: 10 }}>{"O"}</div>
        <div style={{ marginLeft: 10 }}>{this.props.content}</div>
      </div>
    );
  }
}

export default ChildProcess;
