import React, { Component } from "react";
import io, { Socket } from "socket.io-client";
import { Layout, Modal, Button } from "antd";
import Moment from "react-moment";
import Countdown, { formatTimeDelta } from "react-countdown";
import Process from "./components/Process";
import Information from "./components/Information";
import BodyImage from "./components/BodyImage";
import Center from "./components/Center";
import "./App.css";

const { Header, Content, Footer } = Layout;

let endPoint = "http://localhost:3002";
let socket = io.connect(endPoint);

// const electronId = "SHL";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      loading: false,
      환자번호: null,
      이름: null,
      나이: null,
      성별: null,
      processData: [],
      initialStart: true,
      cprStart: false,
      startTime: null,
      startTimeOrigin: null,
      cprStop: false,
      // stopTime: null,
      stopTimeOrigin: null,
      cprRestart: false,
      // restartTime: null,
      restartTimeOrigin: null,
      epinephrine: false,
      epinephrineTimeOrigin: null,
      endTime: null,
      staticInfo: {},
      isAlive: true,
      deadTime: null,
      isROSC: false,
    };
  }

  // 리셋함수 만들기 -> App.js 와 그 하위의 모든 컴포넌트들의 상태 리셋.

  // resetAllState = () => {
  //   return new Promise((resolve, reject) => {
  //     window.location.reload();
  //     // console.log(1);
  //     resolve(true);
  //   });
  // };

  // resetAndsetState = async (obj) => {
  //   let result = await this.resetAllState();
  //   return result;
  // };

  addProcess = () => {
    socket.on("process", (obj) => {
      if (obj.content === "CPR 시작") {
        this.setState({
          startTime: obj.time,
          startTimeOrigin: obj.originalTime,
          restartTimeOrigin: obj.originalTime,
          initialStart: true,
          cprStart: true,
          cprRestart: true,
        });
      } else if (obj.content === "가슴압박 중지") {
        this.setState({
          // stopTime: obj.time,
          stopTimeOrigin: obj.originalTime,
          initialStart: false,
          cprStop: true,
          cprRestart: false,
        });
      } else if (obj.content === "가슴압박 재시작") {
        this.setState({
          // restartTime: obj.time,
          restartTimeOrigin: obj.originalTime,
          initialStart: false,
          cprRestart: true,
          cprStop: false,
        });
      } else if (obj.content === "Epinephrine") {
        this.setState({
          // epinephrineTime: obj.time,
          epinephrineTimeOrigin: obj.originalTime,
          epinephrine: true,
        });
      } else if (obj.content === "사망") {
        let curTime = new Date();
        curTime = curTime.getTime();
        this.setState({
          isAlive: false,
          deadTime: curTime,
        });
        // this.resetAllState();
      } else if (obj.content === "ROSC") {
        let curTime = new Date();
        curTime = curTime.getTime();
        this.setState({
          isROSC: true,
          deadTime: curTime,
          modalVisible: true,
        });
      }

      this.setState({
        processData: [...this.state.processData, obj],
      });
    });
  };

  changeAppState = (key, val) => {
    this.setState({ [key]: val });
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
    // console.log("App.js 렌더링 ", this.state);

    return (
      <Layout style={{ height: "100%" }}>
        <Header
          style={{
            display: "flex",
            height: "5.5vh",
            // width: "100vw",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#292a2d",
          }}
        >
          <div style={{ fontSize: `1vw`, color: "#b0b5c0" }}>
            {" "}
            {this.state["환자번호"]} / {this.state["이름"]} /{" "}
            {this.state["나이"]} / {this.state["성별"]}{" "}
          </div>
          <div style={{ fontSize: `1vw` }}>
            <Moment
              style={{ color: "#b0b5c0" }}
              interval={1000}
              format="YYYY-MM-DD HH:mm:ss"
            />
          </div>
        </Header>
        <Modal
          visible={this.state.modalVisible}
          title="ROSC triggered"
          date={"HH:MM:SS"}
          onOk={null}
          onCancel={null}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
          centered
        >
          <div style={{ marginLeft: 180 }}>
            <Countdown date={Date.now() + 10000 * 6 * 20} zeroPadTime={2}>
              <text>20분이 지났습니다</text>
            </Countdown>
          </div>
        </Modal>
        <Content style={{ backgroundColor: "#292a2d", height: "87vh" }}>
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
                initialStart={this.state.initialStart}
                startTime={this.state.startTime}
                cprStart={this.state.cprStart}
                startTimeOrigin={this.state.startTimeOrigin}
                cprStop={this.state.cprStop}
                stopTimeOrigin={this.state.stopTimeOrigin}
                cprRestart={this.state.cprRestart}
                restartTimeOrigin={this.state.restartTimeOrigin}
                epinephrine={this.state.epinephrine}
                epinephrineTimeOrigin={this.state.epinephrineTimeOrigin}
                isAlive={this.state.isAlive}
                deadTime={this.state.deadTime}
                isROSC={this.state.isROSC}
              />
            </div>
            <Process processData={this.state.processData} />
          </div>
        </Content>
        <Footer
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "6vh",
            // width: "100vw",
            textAlign: "center",
            backgroundColor: "#292a2d",
          }}
        >
          <div style={{ fontSize: "1vw", color: "#eef1f5" }}>SHL ©2021</div>
        </Footer>
      </Layout>
    );
  }
}

export default App;
