import React, { Component } from "react";

class ChildProcess extends Component {
  render() {
    return (
      <div>
        <div>{this.props.time}</div>
        <div>{this.props.content}</div>
      </div>
    );
  }
}

export default ChildProcess;
