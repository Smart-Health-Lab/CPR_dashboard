import React, { Component } from "react";
import { List } from "antd";
import ChildProcess from "./ChildProcess";
import { logData } from "../data/fakeData";

class Process extends Component {
  render() {
    return (
      <List
        itemLayout="horizontal"
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
