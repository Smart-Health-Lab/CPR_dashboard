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
          // width: window.innerWidth / 3,
          width: "33vw",
          // height: window.innerHeight / 2 - 90,
          height: "45vh",
          marginTop: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            height: "9vh",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#DFECEE",
          }}
        >
          <div>CCFR(가슴압박시간 총 합/지속시간)</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "9vh",
          }}
        >
          <div>
            <div></div>
            <div>가슴압박 지속</div>
          </div>
          <div>
            <div></div>
            <div>가슴압박 중지</div>
          </div>
          <div>
            <div></div>
            <div>Epinephrine</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "20vh",
            backgroundColor: "#DFECEE",
          }}
        >
          <div>가슴압박 지속</div>
          <div>02:00</div>
        </div>
      </div>
    );
  }
}

export default CenterBottom;
