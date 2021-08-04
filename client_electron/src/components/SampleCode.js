import React, { Component, useState } from "react";
import moment from "moment";

const SampleCode = () => {
  const [time, setTime] = useState(moment.duration(0));
  const [timeTick, setTimeTick] = useState(null);

  const startTimer = () => {
    const tick = () =>
      setTime((prevTime) => prevTime.clone().add(1, "seconds"));
    const timeTick = setInterval(() => {
      tick();
    }, 1000);
    setTimeTick(timeTick);
  };

  const pauseTimer = () => {
    if (timeTick) {
      clearInterval(timeTick);
    }
  };

  const stopTimer = () => {
    pauseTimer();
    setTime(moment.duration(0));
  };

  return (
    <div className="App">
      <h1>타이머</h1>
      <p>{moment(time.asSeconds(), "s").format("HH:mm:ss")}</p>
      <button type="button" onClick={() => startTimer()}>
        시작
      </button>
      <button type="button" onClick={() => pauseTimer()}>
        일시정지
      </button>
      <button type="button" onClick={() => stopTimer()}>
        정지
      </button>
    </div>
  );
};

export default SampleCode;
