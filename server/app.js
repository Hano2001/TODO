require('dotenv').config();
var express = require("express");
const cors = require("cors");

var app = express();
const ListRoute = require("./routes/ListRoute");
app.use(cors());
app.use(express.json());
app.use("/lists", ListRoute);


module.exports = app;
