var express = require("express");

const listModel = require("../models/todoList");
var router = express.Router();

// const todo = [
//   {
//     id: 1,
//     item1: "Lorem",
//     item2: "Ipsum",
//     item3: "Lorem",
//     item4: "Ipsum",
//   },
//   {
//     id: 2,
//     item1: "Lorem2",
//     item2: "Ipsum2",
//     item3: "Lorem2",
//     item4: "Ipsum2",
//   },
// ];

router.get("/", function (req, res, next) {
  let lists = listModel.find({}, function (err, obj) {
    if (err) {
      console.log(err);
    } else {
      res.json(obj);
    }
  });
});

router.get("/todo", function (req, res, next) {
  let lists = listModel.find({}, function (err, obj) {
    if (err) {
      console.log(err);
    } else {
      res.json(obj);
    }
  });
});

router.get("/api/todo", (req, res, next) => {});

router.post("/api/todo", (req, res, next) => {});

router.get("/api/todo/:id", (req, res, next) => {});

router.post("/api/todo/:id", (req, res, next) => {});

router.delete("/api/todo/:id", (req, res, next) => {});

module.exports = router;
