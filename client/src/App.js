import React, { Component } from "react";
import { Layout } from "antd";
import Process from "./components/Process";
import "./App.css";

const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super();
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
          <div style={{}}>환자번호 / 이름 / 나이 / 성별 </div>
          <div style={{}}>2020.11.27 15:04:03</div>
        </Header>
        <Content style={{ backgroundColor: "white" }}>
          <Process />
        </Content>
        <Footer style={{ textAlign: "center", backgroundColor: "#D5DFE1" }}>
          SHL ©2020
        </Footer>
      </Layout>
    );
  }
}

export default App;
