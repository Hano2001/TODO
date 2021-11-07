require("dotenv").config();
var express = require("express");
const cors = require("cors");

var app = express();
const ListRoute = require("./routes/ListRoute");
app.use(
  cors({
    origin: process.env.CLIENT,
    methods: "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    credentials: true,
  })
);
app.use(express.json());
app.use("/lists", ListRoute);

module.exports = app;
