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
  }
  render() {
    // console.log(window.innerHeight);

    return (
      <List
        itemLayout="horizontal"
        style={{ height: this.state.browserHeight - 200, overflowY: "scroll" }}
        dataSource={logData}
        renderItem={(item) => (
          <List.Item>
            <ChildProcess time={item.time} content={item.content} />
          </List.Item>
        )}
      />
    );
  }
}

export default Process;
