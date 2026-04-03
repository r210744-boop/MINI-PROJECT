// models/Complaint.js
const mongoose = require("mongoose");





const complaintSchema = new mongoose.Schema({
  title: String,
  description: String,
  priority: {
    type: Number,
    default: 1,
    set: (value) => {
      if (value === undefined || value === null) return 1;
      if (typeof value === "number") return value;
      const normalized = String(value).trim().toLowerCase();
      if (normalized === "3" || normalized === "high") return 3;
      if (normalized === "2" || normalized === "medium") return 2;
      if (normalized === "1" || normalized === "low") return 1;
      return 1;
    },
  }, // 🔥 3=High,2=Medium,1=Low
  student:String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },   // 🔥 instead of student name
  worker: { type: mongoose.Schema.Types.ObjectId, ref: "User" },	//instead of worker name
  department:String,
  image: String,
  afterImage: String,
  status: {
    type: String,
    default: "Pending"
  }
}, { timestamps: true });


module.exports = mongoose.model("Complaint", complaintSchema);
