"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = new _mongoose2.default.Schema({
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

exports.default = _mongoose2.default.model("Application", schema);