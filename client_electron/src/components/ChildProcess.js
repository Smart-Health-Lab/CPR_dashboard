import React, { Component } from "react";
import ChildProcessIcon from "../components/ChildProcessIcon";

class ChildProcess extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          margin: 10,
          backgroundColor: "#DFECEE",
          padding: 10,
        }}
      >
        <div style={{ fontSize: `1vw` }}>{this.props.time}</div>
        <ChildProcessIcon />
        <div style={{ marginLeft: 10, fontSize: `1vw` }}>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default ChildProcess;
