import React, { Component } from "react";
import { List } from "antd";
import ChildProcess from "./ChildProcess";
import { logData } from "../data/fakeData";

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {
      browserHeight: window.innerHeight,
    };
    this.scrollRef = React.createRef();
  }

  componentDidMount() {
    // console.log(this.myRef.current.offsetTop);
    // console.log(this.myRef.current.offsetHeight);
    // window.scrollTo(this.myRef.current.offsetHeight, 0);
    // this.myRef.current.scrollIntoView();
    this.scrollToBottom();
    console.log(this.scrollRef.current.scrollTop);
    console.log(this.scrollRef.current.scrollHeight);
  }

  scrollToBottom = () => {
    this.scrollRef.current.scrollTop = this.scrollRef.current.scrollHeight;
  };

  render() {
    return (
      <div
        style={{ overflow: "scroll", height: this.state.browserHeight - 200 }}
        ref={this.scrollRef}
      >
        {logData.map((curr, idx, arr) => {
          return (
            <ChildProcess key={idx} time={curr.time} content={curr.content} />
          );
        })}
      </div>

      // <List
      //   itemLayout="horizontal"
      //   ref={this.myRef}
      //   style={{ height: this.state.browserHeight - 200, overflowY: "scroll" }}
      //   dataSource={logData}
      //   renderItem={(item) => (
      //     <List.Item>
      //       <ChildProcess time={item.time} content={item.content} />
      //     </List.Item>
      //   )}
      // />
    );
  }
}

export default Process;
