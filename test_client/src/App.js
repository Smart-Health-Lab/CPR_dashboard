import { Component } from "react";
import io, { Socket } from "socket.io-client";
import { Input, Button } from "antd";
import "./App.css";

let endPoint = "http://localhost:3002";
let socket = io.connect(endPoint);

// const testId = "SHL";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      환자번호: null,
      이름: null,
      나이: null,
      성별: null,
      "병원 전 초기 심전도 리듬": null,
      "심정지 발생 시간": null,
      "119 도착시간": null,
      witnessed: null,
      bystanderCPR: null,
      "발생 장소": null,
      Airway: null,
      "병원 도착 후 심전도 리듬": null,
      재세동: null,
      process: null,
    };
  }

  componentWillMount() {
    // socket.emit("roomjoin", testId);
  }

  informationEmit = () => {
    let customInfo = this.state;
    delete customInfo["process"];
    socket.emit("information", customInfo);
  };
  processEmit = (obj) => {
    socket.emit("process", obj);
  };

  render() {
    console.log("test_client rendering, ", this.state);
    console.log("app.js rendering");

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
                placeholder="환자번호"
                style={{ width: "20vw", height: "5.9vh" }}
                onChange={(text) => {
                  this.setState({
                    환자번호: text.target.value,
                  });
                }}
              />
            </div>
            <div style={{ display: "flex", margin: 10 }}>
              <Input
                placeholder="이름"
                style={{ width: "20vw", height: "5.9vh" }}
                onChange={(text) => {
                  this.setState({
                    이름: text.target.value,
                  });
                }}
              />
            </div>
            <div style={{ display: "flex", margin: 10 }}>
              <Input
                placeholder="나이"
                style={{ width: "20vw", height: "5.9vh" }}
                onChange={(text) => {
                  this.setState({
                    나이: text.target.value,
                  });
                }}
              />
            </div>
            <div style={{ display: "flex", margin: 10 }}>
              <Input
                placeholder="성별"
                style={{ width: "20vw", height: "5.9vh" }}
                onChange={(text) => {
                  this.setState({
                    성별: text.target.value,
                  });
                }}
              />
            </div>
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
                const date = new Date();
                this.processEmit({
                  originalTime: date.getTime(),
                  // startHours: date.getHours(),
                  // startMins: date.getMinutes(),
                  // startSeconds: date.getSeconds(),
                  time:
                    date.getHours() +
                    ":" +
                    date.getMinutes() +
                    ":" +
                    date.getSeconds(),
                  content: "CPR 시작",
                });
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
                const date = new Date();
                this.processEmit({
                  originalTime: date.getTime(),
                  time:
                    date.getHours() +
                    ":" +
                    date.getMinutes() +
                    ":" +
                    date.getSeconds(),
                  content: "가슴압박 중지",
                });
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
                const date = new Date();
                this.processEmit({
                  originalTime: date.getTime(),
                  time:
                    date.getHours() +
                    ":" +
                    date.getMinutes() +
                    ":" +
                    date.getSeconds(),
                  content: "가슴압박 재시작",
                });
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
                const date = new Date();
                this.processEmit({
                  originalTime: date.getTime(),
                  time:
                    date.getHours() +
                    ":" +
                    date.getMinutes() +
                    ":" +
                    date.getSeconds(),
                  content: "nonSustainedROSC",
                });
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
                const date = new Date();
                this.processEmit({
                  originalTime: date.getTime(),
                  time:
                    date.getHours() +
                    ":" +
                    date.getMinutes() +
                    ":" +
                    date.getSeconds(),
                  content: "Epinephrine",
                });
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
                const date = new Date();
                this.processEmit({
                  originalTime: date.getTime(),
                  time:
                    date.getHours() +
                    ":" +
                    date.getMinutes() +
                    ":" +
                    date.getSeconds(),
                  content: "amiodarone",
                });
              }}
            >
              amiodarone
            </Button>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ margin: 20, fontSize: 15 }}>process</div>
          <div style={{ display: "flex", margin: 10 }}>
            <Button
              size="large"
              onClick={() => {
                const date = new Date();
                this.processEmit({
                  originalTime: date.getTime(),
                  time:
                    date.getHours() +
                    ":" +
                    date.getMinutes() +
                    ":" +
                    date.getSeconds(),
                  content: "재세동",
                });
              }}
            >
              재세동
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
