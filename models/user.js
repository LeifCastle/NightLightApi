const mongoose = require("mongoose");

const quickRecordSchema = new mongoose.Schema(
  {
    dreams: Object,
    notes: Object,
  },
  { timestamps: true }
);

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    userName: { type: String, required: true, unique: true },
    password: String,
    quickRecords: [quickRecordSchema],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
