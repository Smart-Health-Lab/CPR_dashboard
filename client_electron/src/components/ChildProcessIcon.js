import React, { Component } from "react";
import circle from "../data/circle.png";
// import cprStartIcon from "../data/processIcon/cpr-start@2x.png";
// import cprRestartIcon from "../data/processIcon/cpr-restart@2x.png";
// import cprStopIcon from "../data/processIcon/cpr-stop@2x.png";
import cprmedicine from "../data/processIcon/cpr-medicine@2x.png";
import ic_airway01 from "../data/processIcon/ic_airway01.png";
import ic_airway02 from "../data/processIcon/ic_airway02.png";
import ic_defib from "../data/processIcon/ic_defib.png";
import ic_drug from "../data/processIcon/ic_drug.png";
import ic_line01 from "../data/processIcon/ic_line01.png";
import ic_line02 from "../data/processIcon/ic_line02.png";
import ic_prbc from "../data/processIcon/ic_prbc.png";
import ic_rhythm from "../data/processIcon/ic_rhythm.png";
import ic_start from "../data/processIcon/ic_start.png";
import ic_stop from "../data/processIcon/ic_stop.png";

class ChildProcessIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content,
    };
  }

  selectIcon = () => {
    if (this.state.content === "CPR 시작") {
      return ic_start;
    } else if (this.state.content === "가슴압박 중지") {
      return ic_stop;
    } else if (this.state.content === "가슴압박 재시작") {
      return ic_start;
    } else if (this.state.content === "Epinephrine") {
      return cprmedicine;
    } else if (this.state.content === "amiodarone") {
      return cprmedicine;
    } else if (this.state.content.includes("EGD")) {
      return ic_airway01
    } else if (this.state.content.includes("ECMO")) {
      return ic_airway01
    } else if (this.state.content.includes("Intubation")) {
      return ic_airway02
    } else if (this.state.content.includes("Surgical")){
      return ic_airway02
    } else if (this.state.content.includes("Defibrillation")) {
      return ic_defib
    } else if (this.state.content.includes("Epinephrine")) {
      return ic_drug
    } else if (this.state.content.includes("Amiodarone")) {
      return ic_drug
    } else if (this.state.content.includes("Sodium")) {
      return ic_drug
    } else if (this.state.content.includes("Calcium")) {
      return ic_drug
    } else if (this.state.content.includes("Lidocaine")) {
      return ic_drug
    } else if (this.state.content.includes("IV")) {
      return ic_line01
    } else if (this.state.content.includes("IO")) {
      return ic_line01
    } else if (this.state.content.split(".")[1] === "IJ") {
      return ic_line01
    } else if (this.state.content.split(".")[1] === "SC") {
      return ic_line01
    } else if (this.state.content.split(".")[1] === "FV") {
      return ic_line01
    } else if (this.state.content.split(".")[1] === "RA" ) {
      return ic_line02
    } else if (this.state.content.split(".")[1] === "FA") {
      return ic_line02
    } else if (this.state.content === "ABGA") {
      return ic_line02
    } else if (this.state.content.includes("pRBC")) {
      return ic_prbc
    } else if (this.state.content === "Asystole") {
      return ic_rhythm
    } else if (this.state.content.includes("PEA")) {
      return ic_rhythm
    } else if (this.state.content.includes("VF")) {
      return ic_rhythm
    } else if (this.state.content.includes("pVT")) {
      return ic_rhythm
    } else {
      return circle;
    } 
  };

  render() {
    return (
      <div style={{ marginLeft: 25, marginRight: 20, fontSize: `1vw` }}>
        <img src={this.selectIcon()} style={{ width: 50, height: 50 }} />
      </div>
    );
  }
}

export default ChildProcessIcon;
