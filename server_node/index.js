const app = require("express")();

const cors = require("cors");

app.use(cors());

const http = require("http").createServer(app);

const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("message", (msg) => {
    io.emit("message", msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

http.listen(3002, () => {
  console.log("Connected at 3002");
});
