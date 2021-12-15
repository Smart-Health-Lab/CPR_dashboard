import React, { Component } from "react";
import bodyImage from "../data/body.png";

// const backgroundImg = (
//   <img
//     src={bodyImage}
//     style={{
//       width: "28vw",
//       height: "50.6vh",
//       marginTop: 10,
//     }}
//   />
// );

class BodyImage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  bodyPointLegend = (name, pointColor) => {
    let border = null;
    if ((name === "ETI") | (name === "EGD")) {
      border = "2px solid";
    }
    return (
      <div style={{ display: "flex", marginBottom: 6 }}>
        <div
          style={{
            background: pointColor,
            width: "0.6vw",
            height: "0.8vh",
            borderRadius: "50%",
            border: border,
            borderBlockColor: "black",
          }}
        />
        <text
          style={{
            color: "white",
            fontSize: "1.0vw",
            marginTop: -11,
            marginLeft: 5,
          }}
        >
          {name}
        </text>
      </div>
    );
  };

  bodyPoint = (name, color, pointStatus, top, left) => {
    let border = null;
    if ((name === "ETI") | (name === "EGD")) {
      border = "2px solid";
    }
    return (
      <div
        style={{
          display: "flex",
          // alignItems: "center",
          position: "relative",
          top: top,
          left: left,
          visibility: pointStatus,
        }}
      >
        <div
          style={{
            background: color,
            width: "0.5vw",
            height: "0.7vh",
            borderRadius: "50%",
            borderColor: "#868686",
            border: border,
            borderBlockColor: "black",
          }}
        />
        {/* <text
          style={{
            color: "white",
            fontSize: "0.9vw",
            marginTop: -10,
            marginLeft: 5,
          }}
        >
          {name}
        </text> */}
      </div>
    );
  };

  render() {
    return (
      <div
        style={{
          // position: "absolute",
          width: "28vw",
          height: "50.6vh",
          marginTop: 10,
          backgroundImage: `url(${bodyImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <div>
            <text style={{ color: "white", fontSize: "1vw" }}>Right</text>
          </div>
          <div>
            <text style={{ color: "white", fontSize: "1vw" }}>Left</text>
          </div>
        </div>
        {/* 순서 : 위에서부터 차례대로 오른쪽 -> 왼쪽 */}
        {this.bodyPoint("IV", "#f5a623", "visible", 350, 400)}
        {this.bodyPoint("IV", "#f5a623", "visible", 335, 635)}
        {this.bodyPoint("IV", "#f5a623", "visible", 440, 375)}
        {this.bodyPoint("IV", "#f5a623", "visible", 425, 660)}
        {this.bodyPoint("IV", "#f5a623", "visible", 840, 470)}
        {this.bodyPoint("IV", "#f5a623", "visible", 825, 560)}
        {this.bodyPoint("IO", "#61A7C7", "visible", 120, 410)}
        {this.bodyPoint("IO", "#61A7C7", "visible", 105, 625)}
        {this.bodyPoint("IO", "#61A7C7", "visible", 630, 475)}
        {this.bodyPoint("IO", "#61A7C7", "visible", 615, 555)}
        {this.bodyPoint("C-line", "#A0A3FF", "visible", 0, 495)}
        {this.bodyPoint("C-line", "#A0A3FF", "visible", -15, 540)}
        {this.bodyPoint("C-line", "#A0A3FF", "visible", 15, 480)}
        {this.bodyPoint("C-line", "#A0A3FF", "visible", 0, 555)}
        {this.bodyPoint("C-line", "#A0A3FF", "visible", 280, 490)}
        {this.bodyPoint("C-line", "#A0A3FF", "visible", 265, 540)}
        {this.bodyPoint("A-line", "#F86161", "visible", 200, 385)}
        {this.bodyPoint("A-line", "#F86161", "visible", 185, 650)}
        {this.bodyPoint("A-line", "#F86161", "visible", 250, 490)}
        {this.bodyPoint("A-line", "#F86161", "visible", 235, 540)}
        {this.bodyPoint("ETI", "#FFFFFF", "visible", -180, 520)}
        {this.bodyPoint("EGD", "#FFFFFF", "visible", -195, 520)}
        {this.bodyPoint("Cricothyrotomy", "#868686", "visible", -180, 520)}
        {this.bodyPoint("Cricothyrotomy", "#868686", "visible", -170, 520)}

        <div style={{ position: "relative", top: 170 }}>
          {this.bodyPointLegend("IV", "#f5a623")}
          {this.bodyPointLegend("IO", "#61A7C7")}
          {this.bodyPointLegend("C-line", "#A0A3FF")}
          {this.bodyPointLegend("A-line", "#F86161")}
          {this.bodyPointLegend("ETI", "#FFFFFF")}
          {this.bodyPointLegend("EGD", "#FFFFFF")}
          {this.bodyPointLegend("Cricothyrotomy", "#868686")}
          {this.bodyPointLegend("Tracheostomy", "#868686")}
        </div>
      </div>
    );
  }
}

export default BodyImage;
