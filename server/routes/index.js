var express = require("express");
var router = express.Router();

const kittens = [
  {
    id: 1,
    name: "Lucy",
    gender: "female",
    birthDate: "2016-08-17",
    color: "gray",
  },
  {
    id: 2,
    name: "Sasha",
    gender: "female",
    birthDate: "2003-05-27",
    color: "white",
  },
];

router.get("/", function (req, res, next) {
  res.json({ name: "Harald" });
});

router.get("/kittens", function (req, res, next) {
  res.json(kittens);
});

router.get("/api/todo", (req, res, next) => {});

router.post("/api/todo", (req, res, next) => {});

router.get("/api/todo/:id", (req, res, next) => {});

router.post("/api/todo/:id", (req, res, next) => {});

router.delete("/api/todo/:id", (req, res, next) => {});

module.exports = router;
