const app = require("express")();

// const server = app.listen(3002, () => {
//   console.log("Listening at port number 3002");
// });

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
    console.log("process => ", obj);

    io.emit("process", obj);
  });

  socket.on("information", (obj) => {
    console.log("information => ", obj);

    io.emit("information", obj);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
