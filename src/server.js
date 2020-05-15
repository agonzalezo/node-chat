const express = require("express"),
  app = express(),
  morgan = require("morgan"),
  routes = require("./routes/server-routes");
//#Config
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//#Middleware
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(routes);

//#Start
const server = app.listen(3000, () => {
    console.log("Server started");
});
require('./sockets/socket').connection(server);