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
    this.myRef = React.createRef();
  }

  componentDidMount() {
    // console.log(this.myRef.current);
  }

  handleScroll = () => {
    window.scrollTo({
      bottom: this.myRef.current.scrollIntoView({ behavior: "smooth" }),
    });
  };

  render() {
    console.log(this.myRef.current);

    return (
      <div
        style={{ overflow: "scroll", height: this.state.browserHeight - 800 }}
        ref={this.myRef}
      >
        {logData.map((curr, idx, arr) => {
          return <ChildProcess time={curr.time} content={curr.content} />;
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
