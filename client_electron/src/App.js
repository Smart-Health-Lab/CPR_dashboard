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
      Rt_IV_팔: "hidden",
      Lt_IV_팔: "hidden",
      Rt_IV_손: "hidden",
      Lt_IV_손: "hidden",
      Rt_IV_발: "hidden",
      Lt_IV_발: "hidden",
      Rt_IO_어깨: "hidden",
      Lt_IO_어깨: "hidden",
      Rt_IO_다리: "hidden",
      Lt_IO_다리: "hidden",
      Rt_IJ: "hidden",
      Lt_IJ: "hidden",
      Rt_SC: "hidden",
      Lt_SC: "hidden",
      Rt_FV: "hidden",
      Lt_FV: "hidden",
      Rt_RA: "hidden",
      Lt_RA: "hidden",
      Rt_FA: "hidden",
      Lt_FA: "hidden",
      ETI: "hidden",
      EGD: "hidden",
      Tracheostomy: "hidden",
      Cricothyrotomy: "hidden",
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
      } else if (obj.content.includes("Epinephrine")) {
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
          // deadTime: curTime,
          // modalVisible: true,
        });
      } else if (obj.content.includes("Rt")){
        let contentArr = obj.content.split(".")
        if (contentArr[1] === "IV") {
          if (contentArr[2] === "팔"){
            this.setState({ Rt_IV_팔: "visible" })
          } else if (contentArr[2] === "손"){
            this.setState({ Rt_IV_손: "visible" })
          } else if (contentArr[2] === "발"){
            this.setState({ Rt_IV_발: "visible" })
          }
        } else if (contentArr[1] === "IO"){
          if (contentArr[2] === "다리"){
            this.setState({ Rt_IO_다리: "visible" })
          } else {
            this.setState({ Rt_IO_어깨: "visible" })
          }
        } else if (contentArr[1] === "IJ"){
          this.setState({ Rt_IJ: "visible" })
        } else if (contentArr[1] === "SC") {
          this.setState({ Rt_SC: "visible" })
        } else if (contentArr[1] === "FV") {
          this.setState({ Rt_FV: "visible" })
        } else if (contentArr[1] === "RA") {
          this.setState({ Rt_RA: "visible" })
        } else if (contentArr[1] === "FA") {
          this.setState({ Rt_FA: "visible" })
        }

      } else if (obj.content.includes("Lt")){
        let contentArr = obj.content.split(".")
        if (contentArr[1] === "IV") {
          if (contentArr[2] === "팔"){
            this.setState({ Lt_IV_팔: "visible" })
          } else if (contentArr[2] === "손"){
            this.setState({ Lt_IV_손: "visible" })
          } else if (contentArr[2] === "발"){
            this.setState({ Lt_IV_발: "visible" })
          }
        } else if (contentArr[1] === "IO"){
          if (contentArr[2] === "다리"){
            this.setState({ Lt_IO_다리: "visible" })
          } else {
            this.setState({ Lt_IO_어깨: "visible" })
          }
        } else if (contentArr[1] === "IJ"){
          this.setState({ Lt_IJ: "visible" })
        } else if (contentArr[1] === "SC") {
          this.setState({ Lt_SC: "visible" })
        } else if (contentArr[1] === "FV") {
          this.setState({ Lt_FV: "visible" })
        } else if (contentArr[1] === "RA") {
          this.setState({ Lt_RA: "visible" })
        } else if (contentArr[1] === "FA") {
          this.setState({ Lt_FA: "visible" })
        }

      } else if (obj.content.includes("Intubation")){
        this.setState({ ETI: "visible" })
      } else if (obj.content.includes("EGD")){
        this.setState({ EGD: "visible" })
      } else if (obj.content.includes("Crico")){
        this.setState({ Cricothyrotomy: "visible" })
      } else if (obj.content.includes("Tracheo")){
        this.setState({ Tracheostomy: "visible" })
      }

      if (obj.content === "delete" || obj.content === "correct"){
        this.setState({
          processData: obj.list
        })
      } else {
        this.setState({
          processData: [...this.state.processData, obj],
        });
      }

      if (obj.content === "end") {
        this.refreshPage()
      }
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

  refreshPage = () => {
    window.location.reload(false);
  };

  componentWillMount() {
    // socket.emit("roomjoin", electronId);
    this.addProcess();
    this.setStaticInfo();
  }

  render() {
    // console.log("App.js 렌더링 ", this.state);

    return (
      <Layout style={{ height: "100vh", width: "100vw" }}>
        <Header
          style={{
            display: "flex",
            height: "5.5vh",
            // width: "100vw",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#292a2d",
            borderBottom: "solid grey",
          }}
        >
          <div style={{ fontSize: `1vw`, color: "#b0b5c0" }}>
            {" "}
            {this.state["환자번호"]} / {this.state["이름"]} /{" "}
            {this.state["나이"]} / {this.state["성별"]}{" "}
          </div>
          {/* <Button onClick={this.refreshPage}>Refresh</Button> */}
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
          title="ROSC"
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
        <Content style={{ backgroundColor: "#292a2d", height: "84.5vh" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{ display: "flex", flexDirection: "column", margin: 10 }}
            >
              <Information staticInfo={this.state.staticInfo} />
              <BodyImage
                Rt_IV_팔={this.state.Rt_IV_팔}
                Lt_IV_팔={this.state.Lt_IV_팔}
                Rt_IV_손={this.state.Rt_IV_손}
                Lt_IV_손={this.state.Lt_IV_손}
                Rt_IV_발={this.state.Rt_IV_발}
                Lt_IV_발={this.state.Lt_IV_발}
                Rt_IO_어깨={this.state.Rt_IO_어깨}
                Lt_IO_어깨={this.state.Lt_IO_어깨}
                Rt_IO_다리={this.state.Rt_IO_다리}
                Lt_IO_다리={this.state.Lt_IO_다리}
                Rt_IJ={this.state.Rt_IJ}
                Lt_IJ={this.state.Lt_IJ}
                Rt_SC={this.state.Rt_SC}
                Lt_SC={this.state.Lt_SC}
                Rt_FV={this.state.Rt_FV}
                Lt_FV={this.state.Lt_FV}
                Rt_RA={this.state.Rt_RA}
                Lt_RA={this.state.Lt_RA}
                Rt_FA={this.state.Rt_FA}
                Lt_FA={this.state.Lt_FA}
                ETI={this.state.ETI}
                EGD={this.state.EGD}
                Tracheostomy={this.state.Tracheostomy}
                Cricothyrotomy={this.state.Cricothyrotomy}
              />
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
            height: "10vh",
            // width: "100vw",
            textAlign: "center",
            backgroundColor: "#292a2d",
            borderTop: "solid grey",
          }}
        >
          <div style={{ fontSize: "1vw", color: "#eef1f5" }}>SHL ©2021</div>
        </Footer>
      </Layout>
    );
  }
}

export default App;
