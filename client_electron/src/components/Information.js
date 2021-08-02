import React, { Component } from "react";
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
      재세동: null,
      nonSustainedROSC: null,
      epinephrine: null,
      amiodarone: null,
    };
  }

  // setStaticInfo() {
  //   this.props.socket.on("information", (obj) => {
  //     this.setState({ staticInfo: { ...obj } });
  //   });
  // }
  componentWillReceiveProps(nextProps) {
    this.setState({
      "병원 전 초기 심전도 리듬":
        nextProps.staticInfo["병원 전 초기 심전도 리듬"],
      "심정지 발생 시간": nextProps.staticInfo["심정지 발생 시간"],
      "119 도착시간": nextProps.staticInfo["119 도착시간"],
      witnessed: nextProps.staticInfo["witnessed"],
      bystanderCPR: nextProps.staticInfo["bystanderCPR"],
      "발생 장소": nextProps.staticInfo["발생 장소"],
      Airway: nextProps.staticInfo["Airway"],
      "병원 도착 후 심전도 리듬":
        nextProps.staticInfo["병원 도착 후 심전도 리듬"],
      재세동: nextProps.staticInfo["재세동"],
      nonSustainedROSC: nextProps.staticInfo["nonSustainedROSC"],
      epinephrine: nextProps.staticInfo["epinephrine"],
      amiodarone: nextProps.staticInfo["amiodarone"],
    });
  }

  componentWillMount() {
    this.setState({});
    // this.setStaticInfo();
    // this.setState({
    //   "병원 전 초기 심전도 리듬":
    //     this.props.staticInfo["병원 전 초기 심전도 리듬"],
    //   "심정지 발생 시간": this.props.staticInfo["심정지 발생 시간"],
    //   "119 도착시간": this.props.staticInfo["119 도착시간"],
    //   witnessed: this.props.staticInfo["witnessed"],
    //   bystanderCPR: this.props.staticInfo["bystanderCPR"],
    //   "발생 장소": this.props.staticInfo["발생 장소"],
    //   Airway: this.props.staticInfo["Airway"],
    //   "병원 도착 후 심전도 리듬":
    //     this.props.staticInfo["병원 도착 후 심전도 리듬"],
    //   재세동: this.props.staticInfo["재세동"],
    //   nonSustainedROSC: this.props.staticInfo["nonSustainedROSC"],
    //   epinephrine: this.props.staticInfo["epinephrine"],
    //   amiodarone: null,
    // });
  }

  render() {
    console.log("Information.js rendering ", this.state);
    console.log("Information.js props ", this.props);
    // console.log("test -----> ", Object.keys(this.props.staticInfo).length);

    return (
      <table
        style={{
          border: "1px solid grey",
          width: "33vw",
          height: "50vh",
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
                  {/* {Object.keys(this.props.staticInfo).length === 0
                    ? curr[1]
                    : this.props.staticInfo.obj[curr[1]]} */}
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
