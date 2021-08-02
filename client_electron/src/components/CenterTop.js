import React, { Component } from "react";
import { logData } from "../data/fakeData";
import Timer from "./Timer";

class CenterTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: null,
    };
  }

  componentDidUpdate() {
    // this.setState({ startTime: this.props.startTime });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "33vw",
          height: "50vh",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "35vh",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 5,
              width: "11vw",
              backgroundColor: "#DFECEE",
            }}
          >
            <div style={{ fontSize: 30 }}>지속 시간</div>
            <div style={{ fontSize: 30 }}>{this.props.startTime}</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 5,
              width: "11vw",
              backgroundColor: "#DFECEE",
            }}
          >
            <div style={{ fontSize: 30 }}>시작 시간</div>
            <div style={{ fontSize: 30 }}>{}</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "11vw",
              backgroundColor: "#DFECEE",
            }}
          >
            <div style={{ fontSize: 30 }}>현재 시간</div>
            <div style={{ fontSize: 30 }}>{}</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            height: "10vh",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5,
            backgroundColor: "#DFECEE",
          }}
        >
          <div>CCFR(가슴압박시간 총 합/지속시간)</div>
        </div>
      </div>
    );
  }
}

export default CenterTop;
