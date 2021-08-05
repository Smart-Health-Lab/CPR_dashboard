import React, { Component } from "react";
import Moment from "react-moment";
import CircularProgress01 from "./CircularProgress01";
import CircularProgress02 from "./CircularProgress02";

class Center extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cprStart: false,
      startTime: null,
      startTimeOrigin: null,
      cprStop: false,
      stopTimeOrigin: null,
      cprRestart: false,
      restartTimeOrigin: null,
      currentTime: "00:00:00",
      durationTime: 0,
      durationPressTime: 0,
      durationStopTime: 0,
      cumulativePressTime: 0,
      momentRendering: false,
    };
  }

  componentWillReceiveProps() {
    if (this.props.cprStop === true) {
      this.setState({
        cprStart: this.props.cprStart,
        startTime: this.props.startTime,
        startTimeOrigin: this.props.startTimeOrigin,
        cprStop: this.props.cprStop,
        stopTimeOrigin: this.props.stopTimeOrigin,
        cprRestart: this.props.cprRestart,
        restartTimeOrigin: this.props.restartTimeOrigin,
        durationPressTime: 0,
      });
    } else if (this.props.cprRestart === true) {
      this.setState({
        cprStart: this.props.cprStart,
        startTime: this.props.startTime,
        startTimeOrigin: this.props.startTimeOrigin,
        cprStop: this.props.cprStop,
        stopTimeOrigin: this.props.stopTimeOrigin,
        cprRestart: this.props.cprRestart,
        restartTimeOrigin: this.props.restartTimeOrigin,
        durationStopTime: 0,
      });
    } else {
      this.setState({
        cprStart: this.props.cprStart,
        startTime: this.props.startTime,
        startTimeOrigin: this.props.startTimeOrigin,
        cprStop: this.props.cprStop,
        stopTimeOrigin: this.props.stopTimeOrigin,
        cprRestart: this.props.cprRestart,
        restartTimeOrigin: this.props.restartTimeOrigin,
      });
    }
  }

  cumulativePressUpdate = () => {
    this.state.cumulativePressTime += 1;
  };

  circularPercentage01 = () => {
    if (
      (this.state.cprStop === false && this.state.cprStart === true) ||
      (this.state.cprStop === false && this.state.cprRestart === true)
    ) {
      let percentage =
        (Math.round((this.state.durationPressTime / 120) * 100) / 100) * 100;
      if (percentage < 100) {
        return String(percentage);
      } else {
        return "100";
      }
    } else {
      return "0";
    }
  };

  circularPercentage02 = () => {
    if (this.state.cprStop === true) {
      let percentage =
        (Math.round((this.state.durationStopTime / 10) * 100) / 100) * 100;
      if (percentage < 100) {
        return String(percentage);
      } else {
        return "100";
      }
    } else {
      return "0";
    }
  };

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

  render() {
    // console.log("Center.js rendering", this.state);
    // console.log(
    //   "---- cumulativePressTime -----",
    //   this.state.cumulativePressTime
    // );

    return (
      <>
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
              <div style={{ fontSize: 20 }}>지속 시간</div>
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
              <div style={{ fontSize: 20 }}>시작 시간</div>
              {this.state.cprStart === false ? (
                "00:00:00"
              ) : (
                <div style={{ fontSize: 15 }}>{this.props.startTime}</div>
              )}
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
              <div style={{ fontSize: 20 }}>현재 시간</div>
              <Moment
                interval={1000}
                style={{ fontSize: 15 }}
                format="HH:mm:ss"
                onChange={(time) => {
                  let curTime = new Date();
                  curTime = curTime.getTime();
                  if (this.state.cprRestart) {
                    this.setState({
                      currentTime: curTime,
                      durationTime: Math.round(
                        (curTime - this.state.startTimeOrigin) / 1000
                      ),
                      durationPressTime: Math.round(
                        (curTime - this.state.restartTimeOrigin) / 1000
                      ),
                      durationStopTime: Math.round(
                        (curTime - this.state.stopTimeOrigin) / 1000
                      ),
                      momentRendering: true,
                    });
                  } else {
                    this.setState({
                      currentTime: curTime,
                      durationTime: Math.round(
                        (curTime - this.state.startTimeOrigin) / 1000
                      ),
                      durationPressTime: Math.round(
                        (curTime - this.state.restartTimeOrigin) / 1000
                      ),
                      durationStopTime: Math.round(
                        (curTime - this.state.stopTimeOrigin) / 1000
                      ),
                    });
                  }
                }}
              />
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
            <div>CCFR</div>
            <div style={{ fontSize: 15, marginLeft: 10 }}>
              {this.state.cprStart
                ? `${Math.round(
                    (this.state.cumulativePressTime / this.state.durationTime) *
                      100
                  )} %`
                : null}
            </div>
          </div>
        </div>
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

              <CircularProgress01
                strokeWidth={"10"}
                sqSize={"150"}
                percentage={this.circularPercentage01()}
                durationFunc={this.durationFunc}
                cumulativePressUpdate={this.cumulativePressUpdate}
                momentRendering={this.state.momentRendering}
                cumulativeTimeFunc={this.cumulativeTimeFunc}
                cprStart={this.state.cprStart}
                startTimeOrigin={this.state.startTimeOrigin}
                cprStop={this.state.cprStop}
                stopTimeOrigin={this.state.stopTimeOrigin}
                cprRestart={this.state.cprRestart}
                restartTimeOrigin={this.state.restartTimeOrigin}
                durationTime={this.state.durationTime}
                durationPressTime={this.state.durationPressTime}
                durationStopTime={this.state.durationStopTime}
              />
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
              <CircularProgress02
                strokeWidth={"10"}
                sqSize={"150"}
                percentage={this.circularPercentage02()}
                durationFunc={this.durationFunc}
                cprStart={this.state.cprStart}
                startTimeOrigin={this.state.startTimeOrigin}
                cprStop={this.state.cprStop}
                stopTimeOrigin={this.state.stopTimeOrigin}
                cprRestart={this.state.cprRestart}
                restartTimeOrigin={this.state.restartTimeOrigin}
                durationTime={this.state.durationTime}
                durationPressTime={this.state.durationPressTime}
                durationStopTime={this.state.durationStopTime}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Center;
