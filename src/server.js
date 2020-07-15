const express = require("express"),
  app = express(),
  morgan = require("morgan"),
  port = process.env.PORT || 3000,
  routes = require("./routes/server-routes");
//#Config
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//#Middleware
app.use(morgan("common"));
app.use(express.static(__dirname + "/public"));
app.use(routes);

//#Start
const server = app.listen(port, () => {
    console.log("Server started");
});
require('./sockets/socket').connection(server);