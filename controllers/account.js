const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/user.js");

//Import from file?
const host = "mongodb://localhost/nightLight";
mongoose.connect(host, {
  useNewURLParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", () => {
  console.log(
    `Connected to MongoDB: NightLight at --> HOST: ${db.host} PORT: ${db.port}`
  );
});
db.on("error", (err) => {
  console.log(`Database error: ${err}`);
});

//--Creates a new user
router.post("/new", (req, res) => {
  console.log(req.body);
  User.create(req.body)
    .then((user) => {
      console.log(user);
      res.json(user);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
});

module.exports = router;
