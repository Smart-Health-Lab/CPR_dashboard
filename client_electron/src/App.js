import React, { Component } from "react";
import io, { Socket } from "socket.io-client";
import { Layout } from "antd";
import Clock from "react-live-clock";
import Moment from "react-moment";
import Process from "./components/Process";
import Information from "./components/Information";
import BodyImage from "./components/BodyImage";
import CenterTop from "./components/CenterTop";
import CenterBottom from "./components/CenterBottom";
import "./App.css";

const { Header, Content, Footer } = Layout;

let endPoint = "http://localhost:3002";
let socket = io.connect(endPoint);

const electronId = "SHL";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processData: [],
    };
  }

  addProcess = () => {
    // const { processData } = this.state;
    socket.on("process", (obj) => {
      this.setState({ processData: [...this.state.processData, obj] });
    });
  };

  componentWillMount() {
    // socket.emit("roomjoin", electronId);
    this.addProcess();
  }

  render() {
    console.log(this.state);
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
          <div style={{ fontSize: 20 }}>환자번호 / 이름 / 나이 / 성별 </div>
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
              <Information />
              <BodyImage />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", margin: 10 }}
            >
              <CenterTop />
              <CenterBottom />
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
