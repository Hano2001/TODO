const server = require("./app");
var express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const db = "mongodb://localhost:27027/todo";
mongoose.connect(db).then(() => console.log("connected successfully"));
server.listen(PORT, () => `Server running on port ${PORT}`);

var router = express.Router();

module.exports = router;
