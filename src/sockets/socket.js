const socketIO = require("socket.io");
const total_users = {};
let count_users = 0;

// Recibimos un socket o server creado con express
const connection = (server) => {
  const io = socketIO(server);
  
  io.on("connection", (socket) => {
    total_users.add(io, socket);
    //#endregion

    socket.on("disconnect", () => {
      total_users.rm(io, socket);
    });
    //#endregion

    socket.on("frontmessage", (data) => {
      console.log(`Client ${socket.id} say {${data}}`);
      socket.broadcast.emit("backendmessage", { id: socket.id, data: data });
    });
  });
};
//#endregion

total_users.add=(lio,lsocket)=>{
  console.log("a user connected with ID: " + lsocket.id);
  count_users = count_users + 1;
  lio.sockets.emit("alluser", count_users);
}
total_users.rm=(lio,lsocket)=>{
  console.log("user disconnected with ID: ", lsocket.id);
  count_users = count_users - 1;
  lio.sockets.emit("alluser", count_users);
}

module.exports = {
  connection,
};