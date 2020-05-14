const socket = require("socket.io");
let total_users = 0;

const connection = (server) => {
  const io = socket(server);

  io.on("connection", (socket) => {
    console.log("a user connected " + socket.id);
    total_users = total_users + 1;
    io.sockets.emit("alluser", total_users);
    console.log(total_users);
    //#endregion
    socket.on("disconnect", () => {
      console.log("user disconnected");
      total_users = total_users - 1;
      io.sockets.emit("alluser", total_users);
    });

    //#endregion
    socket.on("frontmessage", (data) => {
      console.log(`Client ${socket.id} say {${data}}`);
      //#endregion
      socket.broadcast.emit("backendmessage", { id: socket.id, data: data });
    });
  });
};

module.exports = {
  connection,
};
