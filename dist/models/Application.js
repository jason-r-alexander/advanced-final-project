"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstname: {
    required: true,
    type: String
  },
  lastname: {
    required: true,
    type: String
  },
  experience: {
    required: true,
    type: Number
  },
  skills: {
    required: true,
    type: String
  },
  linkedin: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model("Application", userSchema);