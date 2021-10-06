var express = require("express");
var path = require("path");
const cors = require("cors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");

var app = express();
var router = express.Router();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });

module.exports = app;
