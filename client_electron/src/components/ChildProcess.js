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
          backgroundColor: "#37393c",
          padding: 10,
          // boxShadow: shadowValues,
        }}
      >
        <div style={{ marginLeft: 10 ,color: "white", fontSize: `1.2vw`, fontWeight: 500 }}>
          {this.props.time}
        </div>
        <ChildProcessIcon content={this.props.content} />
        <div style={{ color: "white", marginLeft: 10, fontSize: `1.2vw` }}>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default ChildProcess;
