"use strict";

// dotenv allows us to declare environment variables in a .env file, \
// find out more here https://github.com/motdotla/dotenv
require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");

var mongoose = require("mongoose");
//const userRoutes = require("./routes/UserRoutes");
//const sessionRoutes = require("./routes/SessionRoutes");
//const authenticationRoutes = require("./routes/AuthenticationRoutes");
var applicationRoutes = require("./routes/ApplicationRoutes");

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://jalexander:jalexander@ds113179.mlab.com:13179/final-project");

var app = express();

app.get("/publicinformation", function (req, res) {
  res.send("Anyone can see this");
});

app.use(express.static("public"));
app.use(bodyParser.json());
//app.use(userRoutes);
//app.use(sessionRoutes);
//app.use(authenticationRoutes);
app.use(applicationRoutes);

app.get("/canigetthis", function (req, res) {
  res.send("You got the data. You are authenticated");
});
app.get("/secret", function (req, res) {
  res.send("The current user is " + req.user.username);
});

var port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log("Listening on port:" + port);
});