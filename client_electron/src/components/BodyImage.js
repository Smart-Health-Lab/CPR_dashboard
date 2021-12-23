import React, { Component } from "react";
import { Animated } from "react-animated-css";
import Animate from 'animate.css-react'
import { motion } from "framer-motion";
// import 'animate.css/animate.css'
import bodyImage from "../data/body.png";

// const backgroundImg = (
//   <img
//     src={bodyImage}
//     style={{
//       width: "28vw",
//       height: "50.6vh",
//       marginTop: 10,
//     }}
//   />
// );

class BodyImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Rt_IV_팔: "hidden",
      Lt_IV_팔: "hidden",
      Rt_IV_손: "hidden",
      Lt_IV_손: "hidden",
      Rt_IV_발: "hidden",
      Lt_IV_발: "hidden",
      Rt_IO_어깨: "hidden",
      Lt_IO_어깨: "hidden",
      Rt_IO_다리: "hidden",
      Lt_IO_다리: "hidden",
      Rt_IJ: "hidden",
      Lt_IJ: "hidden",
      Rt_SC: "hidden",
      Lt_SC: "hidden",
      Rt_FV: "hidden",
      Lt_FV: "hidden",
      Rt_RA: "hidden",
      Lt_RA: "hidden",
      Rt_FA: "hidden",
      Lt_FA: "hidden",
      ETI: "hidden",
      EGD: "hidden",
      Tracheostomy: "hidden",
      Cricothyrotomy: "hidden",
    };
  }

  componentWillReceiveProps () {
    this.setState({
                Rt_IV_팔: this.props.Rt_IV_팔,
                Lt_IV_팔: this.props.Lt_IV_팔,
                Rt_IV_손: this.props.Rt_IV_손,
                Lt_IV_손: this.props.Lt_IV_손,
                Rt_IV_발: this.props.Rt_IV_발,
                Lt_IV_발: this.props.Lt_IV_발,
                Rt_IO_어깨: this.props.Rt_IO_어깨,
                Lt_IO_어깨: this.props.Lt_IO_어깨,
                Rt_IO_다리: this.props.Rt_IO_다리,
                Lt_IO_다리: this.props.Lt_IO_다리,
                Rt_IJ: this.props.Rt_IJ,
                Lt_IJ: this.props.Lt_IJ,
                Rt_SC: this.props.Rt_SC,
                Lt_SC: this.props.Lt_SC,
                Rt_FV: this.props.Rt_FV,
                Lt_FV: this.props.Lt_FV,
                Rt_RA: this.props.Rt_RA,
                Lt_RA: this.props.Lt_RA,
                Rt_FA: this.props.Rt_FA,
                Lt_FA: this.props.Lt_FA,
                ETI: this.props.ETI,
                EGD: this.props.EGD,
                Tracheostomy: this.props.Tracheostomy,
                Cricothyrotomy: this.props.Cricothyrotomy,
    })
  }

  bodyPointLegend = (name, pointColor) => {
    let border = null;
    if ((name === "Cricothyrotomy") | (name === "Tracheostomy")) {
      border = "2px solid";
    }
    return (
      <div style={{ display: "flex", marginBottom: 6 }}>
        <div
          style={{
            background: pointColor,
            width: "0.6vw",
            height: "0.9vh",
            borderRadius: "50%",
            border: border,
            borderBlockColor: "#868686",
          }}
        />
        <text
          style={{
            color: "white",
            fontSize: "1.0vw",
            marginTop: -20,
            marginLeft: 15,
          }}
        >
          {name}
        </text>
      </div>
    );
  };

  bodyPoint = (name, color, pointStatus, top, left, position) => {
    top = top -80;
    let border = null;
    if ((name === "Cricothyrotomy") | (name === "Tracheostomy")) {
      border = "2px solid";
    }
    return (
      <div
        style={{
          display: "flex",
          // alignItems: "center",
          position: "relative",
          top: top,
          left: left,
          visibility: pointStatus,
        }}
      >
        {position === 'r' ?
         <>
         <text
          style={{
            color: color,
            fontSize: "0.7vw",
            fontWeight: "bold",
            marginTop: -15,
            marginRight: 25,
          }}
        >
          {name}
        </text>
          <div
          style={{
            background: color,
            width: "0.5vw",
            height: "0.7vh",
            borderRadius: "50%",
            borderColor: "#868686",
            border: border,
            borderBlockColor: "#868686",
            // boxShadow : "0 0 8px #ea4c89, inset 0 0 1px #ea4c89",
            // boxShadow: "0 0 0 rgba(204,169,44, 0.4)",
            // WebkitAnimation : "pulse 2s linear 1s infinite",
            // animation: "pulse 2s infinite",
            // WebkitAnimationFillMode: "both"
          }}
          
        />
        </>
        :
        <>
          <div
          style={{
            background: color,
            width: "0.5vw",
            height: "0.7vh",
            borderRadius: "50%",
            borderColor: "#868686",
            border: border,
            borderBlockColor: "#868686",
            // boxShadow : "0 0 8px #ea4c89, inset 0 0 1px #ea4c89",
            // boxShadow: "0 0 0 rgba(204,169,44, 0.4)",
            // WebkitAnimation : "pulse 2s linear 1s infinite",
            // animation: "pulse 2s infinite",
            // WebkitAnimationFillMode: "both"
          }}
          
        />
        <text
          style={{
            color: color,
            fontSize: "0.7vw",
            fontWeight: "bold",
            marginTop: -15,
            marginLeft: 25,
          }}
        >
          {name}
        </text>
        </>
        }
      </div>
    );
  };

  bodyPointSC = (name, color, pointStatus, top, left) => {
    top = top -80;
    let border = null;
    if ((name === "Cricothyrotomy") | (name === "Tracheostomy")) {
      border = "2px solid";
    }
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          top: top,
          left: left,
          visibility: pointStatus,
        }}
        >
        <div
        style={{
          background: color,
          width: "0.5vw",
          height: "0.7vh",
          borderRadius: "50%",
          borderColor: "#868686",
          border: border,
          borderBlockColor: "#868686",
          // boxShadow : "0 0 8px #ea4c89, inset 0 0 1px #ea4c89",
          // boxShadow: "0 0 0 rgba(204,169,44, 0.4)",
          // WebkitAnimation : "pulse 2s linear 1s infinite",
          // animation: "pulse 2s infinite",
          // WebkitAnimationFillMode: "both"
        }}
      />
        <text
          style={{
            color: color,
            fontSize: "0.7vw",
            fontWeight: "bold",
            marginTop: 0,
            marginLeft: -10,
          }}
        >
          {name}
        </text>
      </div>
    );
  };

  bodyPointCT = (name, color, pointStatus, top, left, position) => {
    top = top -80;
    let border = null;
    if ((name === "Cricothyrotomy") | (name === "Tracheostomy")) {
      border = "2px solid";
    }
    return (
      <div
        style={{
          display: "flex",
          position: "relative",
          top: top,
          left: left,
          visibility: pointStatus,
        }}
      >
        {position === 'r' ?
         <>
         <text
          style={{
            color: color,
            fontSize: "0.7vw",
            fontWeight: "bold",
            marginTop: -15,
            marginRight: 85,
            marginLeft: -60
          }}
        >
          {name}
        </text>
          <div
          style={{
            background: color,
            width: "0.5vw",
            height: "0.7vh",
            borderRadius: "50%",
            borderColor: "#868686",
            border: border,
            borderBlockColor: "#868686",
            // boxShadow : "0 0 8px #ea4c89, inset 0 0 1px #ea4c89",
            // boxShadow: "0 0 0 rgba(204,169,44, 0.4)",
            // WebkitAnimation : "pulse 2s linear 1s infinite",
            // animation: "pulse 2s infinite",
            // WebkitAnimationFillMode: "both"
          }}
          
        />
        </>
        :
        <>
          <div
          style={{
            background: color,
            width: "0.5vw",
            height: "0.7vh",
            borderRadius: "50%",
            borderColor: "#868686",
            border: border,
            borderBlockColor: "#868686",
            // boxShadow : "0 0 8px #ea4c89, inset 0 0 1px #ea4c89",
            // boxShadow: "0 0 0 rgba(204,169,44, 0.4)",
            // WebkitAnimation : "pulse 2s linear 1s infinite",
            // animation: "pulse 2s infinite",
            // WebkitAnimationFillMode: "both"
          }}
          
        />
        <text
          style={{
            color: color,
            fontSize: "0.7vw",
            fontWeight: "bold",
            marginTop: -15,
            marginLeft: 85,
          }}
        >
          {name}
        </text>
        </>
        }
      </div>
    );
  };


  render() {
    return (
      <div
        style={{
          // position: "absolute",
          width: "28vw",
          height: "50.6vh",
          marginTop: 10,
          backgroundImage: `url(${bodyImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <div>
            <text style={{ color: "white", fontSize: "1vw" }}>Right</text>
          </div>
          <div>
            <text style={{ color: "white", fontSize: "1vw" }}>Left</text>
          </div>
        </div>
        {/* 순서 : 위에서부터 차례대로 오른쪽 -> 왼쪽 */}
        {/* <motion.div style={{
            background: "red",
            width: "0.5vw",
            height: "0.7vh",
            borderRadius: "50%",
            borderColor: "#868686",
            border: null,
            borderBlockColor: "#868686",
            boxShadow : "0 0 8px #ea4c89, inset 0 0 1px #ea4c89",
          }} 
          animate={{scale:[1,1,1,2,2,2,1,1,1], x: 100}}  
          transition={{delay:1, duration:1}}
          /> */}
        {this.bodyPoint("IV", "#f5a623", this.state.Rt_IV_팔, 430, 350, "r")}
        {this.bodyPoint("IV", "#f5a623", this.state.Lt_IV_팔, 400, 635, "l")}
        {this.bodyPoint("IV", "#f5a623", this.state.Rt_IV_손, 500, 320, "r")}
        {this.bodyPoint("IV", "#f5a623", this.state.Lt_IV_손, 470, 660, "l")}
        {this.bodyPoint("IV", "#f5a623", this.state.Rt_IV_발, 870, 420, "r")}
        {this.bodyPoint("IV", "#f5a623", this.state.Lt_IV_발, 840, 560, "l")}
        {this.bodyPoint("IO", "#61A7C7", this.state.Rt_IO_어깨, 120, 360, "r")}
        {this.bodyPoint("IO", "#61A7C7", this.state.Lt_IO_어깨, 90, 620, "l")}
        {this.bodyPoint("IO", "#61A7C7", this.state.Rt_IO_다리, 580, 420, "r")}
        {this.bodyPoint("IO", "#61A7C7", this.state.Lt_IO_다리, 553, 560, "l")}
        {this.bodyPoint("IJ", "#A0A3FF", this.state.Rt_IJ, -50, 440, "r")}
        {this.bodyPoint("IJ", "#A0A3FF", this.state.Lt_IJ, -77, 550, "l")}
        {this.bodyPointSC("SC", "#A0A3FF", this.state.Rt_SC, -55, 480)}
        {this.bodyPointSC("SC", "#A0A3FF", this.state.Lt_SC, -110, 560)}
        {this.bodyPoint("FV", "#A0A3FF", this.state.Rt_FV, 120, 430, "r")}
        {this.bodyPoint("FV", "#A0A3FF", this.state.Lt_FV, 93, 550, "l")}
        {this.bodyPoint("RA", "#F86161", this.state.Rt_RA, 20, 320, "r")}
        {this.bodyPoint("RA", "#F86161", this.state.Lt_RA, -10, 650, "l")}
        {this.bodyPoint("FA", "#F86161", this.state.Rt_FA, 40, 430, "r")}
        {this.bodyPoint("FA", "#F86161", this.state.Lt_FA, 13, 550, "l")}
        {this.bodyPoint("ETI", "#868686", this.state.ETI, -420, 450, "r")}
        {this.bodyPoint("EGD", "#868686", this.state.EGD, -447, 518, "l")}
        {this.bodyPointCT("Cricothyrotomy", "#FFFFFF", this.state.Cricothyrotomy, -450, 293, "r")}
        {this.bodyPointCT("Tracheostomy", "#FFFFFF", this.state.Tracheostomy, -440, 518, "l")}

        <div style={{ position: "relative", top: -40 }}>
          {this.bodyPointLegend("IV", "#f5a623")}
          {this.bodyPointLegend("IO", "#61A7C7")}
          {this.bodyPointLegend("C-line", "#A0A3FF")}
          {this.bodyPointLegend("A-line", "#F86161")}
          {this.bodyPointLegend("ETI", "#868686")}
          {this.bodyPointLegend("EGD", "#868686")}
          {this.bodyPointLegend("Cricothyrotomy", "#FFFFFF")}
          {this.bodyPointLegend("Tracheostomy", "#FFFFFF")}
        </div>
      </div>
    );
  }
}

export default BodyImage;
