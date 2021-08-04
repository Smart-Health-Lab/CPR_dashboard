import React, { Component } from "react";
import { logData } from "../data/fakeData";
import Moment from "react-moment";
import moment from "moment";
import TimerMachine from "react-timer-machine";
import Clock from "react-live-clock";
import Timer from "react-compound-timer";
import SampleCode from "./SampleCode";
import CenterBottom from "./CenterBottom";

class Center extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cprStart: false,
      startTime: null,
      // startHours: null,
      // startMins: null,
      // startSeconds: null,
      startTimeOrigin: null,
      cprStop: false,
      stoptimeOrigin: null,
      cprRestart: false,
      restartTimeOrigin: null,
      currentTime: "00:00:00",
      durationTime: null,
      durationTimePress: null,
      durationTimeStop: null,
    };
  }

  componentDidUpdate() {
    // this.setState({ startTime: this.props.startTime });
  }

  componentWillReceiveProps() {
    this.setState({
      cprStart: this.props.cprStart,
      startTime: this.props.startTime,
      startTimeOrigin: this.props.startTimeOrigin,
      // startHours: this.props.startHours,
      // startMins: this.props.startMins,
      // startSeconds: this.props.startSeconds,
      cprStop: this.props.cprStop,
      stoptimeOrigin: this.props.stoptimeOrigin,
      cprRestart: this.props.cprRestart,
      restartTimeOrigin: this.props.restartTimeOrigin,
    });
  }

  durationFunc = (durationTime) => {
    if (this.state.cprStart && durationTime < 60) {
      return durationTime > 10
        ? `00:00:${durationTime}`
        : `00:00:0${durationTime}`;
    } else if (
      this.state.cprStart &&
      durationTime >= 60 &&
      durationTime < 3600
    ) {
      let seconds = durationTime % 60;
      let mins = (durationTime - seconds) / 60;

      return mins > 10
        ? seconds > 10
          ? `00:${mins}:${seconds}`
          : `00:${mins}:0${seconds}`
        : seconds > 10
        ? `00:0${mins}:${seconds}`
        : `00:0${mins}:0${seconds}`;
    } else if (
      this.state.cprStart &&
      durationTime >= 3600 &&
      durationTime < 86400
    ) {
      let seconds = durationTime % 60;
      let preMins = Math.floor(durationTime / 60);
      let mins = preMins % 60;
      let hours = Math.floor(mins / 60);

      return hours > 10
        ? mins > 10
          ? seconds > 10
            ? `${hours}:${mins}:${seconds}`
            : `${hours}:${mins}:0${seconds}`
          : seconds > 10
          ? `${hours}:0${mins}:${seconds}`
          : `${hours}:0${mins}:0${seconds}`
        : mins > 10
        ? seconds > 10
          ? `0${hours}:${mins}:${seconds}`
          : `0${hours}:${mins}:0${seconds}`
        : seconds > 10
        ? `0${hours}:0${mins}:${seconds}`
        : `0${hours}:0${mins}:0${seconds}`;
    }
  };
  // durationFunc = (start, resume, pause, stop, reset, timerState) => {};

  render() {
    console.log("CenterTop.js rendering", this.state);
    // console.log(this.state.startTimeOrigin);
    // console.log(this.state.startTime, this.state.currentTime);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "33vw",
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
            <div style={{ fontSize: 15 }}>
              {this.state.cprStart
                ? this.durationFunc(this.state.durationTime)
                : "00:00:00"}
            </div>
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
            {this.state.cprStart === false ? (
              "00:00:00"
            ) : (
              <div style={{ fontSize: 15 }}>{this.props.startTime}</div>
            )}

            {/* <SampleCode /> */}
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
            <Moment
              interval={1000}
              style={{ fontSize: 15 }}
              format="HH:mm:ss"
              onChange={(time) => {
                let curTime = new Date();
                // console.log(
                //   Math.round(
                //     (curTime.getTime() - this.state.startTimeOrigin) / 1000
                //   )
                // );
                this.setState({
                  currentTime: String(time),
                  durationTime: Math.round(
                    (curTime.getTime() - this.state.startTimeOrigin) / 1000
                  ),
                });

                // console.log(a);
              }}
            />
            <div style={{ fontSize: 15 }}>{}</div>
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
          <div style={{ fontSize: 15 }}>{}</div>
        </div>
        <CenterBottom
          cprStart={this.state.cprStart}
          cprRestart={this.state.cprRestart}
        />
      </div>
    );
  }
}

export default Center;
