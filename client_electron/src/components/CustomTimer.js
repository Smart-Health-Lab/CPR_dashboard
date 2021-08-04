import React, { useState, useEffect, useRef } from "react";

const CustomTimer = ({ mm, ss }) => {
  const [minutes, setMinutes] = useState(parseInt(mm));
  const [seconds, setSeconds] = useState(parseInt(ss));

  return (
    <text>
      {/* {minutes}:{seconds < 10 ? `0${seconds}` : seconds} */}
      {"saf"}
    </text>
  );
};

export default CustomTimer;
