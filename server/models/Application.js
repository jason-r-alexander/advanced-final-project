const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
 } ,
 linkedin: {
     required: true,
     type: String
 }
});

module.exports = mongoose.model("Application", userSchema);