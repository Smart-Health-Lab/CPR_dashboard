import React, { Component } from "react";
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            display: "flex",
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
        <Content style={{ backgroundColor: "white" }}>
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
            <Process />
          </div>
        </Content>
        <Footer style={{ textAlign: "center", backgroundColor: "#D5DFE1" }}>
          SHL ©2020
        </Footer>
      </Layout>
    );
  }
}

export default App;
