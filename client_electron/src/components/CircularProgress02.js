import React, { Component } from "react";
import CustomTimer from "./CustomTimer";

class CircularProgress02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   cprStart: false,
      //   startTimeOrigin: null,
      //   cprStop: false,
      //   stopTimeOrigin: null,
      //   cprRestart: false,
      //   restartTimeOrigin: null,
      //   durationTime: null,
      //   durationPressTime: null,
      //   durationStopTime: null,
    };
  }

  //   componentWillReceiveProps() {
  //     this.setState({
  //       cprStart: this.props.cprStart,
  //       startTimeOrigin: this.props.startTimeOrigin,
  //       cprStop: this.props.cprStop,
  //       stopTimeOrigin: this.props.stopTimeOrigin,
  //       cprRestart: this.props.cprRestart,
  //       restartTimeOrigin: this.props.restartTimeOrigin,
  //       durationTime: this.props.durationTime,
  //       durationPressTime: this.props.durationPressTime,
  //       durationStopTime: this.props.durationStopTime,
  //     });
  //   }

  //   durationFunc = (durationTime) => {
  //     if (this.state.cprStart && durationTime < 60) {
  //       return durationTime > 10
  //         ? `00:00:${durationTime}`
  //         : `00:00:0${durationTime}`;
  //     } else if (
  //       this.state.cprStart &&
  //       durationTime >= 60 &&
  //       durationTime < 3600
  //     ) {
  //       let seconds = durationTime % 60;
  //       let mins = (durationTime - seconds) / 60;

  //       return mins > 10
  //         ? seconds > 10
  //           ? `00:${mins}:${seconds}`
  //           : `00:${mins}:0${seconds}`
  //         : seconds > 10
  //         ? `00:0${mins}:${seconds}`
  //         : `00:0${mins}:0${seconds}`;
  //     } else if (
  //       this.state.cprStart &&
  //       durationTime >= 3600 &&
  //       durationTime < 86400
  //     ) {
  //       let seconds = durationTime % 60;
  //       let preMins = Math.floor(durationTime / 60);
  //       let mins = preMins % 60;
  //       let hours = Math.floor(mins / 60);

  //       return hours > 10
  //         ? mins > 10
  //           ? seconds > 10
  //             ? `${hours}:${mins}:${seconds}`
  //             : `${hours}:${mins}:0${seconds}`
  //           : seconds > 10
  //           ? `${hours}:0${mins}:${seconds}`
  //           : `${hours}:0${mins}:0${seconds}`
  //         : mins > 10
  //         ? seconds > 10
  //           ? `0${hours}:${mins}:${seconds}`
  //           : `0${hours}:${mins}:0${seconds}`
  //         : seconds > 10
  //         ? `0${hours}:0${mins}:${seconds}`
  //         : `0${hours}:0${mins}:0${seconds}`;
  //     }
  //   };

  render() {
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
          {this.props.cprStart
            ? this.props.durationFunc(this.props.durationTime)
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
