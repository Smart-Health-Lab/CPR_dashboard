import React, { Component } from "react";
import circle from "../data/circle.png";
import cprStartIcon from "../data/processIcon/cpr-start@2x.png";
import cprRestartIcon from "../data/processIcon/cpr-restart@2x.png";
import cprStopIcon from "../data/processIcon/cpr-stop@2x.png";
import cprmedicine from "../data/processIcon/cpr-medicine@2x.png";

class ChildProcessIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content,
    };
  }

  selectIcon = () => {
    if (this.state.content === "CPR 시작") {
      return cprStartIcon;
    } else if (this.state.content === "가슴압박 중지") {
      return cprStopIcon;
    } else if (this.state.content === "가슴압박 재시작") {
      return cprRestartIcon;
    } else if (this.state.content === "Epinephrine") {
      return cprmedicine;
    } else if (this.state.content === "amiodarone") {
      return cprmedicine;
    } else {
      return circle;
    }
  };

  render() {
    return (
      <div style={{ marginLeft: 10, fontSize: `1vw` }}>
        <img src={this.selectIcon()} style={{ width: 25, height: 25 }} />
      </div>
    );
  }
}

export default ChildProcessIcon;
