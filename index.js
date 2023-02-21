// const app = require("express")();
// const http = require("http").Server(app);
// const io = require("socket.io")(http);
// const port = process.env.PORT || 3000;
// import { Server } from "socket.io";

const io = require("socket.io")(3000);

// app.get("/", (req, res) => {
//   // res.sendFile(__dirname + "/index.html");
// });

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});
// app.post("/submit-message", (req, res) => {
//   // io.emit("chat message", req.query.message);
//   io.on("connection", (socket) => {
//     socket.emit("chat message", req.query.message);
//   });
//   res.send("OK");
// });
// app.get("/get-messages", (req, res) => {
//   // io.emit("chat message", req.query.message);
//   io.on("connection", (socket) => {
//     socket.on("chat message", (msg) => {
//       // io.emit("chat message", msg);
//       res.send(msg);
//     });
//   });
// });

// http.listen(port, () => {
//   console.log(`Socket.IO server running at http://localhost:${port}/`);
// });
