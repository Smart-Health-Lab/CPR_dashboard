import React, { Component } from "react";

class CircularProgress02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strokeColor: "#0857ff",
    };
  }

  componentWillReceiveProps = () => {
    if (
      this.props.durationStopTime > 6 &&
      this.props.durationStopTime < 10000
    ) {
      this.setState({
        strokeColor: "#f41a2a",
      });
    } else {
      this.setState({
        strokeColor: "#0857ff",
      });
    }
  };

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
        width={`${this.props.sqSize}vw`}
        height={`${this.props.sqSize}vh`}
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
            stroke: this.state.strokeColor,
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
        <text
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
          style={{ fontSize: `1vw` }}
        >
          {this.props.cprStop === true && this.props.cprRestart === false
            ? this.props.durationFunc(
                this.props.cprStart,
                this.props.durationStopTime
              )
            : "00:00:00"}
          {/* {`${this.props.percentage}%`} */}
        </text>
      </svg>
    );
  }
}

CircularProgress02.defaultProps = {
  sqSize: 100,
  percentage: 25,
  strokeWidth: 5,
};

export default CircularProgress02;
