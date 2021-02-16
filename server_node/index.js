const app = require("express")();

const cors = require("cors");

// const corsOptions = {
//   origin: "http://localhost:3002",
//   credentials: true,
// };

//미들웨어로 cors 허용하는거는 작동 안함
// app.use(cors(corsOptions));

const http = require("http").createServer(app);

const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

http.listen(3002, () => {
  console.log("Connected at 3002");
});

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  //   socket.on("roomjoin", (userid) => {
  //     socket.join(userid);
  //   });

  socket.on("process", (obj) => {
    socket.emit("process", obj);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
