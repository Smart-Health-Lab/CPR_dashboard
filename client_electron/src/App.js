import React, { Component } from "react";
import io, { Socket } from "socket.io-client";
import { Layout } from "antd";
import Clock from "react-live-clock";
import Moment from "react-moment";
import Process from "./components/Process";
import Information from "./components/Information";
import BodyImage from "./components/BodyImage";
import Center from "./components/Center";
import CenterBottom from "./components/CenterBottom";
import "./App.css";

const { Header, Content, Footer } = Layout;

let endPoint = "http://localhost:3002";
let socket = io.connect(endPoint);

// const electronId = "SHL";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      환자번호: null,
      이름: null,
      나이: null,
      성별: null,
      processData: [],
      cprStart: false,
      startTime: null,
      startTimeOrigin: null,
      cprStop: false,
      stopTime: null,
      stopTimeOrigin: null,
      cprRestart: false,
      restartTime: null,
      restartTimeOrigin: null,
      // startHours: null,
      // startMins: null,
      // startSeconds: null,
      // durationTime: null,
      // duraionTimePress: null,
      endTime: null,
      staticInfo: {},
    };
  }

  // 리셋함수 만들기 -> App.js 와 그 하위의 모든 컴포넌트들의 상태 리셋.

  addProcess = () => {
    socket.on("process", (obj) => {
      // console.log("시간 확인 ", obj);
      if (obj.content === "CPR 시작") {
        this.setState({
          startTime: obj.time,
          startTimeOrigin: obj.originalTime,
          cprStart: true,
        });
        // this.state.startTime = obj.time;
        // this.state.startTimeOrigin = obj.originalTime;
      } else if (obj.content === "가슴압박 중지") {
        this.setState({
          stopTime: obj.time,
          stopTimeOrigin: obj.originalTime,
          cprStop: true,
        });
      } else if (obj.content === "가슴압박 재시작") {
        this.setState({
          restartTime: obj.time,
          restartTimeOrigin: obj.originalTime,
          cprRestart: true,
        });
      }

      this.setState({
        processData: [...this.state.processData, obj],
        // startHours: obj.startHours,
        // startMins: obj.startMins,
        // startSecond: obj.startSeconds,
      });
    });
  };

  setStaticInfo = () => {
    socket.on("information", (obj) => {
      this.setState({
        staticInfo: { ...obj },
        환자번호: obj["환자번호"],
        이름: obj["이름"],
        나이: obj["나이"],
        성별: obj["성별"],
      });
    });
  };

  componentWillMount() {
    // socket.emit("roomjoin", electronId);
    this.addProcess();
    this.setStaticInfo();
  }

  render() {
    console.log("App.js 렌더링 ", this.state);

    return (
      <Layout style={{ height: "100%" }}>
        <Header
          style={{
            display: "flex",
            height: "7vh",
            width: "100vw",
            justifyContent: "space-between",
            backgroundColor: "#D5DFE1",
          }}
        >
          <div style={{ fontSize: 20 }}>
            {" "}
            {this.state["환자번호"]} / {this.state["이름"]} /{" "}
            {this.state["나이"]} / {this.state["성별"]}{" "}
          </div>
          <div style={{ fontSize: 20 }}>
            <Moment interval={1000} format="YYYY-MM-DD HH:mm:ss" />
            {/* <Clock /> */}
          </div>
          {/* <div style={{}}>2020.11.27 15:04:03</div> */}
        </Header>
        <Content style={{ backgroundColor: "white", height: "87vh" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{ display: "flex", flexDirection: "column", margin: 10 }}
            >
              <Information staticInfo={this.state.staticInfo} />
              <BodyImage />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", margin: 10 }}
            >
              <Center
                startTime={this.state.startTime}
                // startHours={this.state.startHours}
                // startMins={this.state.startMins}
                // startSeconds={this.state.startSeconds}
                cprStart={this.state.cprStart}
                startTimeOrigin={this.state.startTimeOrigin}
                cprStop={this.state.cprStop}
                stopTimeOrigin={this.state.stopTimeOrigin}
                cprRestart={this.state.cprRestart}
                restartTimeOrigin={this.state.restartTimeOrigin}
              />
              {/* <CenterBottom /> */}
            </div>
            <Process processData={this.state.processData} />
          </div>
        </Content>
        <Footer
          style={{
            display: "flex",
            justifyContent: "center",
            height: "7vh",
            width: "100vw",
            textAlign: "center",
            backgroundColor: "#D5DFE1",
          }}
        >
          <div>SHL ©2020</div>
        </Footer>
      </Layout>
    );
  }
}

export default App;
