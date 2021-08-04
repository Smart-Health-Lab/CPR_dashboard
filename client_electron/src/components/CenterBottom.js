import React, { Component } from "react";

class CenterBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          width: "33vw",
          height: "40vh",
          marginTop: 40,
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "9vh",
              width: "33vw",
            }}
          >
            <div>
              <div>(image)</div>
            </div>
            <div>
              <div>Epinephrine</div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", height: "20vh", width: "33vw" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginRight: 5,
              height: "20vh",
              width: "16.5vw",
              backgroundColor: "#DFECEE",
            }}
          >
            <div>가슴압박 지속</div>
            <div>02:00</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              height: "20vh",
              width: "16.5vw",
              backgroundColor: "#DFECEE",
            }}
          >
            <div>가슴압박 중지</div>
            <div>00:00</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CenterBottom;
