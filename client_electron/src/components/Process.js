import React, { Component } from "react";
import ChildProcess from "./ChildProcess";

// let endPoint = "http://localhost:3002";
// let socket = io.connect(endPoint);

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processData: [],
    };
    this.scrollRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.scrollRef.current.scrollTop = this.scrollRef.current.scrollHeight;
  };

  render() {
    return (
      <div
        style={{
          // overflow -> scroll, hidden
          overflow: "auto",
          width: "33vw",
          height: "86vh",
          backgroundColor: "#292a2d",
          marginLeft: -21
        }}
        ref={this.scrollRef}
      >
        {this.props.processData.map((curr, idx, arr) => {
          return (
            <ChildProcess key={idx} time={curr.time} content={curr.content} />
          );
        })}
      </div>
    );
  }
}

export default Process;
