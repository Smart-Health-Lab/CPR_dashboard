const informationStaticData = {
  "병원 전 초기 심전도 리듬": "VF",
  "심정지 발생 시간": "20201113 15:04:29",
  "119 도착시간": "20201113 15:04:29",
  witnessed: "Y",
  bystanderCPR: "Y",
  "발생 장소": "병원 내",
  Airway: "ETI",
  "병원 도착 후 심전도 리듬": "VF",
};

const informationDynamicData = {
  재세동: 3,
  nonSustainedROSC: 1,
  epinephrine: "2A",
  amiodarone: "300mg",
};

const logData = [
  { time: "15:04:29", content: "CPR 시작" },
  { time: "15:04:34", content: "가슴압박 중지" },
  { time: "15:04:36", content: "VF" },
  { time: "15:04:38", content: "가슴압박 재시작" },
  { time: "15:04:43", content: "가슴압박 중지" },
  { time: "15:04:46", content: "Defibrillation 200J" },
  { time: "15:04:48", content: "가슴압박 재시작" },
  { time: "15:05:48", content: "iv line 실패" },
  { time: "15:06:19", content: "IO" },
  { time: "15:06:49", content: "가슴압박 중지" },
  { time: "15:06:52", content: "VF" },
  { time: "15:06:53", content: "가슴압박 재시작" },
  { time: "15:06:59", content: "가슴압박 중지" },
  { time: "15:07:02", content: "Defibrillation 200J" },
];

module.exports = {
  informationStaticData,
  informationDynamicData,
  logData,
};
