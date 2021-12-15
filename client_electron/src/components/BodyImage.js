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
    return (
      <div style={{ display: "flex", marginBottom: 6 }}>
        <div
          style={{
            background: pointColor,
            width: "0.6vw",
            height: "0.8vh",
            borderRadius: "50%",
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
        {this.bodyPoint("IV", "#f5a623", "visible", 230, 195)}
        {this.bodyPoint("IV", "#f5a623", "visible", 220, 340)}
        {this.bodyPoint("IV", "#f5a623", "visible", 290, 180)}
        {this.bodyPoint("IV", "#f5a623", "visible", 280, 355)}
        {this.bodyPoint("IV", "#f5a623", "visible", 520, 240)}
        {this.bodyPoint("IV", "#f5a623", "visible", 510, 290)}
        {this.bodyPoint("IO", "#61A7C7", "visible", 85, 200)}
        {this.bodyPoint("IO", "#61A7C7", "visible", 75, 335)}
        {this.bodyPoint("IO", "#61A7C7", "visible", 380, 240)}
        {this.bodyPoint("IO", "#61A7C7", "visible", 370, 295)}
        {this.bodyPoint("C-line", "#A0A3FF", "visible", 10, 255)}
        {this.bodyPoint("C-line", "#A0A3FF", "visible", 1, 280)}
        {this.bodyPoint("C-line", "#A0A3FF", "visible", 15, 245)}
        {this.bodyPoint("C-line", "#A0A3FF", "visible", 6, 290)}
        {this.bodyPoint("C-line", "#A0A3FF", "visible", 180, 245)}
        {this.bodyPoint("C-line", "#A0A3FF", "visible", 170, 290)}
        {this.bodyPoint("A-line", "#F86161", "visible", 140, 185)}
        {this.bodyPoint("A-line", "#F86161", "visible", 130, 350)}
        {this.bodyPoint("A-line", "#F86161", "visible", 155, 245)}
        {this.bodyPoint("A-line", "#F86161", "visible", 145, 290)}
        {this.bodyPoint("ETI", "blue", "visible", -105, 268)}
        {this.bodyPoint("EGD", "blue", "visible", -115, 268)}
        {this.bodyPoint("Cricothyrotomy", "#868686", "visible", -105, 268)}
        {this.bodyPoint("Cricothyrotomy", "#868686", "visible", -103, 268)}

        <div style={{ position: "relative", top: 170 }}>
          {this.bodyPointLegend("IV", "#f5a623")}
          {this.bodyPointLegend("IO", "#61A7C7")}
          {this.bodyPointLegend("C-line", "#A0A3FF")}
          {this.bodyPointLegend("A-line", "#F86161")}
          {this.bodyPointLegend("ETI", "blue")}
          {this.bodyPointLegend("EGD", "blue")}
          {this.bodyPointLegend("Cricothyrotomy", "#868686")}
          {this.bodyPointLegend("Tracheostomy", "#868686")}
        </div>
      </div>
    );
  }
}

export default BodyImage;
