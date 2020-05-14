const express = require("express"),
  app = express(),
  morgan = require("morgan"),
  socket = require("socket.io"),
  routes = require("./routes/server-routes");
//#Config
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
let total_users = 0;

//#Middleware
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(routes);

//#Start
require('./sockets/socket').connection(app.listen(3000, () => {
    console.log("Server started");
  }));

// const io = socket(
//   app.listen(3000, () => {
//     console.log("Server started");
//   })
// );

// //#Sockets
// io.on("connection", (socket) => {
//   console.log("a user connected " + socket.id);
//   total_users = total_users + 1;
//   io.sockets.emit("alluser", total_users);
//   console.log(total_users);
//   //#endregion
//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//     total_users = total_users - 1;
//     io.sockets.emit("alluser", total_users);
//   });

//   //#endregion
//   socket.on("frontmessage", (data) => {
//     console.log(`Client ${socket.id} say {${data}}`);
//     //#endregion
//     socket.broadcast.emit("backendmessage", { id: socket.id, data: data });
//   });
// });
