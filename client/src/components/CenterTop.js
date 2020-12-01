import React, { Component } from "react";
import { logData } from "../data/fakeData";

class CenterTop extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          width: window.innerWidth / 3,
          height: window.innerHeight / 2 - 100,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

            width: window.innerWidth / 3 / 2,
            backgroundColor: "#DFECEE",
          }}
        >
          <div style={{ fontSize: 30 }}>시작 시간</div>
          <div style={{ fontSize: 30 }}>{logData[0].time}</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: window.innerWidth / 3 / 2,
            backgroundColor: "#DFECEE",
          }}
        >
          <div style={{ fontSize: 30 }}>지속 시간</div>
          <div style={{ fontSize: 30 }}>{logData[0].time}</div>
        </div>
      </div>
    );
  }
}

export default CenterTop;
