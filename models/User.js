const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
  type: String,
  required: true,
  unique: true   // 🔥 VERY IMPORTANT
},
  password: String,
  role: String // "student" or "admin"
});

module.exports = mongoose.model("User", userSchema);
