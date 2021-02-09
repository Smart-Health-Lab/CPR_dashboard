import React, { Component } from "react";
import io from "socket.io-client";
import { Table, Space } from "antd";
import { informationStaticData } from "../data/fakeData";
import { informationDynamicData } from "../data/fakeData";

// let endPoint = "http://localhost:3002";
// let socket = io.connect(endPoint);

class Information extends Component {
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
      nonSustainedROSC: null,
      epinephrine: null,
      amiodarone: null,
    };
  }

  // componentDidMount() {
  //   socket.on("message", (msg) => {
  //     this.setState({ "심정지 발생 시간": msg });
  //   });
  // }

  render() {
    // console.log("get message: ", this.state);
    return (
      <table
        style={{
          border: "1px solid grey",
          width: window.innerWidth / 3,
          height: window.innerHeight / 2 - 50,
        }}
      >
        {Object.entries(this.state).map((curr, idx, arr) => {
          return (
            <tr style={{ border: "1px solid grey" }}>
              <td
                style={{ border: "1px solid grey", backgroundColor: "#DFECEE" }}
              >
                <div
                  style={{
                    marginLeft: 5,
                    marginTop: 10,
                    marginRight: 5,
                    width: "13vw",
                  }}
                >
                  {curr[0]}
                </div>
              </td>
              <td>
                <div
                  style={{
                    marginLeft: 5,
                    marginTop: 10,
                    marginRight: 5,
                    width: "13vw",
                  }}
                >
                  {curr[1]}
                </div>
              </td>
            </tr>
          );
        })}
        {/* {Object.entries(informationStaticData).map((curr, idx, arr) => {
          return (
            <tr style={{ border: "1px solid grey" }}>
              <td
                style={{ border: "1px solid grey", backgroundColor: "#DFECEE" }}
              >
                <div
                  style={{
                    marginLeft: 5,
                    marginTop: 10,
                    marginRight: 5,
                    width: "13vw",
                  }}
                >
                  {curr[0]}
                </div>
              </td>
              <td>
                <div
                  style={{
                    marginLeft: 5,
                    marginTop: 10,
                    marginRight: 5,
                    width: "13vw",
                  }}
                >
                  {curr[1]}
                </div>
              </td>
            </tr>
          );
        })}
        {Object.entries(informationDynamicData).map((curr, idx, arr) => {
          return (
            <tr style={{ border: "1px solid grey" }}>
              <td
                style={{ border: "1px solid grey", backgroundColor: "#DFECEE" }}
              >
                <div
                  style={{
                    marginLeft: 5,
                    marginTop: 10,
                    marginRight: 5,
                    width: "13vw",
                  }}
                >
                  {curr[0]}
                </div>
              </td>
              <td>
                <div
                  style={{
                    marginLeft: 5,
                    marginTop: 10,
                    marginRight: 5,
                    width: "13vw",
                  }}
                >
                  {curr[1]}
                </div>
              </td>
            </tr>
          );
        })} */}
      </table>
    );
  }
}

export default Information;
