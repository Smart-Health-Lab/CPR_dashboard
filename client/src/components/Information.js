import React, { Component } from "react";
import { Table, Space } from "antd";
import { informationStaticData } from "../data/fakeData";
import { informationDynamicData } from "../data/fakeData";

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const columns = [
      {
        title: "",
        dataIndex: "",
        key: "name",
      },
      {
        title: "",
        dataIndex: "",
        key: "content",
      },
    ];

    const data = [];
    for (const [key, value] of Object.entries(informationStaticData)) {
      data.push({ [key]: value });
    }

    for (const [key, value] of Object.entries(informationDynamicData)) {
      data.push({ [key]: value });
    }

    // console.log(Object.entries(informationStaticData));

    return (
      <table
        style={{
          border: "1px solid grey",
          width: window.innerWidth / 3,
          height: window.innerHeight / 2 - 100,
        }}
      >
        {Object.entries(informationStaticData).map((curr, idx, arr) => {
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
        })}
      </table>
    );
  }
}

export default Information;
