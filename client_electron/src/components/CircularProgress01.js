import React, { Component } from "react";

class CircularProgress01 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log("CircularProgress01.js rendering");
    // console.log("props", this.props);

    // Size of the enclosing square
    const sqSize = this.props.sqSize;
    // SVG centers the stroke width on the radius, subtract out so circle fits in square
    const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
    // Enclose cicle in a circumscribing square
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2;
    // Scale 100% coverage overlay with the actual percent
    const dashOffset = dashArray - (dashArray * this.props.percentage) / 100;

    return (
      <svg
        width={this.props.sqSize}
        height={this.props.sqSize}
        viewBox={viewBox}
      >
        <circle
          style={{ fill: "none", stroke: "#ddd" }}
          cx={this.props.sqSize / 2}
          cy={this.props.sqSize / 2}
          r={radius}
          strokeWidth={`${this.props.strokeWidth}px`}
        />
        <circle
          style={{
            fill: "none",
            stroke: "blue",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          cx={this.props.sqSize / 2}
          cy={this.props.sqSize / 2}
          r={radius}
          strokeWidth={`${this.props.strokeWidth}px`}
          // Start progress marker at 12 O'Clock
          transform={`rotate(-90 ${this.props.sqSize / 2} ${
            this.props.sqSize / 2
          })`}
        />
        <text x="50%" y="50%" dy=".3em" textAnchor="middle">
          {this.props.cprRestart === true && this.props.cprStop === false
            ? this.props.durationFunc(this.props.durationPressTime)
            : "00:00:00"}
          {/* {`${this.props.percentage}%`} */}
        </text>
      </svg>
    );
  }
}

CircularProgress01.defaultProps = {
  sqSize: 100,
  percentage: 25,
  strokeWidth: 5,
};

export default CircularProgress01;
