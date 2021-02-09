import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import io from "socket.io-client";

ReactDOM.render(<App />, document.getElementById("root"));

// let endPoint = "http://localhost:3002";
// let socket = io.connect(endPoint);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
