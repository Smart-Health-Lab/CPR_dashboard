import React, { Component } from "react";
import ChildProcessIcon from "../components/ChildProcessIcon";

const shadowValues = "1px 3px 1px gray";

class ChildProcess extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          margin: 10,
          backgroundColor: "#DFECEE",
          padding: 10,
          boxShadow: shadowValues,
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
