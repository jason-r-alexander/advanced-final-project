"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _ApplicationRoutes = require("./routes/ApplicationRoutes");

var _ApplicationRoutes2 = _interopRequireDefault(_ApplicationRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// dotenv allows us to declare environment variables in a .env file, \
// find out more here https://github.com/motdotla/dotenv
require("dotenv").config();
/*
const express = require("express");
const bodyParser = require("body-parser");
*/

//var applicationRoutes = require("./routes/ApplicationRoutes");


/* const mongoose = require("mongoose"); */
//const userRoutes = require("./routes/UserRoutes");
//const sessionRoutes = require("./routes/SessionRoutes");
//const authenticationRoutes = require("./routes/AuthenticationRoutes");


_mongoose2.default.set("debug", true);
_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect("mongodb://jalexander:jalexander@ds113179.mlab.com:13179/final-project");

var app = (0, _express2.default)();

/*
app.get("/publicinformation", function (req, res) {
  res.send("Anyone can see this");
});
*/

app.use(_express2.default.static("public"));
app.use(_bodyParser2.default.json());
//app.use(userRoutes);
//app.use(sessionRoutes);
//app.use(authenticationRoutes);
app.use('/', _ApplicationRoutes2.default);

/*
app.get("/canigetthis", function (req, res) {
  res.send("You got the data. You are authenticated");
});
app.get("/secret", function (req, res) {
  res.send(`The current user is ${req.user.username}`);
});
*/

var port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log("Listening on port:" + port);
});