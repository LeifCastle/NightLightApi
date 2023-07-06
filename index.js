const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));

// Middleware setup
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false })); // for parsing URL-encoded data
app.use(bodyParser.json()); // for parsing JSON data
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/account", require("./controllers/account.js"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

module.exports = { app, PORT };
