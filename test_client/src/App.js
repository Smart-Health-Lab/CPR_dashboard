import { Component } from "react";
import io, { Socket } from "socket.io-client";
import { Input, Button } from "antd";
import "./App.css";

// let endPoint = "http://localhost:3002";
// let socket = io.connect(endPoint);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "병원 전 초기 심전도 리듬": null,
      "심정지 발생 시간": null,
      "119 도착시간": null,
      witnessed: null,
      bystanderCPR: null,
      "발생 장소": null,
      Airway: null,
      "병원 도착 후 심전도 리듬": null,
      "재세동 ": null,
      process: null,
    };
  }

  // informationEmit = () => {
  //   socket.emit("information", this.state);
  // };
  // processEmit = (msg) => {
  //   Socket.emit("process", { process: msg });
  // };

  render() {
    console.log(this.state);

    return (
      <div>
        <div style={{ margin: 20, fontSize: 20 }}>
          CPR dashboard socket test
        </div>
        <div style={{}}>
          <div style={{ margin: 20, fontSize: 15 }}>static information</div>
          <div style={{}}>
            <div style={{ display: "flex", margin: 10 }}>
              <Input
                placeholder="병원 전 초기 심전도 리듬"
                style={{ width: "20vw", height: "5.9vh" }}
                onChange={(text) => {
                  this.setState({
                    "병원 전 초기 심전도 리듬": text.target.value,
                  });
                }}
              />
            </div>
            <div style={{ display: "flex", margin: 10 }}>
              <Input
                placeholder="심정지 발생 시간"
                style={{ width: "20vw", height: "5.9vh" }}
                onChange={(text) => {
                  this.setState({
                    "심정지 발생 시간": text.target.value,
                  });
                }}
              />
            </div>
            <div style={{ display: "flex", margin: 10 }}>
              <Input
                placeholder="119 도착시간"
                style={{ width: "20vw", height: "5.9vh" }}
                onChange={(text) => {
                  this.setState({
                    "119 도착시간": text.target.value,
                  });
                }}
              />
            </div>
            <div style={{ display: "flex", margin: 10 }}>
              <Input
                placeholder="witnessed"
                style={{ width: "20vw", height: "5.9vh" }}
                onChange={(text) => {
                  this.setState({
                    witnessed: text.target.value,
                  });
                }}
              />
            </div>
            <div style={{ display: "flex", margin: 10 }}>
              <Input
                placeholder="bystanderCPR"
                style={{ width: "20vw", height: "5.9vh" }}
                onChange={(text) => {
                  this.setState({
                    bystanderCPR: text.target.value,
                  });
                }}
              />
            </div>
            <div style={{ display: "flex", margin: 10 }}>
              <Input
                placeholder="발생 장소"
                style={{ width: "20vw", height: "5.9vh" }}
                onChange={(text) => {
                  this.setState({
                    "발생 장소": text.target.value,
                  });
                }}
              />
            </div>
            <div style={{ display: "flex", margin: 10 }}>
              <Input
                placeholder="Airway"
                style={{ width: "20vw", height: "5.9vh" }}
                onChange={(text) => {
                  this.setState({
                    Airway: text.target.value,
                  });
                }}
              />
            </div>
            <div style={{ display: "flex", margin: 10 }}>
              <Input
                placeholder="병원 도착 후 심전도 리듬"
                style={{ width: "20vw", height: "5.9vh" }}
                onChange={(text) => {
                  this.setState({
                    "병원 도착 후 심전도 리듬": text.target.value,
                  });
                }}
              />
            </div>
            <div style={{ display: "flex", margin: 10 }}>
              <Input
                placeholder="재세동 "
                style={{ width: "20vw", height: "5.9vh" }}
                onChange={(text) => {
                  this.setState({
                    "재세동 ": text.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div style={{ display: "flex", margin: 10 }}>
            <Button
              size="large"
              onClick={() => {
                this.informationEmit();
              }}
            >
              submit
            </Button>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ margin: 20, fontSize: 15 }}>process</div>
          <div style={{ display: "flex", margin: 10 }}>
            <Button
              size="large"
              onClick={() => {
                this.processEmit();
              }}
            >
              CPR 시작
            </Button>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ margin: 20, fontSize: 15 }}>process</div>
          <div style={{ display: "flex", margin: 10 }}>
            <Button
              size="large"
              onClick={() => {
                this.processEmit();
              }}
            >
              가슴압박 중지
            </Button>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ margin: 20, fontSize: 15 }}>process</div>
          <div style={{ display: "flex", margin: 10 }}>
            <Button
              size="large"
              onClick={() => {
                this.processEmit();
              }}
            >
              가슴압박 재시작
            </Button>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ margin: 20, fontSize: 15 }}>process</div>
          <div style={{ display: "flex", margin: 10 }}>
            <Button
              size="large"
              onClick={() => {
                this.processEmit();
              }}
            >
              nonSustainedROSC
            </Button>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ margin: 20, fontSize: 15 }}>process</div>
          <div style={{ display: "flex", margin: 10 }}>
            <Button
              size="large"
              onClick={() => {
                this.processEmit();
              }}
            >
              epinephrine
            </Button>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ margin: 20, fontSize: 15 }}>process</div>
          <div style={{ display: "flex", margin: 10 }}>
            <Button
              size="large"
              onClick={() => {
                this.processEmit();
              }}
            >
              amiodarone
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
