const express = require("express");
const {
  createList,
  updateList,
  deleteList,
  getLists,
  getSingleList,
} = require("../controllers/listController");

const router = express.Router();

router.route("/").get(getLists).post(createList);

router.route("/:id").get().patch(updateList).delete();

module.exports = router;
