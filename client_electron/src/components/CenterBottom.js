// import React, { Component } from "react";
// import CircularProgress01 from "./CircularProgress01";
// import CircularProgress02 from "./CircularProgress02";

// class CenterBottom extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cprStart: false,
//       startTimeOrigin: null,
//       cprStop: false,
//       stopTimeOrigin: null,
//       cprRestart: false,
//       restartTimeOrigin: null,
//       durationTime: null,
//       durationPressTime: null,
//       durationStopTime: null,
//     };
//   }

//   componentWillReceiveProps() {
//     this.setState({
//       cprStart: this.props.cprStart,
//       startTimeOrigin: this.props.startTimeOrigin,
//       cprStop: this.props.cprStop,
//       stopTimeOrigin: this.props.stopTimeOrigin,
//       cprRestart: this.props.cprRestart,
//       restartTimeOrigin: this.props.restartTimeOrigin,
//       durationTime: this.props.durationTime,
//       durationPressTime: this.props.durationPressTime,
//       durationStopTime: this.props.durationStopTime,
//     });
//   }

//   percentCal = () => {};

//   render() {
//     console.log("CenterBottom.js rendering", this.state);

//     return (
//       <div
//         style={{
//           width: "33vw",
//           height: "40vh",
//           marginTop: 40,
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               height: "9vh",
//               width: "33vw",
//             }}
//           >
//             <div>
//               <div>(image)</div>
//             </div>
//             <div>
//               <div>Epinephrine</div>
//             </div>
//           </div>
//         </div>
//         <div style={{ display: "flex", height: "20vh", width: "33vw" }}>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-evenly",
//               alignItems: "center",
//               marginRight: 5,
//               height: "20vh",
//               width: "16.5vw",
//               backgroundColor: "#DFECEE",
//             }}
//           >
//             <div>가슴압박 지속</div>

//             <CircularProgress01
//               strokeWidth={"10"}
//               sqSize={"150"}
//               percentage={"50"}
//               cprStart={this.state.cprStart}
//               startTimeOrigin={this.state.startTimeOrigin}
//               cprStop={this.state.stopTimeOrigin}
//               stopTimeOrigin={this.state.stopTimeOrigin}
//               cprRestart={this.state.restartTimeOrigin}
//               restartTimeOrigin={this.state.restartTimeOrigin}
//               durationTime={this.state.durationTime}
//               durationPressTime={this.state.durationPressTime}
//               durationStopTime={this.state.durationStopTime}
//             />
//           </div>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-evenly",
//               alignItems: "center",
//               height: "20vh",
//               width: "16.5vw",
//               backgroundColor: "#DFECEE",
//             }}
//           >
//             <div>가슴압박 중지</div>
//             <CircularProgress02
//               strokeWidth={"10"}
//               sqSize={"150"}
//               percentage={"1.9"}
//               cprStart={this.state.cprStart}
//               startTimeOrigin={this.state.startTimeOrigin}
//               cprStop={this.state.stopTimeOrigin}
//               stopTimeOrigin={this.state.stopTimeOrigin}
//               cprRestart={this.state.restartTimeOrigin}
//               restartTimeOrigin={this.state.restartTimeOrigin}
//               durationTime={this.state.durationTime}
//               durationPressTime={this.state.durationPressTime}
//               durationStopTime={this.state.durationStopTime}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default CenterBottom;
